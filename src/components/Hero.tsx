import { FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-hero-texture border-b border-white/10">
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0c35a6]/40 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[200px] bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider border border-white/10 shadow-inner">
          Portal Informasi Kelembagaan Pusat
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Badan Pengurus Pusat <br />
          <span className="bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-sm">
            Gereja Kemah Injil Indonesia
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
          Akses publik dokumen Tata Gereja, Surat Edaran BPP, Formulir Pendataan, dan Informasi Wilayah secara resmi tanpa perlu login.
        </p>

        <div className="flex justify-center pt-2">
          <a
            href="#dokumen"
            className="px-8 py-3.5 text-xs sm:text-sm font-bold text-[#06195c] bg-[#D4AF37] hover:bg-[#B8962E] rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 hover:scale-105"
          >
            <FileText className="w-4 h-4" />
            <span>Lihat & Unduh Dokumen</span>
          </a>
        </div>
      </div>
    </section>
  );
}
