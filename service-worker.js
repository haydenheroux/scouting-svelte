const a = /* @__PURE__ */ location.pathname.split("/").slice(0, -1).join("/"), m = [
  a + "/_app/immutable/entry/app.f812209c.js",
  a + "/_app/immutable/assets/0.ff8cab10.css",
  a + "/_app/immutable/nodes/0.99a7cc1f.js",
  a + "/_app/immutable/nodes/1.c488a3fb.js",
  a + "/_app/immutable/nodes/2.c99f89d1.js",
  a + "/_app/immutable/assets/3.ed9fc012.css",
  a + "/_app/immutable/nodes/3.92dac069.js",
  a + "/_app/immutable/assets/2022.ea540ae1.jpg",
  a + "/_app/immutable/assets/4.f9aa665c.css",
  a + "/_app/immutable/nodes/4.f2a12666.js",
  a + "/_app/immutable/assets/2023.157ca517.jpg",
  a + "/_app/immutable/nodes/5.6c08f0d6.js",
  a + "/_app/immutable/nodes/6.6f5b54f2.js",
  a + "/_app/immutable/assets/7.db90b7ab.css",
  a + "/_app/immutable/nodes/7.3c9bb8fb.js",
  a + "/_app/immutable/assets/ParticipantSelector.29b96609.css",
  a + "/_app/immutable/assets/QRCodeDisplay.5e98f770.css",
  a + "/_app/immutable/assets/QRCodeScanner.451c47fa.css",
  a + "/_app/immutable/chunks/ParticipantSelector.4e661304.js",
  a + "/_app/immutable/chunks/QRCodeDisplay.1d86869c.js",
  a + "/_app/immutable/chunks/QRCodeScanner.svelte_svelte_type_style_lang.cadf515d.js",
  a + "/_app/immutable/chunks/Serialized.34ed9f12.js",
  a + "/_app/immutable/chunks/array.60e7afac.js",
  a + "/_app/immutable/assets/array.20e86b96.css",
  a + "/_app/immutable/chunks/each.e59479a4.js",
  a + "/_app/immutable/chunks/index.8ad9ff12.js",
  a + "/_app/immutable/chunks/index.dcec8585.js",
  a + "/_app/immutable/chunks/scheduler.cc2b1be1.js",
  a + "/_app/immutable/chunks/singletons.1cfba631.js",
  a + "/_app/immutable/chunks/stores.a3aa959d.js",
  a + "/_app/immutable/assets/stores.f67b3dcb.css",
  a + "/_app/immutable/chunks/stores.fc0a7f5b.js",
  a + "/_app/immutable/entry/start.ca431f4c.js"
], l = [
  a + "/.nojekyll",
  a + "/icons/icon-192x192.png",
  a + "/icons/icon-256x256.png",
  a + "/icons/icon-384x384.png",
  a + "/icons/icon-512x512.png",
  a + "/manifest.webmanifest",
  a + "/robots.txt"
], u = "1693164229911", p = `cache-${u}`, i = [
  ...m,
  ...l
];
self.addEventListener("install", (s) => {
  async function t() {
    await (await caches.open(p)).addAll(i);
  }
  s.waitUntil(t());
});
self.addEventListener("activate", (s) => {
  async function t() {
    for (const e of await caches.keys())
      e !== p && await caches.delete(e);
  }
  s.waitUntil(t());
});
self.addEventListener("fetch", (s) => {
  if (s.request.method !== "GET")
    return;
  async function t() {
    const e = new URL(s.request.url), c = await caches.open(p);
    if (i.includes(e.pathname))
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
