'use client';

import { useState } from 'react';
import { MapPin, Phone, Building2, UserCheck, Search, ChevronDown } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function RegionalDirectory() {
  const [selectedId, setSelectedId] = useState<string>(bppData.regions[0]?.id || '');

  const selectedRegion = bppData.regions.find((r) => r.id === selectedId) || bppData.regions[0];

  return (
    <section id="wilayah" className="py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest">Pemetaan Kerja</span>
          <h2 className="text-3xl font-extrabold text-[#0c35a6]">Direktori 13 Wilayah BPW</h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Pilih wilayah BPW di bawah ini untuk menampilkan informasi detail Sekretariat & Pengurus.
          </p>
        </div>

        {/* Clean Dropdown / Search Selector */}
        <div className="max-w-xl mx-auto relative">
          <label htmlFor="bpw-select" className="block text-xs font-bold text-slate-700 mb-2">
            Pilih Wilayah Kerja BPW:
          </label>
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-[#0c35a6] absolute left-4 pointer-events-none" />
            <select
              id="bpw-select"
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 text-xs font-bold text-[#0c35a6] bg-[#FAFCFF] border border-slate-300 rounded-2xl focus:outline-none focus:border-[#0c35a6] focus:ring-2 focus:ring-[#0c35a6]/10 appearance-none transition-all shadow-sm cursor-pointer"
            >
              {bppData.regions.map((reg) => (
                <option key={reg.id} value={reg.id} className="py-2 text-slate-800 font-medium">
                  {reg.code} - {reg.title}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-500 absolute right-4 pointer-events-none" />
          </div>
        </div>

        {/* Single Executive Card for Selected Region */}
        {selectedRegion && (
          <div className="bg-[#FAFCFF] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm transition-all animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200/80 gap-3">
              <div>
                <span className="text-[10px] font-black text-[#B8962E] uppercase tracking-wider bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full inline-block">
                  {selectedRegion.code} • Badan Pengurus Wilayah
                </span>
                <h3 className="font-extrabold text-xl sm:text-2xl text-[#0c35a6] mt-2">
                  {selectedRegion.title}
                </h3>
              </div>
              <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl text-center self-start sm:self-auto">
                <span className="text-[10px] font-semibold text-[#0c35a6] uppercase block">Gereja Terdaftar</span>
                <span className="text-sm font-extrabold text-[#0c35a6]">{selectedRegion.churchesCount}</span>
              </div>
            </div>

            {/* Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 text-xs text-slate-700">
              <div className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-200/70">
                <UserCheck className="w-5 h-5 text-[#0c35a6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Ketua BPW Wilayah</span>
                  <span className="text-slate-600 font-medium">{selectedRegion.leader}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-200/70">
                <MapPin className="w-5 h-5 text-[#0c35a6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Sekretariat Wilayah</span>
                  <span className="text-slate-600 font-medium leading-relaxed">{selectedRegion.address}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-200/70">
                <Phone className="w-5 h-5 text-[#0c35a6] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Kontak Koordinasi</span>
                  <span className="text-slate-600 font-medium">{selectedRegion.contact}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
