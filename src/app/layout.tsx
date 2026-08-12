import type { Metadata } from 'next';
import { Gabarito } from 'next/font/google';
import './globals.css';

const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-gabarito',
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
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'BPP GKII',
  },
  icons: {
    icon: [
      { url: '/icon-72.png', sizes: '72x72', type: 'image/png' },
      { url: '/icon-96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-128.png', sizes: '128x128', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/icon-192.png',
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
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
    <html lang="id" className={`${gabarito.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FAFCFF] text-slate-900">{children}</body>
    </html>
  );
}
