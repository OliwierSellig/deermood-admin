'use client';

import { usePathname } from 'next/navigation';
import { ReactElement, SVGProps } from 'react';
import MainNavigationButton from '../mainNavigationButton/MainNavigationButton';

type MainNavigationColLinkProps = {
  url?: string;
  handleClick?: () => void;
  label: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  size?: 'md' | 'sm';
  hidden?: boolean;
};

function MainNavigationColLink({
  url = '',
  handleClick,
  label,
  icon,
  size = 'md',
  hidden,
}: MainNavigationColLinkProps) {
  const pathname = usePathname();
  const isAcitve = pathname === url;
  const buttonClass = `px-2 py-3 w-full rounded-md border border-primary-200/0 ${isAcitve ? 'bg-primary-50 text-primary-800 border-primary-200/100 [&>svg]:stroke-emerald-500' : ''}`;

  return (
    <MainNavigationButton
      link={{ url }}
      label={label}
      icon={icon}
      handleClick={handleClick}
      size={size}
      hidden={isAcitve || hidden}
      additionalClass={buttonClass}
    />
  );
}

export default MainNavigationColLink;
