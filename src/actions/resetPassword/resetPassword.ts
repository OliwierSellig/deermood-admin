'use server';

import { ActionReturnValue } from '@/src/utils/types/actionReturnValue';

export async function resetPassword(
  token: string,
  password: string,
): Promise<ActionReturnValue> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(
      `http://localhost:3000/api/v1/admins/resetPassword/${token}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, password }),
      },
    );
    const res = await response.json();
    if (!response.ok) {
      return { status: res.status, message: res.message };
    } else {
      return {
        status: 'success',
        message: 'Password reset successfully!',
      };
    }
  } catch (err) {
    return { status: 'fail', message: 'Something went wrong!' };
  }
}
