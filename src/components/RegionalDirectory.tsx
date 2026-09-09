'use client';

import { useState } from 'react';
import { MapPin, Phone, UserCheck, ChevronDown, Compass, Map } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function RegionalDirectory() {
  const [selectedIsland, setSelectedIsland] = useState<string>('Semua');
  const [selectedId, setSelectedId] = useState<string>(bppData.regions[0]?.id || '');

  // Extract unique island groups preserving original order
  const islandGroups = ['Semua', ...Array.from(new Set(bppData.regions.map((r) => r.island).filter(Boolean)))];

  const getIslandCount = (island: string) => {
    if (island === 'Semua') return bppData.regions.length;
    return bppData.regions.filter((r) => r.island === island).length;
  };

  const displayedRegions = selectedIsland === 'Semua'
    ? bppData.regions
    : bppData.regions.filter((r) => r.island === selectedIsland);

  const selectedRegion =
    bppData.regions.find((r) => r.id === selectedId) || displayedRegions[0] || bppData.regions[0];

  const handleSelectIsland = (island: string) => {
    setSelectedIsland(island);
    if (island !== 'Semua') {
      const regionsInIsland = bppData.regions.filter((r) => r.island === island);
      if (regionsInIsland.length > 0 && !regionsInIsland.some((r) => r.id === selectedId)) {
        setSelectedId(regionsInIsland[0].id);
      }
    }
  };

  return (
    <section id="wilayah" className="py-16 bg-[#FAFCFF] border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-50/80 via-amber-50/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Header, Island Group Filter & Dropdown Selector (5 Cols on LG for comfortable tabs) */}
            <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-6 lg:border-r border-slate-200/80">
              <div className="space-y-1">
                <span className="text-[#B8962E] font-extrabold text-[10px] uppercase tracking-widest flex items-center">
                  <Compass className="w-3.5 h-3.5 mr-1.5 text-[#B8962E]" /> Pemetaan Kerja Wilayah
                </span>
                <h2 className="text-2xl font-extrabold text-[#0c35a6]">
                  Direktori {bppData.regions.length} Wilayah BPW
                </h2>
                <p className="text-slate-500 text-xs leading-relaxed pt-1">
                  Pilih gugus pulau atau wilayah di bawah ini untuk melihat rincian Sekretariat, Ketua, dan cakupan teritorial.
                </p>
              </div>

              {/* Island Group Filter Tabs */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Map className="w-3 h-3 text-[#B8962E]" /> Filter Gugus Wilayah:
                  </span>
                  {selectedIsland !== 'Semua' && (
                    <button
                      type="button"
                      onClick={() => handleSelectIsland('Semua')}
                      className="text-[10px] font-bold text-[#0c35a6] hover:underline cursor-pointer"
                    >
                      Tampilkan Semua
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter Gugus Wilayah">
                  {islandGroups.map((island) => {
                    const isSelected = selectedIsland === island;
                    const count = getIslandCount(island);
                    return (
                      <button
                        key={island}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => handleSelectIsland(island)}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all duration-150 flex items-center space-x-1.5 cursor-pointer ${
                          isSelected
                            ? 'bg-[#0c35a6] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                        }`}
                      >
                        <span>{island}</span>
                        <span
                          className={`text-[9px] px-1 py-0.5 rounded font-extrabold ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-slate-200/80 text-slate-500'
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dropdown Selector */}
              <div className="relative pt-1">
                <select
                  value={selectedId}
                  onChange={(e) => setSelectedId(e.target.value)}
                  aria-label="Pilih Wilayah BPW"
                  className="w-full pl-4 pr-10 py-3 text-xs font-bold text-[#0c35a6] bg-[#FAFCFF] border border-slate-300 rounded-xl focus:outline-none focus:border-[#0c35a6] focus:ring-2 focus:ring-[#0c35a6]/10 appearance-none transition-all cursor-pointer shadow-sm"
                >
                  {displayedRegions.map((reg) => (
                    <option key={reg.id} value={reg.id} className="py-1 text-slate-800 font-medium">
                      {reg.code} - {reg.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-[18px] pointer-events-none" />
              </div>

              {/* Quick Select Region Badges/Pills */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Pilih Cepat BPW:
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {displayedRegions.length} Wilayah
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {displayedRegions.map((reg) => (
                    <button
                      key={reg.id}
                      type="button"
                      onClick={() => setSelectedId(reg.id)}
                      className={`px-2.5 py-1 text-[10px] font-bold rounded-lg transition-all cursor-pointer ${
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

            {/* Right Column: Premium Region Details & Coverage (7 Cols on LG) */}
            {selectedRegion && (
              <div key={selectedId} className="lg:col-span-7 space-y-5 animate-in fade-in duration-200">
                {/* Header Title & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/80">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-black text-[#B8962E] bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg uppercase tracking-wider shadow-2xs">
                      {selectedRegion.code}
                    </span>
                    <h3 className="font-extrabold text-xl text-[#0c35a6]">
                      {selectedRegion.title}
                    </h3>
                    {selectedRegion.island && (
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-md">
                        Gugus: {selectedRegion.island}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-bold text-[#0c35a6] bg-blue-50/80 px-3.5 py-1.5 rounded-xl border border-blue-100/80 shadow-2xs">
                    {selectedRegion.churchesCount}
                  </span>
                </div>

                {/* Cakupan Wilayah Binaan (Coverage) Card */}
                <div className="bg-[#FAFCFF] p-4 sm:p-5 rounded-2xl border border-slate-200/90 border-l-4 border-l-[#B8962E] shadow-2xs space-y-2">
                  <div className="flex items-center space-x-2 text-[#0c35a6]">
                    <div className="p-1.5 rounded-lg bg-amber-50 border border-amber-200/60 text-[#B8962E]">
                      <Map className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 text-xs block">Cakupan Wilayah Binaan</span>
                      <span className="text-[10px] text-slate-400 font-medium">Teritorial Pelayanan & Koordinasi Pelayanan Daerah</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-700 font-semibold leading-relaxed pl-0.5">
                    {selectedRegion.coverage}
                  </p>
                </div>

                {/* Details Grid: Ketua BPW, Sekretariat, Kontak */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
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


