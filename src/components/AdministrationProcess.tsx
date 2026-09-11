import {
  FileDown,
  ClipboardCheck,
  ShieldCheck,
  Award,
  ArrowRight,
  Workflow,
  Sparkles,
} from 'lucide-react';
import bppData from '@/data/bpp-data.json';

// Icon map corresponding to serviceSteps in bpp-data.json
const STEP_ICONS: Record<string, React.ReactNode> = {
  FileDown: <FileDown className="w-4 h-4" />,
  ClipboardCheck: <ClipboardCheck className="w-4 h-4" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4" />,
  Award: <Award className="w-4 h-4" />,
};

export default function AdministrationProcess() {
  const steps = bppData.serviceSteps;

  return (
    <section id="alur-layanan" className="py-14 sm:py-16 bg-[#FAFCFF] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest inline-flex items-center justify-center gap-1.5">
            <Workflow className="w-3.5 h-3.5 text-[#B8962E]" /> Alur Pelayanan Administrasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c35a6] tracking-tight">
            Mekanisme Pelayanan Berkas & Legalitas
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            Standar operasional terpadu dari pengunduhan formulir, rekomendasi BPW, verifikasi pusat, hingga pengesahan SK resmi.
          </p>
        </div>

        {/* 4-Step Process Grid - Clean & Minimalist */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {steps.map((item, index) => {
            const isLast = index === steps.length - 1;
            return (
              <div
                key={item.step}
                className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-[#0c35a6]/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg p-5 flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  {/* Step Header: Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-[#0c35a6] tracking-tight group-hover:text-[#B8962E] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0c35a6] group-hover:bg-[#0c35a6] group-hover:text-white transition-colors">
                      {STEP_ICONS[item.icon] || <Sparkles className="w-4 h-4" />}
                    </div>
                  </div>

                  {/* Subtitle Badge */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#B8962E] bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                    {item.subtitle}
                  </span>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-sm text-slate-800 group-hover:text-[#0c35a6] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={item.actionHref}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0c35a6] hover:text-[#06195c] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>{item.actionLabel}</span>
                    <ArrowRight className="w-3 h-3 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  {!isLast && (
                    <span className="hidden lg:block text-[10px] font-bold text-slate-300">
                      &rarr;
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
