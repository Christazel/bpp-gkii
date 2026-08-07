import Image from 'next/image';
import { FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Gedung BPP GKII Pusat"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06195c]/95 via-[#0c35a6]/90 to-[#06195c]/95"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
          Portal Informasi Kelembagaan Pusat
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          Badan Pengurus Pusat <br />
          <span className="bg-gradient-to-r from-[#FFE57F] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
            Gereja Kemah Injil Indonesia
          </span>
        </h1>

        <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-200 font-normal leading-relaxed">
          Akses publik dokumen Tata Gereja, Surat Edaran BPP, Formulir Pendataan, dan Informasi Wilayah secara resmi tanpa perlu login.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#dokumen"
            className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold text-[#06195c] bg-[#D4AF37] hover:bg-[#B8962E] rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>Lihat & Unduh Dokumen</span>
          </a>
          <a
            href="https://wa.me/628113456789?text=Halo%20Sekretariat%20BPP%20GKII"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all flex items-center justify-center space-x-2.5 group"
          >
            {/* Authentic High-Res WhatsApp Brand Logo Image */}
            <img
              src="/whatsapp-logo.png"
              alt="Official WhatsApp Logo"
              className="w-5 h-5 object-contain group-hover:scale-110 transition-transform shrink-0"
            />
            <span>Hubungi Sekretariat WA</span>
          </a>
        </div>
      </div>
    </section>
  );
}
