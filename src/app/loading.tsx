export default function Loading() {
  return (
    <div className="min-h-screen bg-[#FAFCFF] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#0c35a6]">
      {/* Top Navbar Skeleton */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-36 h-9 bg-slate-200 rounded-xl animate-pulse"></div>
            <div className="hidden sm:block w-16 h-5 bg-amber-100 rounded-md animate-pulse"></div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            <div className="w-24 h-4 bg-slate-200 rounded animate-pulse"></div>
            <div className="w-24 h-4 bg-slate-200 rounded animate-pulse"></div>
            <div className="w-24 h-4 bg-slate-200 rounded animate-pulse"></div>
            <div className="w-24 h-4 bg-slate-200 rounded animate-pulse"></div>
          </div>
          <div className="w-32 h-9 bg-[#0c35a6]/20 rounded-full animate-pulse"></div>
        </div>
      </header>

      <main className="space-y-16 py-10">
        {/* Hero Section Skeleton */}
        <section className="max-w-4xl mx-auto text-center space-y-6 px-4 pt-12">
          <div className="w-48 h-7 bg-amber-100/80 rounded-full mx-auto animate-pulse"></div>
          <div className="space-y-3">
            <div className="w-3/4 h-10 bg-slate-200 rounded-2xl mx-auto animate-pulse"></div>
            <div className="w-2/3 h-10 bg-amber-200/50 rounded-2xl mx-auto animate-pulse"></div>
          </div>
          <div className="w-5/6 h-5 bg-slate-200 rounded-lg mx-auto animate-pulse"></div>

          {/* Hero Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <div className="w-48 h-12 bg-amber-300/60 rounded-xl animate-pulse"></div>
            <div className="w-40 h-12 bg-slate-200 rounded-xl animate-pulse"></div>
          </div>

          {/* Hero Stat Strip Skeleton */}
          <div className="pt-8">
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
      </main>
    </div>
  );
}
