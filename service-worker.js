self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('lunacache').then(function(cache) {
      return cache.addAll(
        [
          '/laluna/index.html',
          '/laluna/lalunalogo.png'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});

