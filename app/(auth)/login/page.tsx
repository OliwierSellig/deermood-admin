import FormInput from '@/src/components/global/formInput/FormInput';
import ForgotPasswordLink from '@/src/components/login/forgotPasswordLink/ForgotPasswordLink';
import LoginFormHeading from '@/src/components/login/loginFormHeading/LoginFormHeading';

function Login() {
  return (
    <div className="flex flex-col gap-y-16">
      <LoginFormHeading
        heading="Welcome Back!"
        subheading="Please, provide your admin credentials to log in."
      />
      <form action="">
        <FormInput size="sm" label="Email" />
        <FormInput size="sm" label="Password" />

        <div className="flex justify-end">
          <ForgotPasswordLink />
        </div>
      </form>
    </div>
  );
}

export default Login;
