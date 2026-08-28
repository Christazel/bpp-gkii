import { ExternalLink } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function SeminarySection() {
  return (
    <div>
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest">
          Pendidikan Teologi
        </span>
        <h2 className="text-3xl font-extrabold text-[#0c35a6]">Sekolah Tinggi Teologi Affiliasi</h2>
        <p className="text-slate-500 text-xs sm:text-sm">
          Lembaga pendidikan tinggi teologi resmi BPP GKII.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {bppData.seminaries.map((stt, idx) => (
          <div
            key={idx}
            className="bg-[#FAFCFF] rounded-2xl p-6 border border-slate-200/90 flex flex-col justify-between space-y-4 hover:border-[#0c35a6] hover:shadow-xl transition-all duration-300 group relative overflow-hidden transform hover:-translate-y-1"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0c35a6] via-[#D4AF37] to-[#06195c]"></div>

            <div className="space-y-2 relative z-10 pt-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#B8962E] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-block">
                {stt.accreditation}
              </span>
              <h3 className="font-extrabold text-base text-[#0c35a6] group-hover:text-[#06195c] transition-colors pt-1">{stt.name}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{stt.description}</p>
            </div>
            <a
              href={stt.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#0c35a6] hover:text-[#06195c] hover:underline inline-flex items-center text-left pt-2 relative z-10"
            >
              <span>Website Resmi STT</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
