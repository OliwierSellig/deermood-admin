'use server';

import { signIn, signOut } from '@/src/auth';

class LoginError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

// ---------------------- Loggin in admin --------------------------------

export async function credentialsLogin(
  email: string,
  password: string,
): Promise<{ status: 'success' | 'fail'; message: string }> {
  // Had to find few workaround, beacouse the Auth.js credentials authorize method does not let custom errors pass.

  try {
    const response = await fetch('http://localhost:3000/api/v1/admins/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const res = await response.json();

    if (!response.ok) throw new LoginError(res.message);

    await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    return { status: 'success', message: 'Successfully logged in' };
  } catch (error) {
    return {
      status: 'fail',
      message:
        error instanceof LoginError ? error.message : 'Something went wrong!',
    };
  }
}

// ---------------------- Loggin out admin -------------------------------

export async function credentialsLogout() {
  await signOut({ redirectTo: '/login' });
  try {
    await fetch('http://localhost:3000/api/v1/admins/logout');
  } catch (err) {
    console.log(err);
  }
}
