import { StaticImageData } from 'next/image';
import Link from 'next/link';
import UserPhotoLink from '../userPhotoLink/UserPhotoLink';

type MainNavigationUserProps = {
  firstName: string;
  surname: string;
  email: string;
  photo: string | StaticImageData | null;
};

function MainNavigationUser({
  firstName,
  surname,
  email,
  photo,
}: MainNavigationUserProps) {
  const fullName = `${firstName} ${surname}`;

  return (
    <div className="flex items-center justify-start gap-x-2 pb-2">
      <UserPhotoLink photo={photo} firstName={firstName} />
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
