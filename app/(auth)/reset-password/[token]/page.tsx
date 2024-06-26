import BackToLoginLink from '@/src/components/login/backToLoginLink/BackToLoginLink';
import LoginFormHeading from '@/src/components/login/loginFormHeading/LoginFormHeading';
import ResetPasswordForm from '@/src/components/login/resetPasswordForm/ResetPasswordForm';

function ResetPasswordToken({ params }: { params: { token: string } }) {
  return (
    <>
      <LoginFormHeading
        heading="Reset Password"
        subheading="Please, provide the new password to you account, we will update it and log you in."
      />
      <ResetPasswordForm token={params.token} />
      <BackToLoginLink />
    </>
  );
}

export default ResetPasswordToken;
