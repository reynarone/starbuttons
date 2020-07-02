importScripts("/precache-manifest.796d3ecc0bea5ccee6708daef0ce1b7f.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

