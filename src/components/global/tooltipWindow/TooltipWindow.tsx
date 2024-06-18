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
        <div className="absolute right-0 top-0 w-max -translate-y-1/2 translate-x-full animate-fade-in-fast rounded-md border border-primary-200 bg-primary-50 px-4 py-3 text-xs font-medium shadow-sm">
          {content}
        </div>
      )}
    </div>
  );
}

export default TooltipWindow;
