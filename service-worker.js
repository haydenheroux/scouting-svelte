const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  s + "/_app/immutable/entry/app.481ca6cb.js",
  s + "/_app/immutable/assets/0.ccedaa50.css",
  s + "/_app/immutable/nodes/0.22c20c26.js",
  s + "/_app/immutable/nodes/1.d38d2516.js",
  s + "/_app/immutable/nodes/2.481a6141.js",
  s + "/_app/immutable/assets/3.ed9fc012.css",
  s + "/_app/immutable/nodes/3.59fa8576.js",
  s + "/_app/immutable/assets/2022.ea540ae1.jpg",
  s + "/_app/immutable/assets/4.f9aa665c.css",
  s + "/_app/immutable/nodes/4.eebd31b5.js",
  s + "/_app/immutable/assets/2023.157ca517.jpg",
  s + "/_app/immutable/nodes/5.6c08f0d6.js",
  s + "/_app/immutable/nodes/6.58b0d558.js",
  s + "/_app/immutable/assets/7.568b7da3.css",
  s + "/_app/immutable/nodes/7.c1618286.js",
  s + "/_app/immutable/assets/ParticipantSelector.29b96609.css",
  s + "/_app/immutable/assets/QRCodeDisplay.5e98f770.css",
  s + "/_app/immutable/chunks/ParticipantSelector.65f1f5e7.js",
  s + "/_app/immutable/chunks/QRCodeDisplay.e6a43f27.js",
  s + "/_app/immutable/chunks/Serialized.34ed9f12.js",
  s + "/_app/immutable/chunks/_commonjsHelpers.48a303f3.js",
  s + "/_app/immutable/chunks/array.44b3bfde.js",
  s + "/_app/immutable/assets/array.20e86b96.css",
  s + "/_app/immutable/chunks/index.8ad9ff12.js",
  s + "/_app/immutable/chunks/index.dcec8585.js",
  s + "/_app/immutable/chunks/scheduler.cc2b1be1.js",
  s + "/_app/immutable/chunks/singletons.de3d91a7.js",
  s + "/_app/immutable/chunks/stores.22276eaf.js",
  s + "/_app/immutable/chunks/stores.97f42d2d.js",
  s + "/_app/immutable/assets/stores.f67b3dcb.css",
  s + "/_app/immutable/entry/start.8934352a.js"
], l = [
  s + "/.nojekyll",
  s + "/icons/icon-192x192.png",
  s + "/icons/icon-256x256.png",
  s + "/icons/icon-384x384.png",
  s + "/icons/icon-512x512.png",
  s + "/manifest.webmanifest",
  s + "/robots.txt"
], u = "1693257136988", p = `cache-${u}`, i = [
  ...m,
  ...l
];
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
