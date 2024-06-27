import resetSuccess from '@/public/img/reset-success.jpg';
import Image from 'next/image';
import PrimaryButton from '../../global/primaryButton/PrimaryButton';

// Vector taken from: https://www.vecteezy.com/vector-art/5642606-illustration-vector-graphic-cartoon-character-of-password-protection

function ResetPasswordSuccess() {
  return (
    <div className="flex animate-fade-in-medium flex-col items-center">
      <div className="relative mb-6 aspect-square w-full max-w-60">
        <Image className="object-cover" src={resetSuccess} alt="" />
      </div>
      <p className="mb-1 text-center text-lg font-medium text-primary-600">
        Your password has been changed
      </p>
      <p className="mb-8 text-3xl font-semibold text-primary-600">
        Succesfully!
      </p>
      <PrimaryButton
        link={{ href: '/login' }}
        content="Back to Login"
        theme="green"
        additionalClass="w-full"
      />
    </div>
  );
}

export default ResetPasswordSuccess;
