import logo from '@/public/img/logo.png';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import TooltipWindow from '../../global/tooltipWindow/TooltipWindow';

function MainLogo() {
  return (
    <header className="py-2 px-4 bg-primary-50 border border-primary-200 rounded-xl flex justify-start items-center gap-10 xl:gap-6">
      <div className="flex items-center gap-2">
        <div className="relative h-14 aspect-square">
          <Image fill src={logo} alt="Deermood Logo" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-medium xl:text-base">Deermood</span>
          <span className="text-xs font-medium text-primary-500">
            Admin Panel
          </span>
        </div>
      </div>
      <TooltipWindow content="Visit Website">
        <Link
          href="https://github.com/OliwierSellig"
          className="text-primary-500 focus:text-emerald-600 duration-200 ease-in-out"
          target="_blank"
        >
          <ArrowUpRightIcon className="w-6 h-6" />
        </Link>
      </TooltipWindow>
    </header>
  );
}

export default MainLogo;
