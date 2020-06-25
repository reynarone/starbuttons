importScripts("/precache-manifest.0cf0f572bbacd606dcb9914212dd8a8f.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

