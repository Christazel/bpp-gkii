import Image from 'next/image';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-hero-texture text-white flex flex-col justify-between p-6">
      {/* Header — matches Navbar.tsx structure */}
      <header className="max-w-4xl mx-auto w-full pt-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" aria-label="Kembali ke Beranda BPP GKII">
          <Image
            width={220}
            height={44}
            priority
            draggable={false}
            src="/gkii-logo-long.png"
            alt="Gereja Kemah Injil Indonesia Logo"
            className="h-9 w-auto object-contain select-none"
          />
        </Link>
        <Link
          href="/"
          className="text-xs font-semibold text-slate-300 hover:text-[#D4AF37] flex items-center space-x-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Beranda</span>
        </Link>
      </header>

      {/* Center 404 Content — consistent with Hero section treatment */}
      <main className="max-w-md mx-auto text-center space-y-6 my-auto py-12 px-4">
        {/* Gold eyebrow badge — consistent with all section headers */}
        <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest block">
          {bppData.legalities.portalBadge}
        </span>

        {/* 404 — matches Hero title gold gradient treatment */}
        <span className="text-8xl sm:text-9xl font-black tracking-tight block bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md select-none">
          404
        </span>

        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-extrabold text-white">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Maaf, halaman atau tautan yang Anda tuju tidak tersedia atau telah dipindahkan.
          </p>
        </div>

        {/* CTA Button — matches Hero.tsx gold primary button style */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-bold text-[#06195c] bg-[#D4AF37] hover:bg-[#B8962E] rounded-xl shadow-xl transition-all hover:scale-105 btn-shimmer"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Kembali ke Beranda Utama</span>
          </Link>
        </div>
      </main>

      {/* Footer — matches Footer.tsx copyright line */}
      <footer className="max-w-4xl mx-auto w-full text-center text-xs text-slate-400 pb-4 border-t border-white/10 pt-4">
        <p>&copy; {new Date().getFullYear()} Portal Resmi Badan Pengurus Pusat Gereja Kemah Injil Indonesia (BPP GKII).</p>
      </footer>
    </div>
  );
}
