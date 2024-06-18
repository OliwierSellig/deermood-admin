import MainNavigation from '@/src/components/navigation/mainNavigation/MainNavigation';
import { ReactNode } from 'react';

type AdminLayoutProps = { children: ReactNode };

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="gap-x-4 flex relative z-30 bg-primary-100 p-4 h-screen md:flex-col md:p-0 overflow-x-hidden">
      <MainNavigation />
      <main
        id="main"
        className="bg-primary-50 flex items-center justify-center grow rounded-xl border border-primary-200 md:order-1"
      >
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
