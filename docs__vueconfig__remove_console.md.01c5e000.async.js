(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[91],{"5m/p":function(e,n,a){"use strict";a("4eJr");var t,l=a("3LgI"),o=a("qqnG"),r=a("XSw6"),c=a("q1tI"),s=a.n(c),i=a("vOnD"),m=i["a"].div(t||(t=Object(o["a"])(["\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 40px;\n  color: #333;\n  background-color: #fff;\n  transition: color 0.3s;\n  text-align: center;\n  font-size: 22px;\n  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;\n  &:hover {\n    color: #4569d4;\n  }\n"]))),u=()=>s.a.createElement(s.a.Fragment,null,s.a.createElement(l["a"],{style:{right:"16px"}},s.a.createElement(m,null,s.a.createElement(r["a"],null))));n["a"]=u},"8T1Q":function(e,n,a){"use strict";a("fOrg"),a("+KLJ"),a("q1tI")},CVji:function(e,n,a){"use strict";a("+BJd");var t=a("mr32"),l=a("q1tI"),o=a.n(l),r=e=>o.a.createElement(o.a.Fragment,null,o.a.createElement(t["a"],{color:e.color?e.color:"red"},e.children));n["a"]=r},lxxy:function(e,n,a){"use strict";a("tU7J");var t=a("wFql");a("q1tI"),t["a"].Text},vz2H:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),o=a("dEAq"),r=(a("8T1Q"),a("5m/p")),c=(a("CVji"),a("lxxy"),a("H1Ra")),s=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(r["a"],null),l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u53bb\u6389\u6253\u5370\u65e5\u5fd7"},l.a.createElement(o["AnchorLink"],{to:"#\u53bb\u6389\u6253\u5370\u65e5\u5fd7","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u53bb\u6389\u6253\u5370\u65e5\u5fd7"),l.a.createElement("p",null,"\u76ee\u7684\uff1a\u53bb\u6389\u751f\u4ea7\u73af\u5883\u7684 console.log \u65e5\u5fd7\uff0c\u4fdd\u7559\u5f00\u53d1\u73af\u5883\u7684 console.log \u65e5\u5fd7\u3002"),l.a.createElement("p",null,"\u63d2\u4ef6\uff1a",l.a.createElement("code",null,"babel-plugin-transform-remove-console")),l.a.createElement(c["a"],{code:"yarn add babel-plugin-transform-remove-console -D",lang:"bash"}),l.a.createElement("p",null,"\u914d\u7f6e\u6587\u4ef6\uff1a",l.a.createElement("code",null,"babel.config.js")),l.a.createElement(c["a"],{code:"// \u9879\u76ee\u5728\u53d1\u5e03\u65f6\u9700\u8981\u7528\u5230\u7684babel\u63d2\u4ef6\nconst proPlugins = [];\n\n// \u751f\u4ea7\u73af\u5883\u53bb\u6389console.log\nif (process.env.NODE_ENV === 'production') {\n  proPlugins.push('transform-remove-console');\n}\nmodule.exports = {\n  presets: ['@vue/cli-plugin-babel/preset', ['@babel/preset-env', { modules: false }]],\n  plugins: [...proPlugins],\n};",lang:"js"}))))}));n["default"]=e=>{var n=l.a.useContext(o["context"]),a=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(s,{demos:a})}}}]);