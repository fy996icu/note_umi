(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[77],{"5m/p":function(e,n,t){"use strict";t("4eJr");var a,l=t("3LgI"),r=t("qqnG"),c=t("XSw6"),o=t("q1tI"),u=t.n(o),s=t("vOnD"),i=s["a"].div(a||(a=Object(r["a"])(["\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 40px;\n  color: #333;\n  background-color: #fff;\n  transition: color 0.3s;\n  text-align: center;\n  font-size: 22px;\n  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;\n  &:hover {\n    color: #4569d4;\n  }\n"]))),m=()=>u.a.createElement(u.a.Fragment,null,u.a.createElement(l["a"],{style:{right:"16px"}},u.a.createElement(i,null,u.a.createElement(c["a"],null))));n["a"]=m},"8T1Q":function(e,n,t){"use strict";t("fOrg"),t("+KLJ"),t("q1tI")},CVji:function(e,n,t){"use strict";t("+BJd");var a=t("mr32"),l=t("q1tI"),r=t.n(l),c=e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(a["a"],{color:e.color?e.color:"red"},e.children));n["a"]=c},WxLr:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),c=(t("8T1Q"),t("5m/p")),o=(t("CVji"),t("lxxy"),t("H1Ra")),u=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(c["a"],null),l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"getcurrentinstance"},l.a.createElement(r["AnchorLink"],{to:"#getcurrentinstance","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"getCurrentInstance"),l.a.createElement("p",null,"\u5728 Vue2 \u4e2d\u8bbf\u95ee\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\u4f7f\u7528 ",l.a.createElement("code",null,"this"),"\uff0c\u4f46\u662f\u5728 Vue3 \u4e2d\u65e0\u6cd5\u4f7f\u7528 ",l.a.createElement("code",null,"this"),"\uff0c\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",l.a.createElement("code",null,"getCurrentInstance")," \u8bbf\u95ee\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\u3002"),l.a.createElement("p",null,l.a.createElement("code",null,"getCurrentInstance")," \u53ea\u66b4\u9732\u7ed9\u9ad8\u9636\u4f7f\u7528\u573a\u666f\uff0c\u5178\u578b\u7684\u6bd4\u5982\u5728\u5e93\u4e2d\u3002\u5f3a\u70c8\u53cd\u5bf9\u5728\u5e94\u7528\u7684\u4ee3\u7801\u4e2d\u4f7f\u7528 ",l.a.createElement("code",null,"getCurrentInstance"),"\u3002\u8bf7\u4e0d\u8981\u628a\u5b83\u5f53\u4f5c\u5728\u7ec4\u5408\u5f0f API \u4e2d\u83b7\u53d6 ",l.a.createElement("code",null,"this")," \u7684\u66ff\u4ee3\u65b9\u6848\u6765\u4f7f\u7528\u3002"),l.a.createElement(o["a"],{code:"\x3c!-- \u7236\u7ec4\u4ef6 --\x3e\n<template>\n  <div></div>\n</template>\n\n<script lang=\"ts\">\n  import { defineComponent, getCurrentInstance } from 'vue';\n  export default defineComponent({\n    setup() {\n      // \u901a\u8fc7 getCurrentInstance() \u83b7\u53d6\u5230\u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\n      const internalInstance = getCurrentInstance();\n\n      // \u5f53\u524d\u7ec4\u4ef6\u5b9e\u4f8b\n      console.log(internalInstance);\n      return {};\n    },\n  });\n<\/script>",lang:"html"}),l.a.createElement("p",null,l.a.createElement("code",null,"getCurrentInstance")," \u53ea\u80fd\u5728 ",l.a.createElement("code",null,"setup")," \u6216 ",l.a.createElement("code",null,"\u751f\u547d\u5468\u671f\u94a9\u5b50")," \u4e2d\u8c03\u7528\u3002"),l.a.createElement("p",null,"\u5982\u9700\u5728 ",l.a.createElement("code",null,"setup")," \u6216 ",l.a.createElement("code",null,"\u751f\u547d\u5468\u671f\u94a9\u5b50")," \u5916\u4f7f\u7528\uff0c\u8bf7\u5148\u5728 ",l.a.createElement("code",null,"setup")," \u4e2d\u8c03\u7528 ",l.a.createElement("code",null,"getCurrentInstance()")," \u83b7\u53d6\u8be5\u5b9e\u4f8b\u7136\u540e\u518d\u4f7f\u7528\u3002"),l.a.createElement(o["a"],{code:"const MyComponent = {\n  setup() {\n    const internalInstance = getCurrentInstance(); // \u6709\u6548\n\n    const id = useComponentId(); // \u6709\u6548\n\n    const handleClick = () => {\n      getCurrentInstance(); // \u65e0\u6548\n      useComponentId(); // \u65e0\u6548\n\n      internalInstance; // \u6709\u6548\n    };\n\n    onMounted(() => {\n      getCurrentInstance(); // \u6709\u6548\n    });\n\n    return () =>\n      h(\n        'button',\n        {\n          onClick: handleClick,\n        },\n        `uid: ${id}`,\n      );\n  },\n};\n\n// \u5728\u7ec4\u5408\u5f0f\u51fd\u6570\u4e2d\u8c03\u7528\u4e5f\u53ef\u4ee5\u6b63\u5e38\u6267\u884c\nfunction useComponentId() {\n  return getCurrentInstance().uid;\n}",lang:"js"}))))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(u,{demos:t})}},lxxy:function(e,n,t){"use strict";t("tU7J");var a=t("wFql");t("q1tI"),a["a"].Text}}]);