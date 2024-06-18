import logo from '@/public/img/logo.png';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import TooltipWindow from '../../global/tooltipWindow/TooltipWindow';

function MainLogo() {
  return (
    <header className="flex items-center justify-start gap-10 rounded-xl border border-primary-200 bg-primary-50 px-4 py-2 xl:gap-6">
      <div className="flex items-center gap-2">
        <div className="relative aspect-square h-14">
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
          className="text-primary-500 duration-200 ease-in-out focus:text-emerald-600"
          target="_blank"
        >
          <ArrowUpRightIcon className="h-6 w-6" />
        </Link>
      </TooltipWindow>
    </header>
  );
}

export default MainLogo;
