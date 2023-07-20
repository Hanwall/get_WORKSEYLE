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
    "revision": "b3f17239484a767eedb888eaca681dda"
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
    "url": "assets/js/10.1bc13b56.js",
    "revision": "1821fa5b36cc0571ce5bf48bd87add3c"
  },
  {
    "url": "assets/js/11.97866461.js",
    "revision": "011af2cb48a64e0ab3d022d243f8d6d3"
  },
  {
    "url": "assets/js/12.57b1878a.js",
    "revision": "b3019a48f30990f0c2a38fbb70eccc99"
  },
  {
    "url": "assets/js/13.27614be8.js",
    "revision": "1ef8c958c3bee335892cbd1ac894da72"
  },
  {
    "url": "assets/js/14.8709d6f9.js",
    "revision": "2b22220f1ea2924c820251e287e74be3"
  },
  {
    "url": "assets/js/15.f09825ea.js",
    "revision": "c6d7db4a12263bc9a12e0767f9ff3671"
  },
  {
    "url": "assets/js/16.5eaba764.js",
    "revision": "02b640b32322ece7f3c4bb932a5f510b"
  },
  {
    "url": "assets/js/17.37e5b716.js",
    "revision": "e7fbf76589b9e2d833c3a0b404937239"
  },
  {
    "url": "assets/js/18.463fb9bb.js",
    "revision": "4e7850a15b7b03005fd39cb85c5913dd"
  },
  {
    "url": "assets/js/19.eee05c18.js",
    "revision": "c58ce765a0d02aac28d1a633538a368a"
  },
  {
    "url": "assets/js/2.c21aa926.js",
    "revision": "7319484f082f54bfdbd1085c62c9351a"
  },
  {
    "url": "assets/js/20.eee7d995.js",
    "revision": "fa4d61ac6422169e0dc9fe919f6283cb"
  },
  {
    "url": "assets/js/21.afe4eb4b.js",
    "revision": "30a5bbabd2fd6453ba0b6d5945509fc8"
  },
  {
    "url": "assets/js/22.62bb5f57.js",
    "revision": "84677169e194c16439554b953c79b789"
  },
  {
    "url": "assets/js/23.a71e10ae.js",
    "revision": "d210af40a20de9900257115713df1b5c"
  },
  {
    "url": "assets/js/24.8701ea3d.js",
    "revision": "4c50af14eb0a197d32e433b59ae9d363"
  },
  {
    "url": "assets/js/25.6b6107bf.js",
    "revision": "7813b073ce1c5a4ca84bd45462d6c9d1"
  },
  {
    "url": "assets/js/26.e0d97449.js",
    "revision": "261086052b7d616b0e491af34859e698"
  },
  {
    "url": "assets/js/27.f5332955.js",
    "revision": "e4c00994f40fa191d590413129e6838d"
  },
  {
    "url": "assets/js/28.4e0e5171.js",
    "revision": "e5794c081651d2a77e28c5cf2a6aff7f"
  },
  {
    "url": "assets/js/29.f81da9e0.js",
    "revision": "0075dae6b542ebc684bc9e30c25d01fd"
  },
  {
    "url": "assets/js/3.13d1ba87.js",
    "revision": "1fcd0be9b2cee3737744bd3d7ce6ab03"
  },
  {
    "url": "assets/js/30.8ec73404.js",
    "revision": "d1f15de4d367a8851c193c47ad53b76b"
  },
  {
    "url": "assets/js/31.7f74c7e1.js",
    "revision": "4b73af1b8b3a18ce06ea3e47c765ff5b"
  },
  {
    "url": "assets/js/32.bda624e5.js",
    "revision": "9a203aa2634fbb79607c42443ea44f71"
  },
  {
    "url": "assets/js/33.e162cb99.js",
    "revision": "f03e7816c6cbe675f6c030ebc848a2a8"
  },
  {
    "url": "assets/js/34.bb4404a2.js",
    "revision": "bd83a5a73952cd93e6b840fe8194b10e"
  },
  {
    "url": "assets/js/35.17420452.js",
    "revision": "c800a9d8548ccada1a9c4924c80ec254"
  },
  {
    "url": "assets/js/36.adbd5dca.js",
    "revision": "ed4d447a93d050d55761e394993454af"
  },
  {
    "url": "assets/js/37.2d79a804.js",
    "revision": "30183694e90f982679a06e4d55659c49"
  },
  {
    "url": "assets/js/38.e4bf2c37.js",
    "revision": "f43177fc979917fa0adb9d5a353fc4a1"
  },
  {
    "url": "assets/js/39.143c3085.js",
    "revision": "6485bd211596b476811049284b7ccb86"
  },
  {
    "url": "assets/js/4.652f907b.js",
    "revision": "aa5d4428494654d79b56e97f7ae722d8"
  },
  {
    "url": "assets/js/40.06f63d4a.js",
    "revision": "0a1a6e4f980f624de518e67ea8f9d8de"
  },
  {
    "url": "assets/js/41.8e3e8bc0.js",
    "revision": "0e3feb6ce017ab069f6736a40eaa699d"
  },
  {
    "url": "assets/js/42.f6f89c8d.js",
    "revision": "a2b4726c6b10b1d88b9bcb6296f82eb5"
  },
  {
    "url": "assets/js/43.f71f7272.js",
    "revision": "698b2da2844429452141f2ef7d9d6629"
  },
  {
    "url": "assets/js/44.20b2a381.js",
    "revision": "72a10e9242f1573e5b26dc85894c24e3"
  },
  {
    "url": "assets/js/45.f4984f9a.js",
    "revision": "5a25d3c4d8a83bc6ee48b8b09624e715"
  },
  {
    "url": "assets/js/46.707b5027.js",
    "revision": "5590d65792a33cf99a86d08242cdd7c0"
  },
  {
    "url": "assets/js/47.81e89cbc.js",
    "revision": "adb2856c2cc429bf93f05e72406d095f"
  },
  {
    "url": "assets/js/48.374c9acb.js",
    "revision": "ff44144ca7618b5d54cf05c9cefe8925"
  },
  {
    "url": "assets/js/49.447ace44.js",
    "revision": "be499dd495d143d1154f89cbaac06440"
  },
  {
    "url": "assets/js/5.2768d979.js",
    "revision": "cd98d7af5db9abfe5960bf575e4d407f"
  },
  {
    "url": "assets/js/50.54faa419.js",
    "revision": "5bd1d112ba6d60ffcf7681a95379342e"
  },
  {
    "url": "assets/js/51.b7ad6c7e.js",
    "revision": "0757aaaef7d31d8b857d0ccad1db2939"
  },
  {
    "url": "assets/js/52.c5bc13bb.js",
    "revision": "2cd1c38183ef5b48356c48c2b6733827"
  },
  {
    "url": "assets/js/53.193abb0b.js",
    "revision": "6cbedaaf8fcf5adb392a97f7a71c98b5"
  },
  {
    "url": "assets/js/54.b08fc91d.js",
    "revision": "754a2f12700420ad811b0aec459c3d55"
  },
  {
    "url": "assets/js/55.ca4921b5.js",
    "revision": "8cee628359e3baea3f8a8216ef9cfdf6"
  },
  {
    "url": "assets/js/56.a6b2eb07.js",
    "revision": "5af5e3639328ee3967cfa8dbd54f7757"
  },
  {
    "url": "assets/js/57.a5e668e5.js",
    "revision": "dcd3c30c8c379342b744361b1c32c844"
  },
  {
    "url": "assets/js/58.c791c488.js",
    "revision": "ac6f424b20c965f1949c8c96a546c4db"
  },
  {
    "url": "assets/js/59.e8b67ee7.js",
    "revision": "4f193adcb9e18b26052ead5af6335f19"
  },
  {
    "url": "assets/js/6.b4f98d18.js",
    "revision": "689eb93b285349d26895478c274e549a"
  },
  {
    "url": "assets/js/60.a0d074c3.js",
    "revision": "8a5f87e9f367e1067eecb2d430451657"
  },
  {
    "url": "assets/js/61.c720d804.js",
    "revision": "821430a9031b38b66d23ae12e5dd2924"
  },
  {
    "url": "assets/js/62.7aec2918.js",
    "revision": "d809a0aa0511a3c91dfc6a05cf41a922"
  },
  {
    "url": "assets/js/63.199d7384.js",
    "revision": "3c010275217d24df4eccdf2c8838c266"
  },
  {
    "url": "assets/js/64.e0637803.js",
    "revision": "18a1cadb057715a7e583833c6e882dd5"
  },
  {
    "url": "assets/js/65.e46605a9.js",
    "revision": "d739ead9c7f9b660914a6a34b5940f61"
  },
  {
    "url": "assets/js/7.7e4edce3.js",
    "revision": "e77b386ed7e1e3f89ca327c72a9925c4"
  },
  {
    "url": "assets/js/8.766ec81f.js",
    "revision": "1e690b6db59117c874545ce9a26da2db"
  },
  {
    "url": "assets/js/9.d9c8bb9f.js",
    "revision": "f1e3a5af5c553cf289daf9fa087ade08"
  },
  {
    "url": "assets/js/app.b26e0e66.js",
    "revision": "edc6a7409e8f1efe5e249ac4dadadaa6"
  },
  {
    "url": "index.html",
    "revision": "b784f16cc9054a3c3e6340df8b4a06ef"
  },
  {
    "url": "initwithmarkdown/ryt/index.html",
    "revision": "bdf27a6e556c9ff87c4b60a3fc51523b"
  },
  {
    "url": "initwithmarkdown/ypsx/about/企业文化与规章制度.html",
    "revision": "a3711d52eafa78aedf80d0ec5c5c74e3"
  },
  {
    "url": "initwithmarkdown/ypsx/about/公司杭州地区人员架构.html",
    "revision": "891885018020d6251954fd7cc5b5209e"
  },
  {
    "url": "initwithmarkdown/ypsx/about/关于.html",
    "revision": "a2e8cb3368d284899bc024fc9d12cf40"
  },
  {
    "url": "initwithmarkdown/ypsx/about/谊品生鲜发展历程.html",
    "revision": "8f14b6c852511da234b8b2958dc9e6ef"
  },
  {
    "url": "initwithmarkdown/ypsx/common/其它物品物料检索.html",
    "revision": "4ab342ed5b7b96f0d8ac20062c3f1911"
  },
  {
    "url": "initwithmarkdown/ypsx/common/其它货物接货流程.html",
    "revision": "420cfec9b9bf8b78e164076c5301aba6"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班工作时间工资和工作流程.html",
    "revision": "c5063ad0e9a14d91291caa9492131ecf"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-参考.html",
    "revision": "54f4ebbe1fb2e991c64d4409e1768a3f"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-新版.html",
    "revision": "9921e5f7d25a0aaaab0440d015f2f73e"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-旧版.html",
    "revision": "2da4b389714635a6b409badaa3c7a8ac"
  },
  {
    "url": "initwithmarkdown/ypsx/common/工作中常见软件推荐.html",
    "revision": "feb61a07ed7fe35948fadd4fc3dbab49"
  },
  {
    "url": "initwithmarkdown/ypsx/common/收银工作流程.html",
    "revision": "dd11d804b71c80c52d177ceab7cda3f1"
  },
  {
    "url": "initwithmarkdown/ypsx/common/水产其它注意事项.html",
    "revision": "86e71d2508a52d081ceda3c38e0e38de"
  },
  {
    "url": "initwithmarkdown/ypsx/common/肉加工其它注意事项.html",
    "revision": "dbcac9dfc8d8fd1a7f9bdb7bc707deca"
  },
  {
    "url": "initwithmarkdown/ypsx/common/蔬菜保鲜手册.html",
    "revision": "5d9b86246e621bbfb308b29b3596942c"
  },
  {
    "url": "initwithmarkdown/ypsx/common/蔬菜其它注意事项.html",
    "revision": "41336bb6582533d8763c3f6ba410a5ad"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/光猫路由器使用.html",
    "revision": "77d345992b6e229132c3df9096a237b1"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/其它设备检索.html",
    "revision": "8804a02a0b6cef35da27a49514467f16"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/制冰机使用.html",
    "revision": "6c5d5b16c1e8c52a9c9fed55850accfd"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/卧式冷冻柜使用.html",
    "revision": "0feb20b0b08441f629b04b4e2105b758"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/外机清洗.html",
    "revision": "8ada80630652442d62b1d338bac7784d"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/打氧机使用.html",
    "revision": "01bc1e526d6ad27d89a9c631043595d8"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/收银机使用教程.html",
    "revision": "62bcfa0b64e767aab464e8067265f14f"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌低温冻品展示柜使用.html",
    "revision": "2b29b329c85332eeff6df8b47b3cb81e"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌低温牛奶展示柜使用.html",
    "revision": "ede75a8789cabaf9ad34208bab2ade45"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌肉加工展示柜使用.html",
    "revision": "2f57df2937627b555e3463db13e9492f"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/条码电子秤使用.html",
    "revision": "19075af5f9276af5f577ad84b30e7c4f"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/电子台秤使用.html",
    "revision": "72f69ff90c2aa7afdb4b0bdae47f173e"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/电闸柜使用.html",
    "revision": "5a428503491d991f0d5d1ce9a17eb61f"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/监控使用.html",
    "revision": "19b2c2a34907ef017bb1a5c386116414"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/空调机使用.html",
    "revision": "258211984b11df5b7d0660b14f81a47a"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/肉加工立式冰柜使用.html",
    "revision": "d5fe3c9078901465fcbed6932c0433f7"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/谊品生鲜冷柜使用注意事项.html",
    "revision": "ae36a30eef161a8fd1ff29ffa1a090a9"
  },
  {
    "url": "initwithmarkdown/ypsx/index.html",
    "revision": "2683d5ca5f452b655100162ab9695731"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4allfiles.html",
    "revision": "e4cc497dcbe4d71c5909b08aeb8701b5"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4common.html",
    "revision": "38ec5a96b3208cf8dab189bdbc03ecb3"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4equipment.html",
    "revision": "9fd505e9b15e82cc9b7381e899a6240a"
  },
  {
    "url": "initwithmarkdown/zhsm/index.html",
    "revision": "b64ba9c6b127178afb6a685203ae30a2"
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
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/index.html",
    "revision": "baa12f7f3c2b7a11422e94927d0f5b56"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/index.html",
    "revision": "ab3629e3780376a4371a574550d21f1b"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/企业文化规章制度人员架构/企业文化与规章制度.html",
    "revision": "671d1b82a78893f031e0fe1269016108"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/企业文化规章制度人员架构/公司杭州地区人员架构.html",
    "revision": "b5e0054a4e6f8d145f87344756c44795"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/index-夜班店长工作流程-新版(仅供参考).html",
    "revision": "5ccb079e8c46cf40c5b3835980d1ca2d"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/index-夜班店长工作流程-旧版.html",
    "revision": "3afae37d82ee9f01ff5b70e76583b852"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/夜班工作时间工资和工作流程.html",
    "revision": "e3e68513b9378343d4c5f24a37b3f460"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/设备以及其它注意事项(仅供参考)/设备以及其它注意事项.html",
    "revision": "3bad7ce47098cb8fca6d3faa64efba05"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/设备以及其它注意事项(仅供参考)/设备以及其它注意事项(仅供参考).html",
    "revision": "e0110826b8faffa04e3d80d516e0c617"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-其它货物收货文件/其它货物接货流程.html",
    "revision": "7c64e9e7b207311593f91ea3fd5a9f61"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-收银文件的/收银工作流程.html",
    "revision": "d4419ce1c3dce1df3d3f00eb3beaef54"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-收银文件的/收银机使用教程.html",
    "revision": "ba778f195eaab9c20d5a018203b56eff"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-水产文件/水产其它注意事项.html",
    "revision": "aea60ce89673bf53aae6d7ad45f3aad2"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-肉豆文件/肉豆制品其它注意事项.html",
    "revision": "0938bd0dd4e5965b0acadc089e808c9b"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/蔬菜保鲜手册.html",
    "revision": "af022f53a6dea430e770c5b4f95e6fe9"
  },
  {
    "url": "resources/ypsx/files/define/backup.initwithmarkdown&dir/夜班工作流入门withmarkdown/附录-蔬菜文件/蔬菜其它注意事项.html",
    "revision": "d64d5657864bb9272b087839f537ef27"
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
