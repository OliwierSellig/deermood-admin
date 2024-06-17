import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type MainNavigationUserProps = {
  firstName: string;
  surname: string;
  email: string;
  photo: string | StaticImageData;
};

function MainNavigationUser({
  firstName,
  surname,
  email,
  photo,
}: MainNavigationUserProps) {
  const fullName = `${firstName} ${surname}`;
  const testId = `${firstName}-photo`.toLowerCase();
  return (
    <div className="flex items-center justify-start gap-x-2 pb-2">
      <Link
        href="/account"
        className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center before:absolute before:w-full before:h-full before:bg-primary-700/60 before:z-10 before:opacity-0 before:hover:opacity-100  before:focus:opacity-100 before:ease-in-out before:duration-200 border-2 border-primary-200 [&:hover>svg]:opacity-100 [&:hover>svg]:translate-x-0 [&:focus>svg]:opacity-100 [&:focus>svg]:translate-x-0"
      >
        <Image
          data-testid={testId}
          src={photo}
          fill
          alt={`${firstName} photo`}
        />
        <ArrowRightIcon className="z-30 h-5 w-5 fill-primary-100 opacity-0 duration-200 ease-in-out -translate-x-2" />
      </Link>
      <div className="flex flex-col">
        <Link tabIndex={-1} href="/account" className="font-medium">
          {fullName}
        </Link>
        <span className="text-xs text-primary-500">{email}</span>
      </div>
    </div>
  );
}

export default MainNavigationUser;
