const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  s + "/_app/immutable/entry/app.677364fa.js",
  s + "/_app/immutable/assets/0.6f47c843.css",
  s + "/_app/immutable/nodes/0.c7d091f5.js",
  s + "/_app/immutable/nodes/1.e8b47cf4.js",
  s + "/_app/immutable/nodes/2.402123cc.js",
  s + "/_app/immutable/assets/3.ed9fc012.css",
  s + "/_app/immutable/nodes/3.3598c30e.js",
  s + "/_app/immutable/assets/2022.ea540ae1.jpg",
  s + "/_app/immutable/assets/4.f9aa665c.css",
  s + "/_app/immutable/nodes/4.79d6b8d4.js",
  s + "/_app/immutable/assets/2023.157ca517.jpg",
  s + "/_app/immutable/nodes/5.402123cc.js",
  s + "/_app/immutable/nodes/6.c6241913.js",
  s + "/_app/immutable/assets/7.568b7da3.css",
  s + "/_app/immutable/nodes/7.02e3db32.js",
  s + "/_app/immutable/assets/QRCodeDisplay.5e98f770.css",
  s + "/_app/immutable/chunks/QRCodeDisplay.4ee46b97.js",
  s + "/_app/immutable/chunks/_commonjsHelpers.9e89147a.js",
  s + "/_app/immutable/assets/_commonjsHelpers.f67b3dcb.css",
  s + "/_app/immutable/chunks/array.463eb1be.js",
  s + "/_app/immutable/assets/array.147dff0f.css",
  s + "/_app/immutable/chunks/index.a3c86b5d.js",
  s + "/_app/immutable/chunks/index.f0de9234.js",
  s + "/_app/immutable/chunks/scheduler.f5c80806.js",
  s + "/_app/immutable/chunks/singletons.cef8863c.js",
  s + "/_app/immutable/chunks/stores.cf5475d0.js",
  s + "/_app/immutable/entry/start.08e669cb.js"
], l = [
  s + "/.nojekyll",
  s + "/icons/icon-192x192.png",
  s + "/icons/icon-256x256.png",
  s + "/icons/icon-384x384.png",
  s + "/icons/icon-512x512.png",
  s + "/manifest.webmanifest",
  s + "/robots.txt"
], o = "1693515253925", p = `cache-${o}`, i = [
  ...m,
  ...l
];
self.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(p)).addAll(i);
  }
  e.waitUntil(t());
});
self.addEventListener("activate", (e) => {
  async function t() {
    for (const a of await caches.keys())
      a !== p && await caches.delete(a);
  }
  e.waitUntil(t());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function t() {
    const a = new URL(e.request.url), c = await caches.open(p);
    if (i.includes(a.pathname))
      return c.match(a.pathname);
    try {
      const n = await fetch(e.request);
      return n.status === 200 && c.put(e.request, n.clone()), n;
    } catch {
      return c.match(e.request);
    }
  }
  e.respondWith(t());
});
