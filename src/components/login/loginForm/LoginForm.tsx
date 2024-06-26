'use client';

import { credentialsLogin } from '@/src/actions/actions';
import { TSignInSchema, signInSchema } from '@/src/utils/types/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import FormInput from '../../global/formInput/FormInput';
import FormPasswordInput from '../../global/formPasswordInput/FormPasswordInput';
import PrimaryButton from '../../global/primaryButton/PrimaryButton';
import ForgotPasswordLink from '../forgotPasswordLink/ForgotPasswordLink';

function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignInSchema>({ resolver: zodResolver(signInSchema) });

  async function onSubmit(data: TSignInSchema) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const res = await credentialsLogin(data.email, data.password);

    if (res?.status === 'success') {
      toast.success(res.message);
      router.push('/dashboard');
    } else {
      toast.error(res.message);
    }

    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <FormInput
        size="sm"
        label="Email"
        connectFunction={register}
        id="email"
        error={errors.email?.message as string}
      />
      <FormPasswordInput>
        <FormInput
          size="sm"
          label="Password"
          connectFunction={register}
          id="password"
          error={errors.password?.message as string}
        />
      </FormPasswordInput>

      <div className="flex justify-end pb-12">
        <ForgotPasswordLink />
      </div>
      <PrimaryButton
        type="submit"
        isLoading={isSubmitting}
        content="Login"
        additionalClass=""
      />
    </form>
  );
}

export default LoginForm;
