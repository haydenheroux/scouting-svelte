const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  s + "/_app/immutable/entry/app.c690b0c1.js",
  s + "/_app/immutable/assets/0.0f2348e2.css",
  s + "/_app/immutable/nodes/0.4ccf59e6.js",
  s + "/_app/immutable/nodes/1.a97b1c2c.js",
  s + "/_app/immutable/nodes/2.402123cc.js",
  s + "/_app/immutable/assets/3.ed9fc012.css",
  s + "/_app/immutable/nodes/3.e5dec929.js",
  s + "/_app/immutable/assets/2022.ea540ae1.jpg",
  s + "/_app/immutable/assets/4.4b985043.css",
  s + "/_app/immutable/nodes/4.bf3ad556.js",
  s + "/_app/immutable/assets/2023.157ca517.jpg",
  s + "/_app/immutable/nodes/5.402123cc.js",
  s + "/_app/immutable/nodes/6.78dceaae.js",
  s + "/_app/immutable/assets/7.568b7da3.css",
  s + "/_app/immutable/nodes/7.5dd4dedd.js",
  s + "/_app/immutable/assets/QRCodeDisplay.5e98f770.css",
  s + "/_app/immutable/chunks/QRCodeDisplay.78fa1f71.js",
  s + "/_app/immutable/chunks/_commonjsHelpers.db51605f.js",
  s + "/_app/immutable/assets/_commonjsHelpers.f67b3dcb.css",
  s + "/_app/immutable/chunks/array.01fb68ac.js",
  s + "/_app/immutable/assets/array.04fdd944.css",
  s + "/_app/immutable/chunks/index.a3c86b5d.js",
  s + "/_app/immutable/chunks/index.f0de9234.js",
  s + "/_app/immutable/chunks/scheduler.f5c80806.js",
  s + "/_app/immutable/chunks/singletons.c0af8056.js",
  s + "/_app/immutable/chunks/stores.5dedb444.js",
  s + "/_app/immutable/entry/start.54124943.js"
], l = [
  s + "/.nojekyll",
  s + "/icons/icon-192x192.png",
  s + "/icons/icon-256x256.png",
  s + "/icons/icon-384x384.png",
  s + "/icons/icon-512x512.png",
  s + "/manifest.webmanifest",
  s + "/robots.txt"
], o = "1693787359981", p = `cache-${o}`, i = [
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
