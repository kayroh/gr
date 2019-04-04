importScripts("/gr/precache-manifest.ef65d5d8b776545a389f73a9b140657c.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('message', msg => {
  if (msg.data.action == 'skipWaiting') {
    self.skipWaiting()
  }
})

