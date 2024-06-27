'use client';

import { resetPassword } from '@/src/actions/resetPassword/resetPassword';
import {
  TResetPasswordSchema,
  resetPasswordSchema,
} from '@/src/utils/types/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import FormInput from '../../global/formInput/FormInput';
import FormPasswordInput from '../../global/formPasswordInput/FormPasswordInput';
import PrimaryButton from '../../global/primaryButton/PrimaryButton';

type ResetPasswordFormProps = {
  token: string;
  setSucces: () => void;
};

function ResetPasswordForm({ token, setSucces }: ResetPasswordFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });

  async function onSubmit(data: TResetPasswordSchema) {
    const res = await resetPassword(token, data.password);
    if (res.status === 'success') {
      toast.success(res.message);
      setSucces();
    } else {
      toast.error(res.message);
    }
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col pb-8">
      <FormPasswordInput>
        <FormInput
          size="sm"
          label="New Password"
          connectFunction={register}
          id="password"
          error={errors.password?.message as string}
        />
      </FormPasswordInput>
      <FormPasswordInput>
        <FormInput
          size="sm"
          label="Confirm Password"
          connectFunction={register}
          id="confirmPassword"
          error={errors.confirmPassword?.message as string}
        />
      </FormPasswordInput>

      <PrimaryButton
        type="submit"
        isLoading={isSubmitting}
        content="Reset Password"
      />
    </form>
  );
}

export default ResetPasswordForm;
