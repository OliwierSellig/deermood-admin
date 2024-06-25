import LoginForm from '@/src/components/login/loginForm/LoginForm';
import LoginFormHeading from '@/src/components/login/loginFormHeading/LoginFormHeading';

function Login() {
  return (
    <>
      <LoginFormHeading
        heading="Welcome Back!"
        subheading="Please, provide your admin credentials to log in."
      />
      <LoginForm />
    </>
  );
}

export default Login;
