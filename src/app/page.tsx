import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DocumentCenter from '@/components/DocumentCenter';
import Officers from '@/components/Officers';
import RegionalDirectory from '@/components/RegionalDirectory';
import SeminarySection from '@/components/SeminarySection';
import PressReleaseSection from '@/components/PressReleaseSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

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
