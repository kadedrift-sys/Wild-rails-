const C='wr-v2',A=['./','index.html','manifest.json','icon-192.png','icon-512.png','https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.all(A.map(u=>fetch(u,{mode:'cors'}).then(r=>r.ok&&c.put(u,r)).catch(()=>{})))))});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(m=>m||fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r}).catch(()=>m)))});
