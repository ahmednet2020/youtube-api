'use strict';
const CACHE_NAME = 'v1.1.2';
const urlsToCache = [
  './index.html',
  './css/main.min.css',
  './js/main.min.js'
];
//install event
self.addEventListener('install',(e) => {
  console.log("service-workers install");
  // Perform install steps
  // e.waitUntil(
  //   caches.open(CACHE_NAME)
  //     .then((cache) => {
  //       console.log('Opened cache');
  //       return cache.addAll(urlsToCache);
  //     })
  //     .then((cache) => self.skipWaiting())
  //     .catch((err)=> {
  //     	console.log(`open cashes erro: ${err}`)
  //     })
  // );
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
// fetch event
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(e.request).then((response) => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            let responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(e.request, responseToCache);
              });
            return response;
          }
        );
      })
      .catch(() => caches.match(e.request))
    );
});