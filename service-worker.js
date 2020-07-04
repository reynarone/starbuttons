importScripts("/precache-manifest.fbeaf0de403ecbace15f038d63ec0c1e.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

