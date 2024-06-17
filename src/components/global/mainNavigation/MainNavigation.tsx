'use client';

// Find workaround |
import adminPhoto from '@/public/img/admin.jpg';
import { linksLower, linksUpper } from '@/src/utils/data/links';
import MainLogo from '../mainLogo/MainLogo';
import MainNavigationCol from '../mainNavigationCol/MainNavigationCol';
import MainNavigationLink from '../mainNavigationLink/MainNavigationLink';
import MainNavigationLogout from '../mainNavigationLogout/MainNavigationLogout';
import MainNavigationUser from '../mainNavigationUser/MainNavigationUser';

function MainNavigation() {
  return (
    <nav className="min-w-72 flex flex-col ">
      <div className="grow flex flex-col gap-y-8">
        <MainLogo />
        <MainNavigationCol border={true} title="Main menu">
          <>
            {linksUpper.map((link, i) => (
              <MainNavigationLink
                url={link.url}
                label={link.label}
                Icon={link.Icon}
                key={i}
              />
            ))}
          </>
        </MainNavigationCol>
        <MainNavigationCol title="Account">
          <>
            {linksLower.map((link, i) => (
              <MainNavigationLink
                url={link.url}
                label={link.label}
                Icon={link.Icon}
                key={i}
              />
            ))}
            <MainNavigationLogout />
          </>
        </MainNavigationCol>
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
