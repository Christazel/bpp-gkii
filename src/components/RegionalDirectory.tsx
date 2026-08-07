'use client';

import { useState } from 'react';
import { MapPin, Phone, Building2, UserCheck, ChevronDown } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function RegionalDirectory() {
  const [selectedId, setSelectedId] = useState<string>(bppData.regions[0]?.id || '');

  const selectedRegion = bppData.regions.find((r) => r.id === selectedId) || bppData.regions[0];

  return (
    <section id="wilayah" className="py-12 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAFCFF] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Column: Title & Dropdown Selector (4 Cols) */}
            <div className="lg:col-span-4 space-y-3 pr-0 lg:pr-4 lg:border-r border-slate-200/80">
              <span className="text-[#B8962E] font-bold text-[10px] uppercase tracking-widest block">
                Pemetaan Kerja
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0c35a6]">
                Direktori 13 Wilayah BPW
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                Pilih wilayah untuk melihat rincian Sekretariat & Pengurus.
              </p>

              <div className="relative pt-1">
                <select
                  value={selectedId}
                  onChange={(e) => setSelectedId(e.target.value)}
                  aria-label="Pilih Wilayah BPW"
                  className="w-full pl-4 pr-10 py-2.5 text-xs font-bold text-[#0c35a6] bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-[#0c35a6] focus:ring-2 focus:ring-[#0c35a6]/10 appearance-none transition-all cursor-pointer shadow-sm"
                >
                  {bppData.regions.map((reg) => (
                    <option key={reg.id} value={reg.id} className="py-1 text-slate-800 font-medium">
                      {reg.code} - {reg.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-4 pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Compact Details Strip (8 Cols) */}
            {selectedRegion && (
              <div className="lg:col-span-8 space-y-4 animate-in fade-in duration-150">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200/70">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-black text-[#B8962E] bg-amber-50 border border-amber-200/60 px-2.5 py-0.5 rounded-full uppercase">
                      {selectedRegion.code}
                    </span>
                    <h3 className="font-bold text-base text-[#0c35a6]">
                      {selectedRegion.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-[#0c35a6] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
                    {selectedRegion.churchesCount}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
                  <div className="flex items-start space-x-2 bg-white p-3 rounded-xl border border-slate-200/70">
                    <UserCheck className="w-4 h-4 text-[#0c35a6] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="font-bold text-slate-900 block text-[11px]">Ketua BPW</span>
                      <span className="text-slate-600 font-medium truncate block">{selectedRegion.leader}</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 bg-white p-3 rounded-xl border border-slate-200/70">
                    <MapPin className="w-4 h-4 text-[#0c35a6] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="font-bold text-slate-900 block text-[11px]">Sekretariat</span>
                      <span className="text-slate-600 font-medium truncate block" title={selectedRegion.address}>
                        {selectedRegion.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 bg-white p-3 rounded-xl border border-slate-200/70">
                    <Phone className="w-4 h-4 text-[#0c35a6] shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <span className="font-bold text-slate-900 block text-[11px]">Kontak</span>
                      <span className="text-slate-600 font-medium truncate block">{selectedRegion.contact}</span>
                    </div>
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
