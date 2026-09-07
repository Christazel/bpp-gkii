'use client';

import { useEffect, useState, useRef, useSyncExternalStore } from 'react';
import { WifiOff, Wifi, RefreshCw, X } from 'lucide-react';

function subscribeToOnlineStatus(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getOnlineSnapshot(): boolean {
  return navigator.onLine;
}

function getServerOnlineSnapshot(): boolean {
  return true; // Always assume online during SSR
}

export default function ServiceWorkerRegister() {
  const isOnline = useSyncExternalStore(
    subscribeToOnlineStatus,
    getOnlineSnapshot,
    getServerOnlineSnapshot
  );

  const isOffline = !isOnline;
  const [showOnlineToast, setShowOnlineToast] = useState(false);
  const [hasUpdate, setHasUpdate] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const waitingWorkerRef = useRef<ServiceWorker | null>(null);
  const prevOnlineRef = useRef(isOnline);
  const onlineTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Monitor transition from offline -> online to show restored toast
  useEffect(() => {
    if (!prevOnlineRef.current && isOnline) {
      setShowOnlineToast(true);
      if (onlineTimerRef.current) clearTimeout(onlineTimerRef.current);
      onlineTimerRef.current = setTimeout(() => {
        setShowOnlineToast(false);
      }, 3500);
    }
    prevOnlineRef.current = isOnline;

    return () => {
      if (onlineTimerRef.current) clearTimeout(onlineTimerRef.current);
    };
  }, [isOnline]);

  // Register Service Worker in production
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      const registerSW = async () => {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/',
          });

          if (registration.waiting) {
            waitingWorkerRef.current = registration.waiting;
            setHasUpdate(true);
          }

          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (
                  newWorker.state === 'installed' &&
                  navigator.serviceWorker.controller
                ) {
                  waitingWorkerRef.current = newWorker;
                  setHasUpdate(true);
                }
              });
            }
          });
        } catch (err) {
          console.warn('[PWA] Service Worker registration failed:', err);
        }
      };

      if (document.readyState === 'complete') {
        registerSW();
      } else {
        window.addEventListener('load', registerSW);
      }

      let refreshing = false;
      const handleControllerChange = () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      };

      navigator.serviceWorker.addEventListener(
        'controllerchange',
        handleControllerChange
      );

      return () => {
        window.removeEventListener('load', registerSW);
        navigator.serviceWorker.removeEventListener(
          'controllerchange',
          handleControllerChange
        );
      };
    }
  }, []);

  const handleUpdate = () => {
    if (waitingWorkerRef.current) {
      waitingWorkerRef.current.postMessage({ type: 'SKIP_WAITING' });
    } else {
      window.location.reload();
    }
  };

  return (
    <>
      {/* 1. Offline Mode Floating Indicator */}
      {isOffline && !isDismissed && (
        <aside
          role="status"
          aria-live="polite"
          aria-label="Status Jaringan: Mode Offline Aktif"
          className="fixed bottom-6 left-4 sm:left-6 z-40 max-w-[calc(100vw-5rem)] sm:max-w-sm animate-in fade-in slide-in-from-bottom-3 duration-300"
        >
          <div className="flex items-center gap-3 p-3 sm:px-4 sm:py-3 bg-[#06195c] text-white rounded-xl border border-[#D4AF37]/40 shadow-2xl backdrop-blur-md">
            <div className="w-8 h-8 rounded-lg bg-[#0c35a6] flex items-center justify-center shrink-0 text-[#D4AF37]">
              <WifiOff className="w-4 h-4" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0 pr-1">
              <p className="text-xs font-bold text-[#D4AF37] leading-tight">
                Mode Offline Aktif
              </p>
              <p className="text-[11px] text-slate-200 leading-tight truncate">
                Mengakses data & dokumen tersimpan
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsDismissed(true)}
              aria-label="Tutup pemberitahuan offline"
              className="p-1 text-slate-300 hover:text-white rounded-md hover:bg-white/10 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>
      )}

      {/* 2. Online Restored Toast */}
      {showOnlineToast && !isOffline && (
        <aside
          role="status"
          aria-live="polite"
          aria-label="Status Jaringan: Koneksi Pulih"
          className="fixed bottom-6 left-4 sm:left-6 z-40 max-w-[calc(100vw-5rem)] sm:max-w-sm animate-in fade-in slide-in-from-bottom-3 duration-300"
        >
          <div className="flex items-center gap-3 px-4 py-3 bg-emerald-900 text-white rounded-xl border border-emerald-500/50 shadow-2xl">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center shrink-0 text-emerald-100">
              <Wifi className="w-4 h-4" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-emerald-200 leading-tight">
                Koneksi Pulih
              </p>
              <p className="text-[11px] text-emerald-100 leading-tight">
                Portal kembali terhubung ke internet
              </p>
            </div>
          </div>
        </aside>
      )}

      {/* 3. New Version Update Prompt */}
      {hasUpdate && (
        <aside
          role="alert"
          aria-label="Pembaruan Tersedia"
          className="fixed bottom-6 left-4 sm:left-6 z-40 max-w-[calc(100vw-5rem)] sm:max-w-sm animate-in fade-in slide-in-from-bottom-3 duration-300"
        >
          <div className="flex items-center gap-3 p-3 sm:px-4 sm:py-3 bg-[#06195c] text-white rounded-xl border border-[#D4AF37] shadow-2xl">
            <div className="w-8 h-8 rounded-lg bg-[#0c35a6] flex items-center justify-center shrink-0 text-[#D4AF37]">
              <RefreshCw className="w-4 h-4 animate-spin" aria-hidden="true" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-[#D4AF37] leading-tight">
                Pembaruan Tersedia
              </p>
              <p className="text-[11px] text-slate-200 leading-tight">
                Versi baru portal telah siap
              </p>
            </div>
            <button
              type="button"
              onClick={handleUpdate}
              className="px-2.5 py-1.5 bg-[#B8962E] hover:bg-[#D4AF37] text-[#06195c] font-extrabold text-[11px] rounded-md transition-colors shrink-0 shadow"
            >
              Perbarui
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
