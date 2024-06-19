import Link from 'next/link';

function ForgotPasswordLink() {
  return (
    <Link
      href="/forgot-password"
      className="text-sm font-medium text-primary-600 duration-150 ease-in-out hover:text-emerald-600 focus:text-emerald-600"
    >
      Forgot your password?
    </Link>
  );
}

export default ForgotPasswordLink;
