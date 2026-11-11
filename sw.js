const CACHE_NAME = 'cocktail-cache-v1';

// Lắng nghe sự kiện lấy dữ liệu: Nếu trong bộ nhớ máy có ảnh thì lấy ra ngay lập tức
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Trả về ảnh từ máy ngay lập tức (0s)
      }
      return fetch(event.request).then((networkResponse) => {
        // Nếu chưa có thì tải từ mạng về đồng thời lưu bản copy vào máy cho lần sau
        if (event.request.url.match(/\.(jpg|jpeg|png|webp)$/i)) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      });
    })
  );
});
