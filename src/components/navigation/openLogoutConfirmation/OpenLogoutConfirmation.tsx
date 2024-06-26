'use client';

import { credentialsLogout } from '@/src/actions/actions';
import { ReactElement, useState } from 'react';
import Modal from '../../global/modal/Modal';
import PopupWindow from '../../global/popupWindow/PopupWindow';

type OpenLogoutConfirmationProps = { children: ReactElement };

function OpenLogoutConfirmation({ children }: OpenLogoutConfirmationProps) {
  const [isLoading, setIsLoading] = useState(false);
  async function handleLogout() {
    try {
      setIsLoading(true);
      await credentialsLogout();
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Modal>
      <Modal.Open opens="logout-confirmation">{children}</Modal.Open>
      <Modal.Window name="logout-confirmation">
        <PopupWindow
          heading="Are you sure?"
          subheading="Are you sure you want to log out? You will be moved back to login page."
          actionButton={{
            text: 'Logout',
            handleClick: handleLogout,
            theme: 'red',
            isLoading,
          }}
          handleClose={{ isModal: true }}
        />
      </Modal.Window>
    </Modal>
  );
}

export default OpenLogoutConfirmation;
