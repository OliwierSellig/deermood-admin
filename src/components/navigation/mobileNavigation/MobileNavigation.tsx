'use client';

import adminPhoto from '@/public/img/admin.jpg';
import {
  ArrowRightStartOnRectangleIcon,
  Bars3BottomLeftIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import MainNavigationButton from '../mainNavigationButton/MainNavigationButton';
import MobileColNav from '../mobileColNav/MobileColNav';
import OpenLogoutConfirmation from '../openLogoutConfirmation/OpenLogoutConfirmation';
import UserPhotoLink from '../userPhotoLink/UserPhotoLink';

function MobileNavigation() {
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

  return (
    <nav className="relative order-2 hidden justify-around gap-24 bg-primary-100 px-6 py-3 md:flex">
      <MainNavigationButton
        icon={<Bars3BottomLeftIcon />}
        label="Navigation"
        vertical={true}
        handleClick={() => setIsMobileOpen((prev) => !prev)}
      />
      <div className="absolute top-0 -translate-y-1/2">
        <UserPhotoLink
          additionalClass="w-16 h-16"
          photo={adminPhoto}
          firstName="Oliwier"
        />
      </div>
      <OpenLogoutConfirmation>
        <MainNavigationButton
          icon={<ArrowRightStartOnRectangleIcon />}
          label="Log out"
          vertical={true}
        />
      </OpenLogoutConfirmation>
      {isMobileOpen && <MobileColNav hideNav={() => setIsMobileOpen(false)} />}
    </nav>
  );
}

export default MobileNavigation;
