'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DocumentCenter from '@/components/DocumentCenter';
import Officers from '@/components/Officers';
import RegionalDirectory from '@/components/RegionalDirectory';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { BookOpen, X, ExternalLink } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function Home() {
  const [selectedArticle, setSelectedArticle] = useState<(typeof bppData.pressReleases)[0] | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedArticle(null);
      }
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
    <div className="bg-[#FAFCFF] text-slate-900 font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#0c35a6]">
      <Navbar />
      <main>
        <Hero />
        <DocumentCenter />
        <Officers />
        <RegionalDirectory />

        {/* 5. STT AFFILIASI & PESAN PASTORAL */}
        <section id="stt" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* STT Section */}
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
                    className="bg-[#FAFCFF] rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-md transition-all"
                  >
                    <div className="space-y-2">
                      <span className="px-3 py-1 rounded-full bg-[#F4F7FF] text-[#0c35a6] font-bold text-[10px]">
                        {stt.accreditation}
                      </span>
                      <h3 className="font-bold text-base text-[#0c35a6] pt-1">{stt.name}</h3>
                      <p className="text-xs text-slate-500">{stt.description}</p>
                    </div>
                    <a
                      href={stt.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#0c35a6] hover:text-[#06195c] hover:underline inline-flex items-center text-left pt-2"
                    >
                      <span>Website Resmi STT</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Pesan Pastoral Section */}
            <div id="siaran-pers" className="pt-8 border-t border-slate-200/70">
              <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest">
                  Publikasi Resmi
                </span>
                <h2 className="text-3xl font-extrabold text-[#0c35a6]">Pesan Pastoral & Warta BPP</h2>
                <p className="text-slate-500 text-xs sm:text-sm">
                  Klik kartu warta di bawah ini untuk membaca teks publikasi pesan pastoral secara utuh.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {bppData.pressReleases.map((post) => (
                  <article
                    key={post.id}
                    onClick={() => setSelectedArticle(post)}
                    className="p-6 rounded-2xl bg-[#FAFCFF] border border-slate-200 space-y-3 group cursor-pointer hover:border-[#0c35a6] hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] font-extrabold text-[#B8962E] uppercase tracking-wider">
                        {post.date} • {post.category}
                      </span>
                      <h3 className="font-bold text-base text-[#0c35a6] group-hover:text-[#06195c] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{post.summary}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/70 text-[11px] font-bold text-[#0c35a6] group-hover:underline flex items-center justify-between">
                      <span className="flex items-center">
                        <BookOpen className="w-3.5 h-3.5 mr-1" /> Baca Selengkapnya
                      </span>
                      <span>→</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

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

      <Footer />
      <ScrollToTop />
    </div>
  );
}
