'use client';

import { HeroIcon } from '@/src/utils/types/heroIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MainNavigationLinkProps = {
  Icon: HeroIcon;
  label: string;
  url: string;
};

function MainNavigationLink({ Icon, label, url }: MainNavigationLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === url;
  return (
    <div
      className={`w-full py-3 px-2 ease-in-out duration-150 rounded-md border border-primary-200/0 ${isActive ? 'bg-primary-50 border border-primary-200/100' : ''}`}
    >
      <Link
        className={`flex justify-start gap-x-2 items-center text-primary-500 hover:text-primary-800 ease-in-out duration-150 ${isActive ? 'text-primary-800 ' : ''}`}
        href={url || '/'}
      >
        <Icon className={`w-6 h-6 ${isActive ? 'stroke-emerald-500' : ''}`} />
        <span>{label}</span>
      </Link>
    </div>
  );
}

export default MainNavigationLink;
