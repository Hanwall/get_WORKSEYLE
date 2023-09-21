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
    "revision": "0373abbcaeee7c335344afb5a32000e9"
  },
  {
    "url": "assets/css/0.styles.2cc03edf.css",
    "revision": "fe2a7bd4a3c84ec47741d3fd83486478"
  },
  {
    "url": "assets/img/index-夜班店长工作流程-新版(仅供参考).7399f211.png",
    "revision": "7399f2111c5a05cb687c88f88bf17eda"
  },
  {
    "url": "assets/img/index-夜班店长工作流程-旧版.1d4395e2.png",
    "revision": "1d4395e246ac6e18c17b0771ec6242ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/保鲜手册1.9cbef074.jpeg",
    "revision": "9cbef074f18e7f5cbc9090f4721d1c6d"
  },
  {
    "url": "assets/img/保鲜手册2.33038e84.jpeg",
    "revision": "33038e84f5e06d8c385d573ac53b7ed1"
  },
  {
    "url": "assets/img/保鲜手册3.c753eb70.jpeg",
    "revision": "c753eb70cfdf65a0e9bbed121ca98ba9"
  },
  {
    "url": "assets/img/保鲜手册4.af3cd810.jpeg",
    "revision": "af3cd81033d5bf2e3424e95ffa3f40bb"
  },
  {
    "url": "assets/img/保鲜手册5.6e1f9d1c.jpeg",
    "revision": "6e1f9d1c23f42cef394dc5374ee1777a"
  },
  {
    "url": "assets/img/保鲜手册6.4b183d55.jpeg",
    "revision": "4b183d55cf87152fb45cf2acb612c078"
  },
  {
    "url": "assets/img/公司杭州地区组织架构图.4065fb56.png",
    "revision": "4065fb5612643d6a0ae18ad096bc47ad"
  },
  {
    "url": "assets/img/公司杭州地区组织架构图.8d942b21.png",
    "revision": "8d942b2115c5197dae36d13e1fb1f5ea"
  },
  {
    "url": "assets/img/干货鸡蛋收货单.ad2981d9.jpeg",
    "revision": "ad2981d9f4c365d3589c0cca1846d995"
  },
  {
    "url": "assets/img/快消牛奶收货单.b66d667a.jpeg",
    "revision": "b66d667a098ceeef2631bb8fd9e06597"
  },
  {
    "url": "assets/img/快消馒头收货单.d40f494c.jpeg",
    "revision": "d40f494c925eb62adbc04fe4249d47bf"
  },
  {
    "url": "assets/img/收银机.5c6c925e.jpeg",
    "revision": "5c6c925e62488abaad4036a66c5b0fd2"
  },
  {
    "url": "assets/img/收银机登录界面.be4f5477.jpeg",
    "revision": "be4f5477b6711653f99223dae024ecf8"
  },
  {
    "url": "assets/img/新的接货流程.dd42f049.jpeg",
    "revision": "dd42f04965019d2c7ff789db5cf63976"
  },
  {
    "url": "assets/img/新的水产池.e3b0808e.jpeg",
    "revision": "e3b0808e5d1d3f6e6f9eec12aa12d399"
  },
  {
    "url": "assets/img/新的盐度计.fc145dfd.jpeg",
    "revision": "fc145dfde1aa02e9f9647fadbd1a3923"
  },
  {
    "url": "assets/img/旧水产海鲜池.b2a55528.jpeg",
    "revision": "b2a55528ac2850545fe6f130641e6e71"
  },
  {
    "url": "assets/img/旧的盐度计.93400374.jpeg",
    "revision": "93400374a9b75ed40d8e96995833d2e0"
  },
  {
    "url": "assets/img/水产养殖温度盐度表.a95c9d39.jpeg",
    "revision": "a95c9d39a2d03cbed453779923217ef6"
  },
  {
    "url": "assets/img/水产收货单.920119ed.jpeg",
    "revision": "920119ed3b8fb73ce7f9ab5d361fc039"
  },
  {
    "url": "assets/img/水产收货单最新形式.b20b87b3.jpeg",
    "revision": "b20b87b3678c2ac4c45f44e92987498d"
  },
  {
    "url": "assets/img/水产收货单最新形式2.6c7dd8da.jpeg",
    "revision": "6c7dd8da19b144377101686893c81ba5"
  },
  {
    "url": "assets/img/水产运输温度盐度表.c307f8f1.jpeg",
    "revision": "c307f8f16cb09c41e7b45bb405b57fa8"
  },
  {
    "url": "assets/img/温度计.ee3a4cd2.jpeg",
    "revision": "ee3a4cd2e97597794044ac01a791ab6c"
  },
  {
    "url": "assets/img/肉品品质检验合格证.3e5eaad8.jpeg",
    "revision": "3e5eaad89ed52a86712d9e8ea5eed176"
  },
  {
    "url": "assets/img/肉豆制品收货单.9148d292.jpeg",
    "revision": "9148d2927875b38a64d19059123c6018"
  },
  {
    "url": "assets/img/蔬菜打包及陈列图片.ae119040.jpeg",
    "revision": "ae1190403bf28da863c6b838d326c2a7"
  },
  {
    "url": "assets/img/蔬菜收货单.87f8c2d7.jpeg",
    "revision": "87f8c2d76f25bc1ec7998912b86aede3"
  },
  {
    "url": "assets/img/蔬菜收货单标记.b624952f.jpeg",
    "revision": "b624952fea4de87f434c48ad4640af76"
  },
  {
    "url": "assets/img/西瓜到货.1d6bb656.jpeg",
    "revision": "1d6bb65629185139379544b626218d02"
  },
  {
    "url": "assets/img/西瓜到货群内通知.6d2ecf25.jpeg",
    "revision": "6d2ecf25b29c033d954ecbbed08be098"
  },
  {
    "url": "assets/img/谊品全国门店图1.e03a6bb0.jpeg",
    "revision": "e03a6bb08ac30050f593f260399a978c"
  },
  {
    "url": "assets/img/谊品全国门店图2.aa4fd88e.jpeg",
    "revision": "aa4fd88e0fa2593da940c6ccf9b925cb"
  },
  {
    "url": "assets/img/谊品发展历程2.c28f460a.png",
    "revision": "c28f460af867912d41ebd341077d79ed"
  },
  {
    "url": "assets/img/豆制品展示.c3cf21dd.jpeg",
    "revision": "c3cf21dd234bb5023f1a080b0c6b1430"
  },
  {
    "url": "assets/img/门头1代.f8052ec6.jpeg",
    "revision": "f8052ec6fdfb0ab99eda464fcb7e18f1"
  },
  {
    "url": "assets/img/门头2代.de4ea020.jpeg",
    "revision": "de4ea02055c770262d714026888c9eaf"
  },
  {
    "url": "assets/img/门头3代.a0480213.jpeg",
    "revision": "a0480213978d294deda5cf38c30c70cd"
  },
  {
    "url": "assets/img/门头4代.15dda33f.jpeg",
    "revision": "15dda33fb1d8777e7f571a63d4009dec"
  },
  {
    "url": "assets/img/门店3.221c7373.jpeg",
    "revision": "221c7373e9e84b2d6665cc1269f138a0"
  },
  {
    "url": "assets/img/门店4.fbc943a0.jpeg",
    "revision": "fbc943a0347a3c38e97e2da66c5ac632"
  },
  {
    "url": "assets/img/鸡蛋到货.fb3f53fb.jpeg",
    "revision": "fb3f53fbb8f3a78d67fc8edb38537f57"
  },
  {
    "url": "assets/js/10.daa23f31.js",
    "revision": "5fee933bf2e2f8f2dcc6db0796b43c14"
  },
  {
    "url": "assets/js/11.dfdb4de2.js",
    "revision": "7a6c8bf402d0f1e50371eed26223c96c"
  },
  {
    "url": "assets/js/12.8d3fe15f.js",
    "revision": "0bfe681717cdb35fbd33f598cea82d88"
  },
  {
    "url": "assets/js/13.1b018bf2.js",
    "revision": "5fe2fb67fbcc28ea9e217e2852031dd4"
  },
  {
    "url": "assets/js/14.8d4d52d4.js",
    "revision": "1c0eca76a35b54543362b96641f1b4f8"
  },
  {
    "url": "assets/js/15.58a9ce05.js",
    "revision": "a09abf489a8936f6f79aabc7b0a8e373"
  },
  {
    "url": "assets/js/16.58e86981.js",
    "revision": "47f9af4f25c7e1102a2c388971a4c0e0"
  },
  {
    "url": "assets/js/17.75991b63.js",
    "revision": "f1b497feaf0e3aadac0259b6f939bcc8"
  },
  {
    "url": "assets/js/18.1d1e80a6.js",
    "revision": "8646bda25585e9b6cb8ec9a9a471805a"
  },
  {
    "url": "assets/js/19.d58879ed.js",
    "revision": "180678737e317bc154753055ebcfebb5"
  },
  {
    "url": "assets/js/2.c650cf36.js",
    "revision": "a050d8214d95fda518785ff36ab9bc46"
  },
  {
    "url": "assets/js/20.35ff802e.js",
    "revision": "838fa8b0515597a2f406960128e54953"
  },
  {
    "url": "assets/js/21.495fae0c.js",
    "revision": "bd9e8cec80acbfea7911ec90332cbe0f"
  },
  {
    "url": "assets/js/22.43af4e4b.js",
    "revision": "b9b07da6d5c0681c177c79dd54d490d5"
  },
  {
    "url": "assets/js/23.66fd3a0e.js",
    "revision": "c20b39e177ffffa8e6d0ccd72005926b"
  },
  {
    "url": "assets/js/24.e5c06c38.js",
    "revision": "dcb0cd329a55060d5bdc9d72e5c72a43"
  },
  {
    "url": "assets/js/25.c14eb517.js",
    "revision": "66ca784126880e969b0691f752aeaa8a"
  },
  {
    "url": "assets/js/26.22d54a31.js",
    "revision": "40276e4fc4b90ee125dd699009471d56"
  },
  {
    "url": "assets/js/27.20b1d9de.js",
    "revision": "97e1a2f22ce3d62852482d30a445e566"
  },
  {
    "url": "assets/js/28.e796c6bd.js",
    "revision": "d0916cb45b7ff123c65d2b259922cc57"
  },
  {
    "url": "assets/js/29.4cb1bba6.js",
    "revision": "19ed37cb2f1964c2a50e8f2eb2d58589"
  },
  {
    "url": "assets/js/3.451bfa0b.js",
    "revision": "240b0904d9bd711876ddcdb7d633e1cf"
  },
  {
    "url": "assets/js/30.ce080c39.js",
    "revision": "43b004250fd54b8329d1706f747f3ca1"
  },
  {
    "url": "assets/js/31.2a61f94a.js",
    "revision": "1dec1132edaa4faa143d0c18b002e1e6"
  },
  {
    "url": "assets/js/32.ab4c6eac.js",
    "revision": "e7a52cf4c6b4a27f470f4dd19753391f"
  },
  {
    "url": "assets/js/33.7db5f2c6.js",
    "revision": "306ca95a5aedacb26aa01dceabf1954f"
  },
  {
    "url": "assets/js/34.23f737a2.js",
    "revision": "fd0acb729a7aed5b84c84e02dc3ffe13"
  },
  {
    "url": "assets/js/35.383a8b1d.js",
    "revision": "0cb9e6864cc6766db4b32111a356a3d8"
  },
  {
    "url": "assets/js/36.f7004048.js",
    "revision": "e520bbce81b533b9b88b4ea4c70b3d80"
  },
  {
    "url": "assets/js/37.19869498.js",
    "revision": "00768a4af3f0b6ae5a0215a0a5a3d862"
  },
  {
    "url": "assets/js/38.78203193.js",
    "revision": "4ee733b1eb1fda746cc01377d6f99220"
  },
  {
    "url": "assets/js/39.64e0b1ce.js",
    "revision": "39c4a0f61b512b4842b68741ed1a4ed6"
  },
  {
    "url": "assets/js/4.f1b9896c.js",
    "revision": "bd59cd41bb294f84e761a8656291d570"
  },
  {
    "url": "assets/js/40.66b8b3cf.js",
    "revision": "660570ec594ca5ec963368683c7214a5"
  },
  {
    "url": "assets/js/41.f9f95e7c.js",
    "revision": "6144193d47b21327c79aed1e308161e4"
  },
  {
    "url": "assets/js/42.d954ee58.js",
    "revision": "54c57ba085e1faaa09f1437cf2fa5a76"
  },
  {
    "url": "assets/js/43.3fc86807.js",
    "revision": "9255547e4e50e5f1627f9a94af5627d6"
  },
  {
    "url": "assets/js/44.1535aaed.js",
    "revision": "0540187163cbb9dbae4c1b92712957b9"
  },
  {
    "url": "assets/js/45.be0479b7.js",
    "revision": "780843c458f20b7e18b9af17512e169a"
  },
  {
    "url": "assets/js/46.179030d4.js",
    "revision": "e3dfa2a6cd32824917e5e14d3d153e66"
  },
  {
    "url": "assets/js/47.0dcc626a.js",
    "revision": "8248f412099cf4a61df685ba616350f0"
  },
  {
    "url": "assets/js/48.4c4749ac.js",
    "revision": "eb2e60095ade930d7806fdc2e55ce455"
  },
  {
    "url": "assets/js/49.c8fe9624.js",
    "revision": "64c7d96421c91a983bb1d03942389257"
  },
  {
    "url": "assets/js/5.8d2e3513.js",
    "revision": "4482eefdae79f11aba4429da40c8c07e"
  },
  {
    "url": "assets/js/50.6a17318a.js",
    "revision": "3267ddae8a5ab3ed715fa3e5f9bdde2d"
  },
  {
    "url": "assets/js/51.94150209.js",
    "revision": "5410d20825b35cc4292d7889766c6ad2"
  },
  {
    "url": "assets/js/52.04754ef8.js",
    "revision": "c00396ba08d20b892700a33510fee827"
  },
  {
    "url": "assets/js/53.4db4bf7f.js",
    "revision": "45fb7f150b1693aaeb5999ffac000b30"
  },
  {
    "url": "assets/js/54.d85127ab.js",
    "revision": "d6bff5cf7132998c7b0a2c075196088c"
  },
  {
    "url": "assets/js/55.a5d7e705.js",
    "revision": "0d2cec658b50666a5446636266e70d76"
  },
  {
    "url": "assets/js/56.eca79350.js",
    "revision": "49074c1ee46536089f66d0ff277b3c05"
  },
  {
    "url": "assets/js/57.3af5b68c.js",
    "revision": "f212496739169cd4e33caf986475dd84"
  },
  {
    "url": "assets/js/58.b4ede7bc.js",
    "revision": "240ca2a665394185e7d0d0dc21036507"
  },
  {
    "url": "assets/js/59.96fab661.js",
    "revision": "f8c014973d2bef2209148de2f5144674"
  },
  {
    "url": "assets/js/6.84577b59.js",
    "revision": "90cacb08adc07549c0f56be5078da9f9"
  },
  {
    "url": "assets/js/60.e6a23ae7.js",
    "revision": "7144a862fd191b6a23f7adb807b8c5aa"
  },
  {
    "url": "assets/js/61.61561ef3.js",
    "revision": "c9998b27e8c2bc1fc8b404a48dc25a48"
  },
  {
    "url": "assets/js/62.7f112512.js",
    "revision": "550ce45c74bba1718a5bdb410d2a05dd"
  },
  {
    "url": "assets/js/63.31f74ec7.js",
    "revision": "d8dc81cab9d492202e8899772ff0e22c"
  },
  {
    "url": "assets/js/64.6eb71e10.js",
    "revision": "fcd00255f214b5983d2f949c1c5ad932"
  },
  {
    "url": "assets/js/65.4943bb35.js",
    "revision": "ecf736942f4bd661d5f7b5318f19df08"
  },
  {
    "url": "assets/js/7.0845ca12.js",
    "revision": "44e423df2582803ccd83e1ae7c0d9e5a"
  },
  {
    "url": "assets/js/8.cf45e776.js",
    "revision": "2cc1b3d828b2c8c893b4f48955c5b4ae"
  },
  {
    "url": "assets/js/9.6f80d173.js",
    "revision": "1697501396b3d81e8b7b3572de38e1f2"
  },
  {
    "url": "assets/js/app.7d443171.js",
    "revision": "7b77a716d48c3a136752958023376c69"
  },
  {
    "url": "index.html",
    "revision": "b5f3d88ac9811dc60fffa62ee2876171"
  },
  {
    "url": "initwithmarkdown/ryt/index.html",
    "revision": "433a6a6155de7de9e81198c939fdf963"
  },
  {
    "url": "initwithmarkdown/ypsx/about/企业文化与规章制度.html",
    "revision": "665ddbcbd625cb020638a67e237bd903"
  },
  {
    "url": "initwithmarkdown/ypsx/about/公司杭州地区人员架构.html",
    "revision": "030a5d801b7a39916509984e542c427d"
  },
  {
    "url": "initwithmarkdown/ypsx/about/关于.html",
    "revision": "3b470ae5f95d4513b2e9c74169a9805a"
  },
  {
    "url": "initwithmarkdown/ypsx/about/谊品生鲜发展历程.html",
    "revision": "52ee6f14de020452a7ec90472bbb7521"
  },
  {
    "url": "initwithmarkdown/ypsx/common/其它物品物料检索.html",
    "revision": "cdaaf1285bab2f1ac471f33064ddf615"
  },
  {
    "url": "initwithmarkdown/ypsx/common/其它货物接货流程.html",
    "revision": "81283be55ed6f00e88fe4cb56aa8d8ff"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班工作时间工资和工作流程.html",
    "revision": "d22ec19f1f2743777bfa9f8e711e0ae8"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-参考.html",
    "revision": "1c6d4190a77c938626087e3c160087fb"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-新版.html",
    "revision": "862c37a5fa8201004c19a40c40ef3dee"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-旧版.html",
    "revision": "805f6c388dac68adc8f9eebb3f018519"
  },
  {
    "url": "initwithmarkdown/ypsx/common/工作中常见软件推荐.html",
    "revision": "cca88327169193825d858b6ec282e601"
  },
  {
    "url": "initwithmarkdown/ypsx/common/收银工作流程.html",
    "revision": "be1cfe34ac45e1fc61e5c5c90c11044a"
  },
  {
    "url": "initwithmarkdown/ypsx/common/水产其它注意事项.html",
    "revision": "a35fe91b2e939cb5440dba23b01c89bb"
  },
  {
    "url": "initwithmarkdown/ypsx/common/肉加工其它注意事项.html",
    "revision": "30d02b058341f1658d6227e7112d951d"
  },
  {
    "url": "initwithmarkdown/ypsx/common/蔬菜保鲜手册.html",
    "revision": "9669eb6c2db96b5cbb1628cfe3dc6455"
  },
  {
    "url": "initwithmarkdown/ypsx/common/蔬菜其它注意事项.html",
    "revision": "d64fb2c9f9d760a9b5d303510c70148e"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/光猫路由器使用.html",
    "revision": "3fd3da5b9a4a2c74def152719d3348db"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/其它设备检索.html",
    "revision": "64d4a2029e395faf28fa5e2d2143b0e4"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/制冰机使用.html",
    "revision": "d658a93ef4b8f2ed2a9dcb4629ed28e8"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/卧式冷冻柜使用.html",
    "revision": "111b2e455e7d42430b276ab277b31ed4"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/外机清洗.html",
    "revision": "6d48fda8cf9a7c57ef6066a2c11320d5"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/打氧机使用.html",
    "revision": "ed398c8cbb1914fa647d452bb5a4316a"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/收银机使用教程.html",
    "revision": "199c286c1c3f81f9c084d0f8c3c8e9fa"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌低温冻品展示柜使用.html",
    "revision": "53f59714210fc9c2207e8be6eac9cb45"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌低温牛奶展示柜使用.html",
    "revision": "f2dd71ff573c1b82a45e9b9deef774fe"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌肉加工展示柜使用.html",
    "revision": "b1b010d94e4ba22d7d5a088170db5484"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/条码电子秤使用.html",
    "revision": "3bd841a9d9e65cce960dfe0e7a6b28d6"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/电子台秤使用.html",
    "revision": "3520c9cda3e56aebe980389f725d0f94"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/电闸柜使用.html",
    "revision": "bb224bc2e5fbc7b7a57c007b40f04192"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/监控使用.html",
    "revision": "62b74fa873fa2997dbb69d02a8abd445"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/空调机使用.html",
    "revision": "ed4527eea09dc379adaa71ec926e640e"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/肉加工立式冰柜使用.html",
    "revision": "2953689c27b04952e545d38b88a75f9c"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/谊品生鲜冷柜使用注意事项.html",
    "revision": "b0170974d1c90070266ef0634673446d"
  },
  {
    "url": "initwithmarkdown/ypsx/index.html",
    "revision": "70ae3c6d03c4915b585b2a1d598a0428"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4allfiles.html",
    "revision": "e29f4c5f906b27142b79926c065f4e64"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4common.html",
    "revision": "803045e5b1898f047bcc46ced3fd9cf6"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4equipment.html",
    "revision": "f4be7af7f15d2f4ca3910a8bab305232"
  },
  {
    "url": "initwithmarkdown/zhsm/index.html",
    "revision": "03bff0ecd33a5fc1d9d431e8ce40d171"
  },
  {
    "url": "js/settime.js",
    "revision": "f222494574bfc028cc2c8261a8e332ba"
  },
  {
    "url": "logo/404_2.jpeg",
    "revision": "7cc602937504c7390614892b2ddbba6b"
  },
  {
    "url": "logo/default_avatar.gif",
    "revision": "c502cd01c910b4f53d86603d6bd078ff"
  },
  {
    "url": "logo/LIFE.jpeg",
    "revision": "202cbaa46141b5baf90009bbdf46e3f0"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/index.html",
    "revision": "4b4e177f1aa02b3dd62b974e83e814ec"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/index.html",
    "revision": "405b49ad9d31122af2f97543a61f3ef8"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/企业文化规章制度人员架构/企业文化与规章制度.html",
    "revision": "c4db0b3fed3a38018d8141758458d17e"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/企业文化规章制度人员架构/公司杭州地区人员架构.html",
    "revision": "fec66720b04aba1396a6f08b3c0d5935"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/index-夜班店长工作流程-新版(仅供参考).html",
    "revision": "8438cb065f875f061c910d0778d4ac81"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/index-夜班店长工作流程-旧版.html",
    "revision": "583fbcd874a71538c1a353b132f69c3e"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/夜班工作时间工资和工作流程.html",
    "revision": "0180aff4a3b8e999af7dd707c8dca9f4"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/设备以及其它注意事项(仅供参考)/设备以及其它注意事项.html",
    "revision": "c8ab688eed3614f04c10460ea1656ae8"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/设备以及其它注意事项(仅供参考)/设备以及其它注意事项(仅供参考).html",
    "revision": "52c5f1fea98b65f98ab90c1cbc9c4fe0"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-其它货物收货文件/其它货物接货流程.html",
    "revision": "6d0f6e45df99ce1c7ef38023a89a8518"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-收银文件的/收银工作流程.html",
    "revision": "38e6709822fc6cec1145cdedb23ad706"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-收银文件的/收银机使用教程.html",
    "revision": "d4af2dccdaa0bcb1c4cdf4bf11964957"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/水产其它注意事项.html",
    "revision": "8787be642bd6f33a4b7cd307df480461"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-肉豆文件/肉豆制品其它注意事项.html",
    "revision": "a80e9fb2c784046de0b5db4490d65e6a"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/蔬菜保鲜手册.html",
    "revision": "4bcc199a42c33b5ada9f057faaa0fe2e"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/蔬菜其它注意事项.html",
    "revision": "591ec9deaca2ce0f95d7f78d5aca5164"
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
