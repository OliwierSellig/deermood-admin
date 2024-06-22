import { auth } from '@/src/auth';
import MainNavigation from '@/src/components/navigation/mainNavigation/MainNavigation';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

type AdminLayoutProps = { children: ReactNode };

async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await auth();
  if (!session?.user) redirect('/login');
  return (
    <div className="relative z-30 flex h-screen gap-x-4 overflow-x-hidden bg-primary-100 p-4 md:flex-col md:p-0">
      <MainNavigation />
      <main
        id="main"
        className="flex grow items-center justify-center rounded-xl border border-primary-200 bg-primary-50 md:order-1"
      >
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
