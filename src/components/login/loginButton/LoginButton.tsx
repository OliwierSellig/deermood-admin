'use client';

import { useFormStatus } from 'react-dom';
import PrimaryButton from '../../global/primaryButton/PrimaryButton';

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <PrimaryButton
      type="submit"
      isLoading={pending}
      content="Login"
      additionalClass=""
    />
  );
}

export default LoginButton;
