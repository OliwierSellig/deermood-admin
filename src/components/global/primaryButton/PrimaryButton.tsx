'use client';

import Link from 'next/link';
import { ReactElement, SVGProps } from 'react';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';

type PrimaryButtonProps = {
  content: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  rounded?: 'md' | 'lg' | 'xl';
  theme?: 'red' | 'green' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  additionalClass?: string;
  isLoading?: boolean;
  disabled?: boolean;
  role?: 'button' | 'submit';
  handleClick?: () => void;
  link?: { href: string; newTab?: boolean };
};

function PrimaryButton({
  content,
  icon,
  rounded = 'md',
  theme = 'green',
  size = 'md',
  additionalClass = '',
  isLoading = false,
  disabled = false,
  role = 'button',
  handleClick,
  link,
}: PrimaryButtonProps) {
  const themeStr = (function getTheme() {
    switch (theme) {
      case 'red':
        return `bg-rose-200 text-rose-700 shadow-[0_4px_4px_0px_rgba(244,63,94,0.1)]  ${!disabled && (!isLoading || link) ? 'hover:bg-rose-300 hover:text-rose-800 focus:bg-rose-300 focus:text-rose-950' : ''}`;
      case 'blue':
        return `bg-sky-200 text-sky-700 shadow-[0_4px_4px_0px_rgba(14,165,233,0.1)]  ${!disabled && (!isLoading || link) ? 'hover:bg-sky-300 hover:text-sky-800 focus:bg-sky-300 focus:text-sky-950' : ''}`;
      default:
        return `bg-teal-200 text-teal-700 shadow-[0_4px_4px_0px_rgba(20,184,166,0.1)]  ${!disabled && (!isLoading || link) ? 'hover:bg-teal-300 hover:text-teal-800 focus:bg-teal-300 focus:text-teal-950' : ''}`;
    }
  })();
  const sizeStr = (function getSize() {
    switch (size) {
      case 'sm':
        return 'text-sm px-4 py-3 [&>svg]:w-5 [&>svg]:h-5 gap-x-1.5 ';
      case 'lg':
        return 'text-lg px-8 py-4 [&>svg]:w-6 [&>svg]:h-6 gap-x-2 ';
      default:
        return 'text-base px-6 py-4 [&>svg]:w-5 [&>svg]:h-5 gap-x-2 ';
    }
  })();

  const loadingClass =
    isLoading && !link
      ? '[&>div]:translate-y-0 [&>svg]:-translate-y-10 [&>span]:-translate-y-10 pointer-events-none'
      : '';

  const buttonClass = `relative flex items-center overflow-hidden ${loadingClass} [&>svg]:duration-150 justify-center rounded-${rounded} font-medium ${themeStr} ${sizeStr} duration-200 ease-in-out 'cursor-pointer'  ${disabled ? 'opacity-70 pointer-events-none' : ''} ${additionalClass}`;
  const tabIndex = disabled || (isLoading && !link) ? -1 : 0;

  if (link)
    return (
      <Link
        tabIndex={tabIndex}
        className={buttonClass}
        href={link.href}
        target={link.newTab ? '_blank' : '_self'}
      >
        {icon}
        <span className="duration-150">{content}</span>
      </Link>
    );
  return (
    <button
      role={role}
      onClick={() => handleClick?.()}
      tabIndex={tabIndex}
      className={buttonClass}
    >
      {icon}
      <span className="duration-150">{content}</span>
      <LoadingSpinner
        theme={theme}
        additionalClass="absolute translate-y-10 duration-200"
      />
    </button>
  );
}

export default PrimaryButton;
