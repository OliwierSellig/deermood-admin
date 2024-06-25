import loginBg from '@/public/img/login.png';
import { auth } from '@/src/auth';
import LoginLayoutHeading from '@/src/components/login/loginLayoutHeading/LoginLayoutHeading';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

type LayoutProps = { children: ReactNode };

async function layout({ children }: LayoutProps) {
  const session = await auth();
  if (session?.user) redirect('/dashboard');

  return (
    <div className="flex h-screen md:flex-col md:items-center">
      <div className="relative z-10 flex w-3/12 min-w-[24rem] max-w-[44rem] flex-col justify-start p-8 shadow-login-page md:h-full md:w-full md:min-w-0 md:shadow-none">
        <LoginLayoutHeading />
        {children}
      </div>
      <div className="relative z-0 grow md:hidden">
        <Image
          fill
          src={loginBg}
          alt=""
          sizes="(max-width: 960px) 0px, (min-width: 961px) and (max-width: 1200px) 65vw, (min-width: 1201px) and (max-width: 1800px) 75vw, 85vw"
          className="object-cover"
          placeholder="blur"
        />
      </div>
    </div>
  );
}

export default layout;
