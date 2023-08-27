const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/_app/immutable/entry/app.a31a0868.js",
  a + "/_app/immutable/assets/0.ff8cab10.css",
  a + "/_app/immutable/nodes/0.a4764776.js",
  a + "/_app/immutable/nodes/1.0dc8f6eb.js",
  a + "/_app/immutable/assets/2.451c47fa.css",
  a + "/_app/immutable/nodes/2.961a20f3.js",
  a + "/_app/immutable/assets/3.ed9fc012.css",
  a + "/_app/immutable/nodes/3.b20b77df.js",
  a + "/_app/immutable/assets/2022.ea540ae1.jpg",
  a + "/_app/immutable/assets/4.f9aa665c.css",
  a + "/_app/immutable/nodes/4.5f87a842.js",
  a + "/_app/immutable/assets/2023.157ca517.jpg",
  a + "/_app/immutable/nodes/5.6097e5c4.js",
  a + "/_app/immutable/nodes/6.32d1c8d4.js",
  a + "/_app/immutable/nodes/7.c7a1dbc1.js",
  a + "/_app/immutable/assets/ParticipantSelector.63f29628.css",
  a + "/_app/immutable/assets/QRCodeDisplay.5e98f770.css",
  a + "/_app/immutable/assets/Serialized.f67b3dcb.css",
  a + "/_app/immutable/chunks/ParticipantSelector.5620e605.js",
  a + "/_app/immutable/chunks/QRCodeDisplay.1d1f9bdd.js",
  a + "/_app/immutable/chunks/Serialized.96c12258.js",
  a + "/_app/immutable/chunks/array.359cc280.js",
  a + "/_app/immutable/assets/array.20e86b96.css",
  a + "/_app/immutable/chunks/each.e59479a4.js",
  a + "/_app/immutable/chunks/index.27f45226.js",
  a + "/_app/immutable/chunks/index.8ad9ff12.js",
  a + "/_app/immutable/chunks/scheduler.cc2b1be1.js",
  a + "/_app/immutable/chunks/singletons.c868a6cd.js",
  a + "/_app/immutable/chunks/stores.3e932b7a.js",
  a + "/_app/immutable/chunks/stores.498fa042.js",
  a + "/_app/immutable/entry/start.4fb4792b.js"
], l = [
  a + "/.nojekyll",
  a + "/icons/icon-192x192.png",
  a + "/icons/icon-256x256.png",
  a + "/icons/icon-384x384.png",
  a + "/icons/icon-512x512.png",
  a + "/manifest.webmanifest",
  a + "/robots.txt"
], u = "1693161117717", n = `cache-${u}`, p = [
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
