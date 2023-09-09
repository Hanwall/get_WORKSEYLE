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
    "revision": "b0690ee73197a2a7dce506a073de9e8d"
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
    "url": "assets/js/13.d4ee3d16.js",
    "revision": "b89c82a18bf8ff20ff08dc1f7dae8ce2"
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
    "url": "assets/js/20.1220a4b3.js",
    "revision": "e90fae600b076ca1002824c3a0cf9f7c"
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
    "url": "assets/js/app.86c32e1c.js",
    "revision": "7157f554774adfd94b092825aabc47a6"
  },
  {
    "url": "index.html",
    "revision": "21aad0742084465e3414e697494fa155"
  },
  {
    "url": "initwithmarkdown/ryt/index.html",
    "revision": "2178f96089e151693f75b11d4169a97d"
  },
  {
    "url": "initwithmarkdown/ypsx/about/企业文化与规章制度.html",
    "revision": "73c4935d7236514fc1e0a59cffeb92fa"
  },
  {
    "url": "initwithmarkdown/ypsx/about/公司杭州地区人员架构.html",
    "revision": "15047f2953b83d669e20e9ca727c34dc"
  },
  {
    "url": "initwithmarkdown/ypsx/about/关于.html",
    "revision": "36bfc4de0e483a4d0a1ce188411fd124"
  },
  {
    "url": "initwithmarkdown/ypsx/about/谊品生鲜发展历程.html",
    "revision": "a50078bc6e47d942574cef1723145622"
  },
  {
    "url": "initwithmarkdown/ypsx/common/其它物品物料检索.html",
    "revision": "2281435f34ca42c9506f23ece30e3e97"
  },
  {
    "url": "initwithmarkdown/ypsx/common/其它货物接货流程.html",
    "revision": "ab121229e9a1f61560f0dcd4af2e9ab1"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班工作时间工资和工作流程.html",
    "revision": "fd942c912885d91a75a9dcef1eb2c1b7"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-参考.html",
    "revision": "30bca947df57e41469c1796f4f147785"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-新版.html",
    "revision": "d4f2fb5a469c50d3c26a7647caa8e407"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-旧版.html",
    "revision": "bb4ada9858bc842a7ad44693501dc123"
  },
  {
    "url": "initwithmarkdown/ypsx/common/工作中常见软件推荐.html",
    "revision": "ddac395a6c290e065469333d6ec39949"
  },
  {
    "url": "initwithmarkdown/ypsx/common/收银工作流程.html",
    "revision": "a4029a9d7c06e8e97605ee9af008f35e"
  },
  {
    "url": "initwithmarkdown/ypsx/common/水产其它注意事项.html",
    "revision": "7eaf899560aab013c64bde6c3b665961"
  },
  {
    "url": "initwithmarkdown/ypsx/common/肉加工其它注意事项.html",
    "revision": "359cc858c79ca13ebb7b33279ff52e8f"
  },
  {
    "url": "initwithmarkdown/ypsx/common/蔬菜保鲜手册.html",
    "revision": "19b5548d3260c89602c6526a1ad70e29"
  },
  {
    "url": "initwithmarkdown/ypsx/common/蔬菜其它注意事项.html",
    "revision": "908266223ebd1c67960195f8e2d8d99b"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/光猫路由器使用.html",
    "revision": "cfac8af825b480c5c085d7696852b993"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/其它设备检索.html",
    "revision": "6b6ab0b9ad705b947c4f14998dbc9268"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/制冰机使用.html",
    "revision": "c6b89509f84a628f2c7bae624f07c347"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/卧式冷冻柜使用.html",
    "revision": "324601faae3fe13837684378aa97ebac"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/外机清洗.html",
    "revision": "b35c61ff1af2d772b900a0a3a27d2f29"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/打氧机使用.html",
    "revision": "329f3cbfe82a19fe9893929638c28f36"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/收银机使用教程.html",
    "revision": "fa71bd909b5d3804aef33457336de7bc"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌低温冻品展示柜使用.html",
    "revision": "859de2eea20962cee19677c0570c3438"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌低温牛奶展示柜使用.html",
    "revision": "1906c1546a84e5d405c5662937a69c3a"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌肉加工展示柜使用.html",
    "revision": "1b7b07c8a0cfd4d8cac2f3ae853ed1ab"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/条码电子秤使用.html",
    "revision": "3bd11a510f8ea998722fa05cb55441a8"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/电子台秤使用.html",
    "revision": "01faf66defe2df317abe1c3fd850ac39"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/电闸柜使用.html",
    "revision": "a464e5ef861ef776d4c9382e33fe82fa"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/监控使用.html",
    "revision": "9369ba17072b63be6c4cdf9bb70604da"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/空调机使用.html",
    "revision": "b60608d3d3f7b366cae1dc7d4ccf7767"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/肉加工立式冰柜使用.html",
    "revision": "ef82bb9c3607aff824ff84177cc3efa8"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/谊品生鲜冷柜使用注意事项.html",
    "revision": "61e78c57221373d74d9bb2afb2655366"
  },
  {
    "url": "initwithmarkdown/ypsx/index.html",
    "revision": "04df8b68b3aa3ce6854a1bf34d91a332"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4allfiles.html",
    "revision": "d449c04fe5e46d12393271abbcd3d501"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4common.html",
    "revision": "0b9b3bbde352cf530cf461b5973a464d"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4equipment.html",
    "revision": "1905cf40c9f9b8fdba680bdeec69daf7"
  },
  {
    "url": "initwithmarkdown/zhsm/index.html",
    "revision": "c59b6900175f9e656ec5e7946ff3705e"
  },
  {
    "url": "logo/loading.gif",
    "revision": "c502cd01c910b4f53d86603d6bd078ff"
  },
  {
    "url": "logo/logo.jpg",
    "revision": "07a481cf6281f8b181c353e44e97c565"
  },
  {
    "url": "logo/WORK.jpeg",
    "revision": "202cbaa46141b5baf90009bbdf46e3f0"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/index.html",
    "revision": "3b21d7bf1691660a233f32df503bad8a"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/index.html",
    "revision": "ed5dfe4a5fe376aaded596074c4cddf8"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/企业文化规章制度人员架构/企业文化与规章制度.html",
    "revision": "a15ef733bd4fdd56db81376fac1c7c0f"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/企业文化规章制度人员架构/公司杭州地区人员架构.html",
    "revision": "98a73108d883c6e920a2e2176fdc402b"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/index-夜班店长工作流程-新版(仅供参考).html",
    "revision": "563708d47128603dbd0471f9cacf94da"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/index-夜班店长工作流程-旧版.html",
    "revision": "df3292ed8b915dacbc62c204c1ab4d5e"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/夜班工作时间工资和工作流程.html",
    "revision": "29f0cb6fc31ae09302cad8e0fdf563e7"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/设备以及其它注意事项(仅供参考)/设备以及其它注意事项.html",
    "revision": "16491385cf24a7fa2d8bcbf71799a285"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/设备以及其它注意事项(仅供参考)/设备以及其它注意事项(仅供参考).html",
    "revision": "4db3e124802f2714bc82c7c2298442e5"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-其它货物收货文件/其它货物接货流程.html",
    "revision": "d8127910fb8f1a587d21f78ed29d6631"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-收银文件的/收银工作流程.html",
    "revision": "b9ee1abfaeb08ef0a748829d55662357"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-收银文件的/收银机使用教程.html",
    "revision": "4d9d31f331448237b4f0c758917b1f62"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/水产其它注意事项.html",
    "revision": "834e4cd8ebe70153a7638b73b57068d0"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-肉豆文件/肉豆制品其它注意事项.html",
    "revision": "421fbbe5b5cb1f25253cd5c7b732ccd7"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/蔬菜保鲜手册.html",
    "revision": "4981084c56ea9e2981230ff677c40e5c"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/蔬菜其它注意事项.html",
    "revision": "0e0a634af06c8ebdbc6d290978fbd273"
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
