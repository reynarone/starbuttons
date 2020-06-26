importScripts("/precache-manifest.4c297d4fabad1462ea00b275bdee5103.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

