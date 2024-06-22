import { credentialsLogin } from '@/src/actions/actions';
import FormInput from '@/src/components/global/formInput/FormInput';
import FormPasswordInput from '@/src/components/global/formPasswordInput/FormPasswordInput';
import ForgotPasswordLink from '@/src/components/login/forgotPasswordLink/ForgotPasswordLink';
import LoginButton from '@/src/components/login/loginButton/LoginButton';
import LoginFormHeading from '@/src/components/login/loginFormHeading/LoginFormHeading';

function Login() {
  return (
    <>
      <LoginFormHeading
        heading="Welcome Back!"
        subheading="Please, provide your admin credentials to log in."
      />
      <form action={credentialsLogin} className="flex flex-col">
        <FormInput size="sm" label="Email" name="email" />
        <FormPasswordInput>
          <FormInput size="sm" label="Password" name="password" />
        </FormPasswordInput>

        <div className="flex justify-end pb-12">
          <ForgotPasswordLink />
        </div>
        <LoginButton />
      </form>
    </>
  );
}

export default Login;
