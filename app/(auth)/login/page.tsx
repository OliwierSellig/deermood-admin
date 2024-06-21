'use client';

import FormInput from '@/src/components/global/formInput/FormInput';
import FormPasswordInput from '@/src/components/global/formPasswordInput/FormPasswordInput';
import PrimaryButton from '@/src/components/global/primaryButton/PrimaryButton';
import ForgotPasswordLink from '@/src/components/login/forgotPasswordLink/ForgotPasswordLink';
import LoginFormHeading from '@/src/components/login/loginFormHeading/LoginFormHeading';

function Login() {
  return (
    <>
      <LoginFormHeading
        heading="Welcome Back!"
        subheading="Please, provide your admin credentials to log in."
      />
      <form action="" className="flex flex-col">
        <FormInput size="sm" label="Email" />
        <FormPasswordInput>
          <FormInput size="sm" label="Password" />
        </FormPasswordInput>

        <div className="flex justify-end pb-12">
          <ForgotPasswordLink />
        </div>
        <PrimaryButton content="Login" additionalClass="" />
      </form>
    </>
  );
}

export default Login;
