import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Below-fold components — JS code-split into separate lazy chunks.
// HTML is still SSR'd (no ssr:false) so SEO and initial paint are unaffected.
// Only client-side hydration JS is deferred, reducing initial TBT significantly.
const DocumentCenter = dynamic(() => import('@/components/DocumentCenter'));
const Officers = dynamic(() => import('@/components/Officers'));
const RegionalDirectory = dynamic(() => import('@/components/RegionalDirectory'));
const SeminarySection = dynamic(() => import('@/components/SeminarySection'));
const PressReleaseSection = dynamic(() => import('@/components/PressReleaseSection'));
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
        <Officers />
        <RegionalDirectory />

        {/* STT Affiliasi & Pesan Pastoral */}
        <section id="stt" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <SeminarySection />
            <PressReleaseSection />
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
