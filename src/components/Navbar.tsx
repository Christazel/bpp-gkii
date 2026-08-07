'use client';

import { useState } from 'react';
import { Download, Menu, ExternalLink } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* TOPBAR LEGALITAS & TAUTAN RESMI */}
      <div className="bg-[#06195c] text-white text-xs py-2.5 px-4 sm:px-8 border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <span className="bg-[#D4AF37] text-[#06195c] text-[10px] font-black px-2.5 py-0.5 rounded tracking-wider uppercase">
              {bppData.legalities.portalBadge}
            </span>
            <span className="text-slate-300 font-medium">{bppData.legalities.skNumber}</span>
            <span className="text-slate-400 hidden md:inline">• {bppData.legalities.accessNotice}</span>
          </div>
          <a
            href={bppData.legalities.parentWebUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline font-semibold flex items-center space-x-1.5 transition-all text-[11px] sm:text-xs"
          >
            <span>Website Jemaat (kemah-injil.org)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* NAVIGATION BAR UTAMA */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Official Logo BPP GKII */}
            <a href="#beranda" className="flex items-center space-x-3 group">
              <img
                src="/gkii-logo-long.png"
                alt="Gereja Kemah Injil Indonesia Logo"
                className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
              />
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <span className="hidden sm:inline-block px-2.5 py-1 bg-[#0c35a6]/10 text-[#0c35a6] font-extrabold text-[11px] rounded-lg tracking-wider uppercase">
                BPP PUSAT
              </span>
            </a>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-2">
              <a href="#beranda" className="px-3.5 py-2 text-sm font-semibold text-[#0c35a6] hover:bg-[#F4F7FF] transition-all rounded-xl">
                Beranda
              </a>
              <a href="#dokumen" className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0c35a6] hover:bg-slate-100 transition-all rounded-xl">
                Dokumen Resmi
              </a>
              <a href="#pengurus" className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0c35a6] hover:bg-slate-100 transition-all rounded-xl">
                Pengurus BPP
              </a>
              <a href="#wilayah" className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0c35a6] hover:bg-slate-100 transition-all rounded-xl">
                Direktori Wilayah
              </a>
              <a href="#stt" className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-[#0c35a6] hover:bg-slate-100 transition-all rounded-xl">
                STT & Warta
              </a>
            </nav>

            {/* Primary CTA & Mobile Trigger */}
            <div className="flex items-center space-x-3">
              <a
                href="#dokumen"
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-[#0c35a6] hover:bg-[#06195c] rounded-full shadow-md transition-all"
              >
                <Download className="w-4 h-4 mr-2" />
                <span>Unduh Dokumen</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Buka Menu Navigasi"
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl">
            <a href="#beranda" className="block px-4 py-2.5 text-base font-semibold text-[#0c35a6] bg-[#F4F7FF] rounded-xl">
              Beranda
            </a>
            <a href="#dokumen" className="block px-4 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-xl">
              Dokumen Resmi
            </a>
            <a href="#pengurus" className="block px-4 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-xl">
              Pengurus BPP
            </a>
            <a href="#wilayah" className="block px-4 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-xl">
              Direktori Wilayah
            </a>
            <a href="#stt" className="block px-4 py-2.5 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-xl">
              STT & Warta
            </a>
            <div className="pt-4">
              <a
                href="#dokumen"
                className="w-full flex items-center justify-center px-5 py-3 text-base font-semibold text-white bg-[#0c35a6] rounded-xl shadow-md"
              >
                Unduh Dokumen Resmi
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
