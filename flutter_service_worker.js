'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "19ed825c9210ed6981e68b30c398a506",
".git/config": "80a942aaccc071909087a3f06c010766",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "eb6702cb2b72e3f917cc88023046564f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1b0531f0abd81ee3e5bd2316dd539941",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e7a4dd2880ea3aee8f97a1ba5d1ffbe1",
".git/logs/refs/heads/main": "b0e029bfb1558f5c1f181532cddcfc2c",
".git/logs/refs/remotes/origin/main": "9b89660085971592ae3f70a911ce4ea9",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/82431a0e0b217e8d588a70d9ec187f56a7247e": "750f60de5233c12c0752bcad2767ce49",
".git/objects/08/a927d7049f13eeab077a2db3c4b0de2ea2db02": "c19842a7db3c8057591309dd372fc2e0",
".git/objects/11/fc8b5de617bebf78a8750621015b559426dda7": "eaa39430496b6b6c8e9147b783cec152",
".git/objects/12/435e864cfc6c0063b7497c9cb69c782149a1d8": "10a2679468c0d9ba4032326ebfd7b2f3",
".git/objects/12/c01299ab8076c6315c97122a51d9a4385b251a": "cffa4076a790d36bd4ab469b3b56c7b2",
".git/objects/17/617a8970262ce3c73916e759a91a9fe559ca49": "bac3913fcdae51eca65f2c3acddfc6bd",
".git/objects/19/14264c08781d1f30ee0b8482bccf44586f2dc1": "f15d027fa43ef2353a154798b1386929",
".git/objects/19/34c829fcceba18a45e4667163759fed77cf137": "43d48a701dca63837b277413f8d53a21",
".git/objects/1a/a94e8ef2c6b7f1c4fac0286a189ce144374a41": "1c7b348f65b0b7d09b9836325716c48d",
".git/objects/1a/be0e0b585ed7c351a617dd634763867071211f": "cdb527fb191e8404597bca240f505df5",
".git/objects/1c/24125438df16f48bfa70441fc9e94ffe22a897": "d905555b5193b2ee2c431399e68b877f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/7e461f05d3ed079fa401c60bd6b7d9c0d7823d": "62de52cd474fc0b949912cda26d10305",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2c/1511fdb5fde919d73aeafc65ffd155537415d8": "0b5cd77017cf67ce639bcb58db7d9acc",
".git/objects/3a/21a5aafb4d742a4b9008725b7f4380d87b5310": "f29fdd6e10fce327cd2236c9047060d8",
".git/objects/41/efc3403e4cf277049ca396006aa58ed03e11a2": "e00e59ba811dd6c2e5e6bd295b79ee64",
".git/objects/44/ed1ae6e77ade9177bef7cceb769cc8ebb79c7f": "6b62ca516524ecb7153db87f76fe414b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/29dc1dfa1ad6073c2c40ba7c9a84de1555779b": "1e91ada10ee5fd3fcc0342efa4a2f99e",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/53558281c00a995d57198e38dbd1becd4b0d68": "8de2d7d655d708102aec23ec06fc4896",
".git/objects/60/d3b5c26cc23a6f748fe0b05a9d9770ec0dc66c": "b1c1a2187024fdcd34fbf91dd08f6757",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/709d480c580da1140648d57bab06e3d6f68d25": "ea6ed449225c875d0f93b3fa09c64bac",
".git/objects/63/abc906404f8f90f52d6a0a068b8700d410b884": "989895ee5e5887b9ba81e9b164ec74e7",
".git/objects/64/d50082d9566526bf953f39a26849b8bdbc3c6c": "471b419a806ec38c3e5228e6dbd7396b",
".git/objects/69/68452199b191fc9fcf4e6b441609e8d147b1ae": "685e95371c8b69613900edff20fc1f05",
".git/objects/6b/665aaa0c07365dc517c34e20d0ac4aaa3993f2": "108813702ab871014c57a7e41798a75f",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/0e57976bf0a4fecde70fe7a5106a4835f6448f": "749ab8dcc37181ad31bbf63641a9e11d",
".git/objects/79/2d1ec803c0abab8f58100f1018573471763eb3": "f0f448065df7f696abab2712fbf14623",
".git/objects/83/7c65538cc3e9171a98f303aa6716838f6fdd04": "5f74eab5d7ce4e7ec0ac500fdc44abc1",
".git/objects/83/9eb7a5a0a53b0676d171dffe2ae335204271b9": "f87b42a2031ced6bedd9ffccf2c11965",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/95/1098227e8f6ed1c10abe76938759bcad4fa2e3": "90f11dda5301748d5e898cfbde9f13ba",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/0b3227939d578e4e48fe5642eae4a735e6b0f4": "8e466de9c27e22ec0fe77ccdeb2a4df8",
".git/objects/9a/99dba16e61f234afb01a0e102c6d7758b7bc08": "d205ea9bb4a16f0f4b1fc31fb20c41eb",
".git/objects/9c/83d1b75b431864819ecea557b087727032ed1f": "2aa48a018f5fec639a28a3cb353e6475",
".git/objects/9e/907987ccfc771dc172dd079a01924fe020bd6b": "bbb193872d66aa0fc7fdd4324c7a501c",
".git/objects/a9/17e058b7c4f3ad398471a92e6bfae8a3f28c8e": "25fc9bdf59fd347dcef7591f1a4cec54",
".git/objects/a9/1993e6dff4fa62dc8b0f0ec8bba0351c4fd2e8": "5b7ddaf13a70b29986c1e92210aaeb8b",
".git/objects/ab/ca679a8f5bb8d4b8ba6f88492f9911a1063c8c": "49a569cbe9f2c20ed447a4f598531940",
".git/objects/ac/bb2abe20b386630e79c3b35000999a16c0a1fe": "8fd8279b632d868e3e9b6e06a3df2f03",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/9560cc7e2284d79812098649f16d3e70807181": "9fcfd906eb1f3b4422bf854fb0fa95f7",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/509e6f5d661c0db4eb10f3b11a00c1f2be5a5a": "1603c518eb4c344302ca46da96449b69",
".git/objects/c5/541f756b23584c03daf93ea0802b81a15d593a": "383c35dc3c06a0642ea6b30a66cacee8",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/d0/02acd4b91229e659bfecb6858951934be23c8e": "78d373d092b77bd23e8fe0b1e2144882",
".git/objects/d1/0b8b1baaa84653070e1e334b56329c9f8d7615": "80bd2e197dca0e750637208d7fbb5555",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/bae73aa44337d62aab8f848b599280ae319eb1": "1817bc5e86cb1739ad662f5665c89267",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/f96a2739c7d49a166aa652bbd096967a3099b2": "38fd3149f826fadbd64afe9034a87096",
".git/objects/fe/02d97b20640215f469f8ac2743c9ea0a647318": "6f7fbbf98ea077f5c0dceab46c54d6f5",
".git/ORIG_HEAD": "b56834e9810164530990a5dae9a1950f",
".git/refs/heads/main": "6cc124498d33d2bdbd3b194a740a36ab",
".git/refs/remotes/origin/main": "6cc124498d33d2bdbd3b194a740a36ab",
"assets/AssetManifest.bin": "8973a1cd5710f075ccfa0384422f2089",
"assets/AssetManifest.bin.json": "f297215889f643f85095f9cea88fb625",
"assets/AssetManifest.json": "6a2373043b5e4deb25acb26bee07cadc",
"assets/assets/icons/app_icon.png": "973451a511a3e2aec57e8118f31bca81",
"assets/assets/icons/app_icon_removebg.png": "841edc9818af1943e5f1cb734f34501d",
"assets/assets/images/transparent.png": "71a50dbba44c78128b221b7df7bb51f1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b91064bc99b1a2f2bfc341260ea69085",
"assets/NOTICES": "79ea7568e29b08e9ce548db7a2d86547",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "832185aa46f9eab20814c82df6be7453",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "d3a28e0a44a273ab2eb22de3a7b381ea",
"icons/apple-touch-icon.png": "fd342a99b1b8c9f7a1bd0a80f0d8ae87",
"icons/icon-192-maskable.png": "06880e4ebf58cba6e30f71e239ab1579",
"icons/icon-192.png": "a66e9dedd0091377033497466f5040d2",
"icons/icon-512-maskable.png": "8ce537d07f2f4db96744e22aeff0d75f",
"icons/icon-512.png": "429019501603742f1286f965458974d7",
"index.html": "bb25743f25bced633acc3987c8e11f14",
"/": "bb25743f25bced633acc3987c8e11f14",
"main.dart.js": "4cb99a5924aa3051bf9a4975a6cb01fc",
"manifest.json": "7f1abdfe6c5357b4619e6cf1f8f4e9a1",
"version.json": "bea73fc3ca406d762d39cde808218b3a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
