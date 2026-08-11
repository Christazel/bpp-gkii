'use client';

import { useState, useEffect } from 'react';
import { FileText, Eye, Download, X, FileCheck2, CheckCircle2, Search, Share2, Printer } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function DocumentCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalData, setModalData] = useState<{
    title: string;
    size: string;
    desc: string;
    downloadUrl: string;
    format: string;
  } | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalData(null);
      }
    };
    if (modalData) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalData]);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 3000);
  };

  const handleShare = async (title: string, desc: string) => {
    const shareUrl = window.location.href.split('#')[0] + '#dokumen';
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} | BPP GKII`,
          text: desc,
          url: shareUrl,
        });
      } catch {
        // Ignored share cancellation
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${title} - ${shareUrl}`);
        triggerToast('Tautan dokumen berhasil disalin ke papan klip!');
      } catch {
        triggerToast('Gagal menyalin tautan dokumen');
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredDocs = bppData.documents.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="dokumen" className="py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest">Dokumen Resmi</span>
          <h2 className="text-3xl font-extrabold text-[#0c35a6]">Pusat Unduh Dokumen BPP</h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Akses publik resmi untuk Tata Gereja, Surat Edaran, Formulir Pendataan, dan Organigram Kelembagaan.
          </p>
        </div>

        {/* Search Bar & Filter */}
        <div className="max-w-xl mx-auto relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kata kunci dokumen (misal: TGTRT, Surat Edaran, Form)..."
              className="w-full pl-11 pr-4 py-3 text-xs bg-[#FAFCFF] border border-slate-200 rounded-2xl focus:outline-none focus:border-[#0c35a6] focus:ring-2 focus:ring-[#0c35a6]/10 transition-all text-slate-800 placeholder-slate-400 font-medium"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Document Grid Cards */}
        {filteredDocs.length === 0 ? (
          <div className="text-center py-12 bg-[#FAFCFF] rounded-2xl border border-dashed border-slate-300">
            <p className="text-xs text-slate-500 font-semibold">Tidak ada dokumen yang sesuai dengan kata kunci &ldquo;{searchQuery}&rdquo;.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-bold text-[#0c35a6] hover:underline"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-4 hover:border-[#0c35a6] hover:shadow-xl transition-all duration-300 group relative overflow-hidden transform hover:-translate-y-1"
              >
                {/* Top Gold Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0c35a6] via-[#D4AF37] to-[#06195c]"></div>

                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-lg font-black text-[10px] tracking-wider uppercase ${
                        doc.format === 'PDF'
                          ? 'bg-red-50 text-red-600 border border-red-200/60'
                          : 'bg-blue-50 text-[#0c35a6] border border-blue-200/60'
                      }`}
                    >
                      {doc.format}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100/80 px-2 py-0.5 rounded-md">{doc.fileSize}</span>
                  </div>
                  <div className="space-y-1 pt-1">
                    <span className="text-[9px] font-extrabold uppercase text-[#B8962E] tracking-wider">
                      {doc.category}
                    </span>
                    <h3 className="font-extrabold text-base text-[#0c35a6] leading-snug group-hover:text-[#06195c] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed pt-1">{doc.description}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 relative z-10">
                  <button
                    onClick={() =>
                      setModalData({
                        title: doc.title,
                        size: doc.fileSize,
                        desc: doc.description,
                        downloadUrl: doc.downloadUrl,
                        format: doc.format,
                      })
                    }
                    className="flex-1 py-2 px-2.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-[#0c35a6] hover:text-[#0c35a6] rounded-xl transition-all flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>Preview</span>
                  </button>

                  <button
                    onClick={() => handleShare(doc.title, doc.description)}
                    aria-label={`Bagikan ${doc.title}`}
                    className="p-2 text-xs font-semibold text-slate-600 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:text-[#0c35a6] hover:border-[#0c35a6] rounded-xl transition-all flex items-center justify-center cursor-pointer"
                    title="Bagikan Tautan Dokumen"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={doc.downloadUrl}
                    download={doc.downloadUrl.split('/').pop()}
                    onClick={() => triggerToast(`Memulai unduhan ${doc.title}...`)}
                    className="flex-1 py-2 px-2.5 text-xs font-bold text-white bg-[#0c35a6] hover:bg-[#06195c] rounded-xl transition-all flex items-center justify-center space-x-1 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* PDF PREVIEW MODAL */}
      {modalData && (
        <div
          onClick={() => setModalData(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-pointer"
          role="presentation"
          aria-hidden="false"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200 cursor-default"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-doc-title"
          >
            <button
              onClick={() => setModalData(null)}
              aria-label="Tutup Preview"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-[#0c35a6] hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold text-[#B8962E] uppercase tracking-wider">
              Preview Dokumen Resmi BPP
            </span>
            <h3 id="modal-doc-title" className="font-bold text-[#0c35a6] text-lg mt-1 mb-1">{modalData.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">{modalData.desc}</p>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center space-y-2 mb-6">
              <FileCheck2 className="w-10 h-10 text-[#0c35a6] mx-auto opacity-80" />
              <p className="text-xs font-semibold text-slate-800">Dokumen Terverifikasi Digital BPP GKII</p>
              <span className="inline-block text-[10px] bg-white px-3 py-1 rounded-full text-slate-500 border border-slate-200 font-medium">
                Ukuran File: {modalData.size} • Format: {modalData.format}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                onClick={handlePrint}
                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Printer className="w-4 h-4 text-slate-600" />
                <span>Cetak Dokumen</span>
              </button>

              <button
                onClick={() => handleShare(modalData.title, modalData.desc)}
                className="flex-1 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#B8962E] border border-amber-200/80 font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Bagikan Tautan</span>
              </button>

              <a
                href={modalData.downloadUrl}
                download={modalData.downloadUrl.split('/').pop()}
                onClick={() => {
                  setModalData(null);
                  triggerToast(`Memulai unduhan berkas ${modalData.format}...`);
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#0c35a6] hover:bg-[#06195c] text-white font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Berkas</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION CONTAINER */}
      {toastMsg && (
        <div className="fixed bottom-6 left-6 z-[70] transition-all duration-300" role="alert" aria-live="polite">
          <div className="bg-[#06195c] text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl border border-[#D4AF37]/30 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>{toastMsg}</span>
          </div>
        </div>
      )}
    </section>
  );
}
