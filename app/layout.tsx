import '@/app/ui/global.css';

import {inter} from '@/app/ui/font';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'fintech Dashboard',
  description: 'code and imagination fintech app.',
 
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
