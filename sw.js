// Offline-Cache für den Stern von Afrika.
// Seite: erst Netz, dann Cache (Updates kommen sofort an). Bilder/Icons: Cache zuerst. Schriften: aus dem Cache, im Hintergrund auffrischen.
const VERSION = 'sva-8';
const CORE = [
  './', './index.html', './stern-von-afrika-relief.jpg', './manifest.webmanifest',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon-32.png',
];
// Stadtfotos für die Ankunftsfilme: werden nach der Installation im Hintergrund geladen, damit sie offline da sind.
const CITY_IDS = 'addis agadez algier assuan bahr bengasi dakar darfur durban freetown goldkueste guardafui kairo kalahari kamerun kanaren kano kapstadt kapverde katanga khartum kongo kufra luanda marrakesch massaua mogadischu mombasa mosambik sansibar siwa sklavenkueste stanley sthelena suakin tamanrasset tamatave tanger tibesti timbuktu transvaal tripolis tschadsee tulear tunis victoriafaelle victoriasee walfisch'.split(' ');
const PHOTOS = CITY_IDS.map(id => `./cities/${id}.jpg`);

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim())
    .then(() => { caches.open(VERSION).then(c => Promise.all(PHOTOS.map(u => c.match(u).then(hit => hit || c.add(u).catch(() => {}))))); }));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(VERSION).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  // Teilanfragen (Audio in Safari) direkt ans Netz, der Cache kann keine 206-Antworten liefern
  if (req.headers.has('range')) return;

  if (req.mode === 'navigate') {
    e.respondWith(fetch(req)
      .then(r => {
        const isGame = /\/(index\.html)?$/.test(url.pathname);
        if (r.ok && isGame) { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); }
        return r;
      })
      .catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return r;
  })));
});
