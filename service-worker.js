if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let t={};const r=e=>s(e,f),a={module:{uri:f},exports:t,require:r};i[f]=Promise.all(n.map((e=>a[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-13d8ee68"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa-v2"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"css/base.css",revision:"2d42e9116679489cc8950582a981ff1f"},{url:"css/index.css",revision:"879260f0a1a89d6ea15da2089f024d68"},{url:"css/page.css",revision:"bd88ef01173d9f335892db78ffbafea8"},{url:"img/favico.png",revision:"c470398c2a6b403059bff6a83bf01bd6"},{url:"index.html",revision:"0f996a9cb2170588b1f5a75e03a59fcf"},{url:"pages/cli/index.html",revision:"fea751cdce636399817803640dca2e35"},{url:"pages/core/index.html",revision:"0411a31a1d22a068abf3d3c755b5e52f"},{url:"pages/eleventy-plugin/index.html",revision:"77188c67f1c9277901bac34bf5c9bf0e"},{url:"pages/esbuild-plugin/index.html",revision:"c68b2093b390e769bf45eaa36ab01bb0"},{url:"pages/eslint-plugin/index.html",revision:"bc5e5d202abe89cec72a3d38c6665fca"},{url:"pages/new-website-guide/index.html",revision:"c72fbd5c5c358035607830519c591025"},{url:"pages/parser/index.html",revision:"e3e060f7af28792aeac6651bae62e4f2"},{url:"pages/test-utils/index.html",revision:"64a9f3a8ac8b3b408cd57e3c639f66a8"},{url:"pages/validator/index.html",revision:"831ccb5432efa182f563f43a816fda52"},{url:"tybalt-out.js",revision:"91b31133290900339e58bf22190d0796"}],{}),e.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
