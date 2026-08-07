'use client';

import { useState } from 'react';
import { FileText, Eye, Download, X, FileCheck2, CheckCircle2 } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function DocumentCenter() {
  const [modalData, setModalData] = useState<{
    title: string;
    size: string;
    desc: string;
  } | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 3000);
  };

  return (
    <section id="dokumen" className="py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest">Dokumen Resmi</span>
          <h2 className="text-3xl font-extrabold text-[#0c35a6]">Pusat Unduh Dokumen BPP</h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Klik &quot;Preview PDF&quot; untuk membaca berkas atau &quot;Unduh&quot; untuk menyimpan file.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bppData.documents.map((doc) => (
            <div
              key={doc.id}
              className="p-7 rounded-2xl bg-[#FAFCFF] border border-slate-200 space-y-4 hover:border-[#0c35a6] hover:shadow-card transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xs ${
                  doc.format === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-[#0c35a6]'
                }`}
              >
                {doc.format}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-[#B8962E]">{doc.category}</span>
                <h3 className="font-bold text-base text-[#0c35a6]">{doc.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{doc.description}</p>
              </div>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Ukuran: {doc.fileSize}</span>
                <button
                  onClick={() =>
                    setModalData({
                      title: doc.title,
                      size: doc.fileSize,
                      desc: doc.description,
                    })
                  }
                  className="text-xs font-bold text-[#0c35a6] hover:underline flex items-center"
                >
                  <Eye className="w-3.5 h-3.5 mr-1" /> Preview PDF
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF PREVIEW MODAL */}
      {modalData && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative border border-slate-100">
            <button
              onClick={() => setModalData(null)}
              aria-label="Tutup Preview"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-[#0c35a6] hover:text-white flex items-center justify-center transition-all"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-extrabold text-[#B8962E] uppercase tracking-wider">
              Preview Dokumen Resmi BPP
            </span>
            <h3 className="font-bold text-[#0c35a6] text-lg mt-1 mb-1">{modalData.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">{modalData.desc}</p>

            <div className="bg-slate-100 rounded-xl p-4 border border-slate-200 text-center space-y-2 mb-6">
              <FileCheck2 className="w-10 h-10 text-[#0c35a6] mx-auto opacity-70" />
              <p className="text-xs font-semibold text-slate-700">Dokumen Terverifikasi Digital BPP GKII</p>
              <span className="inline-block text-[10px] bg-white px-3 py-1 rounded-full text-slate-500 border border-slate-200">
                Ukuran File: {modalData.size}
              </span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setModalData(null);
                  triggerToast('Memulai unduhan dokumen...');
                }}
                className="w-full py-3 rounded-xl bg-[#0c35a6] hover:bg-[#06195c] text-white font-bold text-xs transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>Unduh Berkas PDF Lengkap</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION CONTAINER */}
      {toastMsg && (
        <div className="fixed bottom-6 left-6 z-50 transition-all duration-300">
          <div className="bg-[#06195c] text-white text-xs font-bold px-4 py-3 rounded-xl shadow-2xl border border-[#D4AF37]/30 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>{toastMsg}</span>
          </div>
        </div>
      )}
    </section>
  );
}
