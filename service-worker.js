const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  s + "/_app/immutable/entry/app.2dfd69b8.js",
  s + "/_app/immutable/assets/0.4a3e72f3.css",
  s + "/_app/immutable/nodes/0.0c3b94db.js",
  s + "/_app/immutable/nodes/1.58a43e31.js",
  s + "/_app/immutable/nodes/2.402123cc.js",
  s + "/_app/immutable/assets/3.f574c9fe.css",
  s + "/_app/immutable/nodes/3.21fc1e58.js",
  s + "/_app/immutable/assets/2022.ea540ae1.jpg",
  s + "/_app/immutable/assets/4.9b7e2df4.css",
  s + "/_app/immutable/nodes/4.5a5d785b.js",
  s + "/_app/immutable/assets/2023.157ca517.jpg",
  s + "/_app/immutable/nodes/5.402123cc.js",
  s + "/_app/immutable/nodes/6.2c9c61a5.js",
  s + "/_app/immutable/assets/7.94ab062d.css",
  s + "/_app/immutable/nodes/7.78026692.js",
  s + "/_app/immutable/assets/QRCodeDisplay.5406a6c2.css",
  s + "/_app/immutable/chunks/QRCodeDisplay.4a2dd712.js",
  s + "/_app/immutable/chunks/_commonjsHelpers.c1e8e212.js",
  s + "/_app/immutable/assets/_commonjsHelpers.9f5f45fb.css",
  s + "/_app/immutable/chunks/array.f66511a3.js",
  s + "/_app/immutable/assets/array.a36a1326.css",
  s + "/_app/immutable/chunks/index.a3c86b5d.js",
  s + "/_app/immutable/chunks/index.f0de9234.js",
  s + "/_app/immutable/chunks/scheduler.f5c80806.js",
  s + "/_app/immutable/chunks/singletons.d950eeb9.js",
  s + "/_app/immutable/chunks/stores.a5f5887e.js",
  s + "/_app/immutable/entry/start.bcba5cca.js"
], l = [
  s + "/.nojekyll",
  s + "/icons/icon-192x192.png",
  s + "/icons/icon-256x256.png",
  s + "/icons/icon-384x384.png",
  s + "/icons/icon-512x512.png",
  s + "/manifest.webmanifest",
  s + "/robots.txt"
], o = "1694455060130", p = `cache-${o}`, i = [...m, ...l];
self.addEventListener("install", (a) => {
  async function t() {
    await (await caches.open(p)).addAll(i);
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  async function t() {
    for (const e of await caches.keys())
      e !== p && await caches.delete(e);
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const e = new URL(a.request.url), c = await caches.open(p);
    if (i.includes(e.pathname))
      return c.match(e.pathname);
    try {
      const n = await fetch(a.request);
      return n.status === 200 && c.put(a.request, n.clone()), n;
    } catch {
      return c.match(a.request);
    }
  }
  a.respondWith(t());
});
