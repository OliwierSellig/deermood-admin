import PasswordUpdateBox from '@/src/components/account/passwordUpdateBox/PasswordUpdateBox';
import PageHeader from '@/src/components/global/pageHeader/PageHeader';

function page() {
  return (
    <div className="flex h-full flex-col">
      <PageHeader
        backLink={{ href: '/account', label: 'Go back to account page' }}
        heading="Password Update"
        subheading="Update your current password"
      />
      <PasswordUpdateBox />
    </div>
  );
}

export default page;
