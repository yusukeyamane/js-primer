// workbox init setting
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);
importScripts(
    "https://unpkg.com/service-worker-updatefound-refresh-dialog@1.1.0/dist/service-worker-updatefound-refresh-dialog.umd.js"
);

workbox.core.setCacheNameDetails({ prefix: "js-primer-v1" });
workbox.googleAnalytics.initialize();
// precache
workbox.precaching.precacheAndRoute([
  {
    "url": "basic/array/index.html",
    "revision": "095fee1531c49dbff3f859b5e9762c31"
  },
  {
    "url": "basic/async/img/promise-chain.png",
    "revision": "e26f9e8ec157282aeb60810f23a52a6b"
  },
  {
    "url": "basic/async/img/then-rejected-promise.png",
    "revision": "c45405c987bb1a739850f71be6d010f0"
  },
  {
    "url": "basic/async/index.html",
    "revision": "cd27a8eb538d812bbb7733e40334efbe"
  },
  {
    "url": "basic/class/index.html",
    "revision": "8ccbc5bd99bdf320df6329d02e3f4fa0"
  },
  {
    "url": "basic/comments/index.html",
    "revision": "1a5a975b72e462327ad16fd432197786"
  },
  {
    "url": "basic/condition/index.html",
    "revision": "855ef987a62bc661ca1f06b8340be293"
  },
  {
    "url": "basic/data-type/index.html",
    "revision": "a21c2aa37a63a9dfcc416909e249b9d3"
  },
  {
    "url": "basic/date/index.html",
    "revision": "c8cf8fcc65557760105943d0be6e99c8"
  },
  {
    "url": "basic/ecmascript/index.html",
    "revision": "30d04b877e7f000daeed7b07b96b71ca"
  },
  {
    "url": "basic/error-try-catch/images/error.png",
    "revision": "dff0e4322cb06d42d699119b6f89428f"
  },
  {
    "url": "basic/error-try-catch/index.html",
    "revision": "9a5b2ecbbd5c0934c58f40a97518597f"
  },
  {
    "url": "basic/error-try-catch/src/error.html",
    "revision": "359cbe7900932fac79eb321c76e104b4"
  },
  {
    "url": "basic/function-declaration/index.html",
    "revision": "3f4238d40902a1de5ffb348b26586f2e"
  },
  {
    "url": "basic/function-scope/index.html",
    "revision": "508dafa410f6cc155a4ac7e46ef73523"
  },
  {
    "url": "basic/function-this/index.html",
    "revision": "8580f132d4525f5cfee15d5fdd97d24e"
  },
  {
    "url": "basic/implicit-coercion/img/JavaScript-Equality-Table.png",
    "revision": "249e75cfe1f22458bfa9fe71480a6c0d"
  },
  {
    "url": "basic/implicit-coercion/index.html",
    "revision": "64822570b23560ad2468f6c1ed509ea1"
  },
  {
    "url": "basic/index.html",
    "revision": "068b5da38d86eadccf9b8c4c16d77e86"
  },
  {
    "url": "basic/introduction/index.html",
    "revision": "174dbf1aadcb26a1ab1caa58c96c5ed9"
  },
  {
    "url": "basic/json/index.html",
    "revision": "f12d5dd0fca36da6ed3521e50a0b4aa4"
  },
  {
    "url": "basic/loop/index.html",
    "revision": "af00f866a45fae9e9ddac268052118e5"
  },
  {
    "url": "basic/map-and-set/index.html",
    "revision": "49cf6227f5c8aa654c8e13dce8911caa"
  },
  {
    "url": "basic/math/index.html",
    "revision": "1a6d51bcf993824dea7e158ffd64df3d"
  },
  {
    "url": "basic/object/index.html",
    "revision": "6f15bf74a7fb05de64bdf64eff4596ba"
  },
  {
    "url": "basic/operator/index.html",
    "revision": "5319b0a4ae02a4b5f3c81705c4982603"
  },
  {
    "url": "basic/other-parts/index.html",
    "revision": "177960af30e6dec1dcc89f5340a176a2"
  },
  {
    "url": "basic/prototype-object/img/object-prototype.png",
    "revision": "6bbe9c151a73ec89ed45606a0b42975f"
  },
  {
    "url": "basic/prototype-object/index.html",
    "revision": "a1c725e619be474b731662a5d79ec606"
  },
  {
    "url": "basic/read-eval-print/img/syntax-error.png",
    "revision": "889dfb7dec547bc8bde6fed9566d204f"
  },
  {
    "url": "basic/read-eval-print/index.html",
    "revision": "23aa59491e5de945a59b5b6a1a3ca80c"
  },
  {
    "url": "basic/read-eval-print/src/example/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error-typo/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/invalid/syntax-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/read-eval-print/src/runtime-error/index.html",
    "revision": "e6feacbd6b95841d9be147d6d820014f"
  },
  {
    "url": "basic/statement-expression/index.html",
    "revision": "245acafe373127042362cbd86e3c0df2"
  },
  {
    "url": "basic/string/index.html",
    "revision": "f7a451f85c29f27fc3267a48f19bd961"
  },
  {
    "url": "basic/variables/index.html",
    "revision": "5dde48fe342c50a727dada3768b75ffc"
  },
  {
    "url": "basic/wrapper-object/index.html",
    "revision": "39f5f8574490399a2e13b6eafcca0cf3"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.eot",
    "revision": "25a32416abee198dd821b0b17a198a8f"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.svg",
    "revision": "d7c639084f684d66a1bc66855d193ed8"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.ttf",
    "revision": "1dc35d25e61d819a9c357074014867ab"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff",
    "revision": "c8ddf1e5e5bf3682bc7bebf30f394148"
  },
  {
    "url": "gitbook/fonts/fontawesome/fontawesome-webfont.woff2",
    "revision": "e6cf7c6ec7c2d6f670ae9d762604cb0b"
  },
  {
    "url": "gitbook/fonts/fontawesome/FontAwesome.otf",
    "revision": "5dc41d8fe329a22fa1ee9225571c843e"
  },
  {
    "url": "gitbook/gitbook-plugin-anchors/plugin.css",
    "revision": "45deda85e7ceaacadb6a51c17248ad1c"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/fontsettings.js",
    "revision": "fab8f6412ce18bb367635b1bcae503ca"
  },
  {
    "url": "gitbook/gitbook-plugin-fontsettings/website.css",
    "revision": "056a6db3eef3553a78f3b7e02356b2e7"
  },
  {
    "url": "gitbook/gitbook-plugin-ga/plugin.js",
    "revision": "8b0d0bfffa07cfd2675fffb1b7b6e6f4"
  },
  {
    "url": "gitbook/gitbook-plugin-github-issue-feedback/plugin.js",
    "revision": "096a3a5838459d91e482dff2e1230c84"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/ebook.css",
    "revision": "fa203ae16ad9f01f4d20061fb9e7a6cc"
  },
  {
    "url": "gitbook/gitbook-plugin-highlight/website.css",
    "revision": "acce01e3e11cbd4b3882e7732d81f954"
  },
  {
    "url": "gitbook/gitbook-plugin-js-console/console-ui.js",
    "revision": "a6dec84857f27171c034a05c23911055"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.css",
    "revision": "4e7efddf5df2ea927a186116ba2aee2b"
  },
  {
    "url": "gitbook/gitbook-plugin-page-toc-button/plugin.js",
    "revision": "834dad580dcb5926f3b090502550f60d"
  },
  {
    "url": "gitbook/gitbook-plugin-sharing/buttons.js",
    "revision": "e7c1c051d685b9e7530c1a6675e6b119"
  },
  {
    "url": "gitbook/gitbook.js",
    "revision": "e53bf9037b1d1c9810486ef4c5493624"
  },
  {
    "url": "gitbook/icons/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/icons/icon-128x128.png",
    "revision": "b91df37069569bafccc6936d1b2e1352"
  },
  {
    "url": "gitbook/icons/icon-144x144.png",
    "revision": "e744cdec12fa24a28b40fde9b52d7695"
  },
  {
    "url": "gitbook/icons/icon-152x152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/icons/icon-192x192.png",
    "revision": "e3682439a02773056ce1bd46e6085555"
  },
  {
    "url": "gitbook/icons/icon-384x384.png",
    "revision": "2814afaf288c99d08c584b39234d3e39"
  },
  {
    "url": "gitbook/icons/icon-512x512.png",
    "revision": "fd7a37b059ccac4d7256226883672bce"
  },
  {
    "url": "gitbook/icons/icon-72x72.png",
    "revision": "406eb5ae0057f1f40b2abf9b17cd12a4"
  },
  {
    "url": "gitbook/icons/icon-96x96.png",
    "revision": "7529c23361ebe1eaba84a6cd042a9565"
  },
  {
    "url": "gitbook/images/apple-touch-icon-precomposed-152.png",
    "revision": "77dac1368e193743d56106145e1c04a9"
  },
  {
    "url": "gitbook/images/favicon.ico",
    "revision": "4724b6e29e34167169d6d9e14b8c853f"
  },
  {
    "url": "gitbook/style.css",
    "revision": "88a3a50e3559bc577c1be0de4fcc6c6d"
  },
  {
    "url": "gitbook/theme.js",
    "revision": "176e71ac3bf185b7f08e0f6cb919f1e8"
  },
  {
    "url": "index.html",
    "revision": "14fdfdfc4468dc81fa45c4f995bbb9f5"
  },
  {
    "url": "intro/feedback/index.html",
    "revision": "eee7c72e7a5c326ac999facb0294e106"
  },
  {
    "url": "intro/goal/index.html",
    "revision": "f3be1e1c9b817d89eed4e5711455e66a"
  },
  {
    "url": "intro/preparation/index.html",
    "revision": "05e52657c057ff1e6fab0ed50c909b4e"
  },
  {
    "url": "landing/css/style.css",
    "revision": "026290c57783f482c4226e004e2279e5"
  },
  {
    "url": "landing/img/cover.png",
    "revision": "fec746cff0a8b4a9fb4193d4af3d534f"
  },
  {
    "url": "landing/img/js-primer.png",
    "revision": "19d98be248101b2685bb2a74d510890f"
  },
  {
    "url": "landing/img/repo-actions-watch.png",
    "revision": "4b4cd63c1bad3861502d3127c2a2d0a2"
  },
  {
    "url": "landing/index.html",
    "revision": "b25c7cbf90406ff30074a219ce196b6f"
  },
  {
    "url": "use-case/ajaxapp/display/img/fig-1.png",
    "revision": "15072f06aa7fd4d5fbce148bc2db975f"
  },
  {
    "url": "use-case/ajaxapp/display/index.html",
    "revision": "bf3535db90e87790691b4304a5d33ca6"
  },
  {
    "url": "use-case/ajaxapp/display/src/index.html",
    "revision": "e1df96c10be2693de3909e98d272fd31"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/img/fig-1.png",
    "revision": "529c6091a9875e4151bbd301a9eeaeee"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/index.html",
    "revision": "592b5508a8254a60fc0f7a46faf1aa43"
  },
  {
    "url": "use-case/ajaxapp/entrypoint/src/index.html",
    "revision": "937f44b83967231567c263b6c874461e"
  },
  {
    "url": "use-case/ajaxapp/index.html",
    "revision": "8c6a332cd4c94ff62cab833a158f604c"
  },
  {
    "url": "use-case/ajaxapp/promise/img/fig-1.png",
    "revision": "97b1897743ee44e2fd8a9315a7af15eb"
  },
  {
    "url": "use-case/ajaxapp/promise/index.html",
    "revision": "ca2d414b03aa31b461fa2cfd3e861c03"
  },
  {
    "url": "use-case/ajaxapp/promise/src/index.html",
    "revision": "4e2eb4689531394ba40b6dc8932f2809"
  },
  {
    "url": "use-case/ajaxapp/src/index.html",
    "revision": "4e2eb4689531394ba40b6dc8932f2809"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-1.png",
    "revision": "30ae672fc36c3cf614eea13ea84dca42"
  },
  {
    "url": "use-case/ajaxapp/xhr/img/fig-2.png",
    "revision": "37814c55beb033fe5d7d40c0b45afe91"
  },
  {
    "url": "use-case/ajaxapp/xhr/index.html",
    "revision": "14e73ede543492ee7ec38f4d7c6620f3"
  },
  {
    "url": "use-case/ajaxapp/xhr/src/index.html",
    "revision": "d86dd5f8bd529e577d5ed6708204e386"
  },
  {
    "url": "use-case/index.html",
    "revision": "c20260bed0abc0e0de3abb8ab2c09338"
  },
  {
    "url": "use-case/module/index.html",
    "revision": "6b376b2ea60ce30914e52ad4a7eb5a77"
  },
  {
    "url": "use-case/nodecli/argument-parse/index.html",
    "revision": "1fea2a03bb4fd57fa656ca52af4925e6"
  },
  {
    "url": "use-case/nodecli/helloworld/index.html",
    "revision": "09d5b72e6e3a3d90712a96b85f4b6b87"
  },
  {
    "url": "use-case/nodecli/index.html",
    "revision": "4aa541aeade674beca751b1fe3356b0c"
  },
  {
    "url": "use-case/nodecli/md-to-html/index.html",
    "revision": "513e0886958146ccd18c5ba3a616dd64"
  },
  {
    "url": "use-case/nodecli/read-file/index.html",
    "revision": "20299f2b86d702064b0a1301f257193d"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/index.html",
    "revision": "7dca21daa1ddc4b68af45ae66e39b0df"
  },
  {
    "url": "use-case/nodecli/refactor-and-unittest/src/test/fixtures/expected.html",
    "revision": "ec52b9890d8354b4021e271bc7db4cf8"
  },
  {
    "url": "use-case/setup-local-env/index.html",
    "revision": "9b853a0ac065375439a7612379978e5e"
  },
  {
    "url": "use-case/todoapp/app-structure/img/todo-html.png",
    "revision": "2ff1c70fe934bef3d24ff96b72af6987"
  },
  {
    "url": "use-case/todoapp/app-structure/index.html",
    "revision": "6f2eec78695b00c09f9c77b498673dab"
  },
  {
    "url": "use-case/todoapp/app-structure/todo-html/index.html",
    "revision": "05d2df3f89ce04ee02638e4910988282"
  },
  {
    "url": "use-case/todoapp/entrypoint/first-entry/index.html",
    "revision": "83221ab72b7b2483f8aff1b9df157a42"
  },
  {
    "url": "use-case/todoapp/entrypoint/img/first-entry.png",
    "revision": "d3d61ffa5bef6fbdc7ba616f01ec6520"
  },
  {
    "url": "use-case/todoapp/entrypoint/index.html",
    "revision": "fbd799f9fc2b7bd36fa2205eeeda1807"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-entry/index.html",
    "revision": "83221ab72b7b2483f8aff1b9df157a42"
  },
  {
    "url": "use-case/todoapp/entrypoint/module-scope/index.html",
    "revision": "d5c00c9e922d01a9b80f83b1411c0e0e"
  },
  {
    "url": "use-case/todoapp/event-model/event-emitter/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/event-model/index.html",
    "revision": "8b58e75848abb9c1711b5c0f7ededf4d"
  },
  {
    "url": "use-case/todoapp/final/create-view/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/final/final/index.html",
    "revision": "09db0bd1e92afc16ee0cd27da971e44a"
  },
  {
    "url": "use-case/todoapp/final/index.html",
    "revision": "e1986c6e317adf25c9ea9a5679958fd5"
  },
  {
    "url": "use-case/todoapp/final/more/index.html",
    "revision": "09db0bd1e92afc16ee0cd27da971e44a"
  },
  {
    "url": "use-case/todoapp/form-event/add-todo-item/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/form-event/img/add-todo-item.png",
    "revision": "044faab6418bb0d5c4a50d43be55a0ac"
  },
  {
    "url": "use-case/todoapp/form-event/img/form-event.png",
    "revision": "a193d8abc60dcc1f78c117af7a23a946"
  },
  {
    "url": "use-case/todoapp/form-event/index.html",
    "revision": "47152e04ff706c75d4d3a291211f5c7f"
  },
  {
    "url": "use-case/todoapp/form-event/prevent-event/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/index.html",
    "revision": "2ad0ebfb150fde2d3fb5876375f332f1"
  },
  {
    "url": "use-case/todoapp/update-delete/add-checkbox/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/update-delete/delete-feature/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  },
  {
    "url": "use-case/todoapp/update-delete/img/input-checkbox.png",
    "revision": "44920eba3f5737a49e9cc4c0893c44dd"
  },
  {
    "url": "use-case/todoapp/update-delete/index.html",
    "revision": "6bf9a7081e91178e7990ac88eba87bf3"
  },
  {
    "url": "use-case/todoapp/update-delete/input-checkbox/index.html",
    "revision": "9528b6b1e9c5c6c029843537ea4121f5"
  },
  {
    "url": "use-case/todoapp/update-delete/update-feature/index.html",
    "revision": "75625514a9233fc25344ff1ded7aa2be"
  }
]);