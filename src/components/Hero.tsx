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
            className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all flex items-center justify-center space-x-2 group"
          >
            {/* Official WhatsApp Icon */}
            <svg
              className="w-4 h-4 fill-emerald-400 shrink-0 group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.104 4.032 4.148-1.085zm9.684-6.326c.264.132.441.22.518.352.077.132.077.766-.176 1.294-.253.528-1.396 1.056-1.969 1.084-.573.028-1.277.176-3.743-.846-3.037-1.258-4.945-4.373-5.093-4.571-.148-.198-1.233-1.638-1.233-3.125 0-1.487.772-2.213 1.047-2.513.275-.3.605-.374.804-.374.198 0 .396.002.562.01.176.008.418-.067.65.489.231.556.793 1.936.86 2.073.067.137.11.297.022.473-.088.176-.132.286-.264.44-.132.154-.277.324-.396.435-.132.124-.27.259-.116.523.154.264.684 1.13 1.47 1.83 1.011.898 1.865 1.177 2.129 1.309.264.132.418.11.573-.066.154-.176.66-.77.837-1.034.176-.264.352-.22.616-.088z" />
            </svg>
            <span>Hubungi Sekretariat WA</span>
          </a>
        </div>
      </div>
    </section>
  );
}
