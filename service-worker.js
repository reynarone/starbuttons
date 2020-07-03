importScripts("/precache-manifest.e62f4e34830489c143c1a07ff6bca4ca.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

