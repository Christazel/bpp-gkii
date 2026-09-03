'use client';

import { useState, useEffect } from 'react';
import { UserCheck, Network, FileText, X, Download } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function Officers() {
  const [organigramModalOpen, setOrganigramModalOpen] = useState(false);

  // Derive organigram file metadata from bpp-data.json (doc-4) — never hardcode file info
  const organigramDoc = bppData.documents.find((doc) => doc.id === 'doc-4');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOrganigramModalOpen(false);
      }
    };
    if (organigramModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [organigramModalOpen]);

  return (
    <section id="pengurus" className="py-24 bg-[#FAFCFF] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest">Kelembagaan BPP</span>
          <h2 className="text-3xl font-extrabold text-[#0c35a6]">Pengurus Pusat BPP GKII</h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Pimpinan Inti Eksekutif Nasional Badan Pengurus Pusat Gereja Kemah Injil Indonesia.
          </p>
        </div>

        {/* 3 Core Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {bppData.officers.map((off, idx) => (
            <div
              key={off.id}
              className="bg-white rounded-2xl border border-slate-200/90 text-center p-8 hover:border-[#0c35a6] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden transform hover:-translate-y-1"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0c35a6] via-[#D4AF37] to-[#06195c]"></div>

              {/* Watermark Number */}
              <span className="absolute -bottom-4 -right-2 text-7xl font-black text-slate-100 select-none pointer-events-none group-hover:text-amber-100/60 transition-colors">
                0{idx + 1}
              </span>

              <div className="relative z-10">
                {/* Avatar Icon Box with Gold Ring */}
                <div className="relative w-20 h-20 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#0c35a6] via-[#D4AF37] to-[#06195c] opacity-80 blur-xs group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-full h-full rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0c35a6] shadow-sm">
                    <UserCheck className="w-8 h-8 stroke-[1.75] text-[#0c35a6] group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <span className="text-[10px] font-black uppercase text-[#B8962E] tracking-wider px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 inline-block mb-3">
                  {off.role}
                </span>
                <h3 className="font-extrabold text-lg text-[#0c35a6] leading-snug group-hover:text-[#06195c] transition-colors">{off.name}</h3>
              </div>
              <p className="text-xs text-slate-500 mt-5 pt-4 border-t border-slate-100 leading-relaxed font-medium relative z-10">
                {off.description}
              </p>
            </div>
          ))}
        </div>

        {/* Organigram CTA Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setOrganigramModalOpen(true)}
            className="inline-flex items-center px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-[#0c35a6] font-bold text-xs hover:border-[#D4AF37] hover:bg-[#F4F7FF] transition-all shadow-sm cursor-pointer"
          >
            <Network className="w-4 h-4 mr-2 text-[#B8962E]" />
            <span>Lihat Organigram Lengkap (PDF)</span>
          </button>
        </div>
      </div>

      {/* ORGANIGRAM MODAL */}
      {organigramModalOpen && (
        <div
          onClick={() => setOrganigramModalOpen(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-pointer"
          role="presentation"
          aria-hidden="false"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200 cursor-default"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-organigram-title"
            aria-describedby="modal-organigram-desc"
          >
            <button
              type="button"
              onClick={() => setOrganigramModalOpen(false)}
              aria-label="Tutup Modal"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-[#0c35a6] hover:text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0c35a6] flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold text-[#B8962E] uppercase tracking-wider">
              Bagan Struktur Organisasi
            </span>
            <h3 id="modal-organigram-title" className="font-bold text-[#0c35a6] text-lg mt-1 mb-1">
              Bagan Organigram BPP GKII
            </h3>
            <p id="modal-organigram-desc" className="text-xs text-slate-500 leading-relaxed mb-4">
              Bagan alur struktur kepemimpinan nasional dan departemen BPP GKII resmi.
            </p>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center space-y-2 mb-6">
              <Network className="w-10 h-10 text-[#0c35a6] mx-auto opacity-80" />
              <p className="text-xs font-semibold text-slate-800">Dokumen Struktur Terverifikasi BPP</p>
              <span className="inline-block text-[10px] bg-white px-3 py-1 rounded-full text-slate-500 border border-slate-200 font-medium">
                Ukuran File: {organigramDoc?.fileSize ?? '—'} • Format: {organigramDoc?.format ?? 'PDF'}
              </span>
            </div>

            <a
              href={organigramDoc?.downloadUrl ?? '/pdf/Organigram_BPP_GKII.pdf'}
              download={organigramDoc?.downloadUrl?.split('/').pop() ?? 'Organigram_BPP_GKII.pdf'}
              onClick={() => setOrganigramModalOpen(false)}
              className="w-full py-3 rounded-xl bg-[#0c35a6] hover:bg-[#06195c] text-white font-bold text-xs transition-colors flex items-center justify-center space-x-2 shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Berkas Organigram (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

