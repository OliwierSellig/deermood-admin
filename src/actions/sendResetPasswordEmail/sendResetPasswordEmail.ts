'use server'

import { ActionReturnValue } from '@/src/utils/types/actionReturnValue';

export async function sendResetPasswordEmail(
  email: string,
): Promise<ActionReturnValue> {
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
