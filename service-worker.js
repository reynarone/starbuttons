importScripts("/precache-manifest.df34ed557d5c0887ec88c6f66277f557.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

