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
      className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-primary-200 before:absolute before:z-10 before:h-full before:w-full before:bg-primary-700/60 before:opacity-0 before:duration-200 before:ease-in-out before:hover:opacity-100 before:focus:opacity-100 [&:focus>svg]:translate-x-0 [&:focus>svg]:opacity-100 [&:hover>svg]:translate-x-0 [&:hover>svg]:opacity-100 ${additionalClass}`}
    >
      <Image data-testid={testId} src={photo} fill alt={`${firstName} photo`} />
      <ArrowRightIcon className="z-30 h-5 w-5 -translate-x-2 fill-primary-100 opacity-0 duration-200 ease-in-out" />
    </Link>
  );
}

export default UserPhotoLink;
