'use server';

import { signOut } from '@/src/auth';
import { ActionReturnValue } from '@/src/utils/types/actionReturnValue';

export async function credentialsLogout(): Promise<ActionReturnValue> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  try {
    const response = await fetch('http://localhost:3000/api/v1/admins/logout');
    await signOut({ redirect: false });
    console.log(response.status);
    if (!response.ok) throw new Error();
    return { status: 'success', message: 'Logged out successfully' };
  } catch (err) {
    // if (isRedirectError(err)) throw err; --- In case i would switch back to [redirectTo: '/login']
    return { status: 'fail', message: 'Something went wrong!' };
  }
}
