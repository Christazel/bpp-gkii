import Image from 'next/image';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFCFF] text-slate-800 flex flex-col justify-between p-6 font-sans">
      {/* Top Simple Header */}
      <header className="max-w-4xl mx-auto w-full pt-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image width={220} height={44} priority
            src="/gkii-logo-long.png"
            alt="Gereja Kemah Injil Indonesia Logo"
            className="h-9 w-auto object-contain"
          />
        </Link>
        <Link
          href="/"
          className="text-xs font-semibold text-slate-600 hover:text-[#0c35a6] flex items-center space-x-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Beranda</span>
        </Link>
      </header>

      {/* Center Simple 404 Message */}
      <main className="max-w-md mx-auto text-center space-y-6 my-auto py-12 px-4">
        <span className="text-6xl font-extrabold text-[#0c35a6] tracking-tight block">
          404
        </span>

        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Maaf, halaman atau tautan yang Anda tuju tidak tersedia atau telah dipindahkan.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-white bg-[#0c35a6] hover:bg-[#06195c] rounded-xl shadow-sm transition-all"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Kembali ke Beranda Utama</span>
          </Link>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="max-w-4xl mx-auto w-full text-center text-xs text-slate-400 pb-4 border-t border-slate-200/60 pt-4">
        <p>&copy; {new Date().getFullYear()} BPP GKII — Badan Pengurus Pusat Gereja Kemah Injil Indonesia</p>
      </footer>
    </div>
  );
}
