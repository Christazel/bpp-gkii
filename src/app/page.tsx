import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Below-fold components — JS code-split into separate lazy chunks.
// HTML is still SSR'd (no ssr:false) so SEO and initial paint are unaffected.
// Only client-side hydration JS is deferred, reducing initial TBT significantly.
const DocumentCenter = dynamic(() => import('@/components/DocumentCenter'));
const AdministrationProcess = dynamic(() => import('@/components/AdministrationProcess'));
const Officers = dynamic(() => import('@/components/Officers'));
const RegionalDirectory = dynamic(() => import('@/components/RegionalDirectory'));
const SeminarySection = dynamic(() => import('@/components/SeminarySection'));
const PressReleaseSection = dynamic(() => import('@/components/PressReleaseSection'));
const FaqSection = dynamic(() => import('@/components/FaqSection'));
const Footer = dynamic(() => import('@/components/Footer'));
// ScrollToTop is 'use client' and its window usage is inside useEffect (client-only)
// Regular dynamic() is sufficient — ssr:false is not allowed in Server Components
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'));

export default function Home() {
  return (
    <div className="bg-[#FAFCFF] text-slate-900 font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#0c35a6]">
      <Navbar />
      <main>
        <Hero />
        <DocumentCenter />
        <AdministrationProcess />
        <Officers />
        <RegionalDirectory />

        {/* STT Affiliasi & Pesan Pastoral */}
        <section id="stt" className="py-14 sm:py-16 bg-white border-b border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <SeminarySection />
            <PressReleaseSection />
          </div>
        </section>

        {/* FAQ Tanya Jawab Kelembagaan */}
        <FaqSection />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
