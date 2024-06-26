import { featuresLinks, linksLower, linksUpper } from '@/src/utils/data/links';
import {
  ArrowRightStartOnRectangleIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';
import MainLogo from '../../navigation/mainLogo/MainLogo';
import MainNavigationCol from '../../navigation/mainNavigationCol/MainNavigationCol';
import MainNavigationDropdown from '../../navigation/mainNavigationDropdown/MainNavigationDropdown';
import MainNavigationUser from '../../navigation/mainNavigationUser/MainNavigationUser';
import MainNavigationColLink from '../mainNavigationColLink/MainNavigationColLink';
import OpenLogoutConfirmation from '../openLogoutConfirmation/OpenLogoutConfirmation';

function DesktopNavigation() {
  return (
    <nav className="flex min-w-72 flex-col xl:min-w-52 md:order-2 md:hidden">
      <div className="flex grow flex-col gap-y-8">
        <MainLogo />
        <MainNavigationCol border={true} title="Main menu">
          <>
            {linksUpper.map((link, i) => (
              <MainNavigationColLink
                label={link.label}
                icon={<link.Icon />}
                url={link.url}
                key={i}
              />
            ))}
            <MainNavigationDropdown label="Features" Icon={<BeakerIcon />}>
              {featuresLinks.map((link, i) => (
                <MainNavigationColLink
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
              <MainNavigationColLink
                label={link.label}
                icon={<link.Icon />}
                url={link.url}
                key={i}
              />
            ))}
            <OpenLogoutConfirmation>
              <MainNavigationColLink
                label="Logout"
                icon={<ArrowRightStartOnRectangleIcon />}
              />
            </OpenLogoutConfirmation>
          </>
        </MainNavigationCol>
      </div>
      <MainNavigationUser />
    </nav>
  );
}

export default DesktopNavigation;
