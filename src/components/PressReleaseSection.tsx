'use client';

import { useState, useEffect } from 'react';
import { BookOpen, X } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

type PressRelease = (typeof bppData.pressReleases)[0];

export default function PressReleaseSection() {
  const [selectedArticle, setSelectedArticle] = useState<PressRelease | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedArticle(null);
    };
    if (selectedArticle) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedArticle]);

  return (
    <>
      <div id="siaran-pers" className="pt-8 border-t border-slate-200/70">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest">
            Publikasi Resmi
          </span>
          <h2 className="text-3xl font-extrabold text-[#0c35a6]">Pesan Pastoral &amp; Warta BPP</h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Klik kartu warta di bawah ini untuk membaca teks publikasi pesan pastoral secara utuh.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bppData.pressReleases.map((post) => (
            // div instead of article: <article> has implicit ARIA role 'article' which
            // conflicts with role="button". <div> has no implicit role, so role="button" is valid.
            <div
              key={post.id}
              role="button"
              tabIndex={0}
              aria-label={`Baca warta: ${post.title}`}
              onClick={() => setSelectedArticle(post)}
              onKeyDown={(e) => {
                // WCAG: activate on Enter or Space, same as native button behavior
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedArticle(post);
                }
              }}
              className="p-6 rounded-2xl bg-[#FAFCFF] border border-slate-200/90 space-y-3 group cursor-pointer hover:border-[#0c35a6] hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#0c35a6]/50 focus:border-[#0c35a6]"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0c35a6] via-[#D4AF37] to-[#06195c]"></div>

              <div className="space-y-2 relative z-10 pt-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#B8962E] bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-block">
                  {post.date} • {post.category}
                </span>
                <h3 className="font-extrabold text-base text-[#0c35a6] group-hover:text-[#06195c] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{post.summary}</p>
              </div>

              <div className="pt-3 border-t border-slate-200/70 text-[11px] font-bold text-[#0c35a6] group-hover:underline flex items-center justify-between relative z-10">
                <span className="flex items-center">
                  <BookOpen className="w-3.5 h-3.5 mr-1" /> Baca Selengkapnya
                </span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ARTICLE FULL READ MODAL */}
      {selectedArticle && (
        <div
          onClick={() => setSelectedArticle(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-pointer"
          role="presentation"
          aria-hidden="false"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative border border-slate-100 max-h-[85vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200 cursor-default"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-article-title"
            aria-describedby="modal-article-content"
          >
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              aria-label="Tutup Warta"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-[#0c35a6] hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              <span className="text-[10px] font-extrabold text-[#B8962E] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60 inline-block">
                {selectedArticle.date} • {selectedArticle.category}
              </span>

              <h2 id="modal-article-title" className="text-xl sm:text-2xl font-extrabold text-[#0c35a6] leading-tight">
                {selectedArticle.title}
              </h2>

              <div id="modal-article-content" className="p-4 bg-[#FAFCFF] rounded-xl border border-slate-200/80 text-xs text-slate-600 space-y-3 leading-relaxed whitespace-pre-line font-medium">
                {selectedArticle.content}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#0c35a6] hover:bg-[#06195c] text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Tutup Publikasi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
