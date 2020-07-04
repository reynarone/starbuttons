importScripts("/precache-manifest.7fc56f72892b4c257c3c003790f68cf2.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

