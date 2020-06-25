importScripts("/precache-manifest.d62660a5f21e708a100a0da4a97ce4ea.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

