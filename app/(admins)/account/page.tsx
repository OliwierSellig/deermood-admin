import AccountDetails from '@/src/components/account/accountDetails/AccountDetails';
import PageHeader from '@/src/components/global/pageHeader/PageHeader';

function Account() {
  return (
    <>
      <PageHeader
        heading="Account Details"
        subheading="Manage your account details"
      />
      <AccountDetails />
    </>
  );
}

export default Account;
