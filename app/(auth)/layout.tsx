import loginBg from '@/public/img/login.png';
import LoginLayoutHeading from '@/src/components/login/loginLayoutHeading/LoginLayoutHeading';
import Image from 'next/image';
import { ReactNode } from 'react';

type LayoutProps = { children: ReactNode };

function layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <div className="shadow-login-page relative z-10 flex w-3/12 min-w-[24rem] max-w-[44rem] flex-col justify-start p-8">
        <LoginLayoutHeading />
        {children}
      </div>
      <div className="relative z-0 grow">
        <Image fill src={loginBg} alt="" className="object-cover" />
      </div>
    </div>
  );
}

export default layout;
