importScripts("/precache-manifest.85a6143e0c93b5c68407171d42db1b9c.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

