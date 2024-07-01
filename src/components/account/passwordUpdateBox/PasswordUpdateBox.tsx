import { auth } from '@/src/auth';
import AdminDetailsRow from '../adminDetailsRow/AdminDetailsRow';
import PasswordUpdateForm from '../passwordUpdateForm/PasswordUpdateForm';

async function PasswordUpdateBox() {
  const session = await auth();

  if (!session?.user) return null;
  const user = session.user;
  return (
    <div className="mb-24 flex w-full max-w-2xl flex-grow flex-col items-center justify-center gap-y-10 self-center md:mb-0">
      <AdminDetailsRow
        firstName={user.firstName}
        surname={user.surname}
        email={user.email!}
      />
      <PasswordUpdateForm />
    </div>
  );
}

export default PasswordUpdateBox;
