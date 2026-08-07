import { MapPin, Phone, Mail, ExternalLink, MessageCircle } from 'lucide-react';
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

      {/* FLOATING WHATSAPP HELPDESK BUTTON */}
      <a
        href="https://wa.me/628113456789?text=Halo%20Sekretariat%20BPP%20GKII,%20saya%20ingin%20berkonsultasi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center space-x-2 group border border-white/20"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-bold whitespace-nowrap">
          Helpdesk BPP WA
        </span>
      </a>
    </>
  );
}
