'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "761f24dec9f9365459e6acbe8bbe64ec",
"index.html": "d03b9bd1632bc4e3d1e0030b9012718b",
"/": "d03b9bd1632bc4e3d1e0030b9012718b",
"main.dart.js": "6dc541f244294b569fab8cf64a512acd",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b796c9135493ecab419a4f274a5414f8",
"assets/AssetManifest.json": "391cb32a4f660b56fbb4f937c8a2ed8e",
"assets/NOTICES": "81024af70f6db7211fd003829a701077",
"assets/FontManifest.json": "9931b4073c41d8a0dc587991ed84044e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/maps/beertalks.png": "7995da3cc3c774357bfef5ce00acb261",
"assets/assets/images/maps/cafe.png": "f156601c3c7046a1e3d3a130472ce1bd",
"assets/assets/images/maps/bovendek.png": "e98856e2f11e1e30fc9caf3e3b92680e",
"assets/assets/images/maps/algemeen.png": "dd4e8f40001e271557d73970f87ecbd8",
"assets/assets/images/maps/balzaal.png": "ac8a5619158e5408655f664da449d9ba",
"assets/assets/images/maps/zwarte_zaal.png": "70720974e6118c7f58bfb375728e314a",
"assets/assets/images/maps/inkom.png": "5313cfbc37b79facb91a56b3aaa03615",
"assets/assets/images/maps/machines.png": "894c54eb8b6847d37fd62b8d21aa57fc",
"assets/assets/images/maps/luchtfabriek.png": "6ba958b55409731e149bcce18c2b4ae9",
"assets/assets/images/maps/compressorenhal.png": "87d14d30bbc1ef1a2302d700f14d75af",
"assets/assets/images/maps/terras.png": "dab1d94ea87007cfbd92b6847a2e1dba",
"assets/assets/images/appbarbg12.png": "c1e8803d41e9ea4ff57e563feb20d4d5",
"assets/assets/images/appbarbg13.png": "c8b00abb69122ad8d16ee56765d75842",
"assets/assets/images/appbarbg11.png": "39ec0b9da044977a8ef363f0b64cd443",
"assets/assets/images/appbarbg10.png": "661f0efd8b85561317b36f5a4aa0b1b5",
"assets/assets/images/appbarbg14.png": "a962d39751fad697bf56d98838bc59c9",
"assets/assets/images/appbarbg2.png": "a1d61873f918e373ff36cdb3031cec70",
"assets/assets/images/appbarbg1.png": "dc1f5e19cb6058807744f1951f18babf",
"assets/assets/images/appbarbg5.png": "b804d89ad71edc3c98e191beb0ac7223",
"assets/assets/images/appbarbg4.png": "ed6e4280c089be0e29a43b32b4a8b41d",
"assets/assets/images/appbarbg6.png": "ab490a8ffbb9e86bfa558a2d311fac3d",
"assets/assets/images/appbarbg7.png": "ddc2b7ae78d338df413d8421371f9aee",
"assets/assets/images/brouwers/Diaz.png": "8e2d1b8042d607218dcf65ac5959a8c0",
"assets/assets/images/sponsors/Bink.jpg": "0ddfaa691f7563802e2290b8f95080de",
"assets/assets/images/sponsors/Artevelde.jpg": "3fdda3b760f9646ad3408e254ab3a104",
"assets/assets/images/sponsors/basqueland.png": "0a0d8701b9217de84b90d8effe77997b",
"assets/assets/images/sponsors/Arpus.jpg": "4bf3e169c08638ff76c1af5c1175f0cf",
"assets/assets/images/TBE23_algemeen_plan.png": "906ac514f0de037851279fd8c5ce4dbf",
"assets/assets/images/appbarbg9.png": "3456fa7511ea30f9ad70dbee59660228",
"assets/assets/images/appbarbg8.png": "4bd9bc5c8dec8466031b25563f7d96e2",
"assets/assets/images/Logo.png": "93cf50772736f0831488a2c997b55ab0",
"assets/assets/images/welcome.png": "a7a0045d70a55425013d0ed94a92b66a",
"assets/assets/bieren.json": "623aac0a64a3a08d8560bac6820ca0c9",
"assets/assets/brouwers.json": "89a04377ac99fb06315ce27a9840f84c",
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
