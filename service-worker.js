self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/laluna/index.html',
          '/laluna/lalunalogo.png'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(e){
});
