(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[100],{"5m/p":function(e,n,t){"use strict";t("4eJr");var r,a=t("3LgI"),o=t("qqnG"),u=t("XSw6"),c=t("q1tI"),l=t.n(c),i=t("vOnD"),s=i["a"].div(r||(r=Object(o["a"])(["\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 40px;\n  color: #333;\n  background-color: #fff;\n  transition: color 0.3s;\n  text-align: center;\n  font-size: 22px;\n  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;\n  &:hover {\n    color: #4569d4;\n  }\n"]))),m=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(a["a"],{style:{right:"16px"}},l.a.createElement(s,null,l.a.createElement(u["a"],null))));n["a"]=m},"8T1Q":function(e,n,t){"use strict";t("fOrg"),t("+KLJ"),t("q1tI")},CVji:function(e,n,t){"use strict";t("+BJd");var r=t("mr32"),a=t("q1tI"),o=t.n(a),u=e=>o.a.createElement(o.a.Fragment,null,o.a.createElement(r["a"],{color:e.color?e.color:"red"},e.children));n["a"]=u},R9s5:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),o=t("dEAq"),u=(t("8T1Q"),t("5m/p")),c=(t("CVji"),t("lxxy"),t("H1Ra")),l=a.a.memo((e=>{e.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(u["a"],null),a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"vuerouter-\u914d\u7f6e"},a.a.createElement(o["AnchorLink"],{to:"#vuerouter-\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"VueRouter \u914d\u7f6e"),a.a.createElement("h2",{id:"\u57fa\u672c\u914d\u7f6e"},a.a.createElement(o["AnchorLink"],{to:"#\u57fa\u672c\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u914d\u7f6e"),a.a.createElement(c["a"],{code:"import Vue from 'vue';\nimport VueRouter from 'vue-router';\n\nVue.use(VueRouter);\nconst routes = []; // \u5b58\u653e\u8def\u7531\u914d\u7f6e\u4fe1\u606f\n\nconst router = new VueRouter({\n  routes,\n});\n\n// \u66b4\u9732\u8def\u7531\nexport default router;",lang:"js"}),a.a.createElement("h2",{id:"\u8def\u7531\u61d2\u52a0\u8f7d"},a.a.createElement(o["AnchorLink"],{to:"#\u8def\u7531\u61d2\u52a0\u8f7d","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u8def\u7531\u61d2\u52a0\u8f7d"),a.a.createElement("p",null,"\u597d\u5904\uff1a\u4e0d\u9700\u8981\u4e00\u6b21\u6027\u52a0\u8f7d\u5b8c\u6240\u6709\u8def\u7531\u4fe1\u606f\uff0c\u53ea\u4f1a\u52a0\u8f7d\u5f53\u524d\u9700\u8981\u7684\u8def\u7531\u3002"),a.a.createElement("p",null,"\u65b9\u6cd5\uff1a"),a.a.createElement(c["a"],{code:'component: () => import("@/views/index/index.vue"),',lang:"js"}),a.a.createElement("p",null,"\u5177\u4f53\u914d\u7f6e\uff1a"),a.a.createElement(c["a"],{code:"import Vue from 'vue';\nimport VueRouter from 'vue-router';\n// \u5bfc\u5165\u9700\u8981\u521d\u59cb\u5316\u5c31\u52a0\u8f7d\u7684\u7ec4\u4ef6\nimport Layout from '../views/layout.vue';\n\nVue.use(VueRouter);\n// \u89e3\u51b3\u8def\u7531\u63a7\u5236\u53f0\u8b66\u544a\u4fe1\u606f\nconst routerPush = VueRouter.prototype.push;\nVueRouter.prototype.push = function push(location) {\n  return routerPush.call(this, location).catch((error) => {\n    error;\n  });\n};\n\n// \u914d\u7f6e\u8def\u7531\u8868\nconst routes = [\n  {\n    path: '/',\n    name: 'layout',\n    component: Layout, // \u52a0\u8f7d\u521d\u59cb\u5316\u7684\u7ec4\u4ef6\n    redirect: '/index', // \u8def\u7531\u91cd\u5b9a\u5411\n    children: [\n      // \u5b50\u8def\u7531\u914d\u7f6e\n      {\n        path: 'index',\n        name: 'index',\n        component: () => import('@/views/index/index.vue'), // \u8def\u7531\u61d2\u52a0\u8f7d\n      },\n    ],\n  },\n];\n\nconst router = new VueRouter({\n  routes,\n});\n\nexport default router;",lang:"js"}))))}));n["default"]=e=>{var n=a.a.useContext(o["context"]),t=n.demos;return a.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.a.createElement(l,{demos:t})}},lxxy:function(e,n,t){"use strict";t("tU7J");var r=t("wFql");t("q1tI"),r["a"].Text}}]);