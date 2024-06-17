'use client';

import { ReactNode, useState } from 'react';

type TooltipWindowProps = {
  children: ReactNode;
  content: string;
};

function TooltipWindow({ content, children }: TooltipWindowProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      {children}
      {isOpen && (
        <div className=" absolute top-0 right-0 translate-x-full -translate-y-1/2 py-3 px-4 w-max rounded-md text-xs animate-fade-in-fast font-medium border border-primary-200 shadow-sm bg-primary-50">
          {content}
        </div>
      )}
    </div>
  );
}

export default TooltipWindow;
