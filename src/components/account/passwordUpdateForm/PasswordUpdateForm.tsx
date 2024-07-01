'use client';

import {
  TUpdatePasswordSchema,
  updatePasswordSchema,
} from '@/src/utils/types/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import FormInput from '../../global/formInput/FormInput';
import PrimaryButton from '../../global/primaryButton/PrimaryButton';

function PasswordUpdateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TUpdatePasswordSchema>({
    resolver: zodResolver(updatePasswordSchema),
  });

  async function onSubmit(data: TUpdatePasswordSchema) {
    console.log(data);
    reset();
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <div className="mb-4">
          <FormInput
            connectFunction={register}
            label="Current Password"
            size="sm"
            id="currentPassword"
            error={errors.currentPassword?.message as string}
            placeholder={'Enter your current password' || ''}
          />
          <FormInput
            connectFunction={register}
            label="New Password"
            id="newPassword"
            size="sm"
            error={errors.newPassword?.message as string}
            placeholder={'Create your new password' || ''}
          />
          <FormInput
            connectFunction={register}
            label="Confirm Password"
            id="confirmPassword"
            size="sm"
            error={errors.confirmPassword?.message as string}
            placeholder={'Confirm your new password' || ''}
          />
        </div>
        <PrimaryButton
          type="submit"
          content="Update Password"
          additionalClass="w-full"
          isLoading={isSubmitting}
        />
      </div>
    </form>
  );
}

export default PasswordUpdateForm;
