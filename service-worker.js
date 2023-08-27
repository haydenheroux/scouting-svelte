const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/_app/immutable/entry/app.61af16aa.js",
  a + "/_app/immutable/assets/0.ff8cab10.css",
  a + "/_app/immutable/nodes/0.d0730650.js",
  a + "/_app/immutable/nodes/1.d0c09ca0.js",
  a + "/_app/immutable/nodes/2.99189c07.js",
  a + "/_app/immutable/assets/3.ed9fc012.css",
  a + "/_app/immutable/nodes/3.d7801022.js",
  a + "/_app/immutable/assets/2022.ea540ae1.jpg",
  a + "/_app/immutable/assets/4.f9aa665c.css",
  a + "/_app/immutable/nodes/4.16ac1f7a.js",
  a + "/_app/immutable/assets/2023.157ca517.jpg",
  a + "/_app/immutable/nodes/5.6c08f0d6.js",
  a + "/_app/immutable/nodes/6.4e1bcb7c.js",
  a + "/_app/immutable/assets/ParticipantSelector.63f29628.css",
  a + "/_app/immutable/assets/QRCode.5e98f770.css",
  a + "/_app/immutable/assets/Serialized.f67b3dcb.css",
  a + "/_app/immutable/chunks/ParticipantSelector.73ded163.js",
  a + "/_app/immutable/chunks/QRCode.bb0a4777.js",
  a + "/_app/immutable/chunks/Serialized.e699b113.js",
  a + "/_app/immutable/chunks/array.34c9c8cb.js",
  a + "/_app/immutable/assets/array.20e86b96.css",
  a + "/_app/immutable/chunks/index.8ad9ff12.js",
  a + "/_app/immutable/chunks/index.dcec8585.js",
  a + "/_app/immutable/chunks/scheduler.cc2b1be1.js",
  a + "/_app/immutable/chunks/singletons.02a43ebd.js",
  a + "/_app/immutable/chunks/stores.1cea99b9.js",
  a + "/_app/immutable/entry/start.28d76764.js"
], l = [
  a + "/.nojekyll",
  a + "/icons/icon-192x192.png",
  a + "/icons/icon-256x256.png",
  a + "/icons/icon-384x384.png",
  a + "/icons/icon-512x512.png",
  a + "/manifest.webmanifest",
  a + "/robots.txt"
], u = "1693096383354", i = `cache-${u}`, p = [
  ...m,
  ...l
];
self.addEventListener("install", (s) => {
  async function t() {
    await (await caches.open(i)).addAll(p);
  }
  s.waitUntil(t());
});
self.addEventListener("activate", (s) => {
  async function t() {
    for (const e of await caches.keys())
      e !== i && await caches.delete(e);
  }
  s.waitUntil(t());
});
self.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET")
    return;
  async function t() {
    const e = new URL(s.request.url), c = await caches.open(i);
    if (p.includes(e.pathname))
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
