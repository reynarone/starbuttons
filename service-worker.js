importScripts("/precache-manifest.06a36223e8a0e62be39be1dbc212f2fa.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

