'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "761f24dec9f9365459e6acbe8bbe64ec",
"index.html": "88c84d076ba8cdfec7457d759b2b3b42",
"/": "88c84d076ba8cdfec7457d759b2b3b42",
"main.dart.js": "1272cd1a6bb8b95592e6bef8af3fbd4b",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b796c9135493ecab419a4f274a5414f8",
"assets/AssetManifest.json": "a93f61ba88a7b8e4af1707c638862a40",
"assets/NOTICES": "ab9a6bafa00cab84c5f35a7c952cdcdb",
"assets/FontManifest.json": "9931b4073c41d8a0dc587991ed84044e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/maps/beertalks.png": "7995da3cc3c774357bfef5ce00acb261",
"assets/assets/images/maps/cafe.png": "f156601c3c7046a1e3d3a130472ce1bd",
"assets/assets/images/maps/buiten.png": "0bf7ddb84d209e9a4410e111d771287d",
"assets/assets/images/maps/bovendek.png": "e98856e2f11e1e30fc9caf3e3b92680e",
"assets/assets/images/maps/algemeen2.png": "23cf8ba82a7a40c508eab563acd5012d",
"assets/assets/images/maps/balzaal.png": "ac8a5619158e5408655f664da449d9ba",
"assets/assets/images/maps/zwarte_zaal.png": "70720974e6118c7f58bfb375728e314a",
"assets/assets/images/maps/inkom.png": "5313cfbc37b79facb91a56b3aaa03615",
"assets/assets/images/maps/machines.png": "894c54eb8b6847d37fd62b8d21aa57fc",
"assets/assets/images/maps/luchtfabriek.png": "6ba958b55409731e149bcce18c2b4ae9",
"assets/assets/images/maps/compressorenhal.png": "87d14d30bbc1ef1a2302d700f14d75af",
"assets/assets/images/Timetable%2520zondag.png": "ee62aa439736d2dc5ec10385bfada2e1",
"assets/assets/images/brouwers/Dochter%2520van%2520de%2520Korenaar.png": "bc5ddd3459ce697e8efca1eafc132b15",
"assets/assets/images/brouwers/Artevelde.jpg": "3fdda3b760f9646ad3408e254ab3a104",
"assets/assets/images/brouwers/Vermeersch.jpg": "a3cda33ebe20110338b3ac59fab04912",
"assets/assets/images/brouwers/Bofkont.jpg": "6ecb4039feac00ae4121260dd6ebf315",
"assets/assets/images/brouwers/Zythologist.png": "deb00a7ef1f8a93fa259fd2eba84031f",
"assets/assets/images/brouwers/Galea.jpg": "c3382d496eacd33c5324cdc9d29817be",
"assets/assets/images/brouwers/Puffin.jpg": "584729c0e4489a8f3f39213fcdcab8a1",
"assets/assets/images/brouwers/Hoppug.png": "37c7d9ef560a58f7698dc83422d50906",
"assets/assets/images/brouwers/Basqueland.png": "0a0d8701b9217de84b90d8effe77997b",
"assets/assets/images/brouwers/St%2520Bernardus.jpg": "55ef2ba8fa1bd61f83833dadc65bf659",
"assets/assets/images/brouwers/Brambrass.jpg": "58d6e661bb54a7e6f433db606ed6b7df",
"assets/assets/images/brouwers/Gistgeest.jpg": "ed5b22f186b9680451f117bb56511fbd",
"assets/assets/images/brouwers/KrommeHaring.png": "e617102090bbf759c9e0272a5acc76f7",
"assets/assets/images/brouwers/Coureur.jpg": "5a938944a584510e276c817ebbc90d15",
"assets/assets/images/brouwers/Drap.jpg": "82974ba634be02987791de22a7d29a3c",
"assets/assets/images/brouwers/De%2520La%2520Senne.jpg": "beab1a86dc42fee5b940522a8e84ff90",
"assets/assets/images/brouwers/Haeseveld.jpg": "6004e1ee71157aa0633f40033c423aee",
"assets/assets/images/brouwers/Hedonis.jpg": "83021f8f413767f396073c33a214a10c",
"assets/assets/images/brouwers/Stroom.jpg": "cd34fcf04c1caf69db58d4ec5bcc9481",
"assets/assets/images/brouwers/Folkingebrew.jpg": "6f4631c7f53a33d7bb7276005d143da3",
"assets/assets/images/brouwers/d'Oude%2520Maalderij.jpg": "3ca31db6975ce8996973b2a0a8217db2",
"assets/assets/images/brouwers/Lupulus.jpg": "4f812c99de55c07a862a095110d76c65",
"assets/assets/images/brouwers/Pellicle.jpg": "7d617761650f7bbbaee65ff3e7ea684c",
"assets/assets/images/brouwers/Diaz.png": "8e2d1b8042d607218dcf65ac5959a8c0",
"assets/assets/images/brouwers/Moersleutel.jpg": "fba34327e5b66440086af10ddbd0a8b1",
"assets/assets/images/brouwers/Arpus.jpg": "4bf3e169c08638ff76c1af5c1175f0cf",
"assets/assets/images/brouwers/Mederie.png": "0d30c9cffb374cab5d621ee2083d1d8e",
"assets/assets/images/brouwers/Slaapmutske.jpg": "0d2952eaedfd0b8a0dda1875e5e1f71f",
"assets/assets/images/brouwers/Uncharted.jpg": "cffda3db514e1230bb15afdf21f7ebaa",
"assets/assets/images/brouwers/Intenables.png": "dc9df4d2405e74a1d60dc7227e51a4ef",
"assets/assets/images/brouwers/Kerkom.jpg": "bcbe415bdca3defb41ea5ea58a41efa8",
"assets/assets/images/brouwers/Hophemel.png": "45d9b7cb886fbaeed80001ebe9b3fe65",
"assets/assets/images/brouwers/Didko.jpg": "e94dc4f08b71910de372e0f4e1179c96",
"assets/assets/images/brouwers/Vandijck.png": "b68ab34aae5c6afed2d43fc47b465524",
"assets/assets/images/brouwers/Oso.jpg": "4a195fd3fab806c808b942525315dc80",
"assets/assets/images/sponsors/sponsors2.PNG": "8b4ff067de9da3888730fe7dbdc359cd",
"assets/assets/images/sponsors/sponsors3.PNG": "2f533ef80f456740acdcf7259e00c41f",
"assets/assets/images/sponsors/sponsors1.PNG": "311de4733d718fb2b3d4dd536dbb77e9",
"assets/assets/images/sponsors/sponsors4.PNG": "98242be1bc0a091f4a4488e82f9486ef",
"assets/assets/images/TBE23_algemeen_plan.png": "906ac514f0de037851279fd8c5ce4dbf",
"assets/assets/images/Logo.png": "93cf50772736f0831488a2c997b55ab0",
"assets/assets/images/food/deGebrandeWinning.png": "0d3f8e94bee08a94e9ed98c4743559d0",
"assets/assets/images/food/Eddy.png": "2269b0c3f2ba1b28637f83b70c7dbecb",
"assets/assets/images/food/Eddy2.jpeg": "96a682fbea23c6748d68a8d3529b661d",
"assets/assets/images/food/smokeyFood.webp": "b0942e6fe8b92044a0ff4324b21f620c",
"assets/assets/images/food/coreleone.jpeg": "69a651ea0ef1a38070efb4fbf0fcee8f",
"assets/assets/images/food/Chapter10.png": "fa7f5ba7ba731235faca752f4a9d81af",
"assets/assets/images/welcome.png": "a7a0045d70a55425013d0ed94a92b66a",
"assets/assets/images/Timetable%2520zaterdag.png": "d4d45243b21a09daca39c3304bdca743",
"assets/assets/bieren.json": "088e3d544ce7a514e85052d9fcd7e981",
"assets/assets/food.json": "3ee5530c5483e136963b9990e929651a",
"assets/assets/brouwers.json": "7d77d17f9696fa2c50dfecbc64216c51",
"assets/assets/gerechten.json": "a97fec1fac35cad6babc73fd1a640a0a",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
