import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type UserPhotoLinkProps = {
  firstName: string;
  photo: string | StaticImageData;
  additionalClass?: string;
};

function UserPhotoLink({
  firstName,
  photo,
  additionalClass = '',
}: UserPhotoLinkProps) {
  const testId = `${firstName}-photo`.toLowerCase();
  return (
    <Link
      href="/account"
      className={`relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center before:absolute before:w-full before:h-full before:bg-primary-700/60 before:z-10 before:opacity-0 before:hover:opacity-100  before:focus:opacity-100 before:ease-in-out before:duration-200 border-2 border-primary-200 [&:hover>svg]:opacity-100 [&:hover>svg]:translate-x-0 [&:focus>svg]:opacity-100 [&:focus>svg]:translate-x-0 ${additionalClass}`}
    >
      <Image data-testid={testId} src={photo} fill alt={`${firstName} photo`} />
      <ArrowRightIcon className="z-30 h-5 w-5 fill-primary-100 opacity-0 duration-200 ease-in-out -translate-x-2" />
    </Link>
  );
}

export default UserPhotoLink;
