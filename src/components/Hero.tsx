import { FileText, ArrowDown, ShieldCheck, MapPin, Building2 } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function Hero() {
  return (
    <section id="beranda" className="relative flex flex-col justify-between overflow-hidden py-14 sm:py-16 px-4 sm:px-6 lg:px-8 bg-hero-texture border-b border-white/10">
      {/* Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0c35a6]/40 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[200px] bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-5 my-auto pt-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Badan Pengurus Pusat <br />
          <span className="bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-md">
            Gereja Kemah Injil Indonesia
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-200 font-normal leading-relaxed">
          Pusat Informasi Kebijakan, Akses Publik Tata Gereja (TGTRT), Surat Edaran BPP, Formulir Pendataan, dan Informasi Wilayah secara resmi tanpa perlu login.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
          <a
            href="#dokumen"
            className="w-full sm:w-auto px-7 py-3 text-xs sm:text-sm font-bold text-[#06195c] bg-[#D4AF37] hover:bg-[#B8962E] rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 hover:scale-102"
          >
            <FileText className="w-4 h-4" />
            <span>Lihat & Unduh Dokumen</span>
          </a>
          <a
            href="#pengurus"
            className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all backdrop-blur-md flex items-center justify-center space-x-2"
          >
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Pimpinan BPP</span>
          </a>
        </div>
      </div>

      {/* Statistics Strip - Streamlined & Compact */}
      <div className="relative z-10 max-w-3xl mx-auto w-full pt-8">
        <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-center">
          <div className="space-y-0.5">
            <div className="flex items-center justify-center text-[#D4AF37]">
              <MapPin className="w-3.5 h-3.5 mr-1 opacity-80" />
              <span className="text-lg sm:text-xl font-black text-white">{bppData.regions.length}</span>
            </div>
            <p className="text-[10px] text-slate-300 font-medium uppercase tracking-wider">Wilayah BPW</p>
          </div>

          <div className="space-y-0.5 border-x border-white/10">
            <div className="flex items-center justify-center text-[#D4AF37]">
              <FileText className="w-3.5 h-3.5 mr-1 opacity-80" />
              <span className="text-lg sm:text-xl font-black text-white">100%</span>
            </div>
            <p className="text-[10px] text-slate-300 font-medium uppercase tracking-wider">Akses Publik</p>
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center justify-center text-[#D4AF37]">
              <Building2 className="w-3.5 h-3.5 mr-1 opacity-80" />
              <span className="text-lg sm:text-xl font-black text-white">{bppData.legalities.secretariatCity}</span>
            </div>
            <p className="text-[10px] text-slate-300 font-medium uppercase tracking-wider">Sekretariat Pusat</p>
          </div>
        </div>

        {/* Scroll Bounce Indicator */}
        <div className="flex justify-center mt-4">
          <a href="#dokumen" className="text-white/40 hover:text-[#D4AF37] transition-colors animate-bounce p-1" aria-label="Scroll ke Dokumen">
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

