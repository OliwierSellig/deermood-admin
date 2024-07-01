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

  const createAtDate = new Date(session.user.createdAt).toLocaleDateString(
    'en-us',
    {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  );

  return (
    <div className="flex flex-col gap-y-8">
      <div className="= flex gap-x-8 gap-y-6 2xl:flex-col md:gap-y-8">
        <BorderBox additionalClass="grow">
          <AccountForm
            firstName={session.user.firstName}
            surname={session.user.surname}
          />
        </BorderBox>
        <div className="flex w-2/5 flex-col gap-y-4 2xl:w-full md:gap-y-8">
          <BorderBox py="md" additionalClass="grow">
            <AdditionalAccountData
              email={session.user.email!}
              createdAt={createAtDate}
            />
          </BorderBox>
          <PrimaryButton
            icon={<LockOpenIcon />}
            content="Change Password"
            theme="grey"
            additionalClass="2xl:max-w-[40rem]"
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
        additionalClass="self-end md:max-w-[40rem] md:self-start md:w-full"
      />
    </div>
  );
}

export default AccountDetails;
