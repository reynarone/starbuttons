importScripts("/precache-manifest.d1b59d125f8d96cdcba544cbda836044.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

