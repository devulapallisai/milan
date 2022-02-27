const assets = [
  "/",
  "app.webmanifest",
  "sw-register.js",
  "serviceworker.js",
  "/found.html",
  "/lost.html",
  "/cabsharing.html",
  "css/index.css",
  "css/style.css",
  "css/home.css",
  "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
  "https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&display=swap",
  "https://kit.fontawesome.com/38b5a7225a.js",
  "js/lost.js",
  "js/toggle.js",
  "js/cab.js",
  "images/favicon.ico",
  "images/icon48.png",
  "images/icon96.png",
  "images/icon128.png",
  "images/icon192.png",
];
self.addEventListener("install", (event) => {
  caches.open("assets").then((cache) => {
    cache.addAll(assets);
  });
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Even if the response is in the cache, we fetch it
      // and update the cache for future usage
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        caches.open("assets").then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
      // We use the currently cached version if it's there
      return cachedResponse || fetchPromise; // cached or a network fetch
    })
  );
});
