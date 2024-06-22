import DesktopNavigation from '../desktopNavigation/DesktopNavigation';
import MobileNavigation from '../mobileNavigation/MobileNavigation';

function MainNavigation() {
  return (
    <>
      <MobileNavigation />
      <DesktopNavigation />
    </>
  );
}

export default MainNavigation;
