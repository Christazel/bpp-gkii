import { FileText, ArrowDown, ShieldCheck, MapPin, Building2 } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-hero-texture border-b border-white/10">
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0c35a6]/50 blur-[130px] rounded-full pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[250px] bg-[#D4AF37]/15 blur-[110px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-7 my-auto pt-6">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          Badan Pengurus Pusat <br />
          <span className="bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md">
            Gereja Kemah Injil Indonesia
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
          Pusat Informasi Kebijakan, Akses Publik Tata Gereja (TGTRT), Surat Edaran BPP, Formulir Pendataan, dan Informasi Wilayah secara resmi tanpa perlu login.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#dokumen"
            className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold text-[#06195c] bg-[#D4AF37] hover:bg-[#B8962E] rounded-xl shadow-xl transition-all flex items-center justify-center space-x-2.5 hover:scale-105 btn-shimmer"
          >
            <FileText className="w-4 h-4" />
            <span>Lihat & Unduh Dokumen</span>
          </a>
          <a
            href="#pengurus"
            className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all backdrop-blur-md flex items-center justify-center space-x-2"
          >
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Pimpinan BPP</span>
          </a>
        </div>
      </div>

      {/* Statistics Strip - Premium Executive Bar */}
      <div className="relative z-10 max-w-4xl mx-auto w-full pt-10 pb-2">
        <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
          <div className="space-y-0.5">
            <div className="flex items-center justify-center text-[#D4AF37] mb-1">
              <MapPin className="w-4 h-4 mr-1 opacity-80" />
              {/* Derived from bppData.regions.length — stays in sync automatically */}
              <span className="text-xl sm:text-2xl font-black text-white">{bppData.regions.length}</span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-300 font-medium uppercase tracking-wider">Wilayah BPW</p>
          </div>

          <div className="space-y-0.5 border-x border-white/10">
            <div className="flex items-center justify-center text-[#D4AF37] mb-1">
              <FileText className="w-4 h-4 mr-1 opacity-80" />
              <span className="text-xl sm:text-2xl font-black text-white">100%</span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-300 font-medium uppercase tracking-wider">Bebas Akses Publik</p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center justify-center text-[#D4AF37] mb-1">
              <Building2 className="w-4 h-4 mr-1 opacity-80" />
              {/* Derived from bppData.legalities.secretariatCity */}
              <span className="text-xl sm:text-2xl font-black text-white">{bppData.legalities.secretariatCity}</span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-300 font-medium uppercase tracking-wider">Sekretariat Pusat</p>
          </div>
        </div>

        {/* Scroll Bounce Indicator */}
        <div className="flex justify-center mt-6">
          <a href="#dokumen" className="text-white/50 hover:text-[#D4AF37] transition-colors animate-bounce p-1" aria-label="Scroll ke Dokumen">
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

