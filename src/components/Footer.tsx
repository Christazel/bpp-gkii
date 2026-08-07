import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function Footer() {
  return (
    <>
      <footer id="kontak" className="bg-[#06195c] text-slate-300 pt-16 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="/gkii-logo-emblem.png"
                  alt="Gereja Kemah Injil Indonesia Emblem"
                  className="w-11 h-11 object-contain p-1 rounded-xl bg-white/10 border border-white/20"
                />
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg text-white tracking-tight leading-none">BPP GKII</span>
                  <span className="text-[9px] uppercase font-semibold text-[#D4AF37] mt-1">
                    Badan Pengurus Pusat
                  </span>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-slate-300">
                Badan Pengurus Pusat Gereja Kemah Injil Indonesia (GKII). Sekretariat Jenderal Administrasi Kebijakan & Kelembagaan Nasional.
              </p>
            </div>

            {/* Col 2 */}
            <div className="space-y-3">
              <p className="font-bold text-white text-sm">Layanan Kelembagaan</p>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#dokumen" className="hover:text-[#D4AF37] transition-colors">
                    Unduh Tata Gereja (TGTRT)
                  </a>
                </li>
                <li>
                  <a href="#dokumen" className="hover:text-[#D4AF37] transition-colors">
                    Surat Edaran BPP
                  </a>
                </li>
                <li>
                  <a href="#dokumen" className="hover:text-[#D4AF37] transition-colors">
                    Form Pendataan Gereja Baru
                  </a>
                </li>
                <li>
                  <a href="#wilayah" className="hover:text-[#D4AF37] transition-colors">
                    Direktori BPW 13 Wilayah
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-3">
              <p className="font-bold text-white text-sm">Sekretariat Pusat</p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Jl. Jambrut No.24 7, RT.7/RW.2, Kenari, Kec. Senen, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10430, Indonesia</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#D4AF37] shrink-0" />
                  <span>021-31902510</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#D4AF37] shrink-0" />
                  <span>info@kemah-injil.org</span>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-3">
              <p className="font-bold text-white text-sm">Tautan Terkait</p>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href={bppData.legalities.parentWebUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] font-bold hover:underline flex items-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-1" /> Website Utama kemah-injil.org
                  </a>
                </li>
                <li>
                  <a href="#stt" className="hover:text-white transition-colors">
                    STT Affiliasi GKII
                  </a>
                </li>
                <li>
                  <a href="#siaran-pers" className="hover:text-white transition-colors">
                    Warta & Siaran Pers BPP
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>&copy; 2026 Portal Resmi Badan Pengurus Pusat Gereja Kemah Injil Indonesia (BPP GKII).</p>
            <div className="flex space-x-6">
              <a href={bppData.legalities.parentWebUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                kemah-injil.org
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Akses Terbuka Tanpa Login
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* JELAJAHKODE STYLE FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/628113456789?text=Halo%20Sekretariat%20BPP%20GKII,%20saya%20ingin%20berkonsultasi"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi WhatsApp BPP GKII"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border border-white/30 group"
      >
        <svg
          className="w-5 h-5 fill-white shrink-0 group-hover:scale-110 transition-transform"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.104 4.032 4.148-1.085zm9.684-6.326c.264.132.441.22.518.352.077.132.077.766-.176 1.294-.253.528-1.396 1.056-1.969 1.084-.573.028-1.277.176-3.743-.846-3.037-1.258-4.945-4.373-5.093-4.571-.148-.198-1.233-1.638-1.233-3.125 0-1.487.772-2.213 1.047-2.513.275-.3.605-.374.804-.374.198 0 .396.002.562.01.176.008.418-.067.65.489.231.556.793 1.936.86 2.073.067.137.11.297.022.473-.088.176-.132.286-.264.44-.132.154-.277.324-.396.435-.132.124-.27.259-.116.523.154.264.684 1.13 1.47 1.83 1.011.898 1.865 1.177 2.129 1.309.264.132.418.11.573-.066.154-.176.66-.77.837-1.034.176-.264.352-.22.616-.088z" />
        </svg>
        <span className="font-bold tracking-wide">Hubungi WhatsApp</span>
      </a>
    </>
  );
}
