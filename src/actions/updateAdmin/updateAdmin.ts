'use server';

import { auth } from '@/src/auth';
import { ActionReturnValue } from '@/src/utils/types/actionReturnValue';

export async function updateAdmin(
  firstName: string,
  surname: string,
): Promise<ActionReturnValue> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Passed 😂');

  try {
    const session = await auth();
    if (!session?.user)
      return {
        status: 'fail',
        message: 'You need to be authenticated to perform this action',
      };

    const response = await fetch(
      'http://localhost:3000/api/v1/admins/updateMe',
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify({ firstName, surname }),
      },
    );
    const res = await response.json();

    if (!response.ok) return { status: res.status, message: res.message };
    return { status: 'success', message: 'Admin updated successfully!' };
  } catch (err) {
    return { status: 'fail', message: 'Something went wrong!' };
  }
}
