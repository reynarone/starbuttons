importScripts("/precache-manifest.3d36d2bc2a85a4b3fa952ed882252973.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

