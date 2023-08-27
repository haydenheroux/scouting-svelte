const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/_app/immutable/entry/app.18f74c13.js",
  a + "/_app/immutable/assets/0.ff8cab10.css",
  a + "/_app/immutable/nodes/0.2ff0e677.js",
  a + "/_app/immutable/nodes/1.620f805d.js",
  a + "/_app/immutable/assets/2.e0e9b41e.css",
  a + "/_app/immutable/nodes/2.e9611f41.js",
  a + "/_app/immutable/assets/3.ed9fc012.css",
  a + "/_app/immutable/nodes/3.fcf2fa13.js",
  a + "/_app/immutable/assets/2022.ea540ae1.jpg",
  a + "/_app/immutable/assets/4.f9aa665c.css",
  a + "/_app/immutable/nodes/4.b8c075dc.js",
  a + "/_app/immutable/assets/2023.157ca517.jpg",
  a + "/_app/immutable/nodes/5.6c08f0d6.js",
  a + "/_app/immutable/nodes/6.a0fff141.js",
  a + "/_app/immutable/assets/ParticipantSelector.63f29628.css",
  a + "/_app/immutable/assets/QRCodeDisplay.5e98f770.css",
  a + "/_app/immutable/assets/Serialized.f67b3dcb.css",
  a + "/_app/immutable/chunks/ParticipantSelector.222b0b51.js",
  a + "/_app/immutable/chunks/QRCodeDisplay.67d77d61.js",
  a + "/_app/immutable/chunks/Serialized.186bdc36.js",
  a + "/_app/immutable/chunks/array.cdcd90bc.js",
  a + "/_app/immutable/assets/array.20e86b96.css",
  a + "/_app/immutable/chunks/index.8ad9ff12.js",
  a + "/_app/immutable/chunks/index.dcec8585.js",
  a + "/_app/immutable/chunks/scheduler.cc2b1be1.js",
  a + "/_app/immutable/chunks/singletons.31695ef2.js",
  a + "/_app/immutable/chunks/stores.5ea1bd7a.js",
  a + "/_app/immutable/entry/start.7a3a7354.js"
], l = [
  a + "/.nojekyll",
  a + "/icons/icon-192x192.png",
  a + "/icons/icon-256x256.png",
  a + "/icons/icon-384x384.png",
  a + "/icons/icon-512x512.png",
  a + "/manifest.webmanifest",
  a + "/robots.txt"
], u = "1693157399897", n = `cache-${u}`, p = [
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
