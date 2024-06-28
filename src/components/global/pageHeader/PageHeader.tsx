import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

type PageHeaderProps = {
  heading: string;
  subheading: string;
  backLink?: { href: string; label: string };
};

function PageHeader({ heading, subheading, backLink }: PageHeaderProps) {
  return (
    <header className="flex items-center gap-x-6">
      {backLink?.href ? (
        <Link
          className="flex size-10 items-center justify-center rounded-xl bg-primary-150 text-primary-600 duration-150 ease-linear hover:bg-primary-200 focus:bg-primary-200 focus:text-primary-800"
          href={backLink.href}
          aria-label={backLink.label}
        >
          <ChevronLeftIcon className="size-6" />
        </Link>
      ) : null}
      <div>
        <h1 className="text-2xl font-medium">{heading}</h1>
        <h2 className="text-primary-500">{subheading}</h2>
      </div>
    </header>
  );
}

export default PageHeader;
