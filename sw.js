const CACHE_NAME = 'game-of-life-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/scripts/main.js',
  // Icons hinzufügen
  '/icon/icon-512x512.png',
  '/icon/icon-192x192.png',
  '/icon/icon-128x128.png',
  '/icon/icon-120x120.png',
  '/icon/icon-96x96.png',
  '/icon/icon-72x72.png',
  '/icon/favicon-32x32.png',
  '/icon/favicon-16x16.png',
  // Weitere Ressourcen hier hinzufügen
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

