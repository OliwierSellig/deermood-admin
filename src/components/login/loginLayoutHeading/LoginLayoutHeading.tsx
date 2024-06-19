import logo from '@/public/img/logo.png';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';
import TooltipWindow from '../../global/tooltipWindow/TooltipWindow';

function LoginLayoutHeading() {
  return (
    <div className="flex flex-col items-end gap-y-28 pb-12">
      <TooltipWindow content="Visit Website">
        <Link
          href="https://github.com/OliwierSellig"
          className="block rounded-xl bg-primary-200 p-3 text-primary-500 duration-200 ease-in-out hover:text-primary-800 focus:bg-primary-300 focus:text-primary-800"
          target="_blank"
        >
          <ArrowUpRightIcon className="h-5 w-5" />
        </Link>
      </TooltipWindow>
      <div className="flex items-center gap-x-3 self-center">
        <div className="relative h-16 w-16">
          <Image src={logo} alt="Deermood logo" fill />
        </div>
        <span className="text-xl font-medium">Deermood</span>
      </div>
    </div>
  );
}

export default LoginLayoutHeading;
