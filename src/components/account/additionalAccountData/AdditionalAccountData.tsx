import { EnvelopeIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import UserInfoRow from '../../global/userInfoRow/UserInfoRow';

type AdditionalAccountDataProps = {
  email: string;
  createdAt: string;
};

function AdditionalAccountData({
  email,
  createdAt,
}: AdditionalAccountDataProps) {
  return (
    <div className="flex flex-col items-start justify-center gap-y-4 pl-3 md:border-l-2 md:border-primary-200">
      <UserInfoRow heading="Email" value={email} Icon={<EnvelopeIcon />} />
      <UserInfoRow
        heading="Created At"
        value={createdAt}
        Icon={<UserPlusIcon />}
      />
    </div>
  );
}

export default AdditionalAccountData;
