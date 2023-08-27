const s = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  s + "/_app/immutable/entry/app.992eb550.js",
  s + "/_app/immutable/assets/0.ff8cab10.css",
  s + "/_app/immutable/nodes/0.60de9b2c.js",
  s + "/_app/immutable/nodes/1.f9a1617f.js",
  s + "/_app/immutable/nodes/2.14ff0b4e.js",
  s + "/_app/immutable/assets/3.ed9fc012.css",
  s + "/_app/immutable/nodes/3.ed57de03.js",
  s + "/_app/immutable/assets/2022.ea540ae1.jpg",
  s + "/_app/immutable/assets/4.f9aa665c.css",
  s + "/_app/immutable/nodes/4.a525487d.js",
  s + "/_app/immutable/assets/2023.157ca517.jpg",
  s + "/_app/immutable/nodes/5.6c08f0d6.js",
  s + "/_app/immutable/nodes/6.23eea050.js",
  s + "/_app/immutable/assets/7.568b7da3.css",
  s + "/_app/immutable/nodes/7.8bf180f4.js",
  s + "/_app/immutable/assets/ParticipantSelector.29b96609.css",
  s + "/_app/immutable/assets/QRCodeDisplay.5e98f770.css",
  s + "/_app/immutable/chunks/ParticipantSelector.d186a689.js",
  s + "/_app/immutable/chunks/QRCodeDisplay.e6a43f27.js",
  s + "/_app/immutable/chunks/Serialized.34ed9f12.js",
  s + "/_app/immutable/chunks/_commonjsHelpers.48a303f3.js",
  s + "/_app/immutable/chunks/array.6562449c.js",
  s + "/_app/immutable/assets/array.20e86b96.css",
  s + "/_app/immutable/chunks/index.8ad9ff12.js",
  s + "/_app/immutable/chunks/index.dcec8585.js",
  s + "/_app/immutable/chunks/scheduler.cc2b1be1.js",
  s + "/_app/immutable/chunks/singletons.872552a5.js",
  s + "/_app/immutable/chunks/stores.20884ff7.js",
  s + "/_app/immutable/chunks/stores.421d1905.js",
  s + "/_app/immutable/assets/stores.f67b3dcb.css",
  s + "/_app/immutable/entry/start.39abffc7.js"
], l = [
  s + "/.nojekyll",
  s + "/icons/icon-192x192.png",
  s + "/icons/icon-256x256.png",
  s + "/icons/icon-384x384.png",
  s + "/icons/icon-512x512.png",
  s + "/manifest.webmanifest",
  s + "/robots.txt"
], u = "1693165011395", p = `cache-${u}`, i = [
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
