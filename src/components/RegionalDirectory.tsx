'use client';

import { useState } from 'react';
import { MapPin, Phone, Building2, UserCheck, X } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function RegionalDirectory() {
  const [activeRegion, setActiveRegion] = useState('all');
  const [selectedBPW, setSelectedBPW] = useState<(typeof bppData.regions)[0] | null>(null);

  const filteredRegions =
    activeRegion === 'all'
      ? bppData.regions
      : bppData.regions.filter((r) => r.group === activeRegion);

  return (
    <section id="wilayah" className="py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest">Pemetaan Kerja</span>
          <h2 className="text-3xl font-extrabold text-[#0c35a6]">Direktori 13 Wilayah BPW</h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Klik kartu wilayah di bawah ini untuk melihat detail Sekretariat & Jumlah Gereja Lokal.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveRegion('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeRegion === 'all'
                ? 'bg-[#0c35a6] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Semua Wilayah
          </button>
          <button
            onClick={() => setActiveRegion('papua')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeRegion === 'papua'
                ? 'bg-[#0c35a6] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Papua
          </button>
          <button
            onClick={() => setActiveRegion('kalimantan')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeRegion === 'kalimantan'
                ? 'bg-[#0c35a6] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Kalimantan
          </button>
          <button
            onClick={() => setActiveRegion('sulawesi')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeRegion === 'sulawesi'
                ? 'bg-[#0c35a6] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Sulawesi & NTT
          </button>
          <button
            onClick={() => setActiveRegion('jawa')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeRegion === 'jawa'
                ? 'bg-[#0c35a6] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Jawa, Sumatera & Banten
          </button>
        </div>

        {/* Grid BPW Region Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredRegions.map((reg) => (
            <div
              key={reg.id}
              onClick={() => setSelectedBPW(reg)}
              className="p-5 rounded-2xl bg-[#FAFCFF] border border-slate-200 hover:border-[#0c35a6] hover:shadow-card transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-[#B8962E] uppercase">{reg.code}</span>
                  <span className="text-[10px] font-semibold text-[#0c35a6] bg-blue-50 px-2 py-0.5 rounded-md">
                    {reg.churchesCount}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-[#0c35a6] mt-2 group-hover:text-[#06195c]">
                  {reg.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1">Ketua: {reg.leader}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/70 text-[11px] font-bold text-[#0c35a6] group-hover:underline flex items-center justify-between">
                <span>Detail Sekretariat</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BPW DETAIL MODAL */}
      {selectedBPW && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedBPW(null)}
              aria-label="Tutup Detail"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-[#0c35a6] hover:text-white flex items-center justify-center transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[10px] font-extrabold text-[#B8962E] uppercase tracking-wider">
              {selectedBPW.code} • Badan Pengurus Wilayah
            </span>
            <h3 className="font-extrabold text-[#0c35a6] text-xl mt-1 mb-4">{selectedBPW.title}</h3>

            <div className="space-y-3 bg-[#FAFCFF] p-4 rounded-xl border border-slate-200/80 mb-6 text-xs text-slate-700">
              <div className="flex items-start space-x-2.5">
                <UserCheck className="w-4 h-4 text-[#0c35a6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Ketua BPW Wilayah</span>
                  <span>{selectedBPW.leader}</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Building2 className="w-4 h-4 text-[#0c35a6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Jumlah Jemaat / Gereja Lokal</span>
                  <span>{selectedBPW.churchesCount}</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#0c35a6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Sekretariat Wilayah</span>
                  <span>{selectedBPW.address}</span>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-[#0c35a6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block">Kontak Koordinasi</span>
                  <span>{selectedBPW.contact}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedBPW(null)}
              className="w-full py-2.5 rounded-xl bg-[#0c35a6] hover:bg-[#06195c] text-white font-bold text-xs transition-colors"
            >
              Tutup Detail Wilayah
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
