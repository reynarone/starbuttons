importScripts("/precache-manifest.84ee4561d33a9d8eeced5f2533d58f56.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

