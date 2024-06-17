'use client';

import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { ReactElement, ReactNode, SVGProps, useState } from 'react';

type MainNavigationDropdownProps = {
  Icon: ReactElement<SVGProps<SVGSVGElement>>;
  label: string;
  children?: ReactNode;
};

function MainNavigationDropdown({
  Icon,
  label,
  children,
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
        className={`grid ease-in-out duration-200 w-full  ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden flex gap-2 px-2">
          <div className="w-0.5 h-full bg-primary-300 rounded-xl" />
          <nav
            className={`w-full [& a] ${isOpen ? '[&>a]:pointer-events-auto' : '[&>a]:pointer-events-none'}`}
          >
            {children}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MainNavigationDropdown;
