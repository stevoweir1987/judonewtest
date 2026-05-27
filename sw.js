// ═══════════════════════════════════════════════════
//  ObiApp Service Worker
//  Strategy:
//    JS/CSS/images → Cache-first (versioned cache)
//    HTML          → Network-first with cache fallback
//    YouTube/CDN   → Network only (no caching external)
// ═══════════════════════════════════════════════════

const CACHE  = 'obiapp-v2';
const STATIC = [
  './',
  './index.html',
  './js/data.js',
  './js/jh_state.js',
  './js/jh_home.js',
  './js/jh_browse.js',
  './js/jh_hub.js',
  './js/jh_grade.js',
  './js/jh_profile.js',
  './js/jh_session.js',
  './js/firebase_sync.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/belt-white.png',
  './images/belt-red.png',
  './images/belt-yellow.png',
  './images/belt-orange.png',
  './images/belt-green.png',
  './images/belt-blue.png',
  './images/belt-brown.png',
];

// ── Install: pre-cache static shell ───────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(STATIC.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[SW] pre-cache error:', err))
  );
});

// ── Activate: remove old caches ───────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: route strategy ─────────────────────────
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Skip non-GET and external (YouTube, Firebase, CDN)
  if (e.request.method !== 'GET') return;
  if (url.origin !== self.location.origin) return;

  // HTML → network-first
  if (e.request.headers.get('accept')?.includes('text/html')) {
    e.respondWith(
      fetch(e.request)
        .then(res => { caches.open(CACHE).then(c => c.put(e.request, res.clone())); return res; })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // JS / images / icons → cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        if (res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
        return res;
      }).catch(() => cached);
    })
  );
});
