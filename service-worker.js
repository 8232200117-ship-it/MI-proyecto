const CACHE_NAME = 'mi-sitio-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/estilos.css',
  '/mate.html',
  '/fisica.html',
  '/programacion.html',
  '/musica.html',
  '/pasatiempo.html',
  '/cv.html',
  '/index.png',
  '/fisica.jpg',
  '/mate.jpg',
  '/musica.jpg',
  '/programacion.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
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
      })
  );
});