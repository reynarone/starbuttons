importScripts("/precache-manifest.d46ffa0ec89835b6df090cdc234193a9.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

