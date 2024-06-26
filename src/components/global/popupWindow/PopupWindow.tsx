'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';
import { ReactElement, ReactNode, SVGProps } from 'react';
import PrimaryButton from '../primaryButton/PrimaryButton';

type PopupWindowProps = {
  heading: string;
  subheading: string;
  children?: ReactNode;
  handleClose: { isModal: true } | { isModal: false; closeFn: () => void };
  onCloseModal?: () => void;

  actionButton: {
    theme: 'red';
    text: string;
    icon?: ReactElement<SVGProps<SVGSVGElement>>;
    handleClick: () => void | Promise<void>;
    isLoading?: boolean;
    closeAfterAction?: boolean;
  };
};

function PopupWindow({
  heading,
  subheading,
  children,
  handleClose,
  actionButton,
  onCloseModal,
}: PopupWindowProps) {
  const closeFn = handleClose.isModal ? onCloseModal : handleClose.closeFn;
  return (
    <div className="fixed left-1/2 top-1/2 z-50 flex w-11/12 max-w-[42rem] -translate-x-1/2 -translate-y-1/2 animate-fade-popup flex-col items-center rounded-xl border border-primary-200 bg-primary-50 px-12 pb-12 pt-16 text-center shadow-[0_4px_12px_0_rgba(71,79,93,0.15)]">
      <button
        className="absolute right-4 top-4 cursor-pointer rounded-full bg-primary-200 p-2 text-primary-600 duration-150 ease-in-out hover:bg-primary-300 focus:bg-primary-300 focus:text-primary-800"
        onClick={closeFn}
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
      <p className="pb-6 text-2xl font-medium">{heading}</p>
      <p className="max-w-[32rem] pb-10 text-primary-600 sm:pb-12">
        {subheading}
      </p>
      {children}
      <div className="flex w-full items-center justify-center gap-4 sm:flex-col [&>button]:w-full [&>button]:max-w-56 sm:[&>button]:max-w-80">
        <button
          onClick={closeFn}
          className="flex-1 cursor-pointer rounded-xl border border-primary-200 px-6 py-4 font-medium text-primary-600 duration-150 ease-linear hover:text-primary-800 focus:bg-primary-200 focus:text-primary-800"
        >
          Cancel
        </button>
        <PrimaryButton
          content={actionButton.text}
          icon={actionButton.icon}
          handleClick={async () => {
            await actionButton.handleClick();
            if (actionButton.closeAfterAction) closeFn?.();
          }}
          theme={actionButton.theme}
          rounded="xl"
          additionalClass="flex-1"
          isLoading={actionButton.isLoading}
        />
      </div>
    </div>
  );
}

export default PopupWindow;
