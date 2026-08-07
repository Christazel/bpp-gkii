import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DocumentCenter from '@/components/DocumentCenter';
import Officers from '@/components/Officers';
import RegionalDirectory from '@/components/RegionalDirectory';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import bppData from '@/data/bpp-data.json';

export default function Home() {
  return (
    <div className="bg-[#FAFCFF] text-slate-900 font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#0c35a6]">
      <Navbar />
      <main>
        <Hero />
        <DocumentCenter />
        <Officers />
        <RegionalDirectory />

        {/* 5. STT AFFILIASI & PESAN PASTORAL */}
        <section id="stt" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* STT Section */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest">
                  Pendidikan Teologi
                </span>
                <h2 className="text-3xl font-extrabold text-[#0c35a6]">Sekolah Tinggi Teologi Affiliasi</h2>
                <p className="text-slate-500 text-xs sm:text-sm">
                  Lembaga pendidikan tinggi teologi resmi BPP GKII.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {bppData.seminaries.map((stt, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FAFCFF] rounded-2xl p-6 border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-card transition-all"
                  >
                    <div className="space-y-2">
                      <span className="px-3 py-1 rounded-full bg-[#F4F7FF] text-[#0c35a6] font-bold text-[10px]">
                        {stt.accreditation}
                      </span>
                      <h3 className="font-bold text-base text-[#0c35a6] pt-1">{stt.name}</h3>
                      <p className="text-xs text-slate-500">{stt.description}</p>
                    </div>
                    <a
                      href="#kontak"
                      className="text-xs font-bold text-[#0c35a6] hover:underline inline-flex items-center text-left"
                    >
                      Info Penerimaan Mahasiswa <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Pesan Pastoral Section */}
            <div id="siaran-pers" className="pt-8 border-t border-slate-200/70">
              <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
                <span className="text-[#B8962E] font-bold text-xs uppercase tracking-widest">
                  Publikasi Resmi
                </span>
                <h2 className="text-3xl font-extrabold text-[#0c35a6]">Pesan Pastoral & Warta BPP</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {bppData.pressReleases.map((post, idx) => (
                  <article
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 group cursor-pointer hover:shadow-card transition-all"
                  >
                    <span className="text-[11px] font-semibold text-slate-500">
                      {post.date} • {post.category}
                    </span>
                    <h3 className="font-bold text-base text-[#0c35a6] group-hover:text-[#B8962E] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{post.summary}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
