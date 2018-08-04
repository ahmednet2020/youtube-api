'use strict';
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  './index.html',
  './css/main.min.css',
  './js/main.min.js'
];
//install event
self.addEventListener('install',(e) => {
  // Perform install steps
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then((cache) => self.skipWaiting())
      .catch((err)=> {
      	console.log(`open cashes erro: ${err}`)
      })
  );
});