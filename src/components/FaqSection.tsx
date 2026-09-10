'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, FileQuestion } from 'lucide-react';
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
    <section id="faq" className="py-24 bg-[#FAFCFF] border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest inline-flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8962E]" /> Pusat Informasi & Regulasi
          </span>
          <h2 className="text-3xl font-extrabold text-[#0c35a6]">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
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
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center space-x-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0c35a6] text-white shadow-md shadow-[#0c35a6]/25 border border-[#0c35a6]'
                    : 'bg-white text-slate-600 hover:text-[#0c35a6] hover:bg-blue-50/70 border border-slate-200 hover:border-[#0c35a6]/30'
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

        {/* Accordion FAQ List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden relative ${
                  isOpen
                    ? 'border-[#0c35a6] shadow-md shadow-[#0c35a6]/10'
                    : 'border-slate-200/90 hover:border-[#0c35a6]/40 shadow-2xs'
                }`}
              >
                {/* Top Accent Line on Active Item */}
                {isOpen && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0c35a6] via-[#D4AF37] to-[#06195c]" />
                )}

                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    id={`faq-question-${faq.id}`}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0c35a6]/50"
                  >
                    <div className="space-y-1.5 pr-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#B8962E] bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200/60 inline-block">
                        {faq.category}
                      </span>
                      <p className={`font-bold text-sm sm:text-base leading-snug transition-colors ${
                        isOpen ? 'text-[#0c35a6]' : 'text-slate-800 hover:text-[#0c35a6]'
                      }`}>
                        {faq.question}
                      </p>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5 ${
                        isOpen
                          ? 'bg-[#0c35a6] text-white rotate-180'
                          : 'bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-[#0c35a6]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-medium animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Help Card (Inspired by JelajahKode Consultation Box) */}
        <div className="bg-[#06195c] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden border border-[#D4AF37]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#0c35a6]/40 blur-3xl rounded-full pointer-events-none" />
          
          <div className="space-y-1.5 text-center sm:text-left relative z-10">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#D4AF37]">
              <FileQuestion className="w-4 h-4" />
              <span className="text-xs font-extrabold uppercase tracking-wider">Pusat Konsultasi Resmi</span>
            </div>
            <h3 className="font-extrabold text-lg sm:text-xl text-white">
              Belum menemukan jawaban yang Anda cari?
            </h3>
            <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
              Sekretariat Jenderal BPP GKII siap melayani konfirmasi berkas gereja lokal, legalitas pendeta, dan koordinasi wilayah.
            </p>
          </div>

          <a
            href={`https://wa.me/${bppData.legalities.whatsapp.number}?text=${encodeURIComponent('Halo Sekretariat BPP GKII, saya memiliki pertanyaan seputar kelembagaan yang belum tercantum di FAQ portal.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs shadow-lg transition-all hover:scale-105 shrink-0 relative z-10 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tanya Sekretariat BPP</span>
          </a>
        </div>
      </div>
    </section>
  );
}
