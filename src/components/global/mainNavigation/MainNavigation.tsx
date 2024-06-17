import adminPhoto from '@/public/img/admin.jpg';
import { featuresLinks, linksLower, linksUpper } from '@/src/utils/data/links';
import { BeakerIcon } from '@heroicons/react/24/outline';
import MainLogo from '../mainLogo/MainLogo';
import MainNavigationCol from '../mainNavigationCol/MainNavigationCol';
import MainNavigationDropdown from '../mainNavigationDropdown/MainNavigationDropdown';
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
                icon={<link.Icon />}
                key={i}
              />
            ))}
            <MainNavigationDropdown label="Features" Icon={<BeakerIcon />}>
              {featuresLinks.map((link, i) => (
                <MainNavigationLink
                  label={link.label}
                  icon={<link.Icon />}
                  url={link.url}
                  size="sm"
                  key={i}
                />
              ))}
            </MainNavigationDropdown>
          </>
        </MainNavigationCol>
        <MainNavigationCol title="Account">
          <>
            {linksLower.map((link, i) => (
              <MainNavigationLink
                url={link.url}
                label={link.label}
                icon={<link.Icon />}
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
