'use client';

import Image from 'next/image';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close mobile menu on click outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header ref={navRef} className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo BPP GKII */}
          <a href="#beranda" className="flex items-center space-x-3 group py-2" aria-label="Beranda BPP GKII">
            <Image width={220} height={44} priority draggable={false}
              src="/gkii-logo-long.png"
              alt="Gereja Kemah Injil Indonesia Logo"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105 select-none"
            />
          </a>

          {/* Desktop Navigation Menu (Right-aligned like JelajahKode example) */}
          <div className="flex items-center space-x-2">
            <nav className="hidden lg:flex items-center space-x-1">
              <a
                href="#beranda"
                className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#0c35a6] hover:bg-blue-50/60 rounded-xl transition-all relative group"
              >
                Beranda
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#0c35a6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </a>
              <a
                href="#dokumen"
                className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#0c35a6] hover:bg-blue-50/60 rounded-xl transition-all relative group"
              >
                Dokumen Resmi
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#0c35a6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </a>
              <a
                href="#pengurus"
                className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#0c35a6] hover:bg-blue-50/60 rounded-xl transition-all relative group"
              >
                Pengurus BPP
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#0c35a6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </a>
              <a
                href="#wilayah"
                className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#0c35a6] hover:bg-blue-50/60 rounded-xl transition-all relative group"
              >
                Direktori Wilayah
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#0c35a6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </a>
              <a
                href="#stt"
                className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#0c35a6] hover:bg-blue-50/60 rounded-xl transition-all relative group"
              >
                STT & Warta
                <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#0c35a6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
              </a>
            </nav>

            {/* Hamburger Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Tutup Menu Navigasi" : "Buka Menu Navigasi"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
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
        </div>
      )}
    </header>
  );
}

