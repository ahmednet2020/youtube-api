'use strict';
const CACHE_NAME = 'v1.0.1';
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
// active event
self.addEventListener('activate', e => {
  // delete any old caches
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map( key => (key === CACHE_NAME ? key:caches.delete(key)) )
    ))
    .then(() => {
      console.log('remove the old cashe done');
    })
    .catch(() => {
      console.log('remove old caches faild');
    })
  );
});