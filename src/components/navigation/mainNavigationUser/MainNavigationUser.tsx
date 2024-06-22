import adminPhoto from '@/public/img/admin.jpg';
import { auth } from '@/src/auth';
import Link from 'next/link';
import UserPhotoLink from '../userPhotoLink/UserPhotoLink';

async function MainNavigationUser() {
  const session = await auth();

  if (!session?.user) return null;

  const fullName = `${session.user.firstName} ${session.user.surname}`;

  return (
    <div className="flex items-center justify-start gap-x-2 pb-2">
      <UserPhotoLink photo={adminPhoto} firstName={session.user.firstName} />
      <div className="flex flex-col">
        <Link tabIndex={-1} href="/account" className="font-medium">
          {fullName}
        </Link>
        <span className="text-xs text-primary-500">{session.user.email}</span>
      </div>
    </div>
  );
}

export default MainNavigationUser;
