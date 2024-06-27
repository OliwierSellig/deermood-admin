import ResetPasswordBox from '@/src/components/login/resetPasswordBox/ResetPasswordBox';

function ResetPasswordToken({ params }: { params: { token: string } }) {
  return <ResetPasswordBox token={params.token} />;
}

export default ResetPasswordToken;
