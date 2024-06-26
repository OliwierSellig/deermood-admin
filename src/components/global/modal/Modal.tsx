'use client';

import { XMarkIcon } from '@heroicons/react/20/solid';
import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import React from 'react';
import { createPortal } from 'react-dom';

type ModalContextProps = {
  openName: string;
  close: () => void;
  open: Dispatch<SetStateAction<string>>;
};

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

function Modal({ children }: { children: ReactNode }) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

type OpenProps = {
  opens: string;
  children: ReactElement;
};

function Open({ children, opens: opensWindowName }: OpenProps) {
  const { open } = useModal();

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
    onKeyDown: (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        open(opensWindowName);
      }
    },
  });
}

type WindowProps = {
  name: string;
  children: ReactElement;
  locked?: boolean;
};

function Window({ name, children, locked = true }: WindowProps) {
  const { openName, close } = useModal();
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (locked && openName) {
      document.documentElement.classList.add('modal');
    }

    if (
      locked &&
      !openName &&
      document.documentElement.classList.contains('modal')
    )
      document.documentElement.classList.remove('modal');
  }, [openName, locked]);

  if (name !== openName) return null;

  return createPortal(
    <div
      className={`fixed left-0 top-0 z-50 h-screen w-screen`}
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target === backgroundRef.current) close();
      }}
    >
      <div>
        <>
          {locked && (
            <button
              onClick={close}
              className="absolute right-12 top-12 cursor-pointer"
            >
              <XMarkIcon className="h-12 w-12" />
            </button>
          )}
          {cloneElement(children, { onCloseModal: close })}
        </>
      </div>
    </div>,
    document.body,
  );
}

function useModal() {
  const modal = useContext(ModalContext);
  if (!modal) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return modal;
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
