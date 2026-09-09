/**
 * BPP GKII Service Worker
 * Ketahanan Akses Offline & Caching Terarah untuk Wilayah 3T & Perangkat Jemaat
 * Version: 1.0.0
 */

const CACHE_VERSION = 'v1';
const CACHE_STATIC = `bpp-gkii-static-${CACHE_VERSION}`;
const CACHE_PAGES = `bpp-gkii-pages-${CACHE_VERSION}`;
const CACHE_DOCS = `bpp-gkii-docs-${CACHE_VERSION}`;
const ALL_CACHES = [CACHE_STATIC, CACHE_PAGES, CACHE_DOCS];

// Aset inti yang langsung di-precache saat instalasi service worker
const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/manifest.json',
  '/favicon.ico',
  '/gkii-logo-emblem.png',
  '/gkii-logo-long.png',
  '/og-image.png',
  '/apple-icon.png',
  '/icon-192.png',
  '/icon-512.png',
];

// 1. INSTALL EVENT — Precache aset esensial
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(async (cache) => {
      // Precache aset satu per satu agar kegagalan satu aset tidak membatalkan install
      await Promise.allSettled(
        PRECACHE_ASSETS.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[SW] Precache failed for:', url, err);
          })
        )
      );
    })
  );
  // Aktifkan langsung tanpa menunggu tab ditutup
  self.skipWaiting();
});

// 2. ACTIVATE EVENT — Bersihkan cache versi lama & klaim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys.map((key) => {
            if (key.startsWith('bpp-gkii-') && !ALL_CACHES.includes(key)) {
              return caches.delete(key);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// 3. MESSAGE EVENT — Dukungan skip waiting saat update tersedia
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 4. FETCH EVENT — Strategi Caching Terarah
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Hanya tangani metode GET
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Abaikan skema selain http / https (misal chrome-extension:)
  if (!url.protocol.startsWith('http')) return;

  // STRATEGI A: Permintaan Navigasi HTML (Dokumen Utama)
  // Network-First dengan Timeout Fallback (3.5 detik untuk sinyal fluktuatif di 3T)
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      (async () => {
        const timeoutPromise = new Promise((resolve) =>
          setTimeout(() => resolve(null), 3500)
        );

        try {
          const networkPromise = fetch(request).then(async (response) => {
            if (response && response.status === 200) {
              const cache = await caches.open(CACHE_PAGES);
              cache.put(request, response.clone());
            }
            return response;
          });

          // Balapan antara network fetch dan timeout 3.5s
          const response = await Promise.race([networkPromise, timeoutPromise]);

          if (response) {
            return response;
          }
        } catch {
          // Network error (offline)
        }

        // Jika network gagal / timeout, coba ambil dari cache pages atau cache home
        const cachedPage =
          (await caches.match(request)) ||
          (await caches.match('/'));

        if (cachedPage) {
          return cachedPage;
        }

        // Jika sama sekali belum tersimpan, tampilkan halaman offline cadangan
        const offlinePage = await caches.match('/offline.html');
        return (
          offlinePage ||
          new Response('Mode Offline - Halaman tidak tersedia tanpa internet.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
          })
        );
      })()
    );
    return;
  }

  // STRATEGI B: Dokumen PDF Resmi (/pdf/*)
  // Cache-First dengan Network Fallback (Sekali diunduh, selalu tersedia di pedalaman)
  if (url.origin === self.location.origin && url.pathname.startsWith('/pdf/')) {
    event.respondWith(
      caches.open(CACHE_DOCS).then(async (cache) => {
        const cachedResponse = await cache.match(request);
        if (cachedResponse) {
          return cachedResponse;
        }

        try {
          const networkResponse = await fetch(request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        } catch {
          return new Response('Dokumen belum diunduh dan Anda sedang offline.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
          });
        }
      })
    );
    return;
  }

  // STRATEGI C: Aset Statis (Next.js static JS/CSS, images, Google fonts)
  // Stale-While-Revalidate: Layani instan dari cache, perbarui di latar belakang
  const isStaticAsset =
    url.origin === self.location.origin &&
    (url.pathname.startsWith('/_next/static/') ||
      url.pathname.match(/\.(png|jpg|jpeg|svg|webp|ico|woff2|woff|ttf|css|js|json)$/i));

  const isGoogleFont =
    url.origin === 'https://fonts.googleapis.com' ||
    url.origin === 'https://fonts.gstatic.com';

  if (isStaticAsset || isGoogleFont) {
    event.respondWith(
      caches.open(CACHE_STATIC).then(async (cache) => {
        const cachedResponse = await cache.match(request);

        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => null);

        // Kembalikan versi cache jika ada, jika belum ada tunggu fetch
        return cachedResponse || (await fetchPromise);
      })
    );
  }
});
