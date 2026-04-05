// ─── SERVICE WORKER · Cartes de Communication ──────────────────────────────
// Version: bump this string to force cache refresh on update
const CACHE_VERSION = 'comm-cards-v1.0';
const CACHE_NAME    = `${CACHE_VERSION}`;

// Files to cache on install (app shell)
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
];

// ── INSTALL : cache app shell ───────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE : clean old caches ─────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH : cache-first strategy ────────────────────────────────────────────
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests (Google Fonts etc.)
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    // For fonts/external: network first, no cache fallback needed
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Cache successful responses
        if (response && response.status === 200) {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, cloned));
        }
        return response;
      }).catch(() => {
        // Offline fallback: return cached index.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
