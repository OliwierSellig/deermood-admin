'use client';

import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import React, { ReactElement, ReactNode, SVGProps, useState } from 'react';

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

  const childrenWithTabIndex = React.Children.map(children, (child) => {
    return React.cloneElement(child as ReactElement, {
      hidden: isOpen ? false : true,
    });
  });

  return (
    <div className="px-2 py-3">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-x-2 rounded-md pb-4 text-primary-500 duration-150 ease-in-out hover:text-primary-800 focus:text-primary-800 xl:text-sm"
      >
        <span className="flex items-center gap-x-2 [&>svg]:h-6 [&>svg]:w-6">
          {Icon}
          <span>{label}</span>
        </span>
        <ChevronLeftIcon
          className={`h-6 w-6 duration-200 ease-in-out xl:h-5 xl:w-5 ${isOpen ? '-rotate-90' : ''}`}
        />
      </button>
      <div
        className={`grid w-full duration-200 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="flex gap-2 overflow-hidden px-2">
          <div className="h-full w-0.5 rounded-xl bg-primary-300" />
          <nav
            className={`[& a] w-full ${isOpen ? '[&>a]:pointer-events-auto' : '[&>a]:pointer-events-none'}`}
          >
            {childrenWithTabIndex}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MainNavigationDropdown;
