importScripts("/precache-manifest.644e45de5e4cfefca2e6f7c178fa2d48.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

