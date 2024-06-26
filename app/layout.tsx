import { plusJakartaSans } from '@/src/utils/fonts';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
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
        className={`${plusJakartaSans.variable} bg-primary-50 font-sans text-primary-800`}
      >
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
