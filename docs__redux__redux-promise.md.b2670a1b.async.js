(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{"5m/p":function(e,n,t){"use strict";t("4eJr");var a,r=t("3LgI"),c=t("qqnG"),o=t("XSw6"),s=t("q1tI"),l=t.n(s),i=t("vOnD"),d=i["a"].div(a||(a=Object(c["a"])(["\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 40px;\n  color: #333;\n  background-color: #fff;\n  transition: color 0.3s;\n  text-align: center;\n  font-size: 22px;\n  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;\n  &:hover {\n    color: #4569d4;\n  }\n"]))),m=()=>l.a.createElement(l.a.Fragment,null,l.a.createElement(r["a"],{style:{right:"16px"}},l.a.createElement(d,null,l.a.createElement(o["a"],null))));n["a"]=m},"8T1Q":function(e,n,t){"use strict";t("fOrg"),t("+KLJ"),t("q1tI")},CVji:function(e,n,t){"use strict";t("+BJd");var a=t("mr32"),r=t("q1tI"),c=t.n(r),o=e=>c.a.createElement(c.a.Fragment,null,c.a.createElement(a["a"],{color:e.color?e.color:"red"},e.children));n["a"]=o},Q2ZA:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),c=t("dEAq"),o=(t("8T1Q"),t("5m/p")),s=(t("CVji"),t("lxxy"),t("H1Ra")),l=r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(o["a"],null),r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"redux-promise"},r.a.createElement(c["AnchorLink"],{to:"#redux-promise","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"redux-promise"),r.a.createElement("p",null,r.a.createElement("code",null,"redux-promise")," \u548c ",r.a.createElement("code",null,"redux-thunk"),"\u4e00\u6837\uff0c\u80fd\u8ba9\u6211\u4eec\u5728 Redux \u4e2d\u505a\u5f02\u6b65\u8bf7\u6c42\u3002"),r.a.createElement("h2",{id:"\u5b89\u88c5"},r.a.createElement(c["AnchorLink"],{to:"#\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),r.a.createElement(s["a"],{code:"$ yarn add redux-promise",lang:"bash"}),r.a.createElement("h2",{id:"\u5bf9\u6bd4"},r.a.createElement(c["AnchorLink"],{to:"#\u5bf9\u6bd4","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5bf9\u6bd4"),r.a.createElement("p",null,r.a.createElement("code",null,"redux-promise")," \u548c ",r.a.createElement("code",null,"redux-thunk")," \u4e00\u6837\uff0c\u90fd\u662f\u7528\u6765\u89e3\u51b3 ",r.a.createElement("code",null,"Redux")," \u4e2d\u5f02\u6b65\u8bf7\u6c42\u95ee\u9898\uff0c",r.a.createElement("code",null,"redux-thunk")," \u901a\u8fc7 ",r.a.createElement("code",null,"Action")," \u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\u89e3\u51b3\u5f02\u6b65\u8bf7\u6c42\u95ee\u9898\uff0c\u800c ",r.a.createElement("code",null,"redux-promise")," \u5219\u662f\u901a\u8fc7 ",r.a.createElement("code",null,"Action")," \u8fd4\u56de\u4e00\u4e2a ",r.a.createElement("code",null,"promise")," \u6765\u89e3\u51b3\u5f02\u6b65\u8bf7\u6c42\u95ee\u9898\u3002"),r.a.createElement("h3",{id:"redux-thunk"},r.a.createElement(c["AnchorLink"],{to:"#redux-thunk","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"redux-thunk"),r.a.createElement(s["a"],{code:"// redux/actions/user.js\n\n// \u5bfc\u5165\u5e38\u91cf\nimport axios from 'axios';\nimport { SET_USER_LIST } from '../constants';\n\n// \u7528\u6237\u5217\u8868 Action\nexport const getUserList = (data) => ({\n  type: SET_USER_LIST,\n  data,\n});\n\n// \u5b9a\u4e49getUserListAsync\u65b9\u6cd5\uff0c\u5728\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\u5e76\u6d3e\u53d1\u540c\u6b65action\u4efb\u52a1\nexport const getUserListAsync = (params, callback) => (dispatch) => {\n  console.log('\u8bf7\u6c42\u53c2\u6570\uff1a', params); // \u8f93\u51fa\uff1a\u8bf7\u6c42\u53c2\u6570\uff1a {id: '001'}\n  const url = 'https://www.fastmock.site/mock/0fc924bcdbc5617b343b766236bc39aa/react/api/userList';\n  axios.get(url).then((res) => {\n    if (res.data.code === 200) {\n      callback(); // \u8bf7\u6c42\u6210\u529f\u5c31\u89e6\u53d1\u56de\u8c03\u4e8b\u4ef6\n      // \u6d3e\u53d1\u540c\u6b65action\u4efb\u52a1\n      dispatch(getUserList(res.data.data));\n    }\n  });\n};",lang:"jsx"}),r.a.createElement("h3",{id:"redux-promise-1"},r.a.createElement(c["AnchorLink"],{to:"#redux-promise-1","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"redux-promise"),r.a.createElement(s["a"],{code:"// redux/actions/user.js\n\n// \u5bfc\u5165\u5e38\u91cf\nimport axios from 'axios';\nimport { SET_USER_LIST } from '../constants';\n\n// \u7528\u6237\u5217\u8868 Action\nexport const getUserList = (data) => ({\n  type: SET_USER_LIST,\n  data,\n});\n\n// \u5b9a\u4e49getUserListAsync\u65b9\u6cd5\uff0casync \u8fd4\u56de\u4e00\u4e2a Promise\u5bf9\u8c61\nexport const getUserListAsync = async (params, callback) => {\n  console.log('\u8bf7\u6c42\u53c2\u6570\uff1a', params); // \u8f93\u51fa\uff1a\u8bf7\u6c42\u53c2\u6570\uff1a {id: '001'}\n  const url = 'https://www.fastmock.site/mock/0fc924bcdbc5617b343b766236bc39aa/react/api/userList';\n  const res = await axios.get(url);\n  if (res.data.code === 200) {\n    callback(); // \u8bf7\u6c42\u6210\u529f\u5c31\u89e6\u53d1\u56de\u8c03\u4e8b\u4ef6\n    return getUserList(res.data.data);\n  }\n};",lang:"jsx"}),r.a.createElement("h2",{id:"\u4fee\u6539-store"},r.a.createElement(c["AnchorLink"],{to:"#\u4fee\u6539-store","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4fee\u6539 Store"),r.a.createElement("p",null,"\u5728 store \u4e2d\u5e94\u7528 ",r.a.createElement("code",null,"redux-promise")," \u4e2d\u95f4\u4ef6\uff1a\u4fee\u6539 ",r.a.createElement("code",null,"store.js"),":"),r.a.createElement(s["a"],{code:"// redux/store.js\n\n// \u5f15\u5165createStore\uff0c\u4e13\u95e8\u7528\u4e8e\u521b\u5efaredux\u4e2d\u6700\u4e3a\u6838\u5fc3\u7684store\u5bf9\u8c61\nimport { createStore, applyMiddleware } from 'redux';\n\n// \u5f15\u5165\u6c47\u603b\u4e4b\u540e\u7684reducer\nimport reducers from './reducers';\n\n// \u5f15\u5165redux-promise\uff0c\u7528\u4e8e\u652f\u6301\u5f02\u6b65promise\u98ce\u683c\u7684action\nimport promiseMiddleware from 'redux-promise';\n\n// \u66b4\u9732store-\u5e94\u7528redux-thunk\u3001redux-promise\u4e2d\u95f4\u4ef6\nexport default createStore(reducers, applyMiddleware(promiseMiddleware));",lang:"js"}),r.a.createElement("h2",{id:"\u4fee\u6539-action"},r.a.createElement(c["AnchorLink"],{to:"#\u4fee\u6539-action","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4fee\u6539 Action"),r.a.createElement("p",null,"\u4fee\u6539 ",r.a.createElement("code",null,"redux/actions/user.js")," \u4e2d\u7684 ",r.a.createElement("code",null,"getUserListAsync")," \u51fd\u6570\uff0c\u6b64\u51fd\u6570\u8fd4\u56de\u503c\u5fc5\u987b\u662f\u4e00\u4e2a ",r.a.createElement("code",null,"Promise")," \u5bf9\u8c61\u3002"),r.a.createElement(s["a"],{code:"// redux/actions/user.js\n\n// \u5bfc\u5165\u5e38\u91cf\nimport axios from 'axios';\nimport { SET_USER_LIST } from '../constants';\n\n// \u7528\u6237\u5217\u8868 Action\nexport const getUserList = (data) => ({\n  type: SET_USER_LIST,\n  data,\n});\n\n// \u5b9a\u4e49getUserListAsync\u65b9\u6cd5\uff0casync \u8fd4\u56de\u4e00\u4e2a Promise\u5bf9\u8c61\nexport const getUserListAsync = async (params, callback) => {\n  console.log('\u8bf7\u6c42\u53c2\u6570\uff1a', params); // \u8f93\u51fa\uff1a\u8bf7\u6c42\u53c2\u6570\uff1a {id: '001'}\n  const url = 'https://www.fastmock.site/mock/0fc924bcdbc5617b343b766236bc39aa/react/api/userList';\n  const res = await axios.get(url);\n  if (res.data.code === 200) {\n    callback(); // \u8bf7\u6c42\u6210\u529f\u5c31\u89e6\u53d1\u56de\u8c03\u4e8b\u4ef6\n    return getUserList(res.data.data);\n  }\n};",lang:"jsx"}),r.a.createElement("h2",{id:"\u4fee\u6539\u7ec4\u4ef6"},r.a.createElement(c["AnchorLink"],{to:"#\u4fee\u6539\u7ec4\u4ef6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4fee\u6539\u7ec4\u4ef6"),r.a.createElement("p",null,"\u65e0\u9700\u4fee\u6539\u7ec4\u4ef6\uff0c\u540c ",r.a.createElement("code",null,"redux-thunk")," \u65b9\u5f0f\u7684\u4f7f\u7528\u65b9\u6cd5\u4e00\u81f4\u3002"))))}));n["default"]=e=>{var n=r.a.useContext(c["context"]),t=n.demos;return r.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(l,{demos:t})}},lxxy:function(e,n,t){"use strict";t("tU7J");var a=t("wFql");t("q1tI"),a["a"].Text}}]);