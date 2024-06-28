import { auth } from '@/src/auth';
import { LockOpenIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import BorderBox from '../../global/borderBox/BorderBox';
import PrimaryButton from '../../global/primaryButton/PrimaryButton';
import AccountForm from '../accountForm/AccountForm';
import AdditionalAccountData from '../additionalAccountData/AdditionalAccountData';
import LatestActivitiesContainer from '../latestActivitesContainer/LatestActivitiesContainer';

async function AccountDetails() {
  const session = await auth();

  if (!session || !session?.user) return null;

  return (
    <div className="flex flex-col gap-y-8">
      <div className="= flex gap-x-8">
        <BorderBox additionalClass="grow">
          <AccountForm
            firstName={session.user.firstName}
            surname={session.user.surname}
          />
        </BorderBox>
        <div className="flex w-2/5 flex-col gap-y-4">
          <BorderBox py="md" additionalClass="grow">
            <AdditionalAccountData
              email={session.user.email!}
              createdAt="12 Jul. 2024"
            />
          </BorderBox>
          <PrimaryButton
            icon={<LockOpenIcon />}
            content="Change Password"
            theme="grey"
          />
        </div>
      </div>
      <BorderBox>
        <LatestActivitiesContainer />
      </BorderBox>
      <PrimaryButton
        icon={<UserIcon />}
        content="Disable Account"
        theme="red"
        rounded="xl"
        additionalClass="self-end"
      />
    </div>
  );
}

export default AccountDetails;
