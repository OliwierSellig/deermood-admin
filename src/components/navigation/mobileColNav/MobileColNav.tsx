import { featuresLinks, linksLower, linksUpper } from '@/src/utils/data/links';
import { BeakerIcon } from '@heroicons/react/24/outline';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';
import { createPortal } from 'react-dom';
import MainNavigationCol from '../mainNavigationCol/MainNavigationCol';
import MainNavigationColLink from '../mainNavigationColLink/MainNavigationColLink';
import MainNavigationDropdown from '../mainNavigationDropdown/MainNavigationDropdown';
import MobileNavLogo from '../mobileNavLogo/MobileNavLogo';

type MobileColNavProps = {
  hideNav: () => void;
};

function MobileColNav({ hideNav }: MobileColNavProps) {
  return createPortal(
    <div className="animate-fade-in-fast hide-scrollbar fixed top-0 left-0 w-full  flex flex-col items-center px-8 py-12 z-50 h-full bg-primary-100/80 overflow-y-auto">
      <div className="flex flex-col max-w-80 w-full z-50 ">
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
            <MainNavigationColLink
              label="Logout"
              icon={<ArrowRightStartOnRectangleIcon />}
              handleClick={() => {
                console.log('Logging out');
                hideNav();
              }}
            />
          </>
        </MainNavigationCol>
      </div>
    </div>,
    document.body,
  );
}

export default MobileColNav;
