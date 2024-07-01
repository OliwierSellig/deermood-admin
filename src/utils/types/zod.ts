import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'This field is required'),
});

export type TSignInSchema = z.infer<typeof signInSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, 'Must contain at least 8 characters'),
    confirmPassword: z.string().min(1, 'This field is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

export const updateAdminSchema = z.object({
  firstName: z.string().min(1, 'This field is required'),
  surname: z.string().min(1, 'This field is required'),
});

export type TUpdateAdminSchema = z.infer<typeof updateAdminSchema>;

export const updatePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'This field is required'),
    newPassword: z.string().min(8, 'Must contain at least 8 characters'),
    confirmPassword: z.string().min(1, 'This field is required'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type TUpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;
