'use client';

import { sendResetPasswordEmail } from '@/src/actions/actions';
import {
  TForgotPasswordSchema,
  forgotPasswordSchema,
} from '@/src/utils/types/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import FormInput from '../../global/formInput/FormInput';
import PrimaryButton from '../../global/primaryButton/PrimaryButton';

function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  async function onSubmit(data: TForgotPasswordSchema) {
    const res = await sendResetPasswordEmail(data.email);
    if (res.status === 'success') {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-8">
      <FormInput
        size="sm"
        label="Email"
        connectFunction={register}
        id="email"
        error={errors.email?.message as string}
      />
      <PrimaryButton
        isLoading={isSubmitting}
        type="submit"
        content="Continue"
      />
    </form>
  );
}

export default ForgotPasswordForm;
