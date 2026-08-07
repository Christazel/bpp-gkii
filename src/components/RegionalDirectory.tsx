'use client';

import { useState } from 'react';
import bppData from '@/data/bpp-data.json';

export default function RegionalDirectory() {
  const [activeRegion, setActiveRegion] = useState('all');

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
          <p className="text-slate-500 text-xs sm:text-sm">Filter wilayah kerja berdasarkan pulau di bawah ini.</p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveRegion('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeRegion === 'all'
                ? 'bg-[#0c35a6] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Semua Wilayah
          </button>
          <button
            onClick={() => setActiveRegion('papua')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeRegion === 'papua'
                ? 'bg-[#0c35a6] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Papua
          </button>
          <button
            onClick={() => setActiveRegion('kalimantan')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeRegion === 'kalimantan'
                ? 'bg-[#0c35a6] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Kalimantan
          </button>
          <button
            onClick={() => setActiveRegion('sulawesi')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeRegion === 'sulawesi'
                ? 'bg-[#0c35a6] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Sulawesi
          </button>
          <button
            onClick={() => setActiveRegion('jawa')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeRegion === 'jawa'
                ? 'bg-[#0c35a6] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Jawa & Sumatera
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {filteredRegions.map((reg) => (
            <div
              key={reg.id}
              className="p-5 rounded-2xl bg-[#FAFCFF] border border-slate-200 hover:border-[#D4AF37] transition-colors"
            >
              <span className="text-[10px] font-extrabold text-[#B8962E] uppercase">{reg.code}</span>
              <h3 className="font-bold text-sm text-[#0c35a6] mt-1">{reg.title}</h3>
              <p className="text-[11px] text-slate-500 mt-1">Ketua: {reg.leader}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
