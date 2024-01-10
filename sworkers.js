let cacheName='cachegestor'
let appArchivos=[
    '/',
    '/Noel-Cruz/gestor/index.html',
    '/Noel-Cruz/gestor/style.css',
    '/Noel-Cruz/gestor/app.js'
];



self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(appArchivos);
    }),
  );
});


self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      return (
        r ||
        fetch(e.request).then(function (response) {
          return caches.open(cacheName).then(function (cache) {
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    }),
  );
});