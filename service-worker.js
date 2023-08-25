const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  s + "/_app/immutable/entry/app.5b5fd60d.js",
  s + "/_app/immutable/assets/0.56f9550e.css",
  s + "/_app/immutable/nodes/0.36df6522.js",
  s + "/_app/immutable/nodes/1.e56f4e56.js",
  s + "/_app/immutable/nodes/2.dd5d61d7.js",
  s + "/_app/immutable/assets/3.ed9fc012.css",
  s + "/_app/immutable/nodes/3.81bd6d10.js",
  s + "/_app/immutable/assets/2022.ea540ae1.jpg",
  s + "/_app/immutable/assets/4.f9aa665c.css",
  s + "/_app/immutable/nodes/4.158040ae.js",
  s + "/_app/immutable/assets/2023.157ca517.jpg",
  s + "/_app/immutable/nodes/5.402123cc.js",
  s + "/_app/immutable/nodes/6.6ea170a8.js",
  s + "/_app/immutable/assets/Array.a1312612.css",
  s + "/_app/immutable/chunks/Array.0a01108a.js",
  s + "/_app/immutable/chunks/index.f0de9234.js",
  s + "/_app/immutable/chunks/scheduler.f5c80806.js",
  s + "/_app/immutable/chunks/singletons.27e0e6c3.js",
  s + "/_app/immutable/chunks/stores.0f07acde.js",
  s + "/_app/immutable/assets/stores.5af87148.css",
  s + "/_app/immutable/chunks/stores.0fbbd161.js",
  s + "/_app/immutable/entry/start.2d0d787e.js"
], o = [
  s + "/.nojekyll",
  s + "/icons/icon-192x192.png",
  s + "/icons/icon-256x256.png",
  s + "/icons/icon-384x384.png",
  s + "/icons/icon-512x512.png",
  s + "/manifest.webmanifest",
  s + "/robots.txt"
], l = "1692979452552", i = `cache-${l}`, p = [
  ...m,
  ...o
];
self.addEventListener("install", (a) => {
  async function t() {
    await (await caches.open(i)).addAll(p);
  }
  a.waitUntil(t());
});
self.addEventListener("activate", (a) => {
  async function t() {
    for (const e of await caches.keys())
      e !== i && await caches.delete(e);
  }
  a.waitUntil(t());
});
self.addEventListener("fetch", (a) => {
  if (a.request.method !== "GET")
    return;
  async function t() {
    const e = new URL(a.request.url), n = await caches.open(i);
    if (p.includes(e.pathname))
      return n.match(e.pathname);
    try {
      const c = await fetch(a.request);
      return c.status === 200 && n.put(a.request, c.clone()), c;
    } catch {
      return n.match(a.request);
    }
  }
  a.respondWith(t());
});
