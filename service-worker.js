const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/_app/immutable/entry/app.248d9b48.js",
  a + "/_app/immutable/assets/0.ccedaa50.css",
  a + "/_app/immutable/nodes/0.f5cec28a.js",
  a + "/_app/immutable/nodes/1.59c184e9.js",
  a + "/_app/immutable/nodes/2.31737a41.js",
  a + "/_app/immutable/assets/3.ed9fc012.css",
  a + "/_app/immutable/nodes/3.2fbf128b.js",
  a + "/_app/immutable/assets/2022.ea540ae1.jpg",
  a + "/_app/immutable/assets/4.f9aa665c.css",
  a + "/_app/immutable/nodes/4.5793b87f.js",
  a + "/_app/immutable/assets/2023.157ca517.jpg",
  a + "/_app/immutable/nodes/5.6c08f0d6.js",
  a + "/_app/immutable/nodes/6.89f1a03a.js",
  a + "/_app/immutable/assets/7.568b7da3.css",
  a + "/_app/immutable/nodes/7.5c3ca3b8.js",
  a + "/_app/immutable/assets/ParticipantSelector.29b96609.css",
  a + "/_app/immutable/assets/QRCodeDisplay.5e98f770.css",
  a + "/_app/immutable/chunks/ParticipantSelector.85f4921b.js",
  a + "/_app/immutable/chunks/QRCodeDisplay.e6a43f27.js",
  a + "/_app/immutable/chunks/Serialized.34ed9f12.js",
  a + "/_app/immutable/chunks/_commonjsHelpers.48a303f3.js",
  a + "/_app/immutable/chunks/array.baeae234.js",
  a + "/_app/immutable/assets/array.20e86b96.css",
  a + "/_app/immutable/chunks/index.8ad9ff12.js",
  a + "/_app/immutable/chunks/index.dcec8585.js",
  a + "/_app/immutable/chunks/scheduler.cc2b1be1.js",
  a + "/_app/immutable/chunks/singletons.7b597928.js",
  a + "/_app/immutable/chunks/stores.2b7084df.js",
  a + "/_app/immutable/assets/stores.f67b3dcb.css",
  a + "/_app/immutable/chunks/stores.f6bf0c28.js",
  a + "/_app/immutable/entry/start.869abb11.js"
], l = [
  a + "/.nojekyll",
  a + "/icons/icon-192x192.png",
  a + "/icons/icon-256x256.png",
  a + "/icons/icon-384x384.png",
  a + "/icons/icon-512x512.png",
  a + "/manifest.webmanifest",
  a + "/robots.txt"
], u = "1693231655178", p = `cache-${u}`, i = [
  ...m,
  ...l
];
self.addEventListener("install", (s) => {
  async function t() {
    await (await caches.open(p)).addAll(i);
  }
  s.waitUntil(t());
});
self.addEventListener("activate", (s) => {
  async function t() {
    for (const e of await caches.keys())
      e !== p && await caches.delete(e);
  }
  s.waitUntil(t());
});
self.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET")
    return;
  async function t() {
    const e = new URL(s.request.url), c = await caches.open(p);
    if (i.includes(e.pathname))
      return c.match(e.pathname);
    try {
      const n = await fetch(s.request);
      return n.status === 200 && c.put(s.request, n.clone()), n;
    } catch {
      return c.match(s.request);
    }
  }
  s.respondWith(t());
});
