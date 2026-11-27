const CACHE_NAME = 'train-1881-offline-v1';

// Danh sách các file cần lưu sẵn để dùng khi mất mạng
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './logo.png',
  './bird.jpg',
  // Ảnh các ly thành phẩm
  './thanhlong.jpg', './sling.jpg', './aperol.jpg', './god.jpg',
  './hurricane.jpg', './bloodsand.jpg', './tequilasunrise.jpg',
  './comcocktail.jpg', './mangolac.jpg', './penicillin.jpg',
  './watermelon.jpg', './mojito.jpg', './margarita.jpg',
  './coffee.jpg', './daiquiri.jpg', './maitai.jpg', './sex.jpg',
  './longisland.jpg', './sangria.jpg', './lady.jpg', './pina.jpg',
  './matini.jpg', './paloma.jpg', './old.jpg', './negroni.jpg',
  './drymatini.jpg', './vodkasour.jpg', './cloud.jpg', './kiss.jpg',
  './redrum.jpg', './sofa.jpg', './frozenci.jpg', './mangoshake.jpg',
  './watermelonspritz.jpg', './bluelagoon.jpg', './jackfrost.jpg',
  './rose2.PNG', './tropicaldusk.jpg', './localhanoi.jpg',
  './greenmountain.jpg', './yellowred.jpg', './oceania.jpg',
  './coke.jpg', './jagerbomb.jpg', './tonic.jpg', './vodka redbull.jpg',
  // Ảnh các chai rượu & nguyên liệu
  './vangno1881.jpg', './bombay1881.jpg', './cherry1881.jpg',
  './cointreau1881.jpg', './angostura1881.jpg', './aperol1881.jpg',
  './darkrum1881.jpg', './campari1881.jpg', './jimbean1881.jpg',
  './amaretto1881.jpg', './bacardi1881.jpg', './vermouth1881.jpg',
  './tequila1881.jpg', './pandan1881.jpg', './malibu1881.jpg',
  './vodka1881.jpg', './kahlua1881.jpg', './vangdo1881.jpg',
  './extradry1881.jpg', './baileys1881.jpg', './jagermeister1881.jpg',
  './moninbuoi1881.jpg', './moninrose1881.jpg', './elderflower1881.jpg',
  './giffarddao1881.jpg', './daubiec1881.jpg',
  './vitajus.jpg', './atiso.jpg', './taoluu.jpg', './nuoccam.jpg', './nuoctao.jpg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Dùng Promise.allSettled để nếu thiếu 1-2 file ảnh cũng không làm hỏng toàn bộ quá trình lưu offline
      return Promise.allSettled(
        ASSETS_TO_CACHE.map((url) => cache.add(url))
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Chiến lược: Có mạng thì ưu tiên lấy bản mới (và lưu đè), mất mạng thì lấy từ Cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
