'use client';

import { credentialsLogout } from '@/src/actions/actions';
import { useRouter } from 'next/navigation';
import { ReactElement, useState } from 'react';
import { toast } from 'sonner';
import Modal from '../../global/modal/Modal';
import PopupWindow from '../../global/popupWindow/PopupWindow';

type OpenLogoutConfirmationProps = { children: ReactElement };

function OpenLogoutConfirmation({ children }: OpenLogoutConfirmationProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  async function handleLogout() {
    setIsLoading(true);
    const res = await credentialsLogout();
    if (res.status === 'success') {
      toast.success(res.message);
      router.push('/login');
    } else {
      toast.error(res.message);
    }
    setIsLoading(false);
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
            closeAfterAction: true,
          }}
          handleClose={{ isModal: true }}
        />
      </Modal.Window>
    </Modal>
  );
}

export default OpenLogoutConfirmation;
