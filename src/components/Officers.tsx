'use client';

import { useState } from 'react';
import { UserCheck, Network, FileText, X, Download } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function Officers() {
  const [organigramModalOpen, setOrganigramModalOpen] = useState(false);

  return (
    <section id="pengurus" className="py-24 bg-[#FAFCFF] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest">Kelembagaan BPP</span>
          <h2 className="text-3xl font-extrabold text-[#0c35a6]">Pengurus Pusat BPP GKII</h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Pimpinan eksekutif nasional Gereja Kemah Injil Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bppData.officers.map((off) => (
            <div
              key={off.id}
              className="bg-white rounded-2xl border border-slate-200 text-center p-6 hover:shadow-card transition-all"
            >
              <div className="w-20 h-20 rounded-2xl bg-[#F4F7FF] border border-[#0c35a6]/20 mx-auto mb-4 flex flex-col items-center justify-center text-[#0c35a6]">
                <UserCheck className="w-6 h-6 stroke-[1.5] mb-1" />
                <span className="text-[8px] font-bold uppercase text-[#B8962E]">{off.role}</span>
              </div>
              <h3 className="font-bold text-base text-[#0c35a6]">{off.name}</h3>
              <p className="text-xs font-semibold text-[#B8962E] uppercase mt-0.5">{off.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setOrganigramModalOpen(true)}
            className="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-slate-200 text-[#0c35a6] font-bold text-xs hover:border-[#D4AF37] transition-all"
          >
            <Network className="w-4 h-4 mr-2" />
            <span>Lihat Organigram Lengkap (PDF)</span>
          </button>
        </div>
      </div>

      {/* ORGANIGRAM MODAL */}
      {organigramModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative border border-slate-100">
            <button
              onClick={() => setOrganigramModalOpen(false)}
              aria-label="Tutup Modal"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-[#0c35a6] hover:text-white flex items-center justify-center transition-all"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0c35a6] flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold text-[#B8962E] uppercase tracking-wider">
              Bagan Struktur Organisasi
            </span>
            <h3 className="font-bold text-[#0c35a6] text-lg mt-1 mb-1">
              Bagan Organigram BPP GKII 2023-2028
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Bagan alur struktur kepemimpinan nasional dan departemen BPP GKII.
            </p>

            <div className="bg-slate-100 rounded-xl p-4 border border-slate-200 text-center space-y-2 mb-6">
              <Network className="w-10 h-10 text-[#0c35a6] mx-auto opacity-70" />
              <p className="text-xs font-semibold text-slate-700">Dokumen Struktur Terverifikasi BPP</p>
              <span className="inline-block text-[10px] bg-white px-3 py-1 rounded-full text-slate-500 border border-slate-200">
                Ukuran File: 2.8 MB
              </span>
            </div>

            <button
              onClick={() => setOrganigramModalOpen(false)}
              className="w-full py-3 rounded-xl bg-[#0c35a6] hover:bg-[#06195c] text-white font-bold text-xs transition-colors flex items-center justify-center space-x-2 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Unduh Berkas Organigram (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
