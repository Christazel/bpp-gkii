import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'BPP GKII | Portal Resmi Badan Pengurus Pusat Gereja Kemah Injil Indonesia',
  description: 'Portal Kelembagaan, Regulasi, dan Layanan Resmi Badan Pengurus Pusat Gereja Kemah Injil Indonesia (BPP GKII).',
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FAFCFF] text-slate-900">{children}</body>
    </html>
  );
}
