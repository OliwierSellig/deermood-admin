'use client';

import { HeroIcon } from '@/src/utils/types/heroIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MainNavigationLinkProps = {
  Icon: HeroIcon;
  label: string;
  url: string;
  size?: 'md' | 'sm';
  hidden?: boolean;
};

function MainNavigationLink({
  Icon,
  label,
  url,
  size = 'md',
  hidden = false,
}: MainNavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === url;
  return (
    <Link
      tabIndex={hidden ? -1 : 0}
      className={`flex justify-start w-full py-3 px-2 gap-x-2 items-center text-primary-500 rounded-md border border-primary-200/0 hover:text-primary-800 focus:text-primary-800 ease-in-out duration-150 ${isActive ? 'text-primary-800 bg-primary-50 border border-primary-200/100' : ''}`}
      href={url || '/'}
    >
      <Icon
        data-testid="icon"
        className={`${size === 'md' ? 'w-6 h-6' : 'w-5 h-5'} ${isActive ? 'stroke-emerald-500' : ''}`}
      />
      <span className={size === 'sm' ? 'text-sm' : ''}>{label}</span>
    </Link>
  );
}

export default MainNavigationLink;
