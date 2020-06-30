importScripts("/precache-manifest.e907604b277a83c6fb2fc0d3c96c3a2f.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

