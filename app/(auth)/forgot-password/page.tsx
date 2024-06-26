import BackToLoginLink from '@/src/components/login/backToLoginLink/BackToLoginLink';
import ForgotPasswordForm from '@/src/components/login/forgotPasswordForm/ForgotPasswordForm';
import LoginFormHeading from '@/src/components/login/loginFormHeading/LoginFormHeading';

function ForgotPassword() {
  return (
    <>
      <LoginFormHeading
        heading="Forgot Password?"
        subheading="Please provide your email and we’ll send you a restoration message."
      />
      <ForgotPasswordForm />
      <BackToLoginLink />
    </>
  );
}

export default ForgotPassword;
