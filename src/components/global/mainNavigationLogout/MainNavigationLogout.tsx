'use client';

import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

function MainNavigationLogout() {
  return (
    <button
      onClick={() => console.log('Logging out...')}
      className="w-full py-3 px-2  rounded-md flex justify-start gap-x-2 items-center text-primary-500 hover:text-primary-800 focus:text-primary-800 ease-in-out duration-150"
    >
      <ArrowRightStartOnRectangleIcon className="w-6 h-6 " />
      <span>Log out</span>
    </button>
  );
}

export default MainNavigationLogout;
