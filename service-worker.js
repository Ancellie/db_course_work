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
    "revision": "e02e281f6f258f8721dd5d54073e5ef0"
  },
  {
    "url": "assets/css/0.styles.f40791a5.css",
    "revision": "3e8923875361996bfa4f03f25a616d58"
  },
  {
    "url": "assets/img/img1.665dc663.png",
    "revision": "665dc66364c831b2d284206f195460dc"
  },
  {
    "url": "assets/img/img2.1f6e18de.png",
    "revision": "1f6e18de1549b552ed3e15db9915e7b7"
  },
  {
    "url": "assets/img/img3.275fb1a8.png",
    "revision": "275fb1a81e26b1ef50c2748d6b49d5bf"
  },
  {
    "url": "assets/img/img4.c1612d48.png",
    "revision": "c1612d48670f3604cce25d061931f8fb"
  },
  {
    "url": "assets/img/img5.92d14a41.png",
    "revision": "92d14a412c12ed25c5b1c5676f54f0e8"
  },
  {
    "url": "assets/img/img6.591bf78c.png",
    "revision": "591bf78cebdf149cf9cc694ae37adbf3"
  },
  {
    "url": "assets/img/img7.1251ad26.png",
    "revision": "1251ad26aece85e962b3d8a73cbb3291"
  },
  {
    "url": "assets/img/relation-diagram.60415180.png",
    "revision": "604151805a60802b9e5d02489fbbe1d3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3c0c2200.js",
    "revision": "290ac8140897032d6e9dd2327f65538e"
  },
  {
    "url": "assets/js/10.d50827c4.js",
    "revision": "86fd54a9b9468e82e289df749a0ba3ab"
  },
  {
    "url": "assets/js/13.c3fb1759.js",
    "revision": "399f9d5d27c263b4e401673361d780eb"
  },
  {
    "url": "assets/js/14.dd517268.js",
    "revision": "5e66a0dd38961290bc85bed8e48ab95d"
  },
  {
    "url": "assets/js/15.c85f1af7.js",
    "revision": "62432d862a2c6811cf9e4d6b8f2d0c8d"
  },
  {
    "url": "assets/js/16.7f817055.js",
    "revision": "4026285ba777dcb9a139081305220b3e"
  },
  {
    "url": "assets/js/17.a8127531.js",
    "revision": "6ce8d876da7fed3bfeee5148861a0903"
  },
  {
    "url": "assets/js/18.1a4be454.js",
    "revision": "2cbd0d20e8914a1471ff407017f6dcb8"
  },
  {
    "url": "assets/js/19.f20a1cd0.js",
    "revision": "90c4f16a95665005938c7f8b15c4d9ac"
  },
  {
    "url": "assets/js/2.35499e44.js",
    "revision": "477d7bb91a5834464aeeaf7cda450f8d"
  },
  {
    "url": "assets/js/20.0574f407.js",
    "revision": "9edd12bcea9f8f05181465db18fae626"
  },
  {
    "url": "assets/js/21.dded2881.js",
    "revision": "7dfd5fd92f5533d3d91710a131ae1c67"
  },
  {
    "url": "assets/js/22.8b37f346.js",
    "revision": "2352450e14e58f33460bf0b60c7410a1"
  },
  {
    "url": "assets/js/23.492b4904.js",
    "revision": "5fdd649a0c97068a170724d69ba78b1e"
  },
  {
    "url": "assets/js/24.6eb4e200.js",
    "revision": "2b07957cfb51c3d52f0cd62b6696dc37"
  },
  {
    "url": "assets/js/25.c8c5fbaa.js",
    "revision": "35eae13f49e3c6eb88d8e44638b7774b"
  },
  {
    "url": "assets/js/26.f80470b3.js",
    "revision": "859112efdd25d1dc9f2633046a3dd081"
  },
  {
    "url": "assets/js/27.e362e0c8.js",
    "revision": "581b64fb86b16de3470d85f1884bfb2b"
  },
  {
    "url": "assets/js/28.aee0c60d.js",
    "revision": "2a80aedb8d8583810b63fa979e69a5bc"
  },
  {
    "url": "assets/js/29.24e57c03.js",
    "revision": "f14070e0659295917552133bcadb6385"
  },
  {
    "url": "assets/js/3.1c6ef825.js",
    "revision": "12a1dbba27b501b2fc3c7dd87a8afb7f"
  },
  {
    "url": "assets/js/30.abe227f8.js",
    "revision": "2ab3767aee3388e84ebed162962e6493"
  },
  {
    "url": "assets/js/31.59b22b8d.js",
    "revision": "19b83627035c9dcc2bfaf2428642dd16"
  },
  {
    "url": "assets/js/32.c0eb2155.js",
    "revision": "91c718063cb639f234308aa36450485b"
  },
  {
    "url": "assets/js/33.71fa3ec5.js",
    "revision": "05556f30db917c83491c6ceea1c5acf1"
  },
  {
    "url": "assets/js/34.9f9c9be3.js",
    "revision": "a7f3bc2a20464e08cf0d854d39ed5ebf"
  },
  {
    "url": "assets/js/35.c40ccbc2.js",
    "revision": "e1ea447162c9501e15477a96db572d00"
  },
  {
    "url": "assets/js/36.9ce74167.js",
    "revision": "6eb273b1ce1adb95b10b52470535fdc8"
  },
  {
    "url": "assets/js/37.9e08b7e9.js",
    "revision": "58272726e69a43ed5834ede7f8fd8db7"
  },
  {
    "url": "assets/js/38.e50702e8.js",
    "revision": "a0378c125b39bb19ae622ebe12edb857"
  },
  {
    "url": "assets/js/39.928c6029.js",
    "revision": "7e1a536d107de808676d9f10ef0f0536"
  },
  {
    "url": "assets/js/4.dd47776f.js",
    "revision": "47a298bb06b167ff08bf5349367fecf2"
  },
  {
    "url": "assets/js/41.e4305d7f.js",
    "revision": "088ea98ae2f8644fa8a1b2851bc8b79a"
  },
  {
    "url": "assets/js/5.0650d797.js",
    "revision": "618ba99320475c8bba749a0a771853ef"
  },
  {
    "url": "assets/js/6.2971ce49.js",
    "revision": "dc0de87c18d66075cc1c1badebde188d"
  },
  {
    "url": "assets/js/7.7dc827fd.js",
    "revision": "d6e90f9bff247612b4b6aa99c123c854"
  },
  {
    "url": "assets/js/8.b4967f49.js",
    "revision": "82a14751d46e5230b450a86a665034ee"
  },
  {
    "url": "assets/js/9.c47d629a.js",
    "revision": "9471790a37289ad866d6c93125d47e53"
  },
  {
    "url": "assets/js/app.a561e542.js",
    "revision": "5629009ace73a075cf0be1b29f1e244b"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "conclusion/index.html",
    "revision": "c79a4e5bcfca9cae4a4f3e7a670ca23a"
  },
  {
    "url": "design/index.html",
    "revision": "50d1b4eaf8d346dc64a5dd4bf8f9c9d5"
  },
  {
    "url": "index.html",
    "revision": "3994062aabb04426c2714230caa1d852"
  },
  {
    "url": "intro/index.html",
    "revision": "d58715d9d4024b2670d5107f4b9d0624"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "17fb5e996e548fa0d098d2f6a6e683d6"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "cf9b2c541eedff1c40d6708bfc44f096"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "12c2d68c19a96268acd030e386a9f8fc"
  },
  {
    "url": "software/index.html",
    "revision": "6f2b2f364c077bbbce85645f1dd3a7a1"
  },
  {
    "url": "test/index.html",
    "revision": "351f4e265741a0e68d35c76edd8a7dd6"
  },
  {
    "url": "use cases/index.html",
    "revision": "10f9ce710461babfc331529277331ca5"
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
