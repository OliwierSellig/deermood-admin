'use client';

import Link from 'next/link';
import { ReactElement, SVGProps } from 'react';

type MainNavigationButtonProps = {
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  label: string;
  link?: { url: string; newTab?: boolean };
  size?: 'md' | 'sm';
  hidden?: boolean;
  handleClick?: () => void;
  vertical?: boolean;
  additionalClass?: string;
};

function MainNavigationButton({
  icon,
  label,
  size = 'md',
  hidden,
  link,
  handleClick,
  vertical = false,
  additionalClass = '',
}: MainNavigationButtonProps) {
  const sizeStr = `${size === 'md' ? '[&>svg]:w-6 [&>svg]:xl:w-5' : '[&>svg]:w-5'} ${size === 'md' ? '[&>svg]:h-6 [&>svg]:xl:h-5' : '[&>svg]:h-5'}`;
  const tabIndex = hidden ? -1 : 0;
  const buttonClass = `flex justify-start ${sizeStr} ${vertical ? 'flex-col justify-center' : ''} gap-2 items-center text-primary-500 hover:text-primary-800 focus:text-primary-800 ease-in-out duration-150 ${additionalClass}`;

  const buttonContent = (
    <>
      {icon}
      <span className={size === 'sm' ? 'xl:test-xs text-sm' : 'xl:text-sm'}>
        {label}
      </span>
    </>
  );

  if (link?.url)
    return (
      <Link
        onClick={handleClick}
        tabIndex={tabIndex}
        href={link.url}
        className={buttonClass}
        target={link.newTab ? '_blank' : '_self'}
      >
        {buttonContent}
      </Link>
    );
  return (
    <button className={buttonClass} tabIndex={tabIndex} onClick={handleClick}>
      {buttonContent}
    </button>
  );
}

export default MainNavigationButton;
