import Link from 'next/link';
import { ShieldCheck, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#06195c] text-white flex flex-col justify-between p-6 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0c35a6]/60 blur-[130px] rounded-full pointer-events-none"></div>

      {/* Header logo */}
      <div className="max-w-7xl mx-auto w-full pt-4 relative z-10 flex items-center space-x-3">
        <img src="/gkii-logo-long.png" alt="BPP GKII Logo" className="h-10 object-contain" />
      </div>

      {/* Main 404 content */}
      <div className="max-w-lg mx-auto text-center space-y-6 relative z-10 my-auto py-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider border border-white/15 shadow-inner">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span>Halaman Tidak Ditemukan (404)</span>
        </div>

        <h1 className="text-6xl font-black tracking-tight text-[#D4AF37]">404</h1>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-white">Tautan Tidak Tersedia</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Halaman atau dokumen yang Anda cari mungkin telah dipindahkan, diubah namanya, atau tidak tersedia di Portal Resmi BPP GKII.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-[#06195c] bg-[#D4AF37] hover:bg-[#B8962E] rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda Utama</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto w-full text-center text-xs text-slate-400 relative z-10 pb-4 border-t border-white/10 pt-4">
        &copy; {new Date().getFullYear()} Portal Resmi Badan Pengurus Pusat Gereja Kemah Injil Indonesia (BPP GKII).
      </div>
    </div>
  );
}
