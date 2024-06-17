import adminPhoto from '@/public/img/admin.jpg';
import MainLogo from '../mainLogo/MainLogo';
import MainNavigationUser from '../mainNavigationUser/MainNavigationUser';

function MainNavigation() {
  return (
    <nav className="min-w-72 flex flex-col">
      <div className="grow">
        <MainLogo />
      </div>
      <MainNavigationUser
        firstName="Oliwier"
        surname="Sellig"
        email="oliwierandrzej.sellig@gmail.com"
        photo={adminPhoto}
      />
    </nav>
  );
}

export default MainNavigation;
