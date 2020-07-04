importScripts("/precache-manifest.f8be9db19089d759d0bc743b12044e9d.js");

self.addEventListener("install", function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
  event.waitUntil(self.clients.claim());
});

