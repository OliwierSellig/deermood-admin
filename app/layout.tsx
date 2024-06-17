import MainNavigation from '@/src/components/global/mainNavigation/MainNavigation';
import { plusJakartaSans } from '@/src/utils/fonts';
import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Deermood Admin',
  description:
    'An application for Deermood admins, used for managing customers, orders and products data.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} gap-x-4 flex font-sans text-primary-800 bg-primary-100 p-4 h-screen`}
      >
        <MainNavigation />
        <main className="bg-primary-50 flex items-center justify-center grow rounded-xl border border-primary-200">
          {children}
        </main>
      </body>
    </html>
  );
}
