import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bpp-gkii.vercel.app'),
  title: 'BPP GKII | Portal Resmi Badan Pengurus Pusat Gereja Kemah Injil Indonesia',
  description: 'Portal Kelembagaan, Regulasi, Tata Gereja (TGTRT), Surat Edaran BPP, dan Layanan Resmi Badan Pengurus Pusat Gereja Kemah Injil Indonesia (BPP GKII).',
  keywords: [
    'BPP GKII',
    'Gereja Kemah Injil Indonesia',
    'Tata Gereja GKII',
    'TGTRT GKII',
    'Surat Edaran BPP GKII',
    'Badan Pengurus Pusat GKII',
    'Pendataan Gereja GKII',
  ],
  authors: [{ name: 'Badan Pengurus Pusat GKII' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'BPP GKII | Portal Resmi Badan Pengurus Pusat Gereja Kemah Injil Indonesia',
    description: 'Portal Kelembagaan, Regulasi, Tata Gereja (TGTRT), Surat Edaran BPP, dan Layanan Resmi BPP GKII. Bebas Akses Tanpa Login.',
    url: 'https://bpp-gkii.vercel.app/',
    siteName: 'BPP GKII Portal Resmi',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BPP GKII Portal Kelembagaan Resmi',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BPP GKII | Portal Resmi Badan Pengurus Pusat',
    description: 'Akses publik dokumen Tata Gereja, Surat Edaran BPP, dan Informasi Wilayah secara resmi.',
    images: ['/og-image.png'],
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
