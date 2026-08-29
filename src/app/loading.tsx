export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAFCFF] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#0c35a6]">
      {/* Top Navbar Skeleton (Synchronized 1:1 with Navbar.tsx) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 h-20 flex items-center shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Logo Skeleton */}
          <div className="w-44 sm:w-52 h-10 bg-slate-200/80 rounded-xl animate-pulse"></div>

          {/* Desktop Navigation Links Skeleton (Right-aligned) */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="w-16 h-4 bg-slate-200/80 rounded-md animate-pulse"></div>
            <div className="w-24 h-4 bg-slate-200/80 rounded-md animate-pulse"></div>
            <div className="w-24 h-4 bg-slate-200/80 rounded-md animate-pulse"></div>
            <div className="w-28 h-4 bg-slate-200/80 rounded-md animate-pulse"></div>
            <div className="w-20 h-4 bg-slate-200/80 rounded-md animate-pulse"></div>
          </div>

          {/* Mobile Menu Button Skeleton */}
          <div className="lg:hidden w-10 h-10 bg-slate-100 rounded-xl animate-pulse"></div>
        </div>
      </header>

      <main className="space-y-16 py-10">
        {/* Hero Section Skeleton */}
        <section className="max-w-4xl mx-auto text-center space-y-6 px-4 pt-12">
          <div className="space-y-3">
            <div className="w-4/5 max-w-2xl h-10 sm:h-12 bg-slate-200 rounded-2xl mx-auto animate-pulse"></div>
            <div className="w-3/5 max-w-lg h-10 sm:h-12 bg-amber-200/50 rounded-2xl mx-auto animate-pulse"></div>
          </div>
          <div className="w-5/6 max-w-xl h-4 sm:h-5 bg-slate-200/80 rounded-lg mx-auto animate-pulse"></div>

          {/* Hero Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <div className="w-44 h-12 bg-amber-200/70 rounded-xl animate-pulse"></div>
            <div className="w-40 h-12 bg-slate-200 rounded-xl animate-pulse"></div>
          </div>

          {/* Hero Stat Strip Skeleton */}
          <div className="pt-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="space-y-2 flex flex-col items-center">
                <div className="w-12 h-6 bg-slate-200 rounded animate-pulse"></div>
                <div className="w-20 h-3 bg-slate-200 rounded animate-pulse"></div>
              </div>
              <div className="space-y-2 flex flex-col items-center border-x border-slate-200">
                <div className="w-12 h-6 bg-amber-200 rounded animate-pulse"></div>
                <div className="w-24 h-3 bg-slate-200 rounded animate-pulse"></div>
              </div>
              <div className="space-y-2 flex flex-col items-center">
                <div className="w-12 h-6 bg-slate-200 rounded animate-pulse"></div>
                <div className="w-20 h-3 bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Document Center Skeleton */}
        <section className="max-w-7xl mx-auto px-4 space-y-8 pt-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <div className="w-28 h-4 bg-amber-100 rounded mx-auto animate-pulse"></div>
            <div className="w-64 h-8 bg-slate-200 rounded-xl mx-auto animate-pulse"></div>
          </div>
          {/* Search bar skeleton */}
          <div className="w-full max-w-xl mx-auto h-12 bg-slate-200/70 rounded-2xl animate-pulse"></div>
          {/* Document cards grid skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs animate-pulse">
                <div className="flex justify-between items-center">
                  <div className="w-12 h-5 bg-red-100 rounded-lg"></div>
                  <div className="w-14 h-4 bg-slate-100 rounded"></div>
                </div>
                <div className="space-y-2 pt-2">
                  <div className="w-20 h-3 bg-amber-100 rounded"></div>
                  <div className="w-3/4 h-5 bg-slate-200 rounded-lg"></div>
                  <div className="w-full h-8 bg-slate-100 rounded"></div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex gap-2">
                  <div className="flex-1 h-9 bg-slate-100 rounded-xl"></div>
                  <div className="flex-1 h-9 bg-[#0c35a6]/20 rounded-xl"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Officers Grid Skeleton */}
        <section className="max-w-7xl mx-auto px-4 space-y-8 pt-8">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <div className="w-28 h-4 bg-amber-100 rounded mx-auto animate-pulse"></div>
            <div className="w-64 h-8 bg-slate-200 rounded-xl mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-4 shadow-xs animate-pulse">
                <div className="w-20 h-20 rounded-2xl bg-slate-200 mx-auto"></div>
                <div className="w-24 h-4 bg-amber-100 rounded mx-auto"></div>
                <div className="w-40 h-6 bg-slate-200 rounded-lg mx-auto"></div>
                <div className="w-full h-12 bg-slate-100 rounded pt-2"></div>
              </div>
            ))}
          </div>
        </section>

        {/* STT Affiliasi Skeleton */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <div className="w-32 h-4 bg-amber-100 rounded mx-auto animate-pulse"></div>
              <div className="w-72 h-8 bg-slate-200 rounded-xl mx-auto animate-pulse"></div>
              <div className="w-56 h-4 bg-slate-200/80 rounded mx-auto animate-pulse"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl bg-[#FAFCFF] border border-slate-200 p-6 space-y-4 animate-pulse relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 rounded-t-2xl"></div>
                  <div className="w-28 h-5 bg-amber-100 rounded-full mt-1"></div>
                  <div className="w-3/4 h-5 bg-slate-200 rounded-lg"></div>
                  <div className="space-y-1.5">
                    <div className="w-full h-3 bg-slate-100 rounded"></div>
                    <div className="w-4/5 h-3 bg-slate-100 rounded"></div>
                  </div>
                  <div className="w-32 h-4 bg-blue-100 rounded"></div>
                </div>
              ))}
            </div>

            {/* Press Release Skeleton */}
            <div className="pt-8 border-t border-slate-200/70 space-y-10">
              <div className="text-center space-y-2 max-w-xl mx-auto">
                <div className="w-28 h-4 bg-amber-100 rounded mx-auto animate-pulse"></div>
                <div className="w-64 h-8 bg-slate-200 rounded-xl mx-auto animate-pulse"></div>
                <div className="w-80 h-4 bg-slate-200/80 rounded mx-auto animate-pulse"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="rounded-2xl bg-[#FAFCFF] border border-slate-200 p-6 space-y-3 animate-pulse flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200 rounded-t-2xl"></div>
                    <div className="space-y-2 pt-1">
                      <div className="w-36 h-5 bg-amber-100 rounded-full"></div>
                      <div className="w-full h-5 bg-slate-200 rounded-lg"></div>
                      <div className="w-4/5 h-5 bg-slate-200 rounded-lg"></div>
                      <div className="space-y-1.5 pt-1">
                        <div className="w-full h-3 bg-slate-100 rounded"></div>
                        <div className="w-5/6 h-3 bg-slate-100 rounded"></div>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between">
                      <div className="w-28 h-3 bg-blue-100 rounded"></div>
                      <div className="w-4 h-4 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
