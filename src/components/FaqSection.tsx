'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function FaqSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  // Open the first item by default for immediate discoverability
  const [openFaqId, setOpenFaqId] = useState<string | null>(bppData.faqs[0]?.id || null);

  const categories = [
    'Semua',
    ...Array.from(new Set(bppData.faqs.map((f) => f.category))),
  ];

  const getCategoryCount = (cat: string) => {
    if (cat === 'Semua') return bppData.faqs.length;
    return bppData.faqs.filter((f) => f.category === cat).length;
  };

  const filteredFaqs =
    selectedCategory === 'Semua'
      ? bppData.faqs
      : bppData.faqs.filter((f) => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-14 sm:py-16 bg-[#FAFCFF] border-b border-slate-200/70">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest inline-flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8962E]" /> Pusat Informasi & Regulasi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c35a6]">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Panduan keabsahan regulasi, tata kelola kelembagaan, registrasi jemaat lokal, dan layanan administrasi resmi BPP GKII.
          </p>
        </div>

        {/* Interactive Category Filter Pills */}
        <div
          className="flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Filter Kategori Pertanyaan"
        >
          {categories.map((cat) => {
            const count = getCategoryCount(cat);
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all duration-150 flex items-center space-x-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0c35a6] text-white shadow-sm shadow-[#0c35a6]/20 border border-[#0c35a6]'
                    : 'bg-white text-slate-600 hover:text-[#0c35a6] hover:bg-blue-50/60 border border-slate-200'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ List - Clean & Streamlined */}
        <div className="space-y-2.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#0c35a6] shadow-sm'
                    : 'border-slate-200/90 hover:border-slate-300'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                    className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0c35a6]/50"
                  >
                    <div className="space-y-1 pr-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8962E] bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50 inline-block">
                        {faq.category}
                      </span>
                      <p className={`font-bold text-xs sm:text-sm leading-snug transition-colors ${
                        isOpen ? 'text-[#0c35a6]' : 'text-slate-800 hover:text-[#0c35a6]'
                      }`}>
                        {faq.question}
                      </p>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${
                        isOpen
                          ? 'bg-[#0c35a6] text-white rotate-180'
                          : 'bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-[#0c35a6]'
                      }`}
                    >
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-4 sm:px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 font-medium animate-in fade-in duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
