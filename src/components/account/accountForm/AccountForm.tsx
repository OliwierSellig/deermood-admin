'use client';

import { updateAdmin } from '@/src/actions/updateAdmin/updateAdmin';
import { TUpdateAdminSchema, updateAdminSchema } from '@/src/utils/types/zod';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import FormInput from '../../global/formInput/FormInput';
import PrimaryButton from '../../global/primaryButton/PrimaryButton';
import UploadAccountPhoto from '../uploadAccountPhoto/UploadAccountPhoto';

type AccountFormProps = {
  firstName: string;
  surname: string;
};

function AccountForm({ firstName, surname }: AccountFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TUpdateAdminSchema>({ resolver: zodResolver(updateAdminSchema) });

  async function onSubmit(data: TUpdateAdminSchema) {
    const res = await updateAdmin(data.firstName, data.surname);
    if (res.status === 'success') {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  }

  return (
    <form
      className="flex w-full items-center gap-x-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <UploadAccountPhoto />
      <div className="grow">
        <div className="flex items-center gap-x-6">
          <FormInput
            connectFunction={register}
            label="First Name"
            size="sm"
            id="firstName"
            error={errors.firstName?.message as string}
            placeholder={firstName || ''}
          />
          <FormInput
            connectFunction={register}
            label="Last Name"
            id="surname"
            size="sm"
            error={errors.surname?.message as string}
            placeholder={surname || ''}
          />
        </div>
        <PrimaryButton
          additionalClass="w-full"
          type="submit"
          icon={<BookmarkIcon />}
          content="Save Settings"
          isLoading={isSubmitting}
          size="sm"
        />
      </div>
    </form>
  );
}

export default AccountForm;
