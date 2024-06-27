'use client';

import BackToLoginLink from '@/src/components/login/backToLoginLink/BackToLoginLink';
import LoginFormHeading from '@/src/components/login/loginFormHeading/LoginFormHeading';
import { useState } from 'react';
import ResetPasswordForm from '../resetPasswordForm/ResetPasswordForm';
import ResetPasswordSuccess from '../resetPasswordSuccess/ResetPasswordSuccess';

type ResetPasswordBoxProps = {
  token: string;
};

function ResetPasswordBox({ token }: ResetPasswordBoxProps) {
  const [isSucces, setIsSucces] = useState(false);
  if (isSucces) return <ResetPasswordSuccess />;
  return (
    <>
      <LoginFormHeading
        heading="Reset Password"
        subheading="Please, provide the new password to you account, we will update it and log you in."
      />
      <ResetPasswordForm setSucces={() => setIsSucces(true)} token={token} />
      <BackToLoginLink />
    </>
  );
}

export default ResetPasswordBox;
