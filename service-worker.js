const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/_app/immutable/entry/app.3c3d1070.js",
  a + "/_app/immutable/assets/0.ff8cab10.css",
  a + "/_app/immutable/nodes/0.c84b9881.js",
  a + "/_app/immutable/nodes/1.d1143d67.js",
  a + "/_app/immutable/assets/2.e0e9b41e.css",
  a + "/_app/immutable/nodes/2.3f386829.js",
  a + "/_app/immutable/assets/3.ed9fc012.css",
  a + "/_app/immutable/nodes/3.726b4e89.js",
  a + "/_app/immutable/assets/2022.ea540ae1.jpg",
  a + "/_app/immutable/assets/4.f9aa665c.css",
  a + "/_app/immutable/nodes/4.49423fe1.js",
  a + "/_app/immutable/assets/2023.157ca517.jpg",
  a + "/_app/immutable/nodes/5.75d4207d.js",
  a + "/_app/immutable/nodes/6.52c861ab.js",
  a + "/_app/immutable/assets/ParticipantSelector.63f29628.css",
  a + "/_app/immutable/assets/QRCodeDisplay.5e98f770.css",
  a + "/_app/immutable/assets/Serialized.f67b3dcb.css",
  a + "/_app/immutable/chunks/ParticipantSelector.cff9790a.js",
  a + "/_app/immutable/chunks/QRCodeDisplay.30cf7a5d.js",
  a + "/_app/immutable/chunks/Serialized.5e6880e2.js",
  a + "/_app/immutable/chunks/array.d47550cb.js",
  a + "/_app/immutable/assets/array.20e86b96.css",
  a + "/_app/immutable/chunks/index.8ad9ff12.js",
  a + "/_app/immutable/chunks/index.94fd8e8e.js",
  a + "/_app/immutable/chunks/scheduler.cc2b1be1.js",
  a + "/_app/immutable/chunks/singletons.b2ac33d7.js",
  a + "/_app/immutable/chunks/stores.b4d73916.js",
  a + "/_app/immutable/entry/start.12294ff0.js"
], l = [
  a + "/.nojekyll",
  a + "/icons/icon-192x192.png",
  a + "/icons/icon-256x256.png",
  a + "/icons/icon-384x384.png",
  a + "/icons/icon-512x512.png",
  a + "/manifest.webmanifest",
  a + "/robots.txt"
], u = "1693159208423", n = `cache-${u}`, p = [
  ...m,
  ...l
];
self.addEventListener("install", (s) => {
  async function t() {
    await (await caches.open(n)).addAll(p);
  }
  s.waitUntil(t());
});
self.addEventListener("activate", (s) => {
  async function t() {
    for (const e of await caches.keys())
      e !== n && await caches.delete(e);
  }
  s.waitUntil(t());
});
self.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET")
    return;
  async function t() {
    const e = new URL(s.request.url), c = await caches.open(n);
    if (p.includes(e.pathname))
      return c.match(e.pathname);
    try {
      const i = await fetch(s.request);
      return i.status === 200 && c.put(s.request, i.clone()), i;
    } catch {
      return c.match(s.request);
    }
  }
  s.respondWith(t());
});
