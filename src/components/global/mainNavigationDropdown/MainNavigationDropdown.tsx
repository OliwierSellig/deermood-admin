'use client';

import { NavLink } from '@/src/utils/types/navLink';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { ReactElement, SVGProps, useState } from 'react';
import MainNavigationLink from '../mainNavigationLink/MainNavigationLink';

type MainNavigationDropdownProps = {
  Icon: ReactElement<SVGProps<SVGSVGElement>>;
  label: string;
  links: NavLink[];
};

function MainNavigationDropdown({
  Icon,
  label,
  links,
}: MainNavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="px-2 py-3">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full pb-4  rounded-md flex justify-between gap-x-2 items-center text-primary-500 hover:text-primary-800 focus:text-primary-800 ease-in-out duration-150"
      >
        <span className="[&>svg]:h-6 [&>svg]:w-6 flex items-center gap-x-2">
          {Icon}
          <span>{label}</span>
        </span>
        <ChevronLeftIcon
          className={`w-6 h-6 ease-in-out duration-200 ${isOpen ? '-rotate-90' : ''}`}
        />
      </button>
      <div
        className={`grid ease-in-out duration-200 w-full  grid-rows-[${isOpen ? '1fr' : '0fr'}]`}
      >
        <div className="overflow-hidden flex gap-2 px-2">
          <div className="w-0.5 h-full bg-primary-300 rounded-xl"></div>
          <nav className="w-full">
            {links.map((link, i) => (
              <MainNavigationLink
                label={link.label}
                Icon={link.Icon}
                url={link.url}
                size="sm"
                key={i}
                hidden={!isOpen}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MainNavigationDropdown;
