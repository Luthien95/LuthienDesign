"use strict";var precacheConfig=[["/LuthienDesign/index.html","2e5dd045991b34d3a14783706cf74e74"],["/LuthienDesign/static/css/main.bb5de3e2.css","9ae64d362b46a7d4e8ca754683edbfd8"],["/LuthienDesign/static/js/main.4b4c9f0c.js","48d31420300d9a248d75181b4c8474cd"],["/LuthienDesign/static/media/arrow.f8831b48.png","f8831b48d933d0602dfd3ea839d483b3"],["/LuthienDesign/static/media/head.9bbe83e5.png","9bbe83e51f49bedaf17046ffcb396868"],["/LuthienDesign/static/media/ilu-1.0e35f98a.jpg","0e35f98a2ad012950fd46a27de5f0cba"],["/LuthienDesign/static/media/img-1.2458197f.jpg","2458197f39af28e0ce9a770b63bf710e"],["/LuthienDesign/static/media/img-2.64794ffd.jpg","64794ffd2f7abd9cecca987268abf39e"],["/LuthienDesign/static/media/img-3.47a839da.jpg","47a839dafc2e5d20ba1899b105bb9bce"],["/LuthienDesign/static/media/img-4.d6d82108.jpg","d6d82108829f3d9a9539709643f8c971"],["/LuthienDesign/static/media/website1.81b9f183.jpg","81b9f183f0c381c7c4bb60a5a547ab64"],["/LuthienDesign/static/media/website2.8ea6dae4.jpg","8ea6dae4b9e55e1f710171b0ccf7b65a"],["/LuthienDesign/static/media/website3-1.eb1d0b34.jpg","eb1d0b34c0737f1daaa42810c5c00441"],["/LuthienDesign/static/media/website5.884d4114.jpg","884d4114ba47f7ee5b1c1eab2f56b0b2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/LuthienDesign/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});