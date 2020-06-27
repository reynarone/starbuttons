importScripts("/precache-manifest.d5255d6aa4f4392bb6c07b0ca0991979.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

