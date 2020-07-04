importScripts("/precache-manifest.f1236520b11624165ee0cef867f8ddbd.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

