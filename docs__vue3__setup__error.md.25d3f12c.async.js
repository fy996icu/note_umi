(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[70],{"5m/p":function(e,n,t){"use strict";t("4eJr");var a,r=t("3LgI"),l=t("qqnG"),o=t("XSw6"),c=t("q1tI"),i=t.n(c),s=t("vOnD"),m=s["a"].div(a||(a=Object(l["a"])(["\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 40px;\n  color: #333;\n  background-color: #fff;\n  transition: color 0.3s;\n  text-align: center;\n  font-size: 22px;\n  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;\n  &:hover {\n    color: #4569d4;\n  }\n"]))),p=()=>i.a.createElement(i.a.Fragment,null,i.a.createElement(r["a"],{style:{right:"16px"}},i.a.createElement(m,null,i.a.createElement(o["a"],null))));n["a"]=p},"8T1Q":function(e,n,t){"use strict";t("fOrg"),t("+KLJ"),t("q1tI")},CVji:function(e,n,t){"use strict";t("+BJd");var a=t("mr32"),r=t("q1tI"),l=t.n(r),o=e=>l.a.createElement(l.a.Fragment,null,l.a.createElement(a["a"],{color:e.color?e.color:"red"},e.children));n["a"]=o},J0UO:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),l=t("dEAq"),o=(t("8T1Q"),t("5m/p")),c=(t("CVji"),t("lxxy"),t("H1Ra")),i=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(o["a"],null),r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u5b8f\u547d\u4ee4\u62a5\u9519\u95ee\u9898"},r.a.createElement(l["AnchorLink"],{to:"#\u5b8f\u547d\u4ee4\u62a5\u9519\u95ee\u9898","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b8f\u547d\u4ee4\u62a5\u9519\u95ee\u9898"),r.a.createElement("h2",{id:"\u95ee\u9898\u8bf4\u660e"},r.a.createElement(l["AnchorLink"],{to:"#\u95ee\u9898\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u95ee\u9898\u8bf4\u660e"),r.a.createElement("p",null,"\u5728 ",r.a.createElement("code",null,"<script setup>")," \u4e2d\u5fc5\u987b\u4f7f\u7528 ",r.a.createElement("code",null,"defineProps")," \u548c ",r.a.createElement("code",null,"defineEmits")," API \u6765\u58f0\u660e ",r.a.createElement("code",null,"props")," \u548c ",r.a.createElement("code",null,"emits")," \uff0c\u5b83\u4eec\u5177\u5907\u5b8c\u6574\u7684\u7c7b\u578b\u63a8\u65ad\u5e76\u4e14\u5728 ",r.a.createElement("code",null,"<script setup>")," \u4e2d\u662f\u76f4\u63a5\u53ef\u7528\u7684\u3002"),r.a.createElement(c["a"],{code:'<template>\n  <h1>\u5b50\u7ec4\u4ef6</h1>\n</template>\n\n<script setup lang="ts">\n  // \u76f4\u63a5\u4f7f\u7528 \u4e0d\u9700\u8981\u5bfc\u5165\n  const props = defineProps();\n  const emits = defineEmits();\n<\/script>',lang:"html"}),r.a.createElement("p",null,r.a.createElement("strong",null,"\u4f46\u662f ",r.a.createElement("code",null,"Eslint")," \u53ef\u80fd\u4f1a\u62a5\u9519\uff0c\u63d0\u793a\uff1a",r.a.createElement("code",null,"'defineProps' is not defined."),"\u3002")),r.a.createElement("h2",{id:"\u89e3\u51b3\u529e\u6cd5"},r.a.createElement(l["AnchorLink"],{to:"#\u89e3\u51b3\u529e\u6cd5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u89e3\u51b3\u529e\u6cd5"),r.a.createElement("p",null,"\u5728 ",r.a.createElement("code",null,".eslintrc.js")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),r.a.createElement(c["a"],{code:"const { defineConfig } = require('eslint-define-config');\nmodule.exports = defineConfig({\n  root: true,\n  env: {\n    // \u89e3\u51b3 defineProps \u7b49\u5b8f\u547d\u4ee4\u62a5\u9519\u95ee\u9898\n    'vue/setup-compiler-macros': true,\n  },\n  /* \u6307\u5b9a\u5982\u4f55\u89e3\u6790\u8bed\u6cd5\u3002*/\n  parser: 'vue-eslint-parser',\n  /* \u4f18\u5148\u7ea7\u4f4e\u4e8eparse\u7684\u8bed\u6cd5\u89e3\u6790\u914d\u7f6e */\n  parserOptions: {\n    parser: '@typescript-eslint/parser',\n  },\n  globals: {\n    Nullable: true,\n  },\n  extends: [\n    'plugin:vue/vue3-recommended',\n    'eslint:recommended',\n    'plugin:@typescript-eslint/recommended', // typescript-eslint\u63a8\u8350\u89c4\u5219,\n    'prettier',\n    'plugin:prettier/recommended',\n  ],\n  rules: {\n    'vue/max-attributes-per-line': ['off'],\n    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',\n    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',\n    'no-new-func': 2, //\u7981\u6b62\u4f7f\u7528new Function\n    'no-new-object': 2, //\u7981\u6b62\u4f7f\u7528new Object()\n    'no-new-require': 2, //\u7981\u6b62\u4f7f\u7528new require\n    'no-new-wrappers': 2, //\u7981\u6b62\u4f7f\u7528new\u521b\u5efa\u5305\u88c5\u5b9e\u4f8b\uff0cnew String new Boolean new Number\n    eqeqeq: 2, //\u5fc5\u987b\u4f7f\u7528\u5168\u7b49\n  },\n});",lang:"js"}))))}));n["default"]=e=>{var n=r.a.useContext(l["context"]),t=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(i,{demos:t})}},lxxy:function(e,n,t){"use strict";t("tU7J");var a=t("wFql");t("q1tI"),a["a"].Text}}]);