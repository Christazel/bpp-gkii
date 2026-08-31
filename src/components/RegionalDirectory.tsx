'use client';

import { useState } from 'react';
import { MapPin, Phone, UserCheck, ChevronDown, Compass } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function RegionalDirectory() {
  const [selectedId, setSelectedId] = useState<string>(bppData.regions[0]?.id || '');

  const selectedRegion = bppData.regions.find((r) => r.id === selectedId) || bppData.regions[0];

  return (
    <section id="wilayah" className="py-16 bg-[#FAFCFF] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50/80 via-amber-50/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Header & Dropdown Selector (4 Cols) */}
            <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-6 lg:border-r border-slate-200/80">
              <div className="space-y-1">
                <span className="text-[#B8962E] font-extrabold text-[10px] uppercase tracking-widest flex items-center">
                  <Compass className="w-3.5 h-3.5 mr-1.5 text-[#B8962E]" /> Pemetaan Kerja Wilayah
                </span>
                <h2 className="text-2xl font-extrabold text-[#0c35a6]">
                  Direktori 13 Wilayah BPW
                </h2>
                <p className="text-slate-500 text-xs leading-relaxed pt-1">
                  Pilih atau klik wilayah di bawah ini untuk melihat rincian Sekretariat & Ketua BPW.
                </p>
              </div>

              {/* Dropdown Selector */}
              <div className="relative pt-1">
                <select
                  value={selectedId}
                  onChange={(e) => setSelectedId(e.target.value)}
                  aria-label="Pilih Wilayah BPW"
                  className="w-full pl-4 pr-10 py-3 text-xs font-bold text-[#0c35a6] bg-[#FAFCFF] border border-slate-300 rounded-xl focus:outline-none focus:border-[#0c35a6] focus:ring-2 focus:ring-[#0c35a6]/10 appearance-none transition-all cursor-pointer shadow-sm"
                >
                  {bppData.regions.map((reg) => (
                    <option key={reg.id} value={reg.id} className="py-1 text-slate-800 font-medium">
                      {reg.code} - {reg.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-[18px] pointer-events-none" />
              </div>

              {/* Quick Select Region Badges/Pills */}
              <div className="pt-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Pilih Cepat:</span>
                <div className="flex flex-wrap gap-1.5">
                  {bppData.regions.map((reg) => (
                    <button
                      key={reg.id}
                      onClick={() => setSelectedId(reg.id)}
                      className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all ${
                        reg.id === selectedId
                          ? 'bg-[#0c35a6] text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {reg.code}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Premium Region Details (8 Cols) */}
            {selectedRegion && (
              <div key={selectedId} className="lg:col-span-8 space-y-6 animate-in fade-in duration-200">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-black text-[#B8962E] bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg uppercase tracking-wider shadow-2xs">
                      {selectedRegion.code}
                    </span>
                    <h3 className="font-extrabold text-xl text-[#0c35a6]">
                      {selectedRegion.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-[#0c35a6] bg-blue-50/80 px-3.5 py-1.5 rounded-xl border border-blue-100/80 shadow-2xs">
                    {selectedRegion.churchesCount}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#FAFCFF] p-4 rounded-2xl border border-slate-200/80 space-y-1 hover:border-[#0c35a6]/40 transition-colors shadow-2xs">
                    <div className="flex items-center space-x-2 text-[#0c35a6] mb-2">
                      <div className="p-1.5 rounded-lg bg-blue-50">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-900 text-xs">Ketua BPW</span>
                    </div>
                    <p className="text-xs text-slate-700 font-semibold truncate" title={selectedRegion.leader}>
                      {selectedRegion.leader}
                    </p>
                  </div>

                  <div className="bg-[#FAFCFF] p-4 rounded-2xl border border-slate-200/80 space-y-1 hover:border-[#0c35a6]/40 transition-colors shadow-2xs">
                    <div className="flex items-center space-x-2 text-[#0c35a6] mb-2">
                      <div className="p-1.5 rounded-lg bg-blue-50">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-900 text-xs">Sekretariat</span>
                    </div>
                    <p className="text-xs text-slate-700 font-semibold truncate" title={selectedRegion.address}>
                      {selectedRegion.address}
                    </p>
                  </div>

                  <div className="bg-[#FAFCFF] p-4 rounded-2xl border border-slate-200/80 space-y-1 hover:border-[#0c35a6]/40 transition-colors shadow-2xs">
                    <div className="flex items-center space-x-2 text-[#0c35a6] mb-2">
                      <div className="p-1.5 rounded-lg bg-blue-50">
                        <Phone className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-slate-900 text-xs">Kontak Resmi</span>
                    </div>
                    <p className="text-xs text-slate-700 font-semibold truncate" title={selectedRegion.contact}>
                      {selectedRegion.contact}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

