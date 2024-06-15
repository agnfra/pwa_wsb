let cacheName="podyplomowe";
let filesToCache=["./", "./index.html", "./js/main.js"]

// Start the service 
self.addEventListener("install", (e) => {
    e.waitUntil(
    caches.open(cacheName).then((cache) => {
        return cache.addAll(filesToCache);
        })
    );
});

// Serve catched content when offline
self.addEventListener("fetch", (e) => {
    e.respondWith(
    caches.match(e.request).then((response) => {
        return response || fetch(e.request);
        })
    );
});