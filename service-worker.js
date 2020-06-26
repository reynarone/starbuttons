importScripts("/precache-manifest.7f0eba670fbc4a17398bca3c6fde51af.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

