importScripts("/precache-manifest.426a19b1de2ae0538253a0df98555b05.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

