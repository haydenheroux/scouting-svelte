const s=location.pathname.split("/").slice(0,-1).join("/"),m=[s+"/_app/immutable/entry/app.3a4e59b9.js",s+"/_app/immutable/assets/0.50ca68c9.css",s+"/_app/immutable/nodes/0.527e5e60.js",s+"/_app/immutable/nodes/1.b1b8893c.js",s+"/_app/immutable/assets/2.a3ca3fc0.css",s+"/_app/immutable/nodes/2.7048f61d.js",s+"/_app/immutable/assets/2024.727eaabe.png",s+"/_app/immutable/assets/3.a2b7b966.css",s+"/_app/immutable/nodes/3.5beac897.js",s+"/_app/immutable/assets/4.fdb0df14.css",s+"/_app/immutable/nodes/4.873d570a.js",s+"/_app/immutable/assets/5.feb739a3.css",s+"/_app/immutable/nodes/5.e0680dbb.js",s+"/_app/immutable/chunks/_commonjsHelpers.725317a4.js",s+"/_app/immutable/chunks/each.e59479a4.js",s+"/_app/immutable/chunks/index.12e7b815.js",s+"/_app/immutable/chunks/index.2ffdc0f3.js",s+"/_app/immutable/chunks/metrics.2af593e2.js",s+"/_app/immutable/assets/metrics.5406a6c2.css",s+"/_app/immutable/chunks/scheduler.62f984e8.js",s+"/_app/immutable/chunks/singletons.ba1a9039.js",s+"/_app/immutable/chunks/stores.1845bf64.js",s+"/_app/immutable/chunks/stores.be4b110e.js",s+"/_app/immutable/assets/stores.9f5f45fb.css",s+"/_app/immutable/entry/start.d33e0315.js"],u=[s+"/.nojekyll",s+"/icons/icon-192x192.png",s+"/icons/icon-256x256.png",s+"/icons/icon-384x384.png",s+"/icons/icon-512x512.png",s+"/manifest.webmanifest",s+"/robots.txt"],l="1709383279149",i=`cache-${l}`,p=[...m,...u];self.addEventListener("install",e=>{async function t(){await(await caches.open(i)).addAll(p)}e.waitUntil(t())});self.addEventListener("activate",e=>{async function t(){for(const a of await caches.keys())a!==i&&await caches.delete(a)}e.waitUntil(t())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function t(){const a=new URL(e.request.url),c=await caches.open(i);if(p.includes(a.pathname))return c.match(a.pathname);try{const n=await fetch(e.request);return n.status===200&&c.put(e.request,n.clone()),n}catch{return c.match(e.request)}}e.respondWith(t())});
