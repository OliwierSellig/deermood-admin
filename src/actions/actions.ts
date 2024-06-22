'use server';

import { signIn, signOut } from '@/src/auth';
import { redirect } from 'next/navigation';

export async function credentialsLogin(formData: FormData) {
  try {
    // There wil be an usage of ZOD library
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    redirect('/dashboard');
  } catch (err) {
    return { message: 'Something went wrong' };
  }
}

export async function credentialsLogout() {
  await signOut({ redirectTo: '/login' });
  try {
    await fetch('http://localhost:3000/api/v1/admins/logout');
  } catch (err) {
    console.log(err);
  }
}
