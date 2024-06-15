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
      <body className={`${plusJakartaSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
