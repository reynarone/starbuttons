importScripts("/precache-manifest.2c9b0ff2212e523ec7dae4dff6f1941d.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

