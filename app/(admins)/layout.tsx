import MainNavigation from '@/src/components/global/mainNavigation/MainNavigation';
import { ReactNode } from 'react';

type AdminLayoutProps = { children: ReactNode };

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="gap-x-4 flex bg-primary-100 p-4 h-screen">
      <MainNavigation />
      <main className="bg-primary-50 flex items-center justify-center grow rounded-xl border border-primary-200 ">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
