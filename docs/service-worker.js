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
    "revision": "725af6aa44a3501ad4b650225c9860ef"
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
    "url": "assets/js/13.88eb8f7f.js",
    "revision": "df760b0b3a198e24d499cafc76f78824"
  },
  {
    "url": "assets/js/14.4b78d024.js",
    "revision": "de19a28c0cfdd5f9ef43bc82ea5362fb"
  },
  {
    "url": "assets/js/15.f09825ea.js",
    "revision": "c6d7db4a12263bc9a12e0767f9ff3671"
  },
  {
    "url": "assets/js/16.05514463.js",
    "revision": "02b640b32322ece7f3c4bb932a5f510b"
  },
  {
    "url": "assets/js/17.dbd59008.js",
    "revision": "7bab27cfe07661462ce8e6d87d5eebfd"
  },
  {
    "url": "assets/js/18.f5f8374e.js",
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
    "url": "assets/js/22.7c32f852.js",
    "revision": "77db4475ecd1853eb850a77aea8d278d"
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
    "url": "assets/js/3.6fb4284b.js",
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
    "url": "assets/js/4.65ccc3fb.js",
    "revision": "7cba2d79c5b4023618b827253d71038c"
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
    "url": "assets/js/5.fce80d7c.js",
    "revision": "b3950486ba964a7b689ea20e7022fe96"
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
    "url": "assets/js/57.bd357723.js",
    "revision": "349601f77a8f2a6e67669bfdb01ce685"
  },
  {
    "url": "assets/js/58.ed193b3f.js",
    "revision": "3f0fa53c6782189265d30c65f650d371"
  },
  {
    "url": "assets/js/59.5260373a.js",
    "revision": "976c8694e77c01bb8f21632bf4993c4a"
  },
  {
    "url": "assets/js/6.0da32196.js",
    "revision": "689eb93b285349d26895478c274e549a"
  },
  {
    "url": "assets/js/60.b3c0c73f.js",
    "revision": "8a5f87e9f367e1067eecb2d430451657"
  },
  {
    "url": "assets/js/61.11c86460.js",
    "revision": "821430a9031b38b66d23ae12e5dd2924"
  },
  {
    "url": "assets/js/62.d8688a85.js",
    "revision": "d809a0aa0511a3c91dfc6a05cf41a922"
  },
  {
    "url": "assets/js/63.a3656182.js",
    "revision": "3c010275217d24df4eccdf2c8838c266"
  },
  {
    "url": "assets/js/64.ed16132e.js",
    "revision": "71051d35502c7a113119f9175c43cc6f"
  },
  {
    "url": "assets/js/65.e46605a9.js",
    "revision": "d739ead9c7f9b660914a6a34b5940f61"
  },
  {
    "url": "assets/js/7.deec0bbf.js",
    "revision": "e77b386ed7e1e3f89ca327c72a9925c4"
  },
  {
    "url": "assets/js/8.a3d42d3b.js",
    "revision": "1e690b6db59117c874545ce9a26da2db"
  },
  {
    "url": "assets/js/9.d9c8bb9f.js",
    "revision": "f1e3a5af5c553cf289daf9fa087ade08"
  },
  {
    "url": "assets/js/app.03c5ee98.js",
    "revision": "18db0dd1660f83d4fe387a084afcf84f"
  },
  {
    "url": "index.html",
    "revision": "050f6bf8dba6b6c4fd6da9abe5f5b40e"
  },
  {
    "url": "initwithmarkdown/ryt/index.html",
    "revision": "ca45bdb4c0128c2260a9faaf943c06cf"
  },
  {
    "url": "initwithmarkdown/ypsx/about/企业文化与规章制度.html",
    "revision": "b0cdcbab8288084a8efe5b81da74c002"
  },
  {
    "url": "initwithmarkdown/ypsx/about/公司杭州地区人员架构.html",
    "revision": "f0931c966eb94fe1d537aac842eb33e0"
  },
  {
    "url": "initwithmarkdown/ypsx/about/关于.html",
    "revision": "0f67b8651e49c9aa7925a40102cac55d"
  },
  {
    "url": "initwithmarkdown/ypsx/about/谊品生鲜发展历程.html",
    "revision": "c9a3d844ee982dbe851338a536761765"
  },
  {
    "url": "initwithmarkdown/ypsx/common/其它物品物料检索.html",
    "revision": "a0b083ab9518cd85492e333ce24163a4"
  },
  {
    "url": "initwithmarkdown/ypsx/common/其它货物接货流程.html",
    "revision": "c6f2c202ce458f863fdcc07e9d8535aa"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班工作时间工资和工作流程.html",
    "revision": "fbde986fc6340c8940830ab19a6ffc9f"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-参考.html",
    "revision": "603047fb901a7fd36472edd658cc4645"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-新版.html",
    "revision": "6a43d7e5cd9571105525a4b071992fe4"
  },
  {
    "url": "initwithmarkdown/ypsx/common/夜班店长工作流程-旧版.html",
    "revision": "d91642e2219321377a76a047ba106469"
  },
  {
    "url": "initwithmarkdown/ypsx/common/工作中常见软件推荐.html",
    "revision": "a840278a845229b636e86d65e1618dac"
  },
  {
    "url": "initwithmarkdown/ypsx/common/收银工作流程.html",
    "revision": "1c2c619c7bf3ec21a8b0322a5bd61dc3"
  },
  {
    "url": "initwithmarkdown/ypsx/common/水产其它注意事项.html",
    "revision": "2c1779f117a0366491ff43d9ae551433"
  },
  {
    "url": "initwithmarkdown/ypsx/common/肉加工其它注意事项.html",
    "revision": "f0b31544aa8d7beb7f40db091790d66b"
  },
  {
    "url": "initwithmarkdown/ypsx/common/蔬菜保鲜手册.html",
    "revision": "ff7d5937d7190dd21a2c706c995f88c5"
  },
  {
    "url": "initwithmarkdown/ypsx/common/蔬菜其它注意事项.html",
    "revision": "08a5cb3c03b3863bd75e5ec51071d569"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/光猫路由器使用.html",
    "revision": "f81a0612d7026d71819481365e688ef3"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/其它设备检索.html",
    "revision": "af3d7a0ca7db87108bff3b93c04be678"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/制冰机使用.html",
    "revision": "81a51260736e10bb2124d99a52594f5e"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/卧式冷冻柜使用.html",
    "revision": "8c80127d16854683f226e359a85c8697"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/外机清洗.html",
    "revision": "0e6c9c671aa4cec4835c0b457fe8cbaa"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/打氧机使用.html",
    "revision": "ac6599132c3c30b17649c257446b6b02"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/收银机使用教程.html",
    "revision": "1ea39239903a87da6df201548eaf952a"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌低温冻品展示柜使用.html",
    "revision": "f6bbd86d6ce19fdd50f307fa2e1548ce"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌低温牛奶展示柜使用.html",
    "revision": "27ea6878f440f8c18f2838a119c265de"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/星星牌肉加工展示柜使用.html",
    "revision": "2b326c9d8e4b65ae535848988c8726fb"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/条码电子秤使用.html",
    "revision": "4f3a7459f55ba2c54f34c692f1d77083"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/电子台秤使用.html",
    "revision": "fefc7def25b66111bdd68f84d086a5bd"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/电闸柜使用.html",
    "revision": "22d9b6b00bbc0ec55d483042888e455b"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/监控使用.html",
    "revision": "107e3ac15c9144f197925b46a8541ef0"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/空调机使用.html",
    "revision": "6f147488f766137b8291de26760ef118"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/肉加工立式冰柜使用.html",
    "revision": "f09680eedd53b01551e259a911580d67"
  },
  {
    "url": "initwithmarkdown/ypsx/equipment/谊品生鲜冷柜使用注意事项.html",
    "revision": "aba07ef3aeb24934eda6db18bb1e9ded"
  },
  {
    "url": "initwithmarkdown/ypsx/index.html",
    "revision": "9462b5b52a5ff105a151f9e7e94ee232"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4allfiles.html",
    "revision": "0cff229a47915e112a82387d098974d1"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4common.html",
    "revision": "8da9c0b266c5caeb7b4207b869647dd0"
  },
  {
    "url": "initwithmarkdown/ypsx/indexall/index4equipment.html",
    "revision": "8f504cd3ae3f0f6d5faaf9252bd32e91"
  },
  {
    "url": "initwithmarkdown/zhsm/index.html",
    "revision": "0f0b0d22194c65f4e7784882d7a64ed1"
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
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/index.html",
    "revision": "a5c4259e46788976c5ef0133af5e474c"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/index.html",
    "revision": "0a0bd913f1a6dcc8449a563316b825f3"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/企业文化规章制度人员架构/企业文化与规章制度.html",
    "revision": "beedac06c8ea89ee0f4e9bd76fe1513f"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/企业文化规章制度人员架构/公司杭州地区人员架构.html",
    "revision": "6fc2dedd39324bb1d8770adab3a7071c"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/index-夜班店长工作流程-新版(仅供参考).html",
    "revision": "2f35bdb63a294a38a0abe784f07ade5c"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/index-夜班店长工作流程-旧版.html",
    "revision": "8ecfb4c47425794c0a6490e795ace594"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/夜班工作时间工资和工作流程/夜班工作时间工资和工作流程.html",
    "revision": "526710de2c0eb3490b8cfb288aefc674"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/设备以及其它注意事项(仅供参考)/设备以及其它注意事项.html",
    "revision": "c445bbfaacf462bfa1c8075c299a9c8d"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/设备以及其它注意事项(仅供参考)/设备以及其它注意事项(仅供参考).html",
    "revision": "da7ee15aa6b9b1993b408fe178fc18e1"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/附录-其它货物收货文件/其它货物接货流程.html",
    "revision": "433c96c98fe38169ff539a4976aaa3c0"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/附录-收银文件的/收银工作流程.html",
    "revision": "1b8a07a39cf00acea864c5512fee6fa4"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/附录-收银文件的/收银机使用教程.html",
    "revision": "e22538c9ded219935292f0400c5517ff"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/附录-水产文件/水产其它注意事项.html",
    "revision": "e25cd3345b761fc93e188d33b2d4c36d"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/附录-肉豆文件/肉豆制品其它注意事项.html",
    "revision": "2bb893899ecbb019a2748a57233442d1"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/附录-蔬菜文件/蔬菜保鲜手册.html",
    "revision": "a8e6274b5b0b3b5afb498d7a0846723f"
  },
  {
    "url": "resources/ypsx/files/define/initwithmarkdown&dir.zip/夜班工作流入门withmarkdown/附录-蔬菜文件/蔬菜其它注意事项.html",
    "revision": "76ff190d28292fb512502861d50d4883"
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
