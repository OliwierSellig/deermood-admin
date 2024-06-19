import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { UserIcon } from '@heroicons/react/24/outline';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type UserPhotoLinkProps = {
  firstName: string;
  photo: string | StaticImageData | null;
  additionalClass?: string;
};

function UserPhotoLink({
  firstName,
  photo,
  additionalClass = '',
}: UserPhotoLinkProps) {
  return (
    <Link
      href="/account"
      className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-primary-200 before:absolute before:z-10 before:h-full before:w-full before:bg-primary-700/60 before:opacity-0 before:duration-200 before:ease-in-out before:hover:opacity-100 before:focus:opacity-100 [&:focus>svg]:translate-x-0 [&:focus>svg]:opacity-100 [&:hover>svg]:translate-x-0 [&:hover>svg]:opacity-100 ${additionalClass}`}
    >
      {photo ? (
        <Image src={photo} fill alt={`${firstName} photo`} />
      ) : (
        <div className="absolute flex h-full w-full items-center justify-center bg-primary-200">
          <UserIcon
            data-testid={`${firstName.toLowerCase()}-no-photo-icon`}
            className="h-6 w-6 stroke-primary-500"
          />
        </div>
      )}
      <ArrowRightIcon className="z-30 h-5 w-5 -translate-x-2 fill-primary-100 opacity-0 duration-200 ease-in-out" />
    </Link>
  );
}

export default UserPhotoLink;
