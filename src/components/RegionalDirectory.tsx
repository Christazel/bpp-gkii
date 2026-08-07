'use client';

import { useState } from 'react';
import { MapPin, Phone, Building2, UserCheck, X, Search } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function RegionalDirectory() {
  const [activeGroup, setActiveGroup] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBPW, setSelectedBPW] = useState<(typeof bppData.regions)[0] | null>(null);

  const filteredRegions = bppData.regions.filter((reg) => {
    const matchesGroup = activeGroup === 'all' || reg.group === activeGroup;
    const matchesSearch =
      reg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reg.leader.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  return (
    <section id="wilayah" className="py-24 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest">Pemetaan Kerja</span>
          <h2 className="text-3xl font-extrabold text-[#0c35a6]">Direktori 13 Wilayah BPW</h2>
          <p className="text-slate-500 text-xs sm:text-sm">
            Ketik kata kunci nama wilayah atau provinsi di bawah ini untuk mencari data BPW.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="max-w-xl mx-auto relative mb-6">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari wilayah BPW (misal: Papua, Jawa, Kalbar, Sulut, Bali)..."
              className="w-full pl-11 pr-4 py-3 text-xs bg-[#FAFCFF] border border-slate-200 rounded-2xl focus:outline-none focus:border-[#0c35a6] focus:ring-2 focus:ring-[#0c35a6]/10 transition-all text-slate-800 placeholder-slate-400 font-medium shadow-sm"
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

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveGroup('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeGroup === 'all'
                ? 'bg-[#0c35a6] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Semua (13 Wilayah)
          </button>
          <button
            onClick={() => setActiveGroup('papua')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeGroup === 'papua'
                ? 'bg-[#0c35a6] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Papua
          </button>
          <button
            onClick={() => setActiveGroup('kalimantan')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeGroup === 'kalimantan'
                ? 'bg-[#0c35a6] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Kalimantan
          </button>
          <button
            onClick={() => setActiveGroup('sulawesi')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeGroup === 'sulawesi'
                ? 'bg-[#0c35a6] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Sulawesi & Intim
          </button>
          <button
            onClick={() => setActiveGroup('jawa')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              activeGroup === 'jawa'
                ? 'bg-[#0c35a6] text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-[#F4F7FF]'
            }`}
          >
            Jawa & Sumatera
          </button>
        </div>

        {/* Grid BPW Region Cards */}
        {filteredRegions.length === 0 ? (
          <div className="text-center py-12 bg-[#FAFCFF] rounded-2xl border border-dashed border-slate-300">
            <p className="text-xs text-slate-500 font-semibold">Tidak ditemukan wilayah BPW yang sesuai dengan "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveGroup('all');
              }}
              className="mt-3 text-xs font-bold text-[#0c35a6] hover:underline"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
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
        )}
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
