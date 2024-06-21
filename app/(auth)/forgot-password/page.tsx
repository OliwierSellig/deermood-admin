import FormInput from '@/src/components/global/formInput/FormInput';
import PrimaryButton from '@/src/components/global/primaryButton/PrimaryButton';
import BackToLoginLink from '@/src/components/login/backToLoginLink/BackToLoginLink';
import LoginFormHeading from '@/src/components/login/loginFormHeading/LoginFormHeading';

function ForgotPassword() {
  return (
    <>
      <LoginFormHeading
        heading="Forgot Password?"
        subheading="Please provide your email and we’ll send you a restoration message."
      />
      <form action="" className="flex flex-col pb-8">
        <FormInput size="sm" label="Email" />
        <PrimaryButton content="Continue" />
      </form>
      <div className="flex justify-center">
        <BackToLoginLink />
      </div>
    </>
  );
}

export default ForgotPassword;
