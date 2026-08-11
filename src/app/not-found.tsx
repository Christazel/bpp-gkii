import Link from 'next/link';
import { ShieldCheck, Home, FileText, MapPin, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-hero-texture text-white flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative overflow-hidden font-sans">
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0c35a6]/50 blur-[130px] rounded-full pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[250px] bg-[#D4AF37]/15 blur-[110px] rounded-full pointer-events-none"></div>

      {/* Header Logo Bar */}
      <header className="max-w-7xl mx-auto w-full pt-2 relative z-10 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group" aria-label="Beranda BPP GKII">
          <img
            src="/gkii-logo-long.png"
            alt="Gereja Kemah Injil Indonesia Logo"
            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:inline-flex items-center text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/10 text-[#D4AF37] border border-white/15 shadow-inner">
            <ShieldCheck className="w-3 h-3 mr-1 text-[#D4AF37]" /> PORTAL RESMI
          </span>
        </Link>

        <Link
          href="/"
          className="text-xs font-bold text-slate-300 hover:text-white flex items-center space-x-1.5 transition-colors px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Beranda</span>
        </Link>
      </header>

      {/* Main 404 Hero Content */}
      <main className="max-w-2xl mx-auto text-center space-y-7 relative z-10 my-auto py-12 px-4">
        {/* Emblem Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#D4AF37] text-xs font-semibold uppercase tracking-wider border border-white/15 shadow-inner animate-float">
          <img src="/gkii-logo-emblem.png" alt="Emblem GKII" className="w-4 h-4 object-contain" />
          <span>Kesalahan Navigasi Halaman</span>
        </div>

        {/* Big 404 Heading with Gold Gradient */}
        <div className="space-y-2">
          <h1 className="text-7xl sm:text-8xl font-black tracking-tight leading-none bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Halaman Tidak Ditemukan
          </h2>
        </div>

        <p className="max-w-md mx-auto text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
          Tautan yang Anda tuju tidak tersedia atau telah dipindahkan. Silakan gunakan pintasan resmi di bawah ini untuk mengakses informasi kelembagaan BPP GKII.
        </p>

        {/* Quick Access Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
          <Link
            href="/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all group flex flex-col justify-between space-y-2"
          >
            <div className="p-2 rounded-xl bg-[#D4AF37]/20 text-[#FFE57F] w-fit">
              <Home className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block group-hover:text-[#FFE57F] transition-colors">Beranda Utama</span>
              <span className="text-[10px] text-slate-300">Kembali ke halaman depan portal.</span>
            </div>
          </Link>

          <Link
            href="/#dokumen"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all group flex flex-col justify-between space-y-2"
          >
            <div className="p-2 rounded-xl bg-[#D4AF37]/20 text-[#FFE57F] w-fit">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block group-hover:text-[#FFE57F] transition-colors">Pusat Dokumen</span>
              <span className="text-[10px] text-slate-300">Akses TGTRT, SE, & Form Pendataan.</span>
            </div>
          </Link>

          <Link
            href="/#wilayah"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all group flex flex-col justify-between space-y-2"
          >
            <div className="p-2 rounded-xl bg-[#D4AF37]/20 text-[#FFE57F] w-fit">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block group-hover:text-[#FFE57F] transition-colors">13 Wilayah BPW</span>
              <span className="text-[10px] text-slate-300">Direktori & kontak regional.</span>
            </div>
          </Link>
        </div>

        {/* Primary CTA Button */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-bold text-[#06195c] bg-[#D4AF37] hover:bg-[#B8962E] rounded-xl shadow-xl transition-all hover:scale-105 btn-shimmer"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Kembali ke Beranda BPP GKII</span>
          </Link>
        </div>
      </main>

      {/* Footer Copyright */}
      <footer className="max-w-7xl mx-auto w-full text-center text-[11px] text-slate-400 relative z-10 pb-2 border-t border-white/10 pt-4">
        <p>&copy; {new Date().getFullYear()} Portal Resmi Badan Pengurus Pusat Gereja Kemah Injil Indonesia (BPP GKII).</p>
      </footer>
    </div>
  );
}
