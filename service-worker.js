importScripts("/precache-manifest.787ef4b6465481cb5f0ceb14bf00155d.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

