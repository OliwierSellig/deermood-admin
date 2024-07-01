import adminPhoto from '@/public/img/admin.jpg';
import Image from 'next/image';

type AdminDetailsRowProps = {
  firstName: string;
  surname: string;
  email: string;
};

function AdminDetailsRow({ firstName, surname, email }: AdminDetailsRowProps) {
  const fullName = `${firstName} ${surname}`;
  return (
    <div className="flex items-center gap-x-4">
      <div className="relative size-24 overflow-hidden rounded-full border-2 border-primary-200">
        <Image src={adminPhoto} fill alt={`${firstName} photo`} />
      </div>
      <div>
        <p className="text-lg font-medium">{fullName}</p>
        <p className="text-sm text-primary-600">{email}</p>
      </div>
    </div>
  );
}

export default AdminDetailsRow;
