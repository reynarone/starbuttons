importScripts("/precache-manifest.fff5e7800cf5c87952f5b0d9ac00c680.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

