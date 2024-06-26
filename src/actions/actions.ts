'use server';

import { signIn, signOut } from '@/src/auth';

// import { isRedirectError } from 'next/dist/client/components/redirect';

class LoginError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}

type ActionReturnValue = {
  status: 'success' | 'fail';
  message: string;
};

// ---------------------- Loggin in admin --------------------------------

export async function credentialsLogin(
  email: string,
  password: string,
): Promise<ActionReturnValue> {
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

export async function credentialsLogout(): Promise<ActionReturnValue> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    await fetch('http://localhost:3000/api/v1/admins/logout');
    await signOut({ redirect: false });
    return { status: 'success', message: 'Logged out successfully' };
  } catch (err) {
    // if (isRedirectError(err)) throw err; --- In case i would swithc back to [redirectTo: '/login']
    return { status: 'fail', message: 'Something wnet wrong!' };
  }
}

export async function sendResetPasswordEmail(
  email: string,
): Promise<ActionReturnValue> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const response = await fetch(
      'http://localhost:3000/api/v1/admins/forgotPassword',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      },
    );
    const res: { status: string; message: string } = await response.json();

    if (!response.ok) {
      return { status: 'fail', message: res.message };
    } else {
      return {
        status: 'success',
        message: res?.message || 'Email sent to inbox',
      };
    }
  } catch (err) {
    return { status: 'fail', message: 'Something went wrong!' };
  }
}
