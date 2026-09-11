import {
  FileDown,
  ClipboardCheck,
  ShieldCheck,
  Award,
  ArrowRight,
  Workflow,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import bppData from '@/data/bpp-data.json';

// Icon map corresponding to serviceSteps in bpp-data.json
const STEP_ICONS: Record<string, React.ReactNode> = {
  FileDown: <FileDown className="w-5 h-5" />,
  ClipboardCheck: <ClipboardCheck className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Award: <Award className="w-5 h-5" />,
};

export default function AdministrationProcess() {
  const steps = bppData.serviceSteps;

  return (
    <section id="alur-layanan" className="py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest inline-flex items-center justify-center gap-1.5">
            <Workflow className="w-3.5 h-3.5 text-[#B8962E]" /> Alur Pelayanan Administrasi
          </span>
          <h2 className="text-3xl font-extrabold text-[#0c35a6] tracking-tight sm:text-4xl">
            Mekanisme Pelayanan Berkas & Legalitas
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Standar alur operasional terpadu dari pengunduhan formulir resmi, verifikasi berjenjang wilayah BPW, kajian administratif pusat, hingga pengesahan SK registrasi definitif.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div
                key={item.step}
                className="group relative bg-[#FAFCFF] rounded-2xl border border-slate-200/90 hover:border-[#0c35a6]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0c35a6]/10 p-6 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0c35a6] via-[#D4AF37] to-[#06195c] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Step Header: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black text-[#0c35a6] tracking-tight group-hover:text-[#B8962E] transition-colors">
                        {item.step}
                      </span>
                      <span className="h-4 w-px bg-slate-200" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Tahap {index + 1}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-center text-[#0c35a6] group-hover:bg-[#0c35a6] group-hover:text-white transition-colors duration-300">
                      {STEP_ICONS[item.icon] || <Sparkles className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* Subtitle Badge */}
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider text-[#B8962E] bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/60">
                    {item.subtitle}
                  </span>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-base text-slate-800 group-hover:text-[#0c35a6] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={item.actionHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c35a6] hover:text-[#06195c] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>{item.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                  </a>

                  {!isLast && (
                    <span className="hidden lg:block text-[10px] font-semibold text-slate-300 uppercase tracking-widest">
                      Lanjut &rarr;
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Governance & Integrity Assurance Strip */}
        <div className="bg-[#06195c] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden border border-[#D4AF37]/30 shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0c35a6]/40 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Info */}
            <div className="lg:col-span-8 space-y-2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#D4AF37]">
                <ShieldAlert className="w-4 h-4" />
                <span className="text-xs font-extrabold uppercase tracking-wider">
                  Komitmen Integritas Administrasi Gerejawi
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Transparansi Penuh, Standar Tertib & Bebas Pungutan Liar
              </h3>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Seluruh pelayanan legalitas, formulir pendataan, dan pengesahan SK di lingkungan BPP GKII dilaksanakan secara berjenjang sesuai amanat TGTRT tanpa biaya perantara tidak resmi.
              </p>

              {/* 3 Key Pillars */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Berkas Sah & Tervalidasi
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Registrasi Terpusat di Jakarta
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Pendampingan Wilayah BPW
                </span>
              </div>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href={`https://wa.me/${bppData.legalities.whatsapp.number}?text=${encodeURIComponent('Halo Sekretariat BPP GKII, saya ingin mengonfirmasi alur pengurusan berkas administrasi gerejawi.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs shadow-lg transition-all hover:scale-105 shrink-0 cursor-pointer"
              >
                <span>Konfirmasi Berkas via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
