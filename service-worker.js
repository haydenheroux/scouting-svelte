const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/_app/immutable/entry/app.62ba68fb.js",
  a + "/_app/immutable/assets/0.ff8cab10.css",
  a + "/_app/immutable/nodes/0.e1f22cb6.js",
  a + "/_app/immutable/nodes/1.6c95cb9b.js",
  a + "/_app/immutable/assets/2.e0e9b41e.css",
  a + "/_app/immutable/nodes/2.658a2728.js",
  a + "/_app/immutable/assets/3.ed9fc012.css",
  a + "/_app/immutable/nodes/3.d033d78d.js",
  a + "/_app/immutable/assets/2022.ea540ae1.jpg",
  a + "/_app/immutable/assets/4.f9aa665c.css",
  a + "/_app/immutable/nodes/4.79e0e7c9.js",
  a + "/_app/immutable/assets/2023.157ca517.jpg",
  a + "/_app/immutable/nodes/5.6c08f0d6.js",
  a + "/_app/immutable/nodes/6.22890a1f.js",
  a + "/_app/immutable/assets/ParticipantSelector.63f29628.css",
  a + "/_app/immutable/assets/QRCodeDisplay.5e98f770.css",
  a + "/_app/immutable/assets/Serialized.f67b3dcb.css",
  a + "/_app/immutable/chunks/ParticipantSelector.222b0b51.js",
  a + "/_app/immutable/chunks/QRCodeDisplay.b30523a9.js",
  a + "/_app/immutable/chunks/Serialized.186bdc36.js",
  a + "/_app/immutable/chunks/array.95eba9fd.js",
  a + "/_app/immutable/assets/array.20e86b96.css",
  a + "/_app/immutable/chunks/index.8ad9ff12.js",
  a + "/_app/immutable/chunks/index.dcec8585.js",
  a + "/_app/immutable/chunks/scheduler.cc2b1be1.js",
  a + "/_app/immutable/chunks/singletons.8053428b.js",
  a + "/_app/immutable/chunks/stores.9aae1748.js",
  a + "/_app/immutable/entry/start.b97c2f04.js"
], l = [
  a + "/.nojekyll",
  a + "/icons/icon-192x192.png",
  a + "/icons/icon-256x256.png",
  a + "/icons/icon-384x384.png",
  a + "/icons/icon-512x512.png",
  a + "/manifest.webmanifest",
  a + "/robots.txt"
], u = "1693156623761", n = `cache-${u}`, p = [
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
