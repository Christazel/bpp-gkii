'use client';

import { useState } from 'react';
import { Download, Menu } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo BPP GKII */}
          <a href="#beranda" className="flex items-center group py-2">
            <img
              src="/gkii-logo-long.png"
              alt="Gereja Kemah Injil Indonesia Logo"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Menu (Spacious & Clean) */}
          <nav className="hidden lg:flex items-center space-x-1">
            <a
              href="#dokumen"
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#0c35a6] hover:bg-slate-50 rounded-xl transition-all"
            >
              Dokumen Resmi
            </a>
            <a
              href="#pengurus"
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#0c35a6] hover:bg-slate-50 rounded-xl transition-all"
            >
              Pengurus BPP
            </a>
            <a
              href="#wilayah"
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#0c35a6] hover:bg-slate-50 rounded-xl transition-all"
            >
              Direktori Wilayah
            </a>
            <a
              href="#stt"
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#0c35a6] hover:bg-slate-50 rounded-xl transition-all"
            >
              STT & Warta
            </a>
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center space-x-3">
            <a
              href="#dokumen"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white bg-[#0c35a6] hover:bg-[#06195c] rounded-full shadow-sm hover:shadow-md transition-all"
            >
              <Download className="w-3.5 h-3.5 mr-2" />
              <span>Unduh Dokumen</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka Menu Navigasi"
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-2 shadow-xl">
          <a
            href="#dokumen"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#0c35a6] hover:bg-slate-50 rounded-xl"
          >
            Dokumen Resmi
          </a>
          <a
            href="#pengurus"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#0c35a6] hover:bg-slate-50 rounded-xl"
          >
            Pengurus BPP
          </a>
          <a
            href="#wilayah"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#0c35a6] hover:bg-slate-50 rounded-xl"
          >
            Direktori Wilayah
          </a>
          <a
            href="#stt"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-2.5 text-sm font-semibold text-slate-800 hover:text-[#0c35a6] hover:bg-slate-50 rounded-xl"
          >
            STT & Warta
          </a>
          <div className="pt-3">
            <a
              href="#dokumen"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-5 py-3 text-xs font-bold text-white bg-[#0c35a6] rounded-xl shadow-md"
            >
              <Download className="w-4 h-4 mr-2" />
              Unduh Dokumen Resmi
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
