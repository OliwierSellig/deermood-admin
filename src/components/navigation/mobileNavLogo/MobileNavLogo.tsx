import logo from '@/public/img/logo.png';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

type MobileNavLogoProps = { handleClick: () => void };

function MobileNavLogo({ handleClick }: MobileNavLogoProps) {
  return (
    <div className="flex items-center justify-between pb-6">
      <div className="relative h-14 w-14 overflow-hidden rounded-full">
        <Image fill sizes="56px" src={logo} alt="Deermood Logo" />
      </div>
      <button aria-label="Close mobile navigation" onClick={handleClick}>
        <XMarkIcon className="h-6 w-6 fill-primary-600 duration-150 ease-in-out hover:fill-emerald-600 focus:fill-emerald-600" />
      </button>
    </div>
  );
}

export default MobileNavLogo;
