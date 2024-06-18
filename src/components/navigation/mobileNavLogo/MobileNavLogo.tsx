import logo from '@/public/img/logo.png';
import { XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

type MobileNavLogoProps = { handleClick: () => void };

function MobileNavLogo({ handleClick }: MobileNavLogoProps) {
  return (
    <div className="flex items-center justify-between pb-6">
      <div className="relative rounded-full overflow-hidden w-14 h-14">
        <Image fill src={logo} alt="Deermood Logo" />
      </div>
      <button aria-label="Close mobile navigation" onClick={handleClick}>
        <XMarkIcon className="w-6 h-6 fill-primary-600 duration-150 ease-in-out focus:fill-emerald-600 hover:fill-emerald-600" />
      </button>
    </div>
  );
}

export default MobileNavLogo;
