const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  s + "/_app/immutable/entry/app.00356a87.js",
  s + "/_app/immutable/assets/0.16679bad.css",
  s + "/_app/immutable/nodes/0.6270977a.js",
  s + "/_app/immutable/nodes/1.95ae9d08.js",
  s + "/_app/immutable/nodes/2.dd5d61d7.js",
  s + "/_app/immutable/assets/3.ed9fc012.css",
  s + "/_app/immutable/nodes/3.bdf8379f.js",
  s + "/_app/immutable/assets/2022.ea540ae1.jpg",
  s + "/_app/immutable/assets/4.5f2922c1.css",
  s + "/_app/immutable/nodes/4.342b1713.js",
  s + "/_app/immutable/assets/2023.157ca517.jpg",
  s + "/_app/immutable/nodes/5.402123cc.js",
  s + "/_app/immutable/nodes/6.6ea170a8.js",
  s + "/_app/immutable/assets/Array.a1312612.css",
  s + "/_app/immutable/chunks/Array.2a51c947.js",
  s + "/_app/immutable/chunks/index.f0de9234.js",
  s + "/_app/immutable/chunks/scheduler.f5c80806.js",
  s + "/_app/immutable/chunks/singletons.af02c762.js",
  s + "/_app/immutable/chunks/stores.0f07acde.js",
  s + "/_app/immutable/assets/stores.5af87148.css",
  s + "/_app/immutable/chunks/stores.22fb0887.js",
  s + "/_app/immutable/entry/start.70570836.js"
], o = [
  s + "/.nojekyll",
  s + "/icons/icon-192x192.png",
  s + "/icons/icon-256x256.png",
  s + "/icons/icon-384x384.png",
  s + "/icons/icon-512x512.png",
  s + "/manifest.webmanifest",
  s + "/robots.txt"
], l = "1692971482179", i = `cache-${l}`, p = [
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
    const e = new URL(a.request.url), c = await caches.open(i);
    if (p.includes(e.pathname))
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
