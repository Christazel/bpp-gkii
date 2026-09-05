import type { Metadata, Viewport } from 'next';
import { Gabarito } from 'next/font/google';
import bppData from '@/data/bpp-data.json';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#06195c',
  width: 'device-width',
  initialScale: 1,
};

const gabarito = Gabarito({
  subsets: ['latin'],
  // Removed '500' and '600' — not used in CSS, saves ~15-25KB font payload
  weight: ['400', '700', '800', '900'],
  variable: '--font-gabarito',
  // display:'swap' renders text immediately with fallback font, swaps to Gabarito when loaded
  // Eliminates font-induced FCP/LCP delay (render-blocking fonts)
  display: 'swap',
});

// Schema.org JSON-LD structured data for Google Knowledge Graph & Rich Snippets
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ReligiousOrganization',
  name: 'Badan Pengurus Pusat Gereja Kemah Injil Indonesia',
  alternateName: ['BPP GKII', 'Gereja Kemah Injil Indonesia', 'GKII'],
  url: 'https://bpp-gkii.vercel.app',
  logo: 'https://bpp-gkii.vercel.app/gkii-logo-long.png',
  image: 'https://bpp-gkii.vercel.app/og-image.png',
  description:
    'Portal Kelembagaan, Regulasi, Tata Gereja (TGTRT), Surat Edaran BPP, dan Layanan Resmi Badan Pengurus Pusat Gereja Kemah Injil Indonesia (BPP GKII).',
  telephone: `+62-${bppData.legalities.phone.replace(/^0/, '')}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Jambrut No.24 7, RT.7/RW.2, Kenari, Kec. Senen',
    addressLocality: 'Jakarta Pusat',
    addressRegion: 'DKI Jakarta',
    postalCode: '10430',
    addressCountry: 'ID',
  },
  identifier: bppData.legalities.skNumber,
  sameAs: [bppData.legalities.parentWebUrl],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bpp-gkii.vercel.app'),
  alternates: {
    canonical: '/',
  },
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
      { url: '/icon-144.png', sizes: '144x144', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-384.png', sizes: '384x384', type: 'image/png' },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAFCFF] text-slate-900">{children}</body>
    </html>
  );
}

