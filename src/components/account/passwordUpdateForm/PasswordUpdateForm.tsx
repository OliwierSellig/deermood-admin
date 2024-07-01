'use client';

import { updatePassword } from '@/src/actions/updatePassword/updatePassword';
import {
  TUpdatePasswordSchema,
  updatePasswordSchema,
} from '@/src/utils/types/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import FormInput from '../../global/formInput/FormInput';
import FormPasswordInput from '../../global/formPasswordInput/FormPasswordInput';
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
    const res = await updatePassword(data.currentPassword, data.newPassword);

    if (res.message === 'success') {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    reset();
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <div className="mb-4">
          <FormPasswordInput>
            <FormInput
              connectFunction={register}
              label="Current Password"
              size="sm"
              id="currentPassword"
              error={errors.currentPassword?.message as string}
              placeholder={'Enter your current password' || ''}
            />
          </FormPasswordInput>
          <FormPasswordInput>
            <FormInput
              connectFunction={register}
              label="New Password"
              id="newPassword"
              size="sm"
              error={errors.newPassword?.message as string}
              placeholder={'Create your new password' || ''}
            />
          </FormPasswordInput>
          <FormPasswordInput>
            <FormInput
              connectFunction={register}
              label="Confirm Password"
              id="confirmPassword"
              size="sm"
              error={errors.confirmPassword?.message as string}
              placeholder={'Confirm your new password' || ''}
            />
          </FormPasswordInput>
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
