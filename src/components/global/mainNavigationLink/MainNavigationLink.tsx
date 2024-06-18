'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactElement, SVGProps } from 'react';

type MainNavigationLinkProps = {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  label: string;
  url: string;
  size?: 'md' | 'sm';
  hidden?: boolean;
};

function MainNavigationLink({
  icon,
  label,
  url,
  size = 'md',
  hidden = false,
}: MainNavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === url;
  const sizeStr = `${size === 'md' ? '[&>svg]:w-6' : '[&>svg]:w-5'} ${size === 'md' ? '[&>svg]:h-6' : '[&>svg]:h-5'}`;
  return (
    <Link
      tabIndex={hidden || isActive ? -1 : 0}
      className={`flex justify-start w-full ${sizeStr}  py-3 px-2 gap-x-2 items-center text-primary-500 rounded-md border border-primary-200/0 hover:text-primary-800 focus:text-primary-800 ease-in-out duration-150 ${isActive ? 'text-primary-800 bg-primary-50 border border-primary-200/100 [&>svg]:stroke-emerald-500' : ''}`}
      href={url || '/'}
    >
      {icon}
      <span className={size === 'sm' ? 'text-sm' : ''}>{label}</span>
    </Link>
  );
}

export default MainNavigationLink;
