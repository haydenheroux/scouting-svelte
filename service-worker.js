const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/_app/immutable/entry/app.6435fdc7.js",
  a + "/_app/immutable/assets/0.ff8cab10.css",
  a + "/_app/immutable/nodes/0.091e051e.js",
  a + "/_app/immutable/nodes/1.6cae1bc5.js",
  a + "/_app/immutable/assets/2.e0e9b41e.css",
  a + "/_app/immutable/nodes/2.d439a2aa.js",
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
  a + "/_app/immutable/chunks/singletons.103f85ea.js",
  a + "/_app/immutable/chunks/stores.ae2e0d25.js",
  a + "/_app/immutable/entry/start.d2153400.js"
], l = [
  a + "/.nojekyll",
  a + "/icons/icon-192x192.png",
  a + "/icons/icon-256x256.png",
  a + "/icons/icon-384x384.png",
  a + "/icons/icon-512x512.png",
  a + "/manifest.webmanifest",
  a + "/robots.txt"
], u = "1693158659155", n = `cache-${u}`, p = [
  ...m,
  ...l
];
self.addEventListener("install", (e) => {
  async function t() {
    await (await caches.open(n)).addAll(p);
  }
  e.waitUntil(t());
});
self.addEventListener("activate", (e) => {
  async function t() {
    for (const s of await caches.keys())
      s !== n && await caches.delete(s);
  }
  e.waitUntil(t());
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET")
    return;
  async function t() {
    const s = new URL(e.request.url), c = await caches.open(n);
    if (p.includes(s.pathname))
      return c.match(s.pathname);
    try {
      const i = await fetch(e.request);
      return i.status === 200 && c.put(e.request, i.clone()), i;
    } catch {
      return c.match(e.request);
    }
  }
  e.respondWith(t());
});
