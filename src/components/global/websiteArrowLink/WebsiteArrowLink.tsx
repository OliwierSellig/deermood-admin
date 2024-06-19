import { ArrowUpRightIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import TooltipWindow from '../TooltipWindow';

type WebsiteArrowLinkProps = {
  filled?: boolean;
};

function WebsiteArrowLink({ filled = false }: WebsiteArrowLinkProps) {
  return (
    <TooltipWindow content="Visit website">
      <Link
        href="https://github.com/OliwierSellig"
        className={`text-primary-500 duration-200 ease-in-out focus:text-emerald-600 ${filled ? 'block rounded-xl bg-primary-200 p-3 hover:text-primary-800 focus:bg-primary-300 focus:text-primary-800' : 'focus:text-emerald-600'}`}
        target="_blank"
        aria-label="Visit Deermood website"
      >
        <ArrowUpRightIcon className={filled ? 'h-5 w-5' : 'h-6 w-6'} />
      </Link>
    </TooltipWindow>
  );
}

export default WebsiteArrowLink;
