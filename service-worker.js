/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "02e3fbf4815a6fe138b2dc13d238095d"
  },
  {
    "url": "assets/css/0.styles.b01d88cb.css",
    "revision": "c983f6ade41bec09799a34dc30a9fecd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.15f5c869.js",
    "revision": "168dcdfc111b2d2a5c124bf28621121f"
  },
  {
    "url": "assets/js/11.7bf3b673.js",
    "revision": "538cf0c174e0815b34a587f4588990c6"
  },
  {
    "url": "assets/js/12.4f0bc4e7.js",
    "revision": "05a47970aec71ec3e54a866a6544efec"
  },
  {
    "url": "assets/js/13.0fbbb1b0.js",
    "revision": "81a52909184e71b18eea0a798334f07a"
  },
  {
    "url": "assets/js/4.f8d21187.js",
    "revision": "ef573c926a2f5f45409ce3ba12644b20"
  },
  {
    "url": "assets/js/5.a70a448f.js",
    "revision": "86706b9010e0753b563b0da9c63fd5ee"
  },
  {
    "url": "assets/js/6.5e79e2c1.js",
    "revision": "a864bf8094af68aa77f5e03b01a567ca"
  },
  {
    "url": "assets/js/7.9ed46187.js",
    "revision": "8caf727ca3d388ee503da550e6acb712"
  },
  {
    "url": "assets/js/8.5a200c02.js",
    "revision": "3674b014289249f2a4256d3452e7f2cc"
  },
  {
    "url": "assets/js/9.40ded8e4.js",
    "revision": "51adb6f30f078992d1b4812a4e9945d3"
  },
  {
    "url": "assets/js/app.93fea009.js",
    "revision": "2bf06010bac9227ce31c5460c35f88f2"
  },
  {
    "url": "assets/js/vendors~flowchart.98c08932.js",
    "revision": "1e59a67e7a3c5edd9ac6cb358aab57a9"
  },
  {
    "url": "assets/js/vendors~notification.b69eca1f.js",
    "revision": "6fa917f78f32e3b33fb173fbda9afec4"
  },
  {
    "url": "create-app-1.png",
    "revision": "e7114963ba85db38d881c33ff2528ec7"
  },
  {
    "url": "create-app-2.jpg",
    "revision": "6f971209a4ea476b93939a5727696f76"
  },
  {
    "url": "create-app-3.png",
    "revision": "d8112b4c9562d6a0d3d599a206e744e4"
  },
  {
    "url": "dart/index.html",
    "revision": "5ab6a8a4d46f84611051cac22aba4c84"
  },
  {
    "url": "flutter-doctor-1.png",
    "revision": "b6bbdd7182d5e176b04dededc08d72d7"
  },
  {
    "url": "flutter-doctor-2.png",
    "revision": "d52de37a9723dbf2ebedd2fc0319e016"
  },
  {
    "url": "flutter-download-sdk.png",
    "revision": "f9dee158fdd5cd43d077a6938e1b917c"
  },
  {
    "url": "flutter/basic-config.html",
    "revision": "ca19df9c46dfa5da95b0535303a73574"
  },
  {
    "url": "flutter/directory-structure.html",
    "revision": "e74391e7d103358f0143dc685899b189"
  },
  {
    "url": "flutter/index.html",
    "revision": "43c6e7eae5cc28e9931750b978418be5"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "dba5719ac516e59fdfe25bf4c84b166f"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
