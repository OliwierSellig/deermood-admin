import logo from '@/public/img/logo.png';
import Image from 'next/image';
import WebsiteArrowLink from '../../global/websiteArrowLink/WebsiteArrowLink';

function LoginLayoutHeading() {
  return (
    <div className="flex flex-col items-end gap-y-28 pb-12 sm:gap-y-6">
      <WebsiteArrowLink filled={true} />
      <div className="flex items-center gap-x-3 self-center overflow-hidden rounded-full">
        <div className="relative h-16 w-16">
          <Image src={logo} sizes="64px" alt="Deermood logo" fill />
        </div>
        <span className="text-xl font-medium">Deermood</span>
      </div>
    </div>
  );
}

export default LoginLayoutHeading;
