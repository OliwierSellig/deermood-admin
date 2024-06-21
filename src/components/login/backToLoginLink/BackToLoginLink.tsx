import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

function BackToLoginLink() {
  return (
    <Link
      href={'/login'}
      className="flex items-center justify-center gap-x-2 [&:focus>span]:text-teal-600 [&:hover>span]:text-teal-600"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-200">
        <ChevronLeftIcon className="h-5 w-5 fill-primary-600" />
      </div>
      <span className="text-sm font-medium text-primary-600 duration-150 ease-in-out">
        Back to Login
      </span>
    </Link>
  );
}

export default BackToLoginLink;
