import { featuresLinks, linksLower, linksUpper } from '@/src/utils/data/links';
import { BeakerIcon } from '@heroicons/react/24/outline';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { createPortal } from 'react-dom';
import MainNavigationCol from '../mainNavigationCol/MainNavigationCol';
import MainNavigationColLink from '../mainNavigationColLink/MainNavigationColLink';
import MainNavigationDropdown from '../mainNavigationDropdown/MainNavigationDropdown';
import MobileNavLogo from '../mobileNavLogo/MobileNavLogo';
import OpenLogoutConfirmation from '../openLogoutConfirmation/OpenLogoutConfirmation';

type MobileColNavProps = {
  hideNav: () => void;
};

function MobileColNav({ hideNav }: MobileColNavProps) {
  return createPortal(
    <div className="hide-scrollbar fixed left-0 top-0 z-50 flex h-full w-full animate-fade-in-fast flex-col items-center overflow-y-auto bg-primary-100/80 px-8 py-12">
      <div className="z-50 flex w-full max-w-80 flex-col">
        <MobileNavLogo handleClick={hideNav} />
        <MainNavigationCol title="Main menu">
          <>
            {linksUpper.map((link, i) => (
              <MainNavigationColLink
                url={link.url}
                label={link.label}
                icon={<link.Icon />}
                key={i}
                handleClick={hideNav}
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
                  handleClick={hideNav}
                />
              ))}
            </MainNavigationDropdown>
          </>
        </MainNavigationCol>
        <MainNavigationCol title="Account">
          <>
            {linksLower.map((link, i) => (
              <MainNavigationColLink
                url={link.url}
                label={link.label}
                icon={<link.Icon />}
                key={i}
                handleClick={hideNav}
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
    </div>,
    document.body,
  );
}

export default MobileColNav;
