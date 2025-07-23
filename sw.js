const CACHE_NAME = 'hjmops-cache-v1';
const PRECACHE_URLS = [
  '/',
  'index.html',
  'styles/main.css',
  'styles/theme.css',
  'js/app.js',
  'js/workerPool.js',
  'js/bus.js',
  'js/crypto-worker.js',
  'js/workers/calc-worker.js',
  'data/allowablesDataPlain.js',
  'data/townsDataPlain.js',
  'manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
