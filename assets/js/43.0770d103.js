(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{846:function(n,e,a){"use strict";a.r(e);var t=a(41),r=Object(t.a)({},(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h3",{attrs:{id:"数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[n._v("#")]),n._v(" 数据")]),n._v(" "),a("p",[n._v("需求描述起来很简单，有这样一个数组：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('let industry_list = [\n  {\n    parent_ind: "家电",\n    name: "洗衣机",\n  },\n  {\n    name: "家电",\n  },\n  {\n    parent_ind: "家电",\n    name: "电冰箱",\n  },\n  {\n    parent_ind: "女装",\n    name: "连衣裙",\n  },\n  {\n    name: "女装",\n  },\n  {\n    parent_ind: "女装",\n    name: "半身裙",\n  },\n  {\n    parent_ind: "女装",\n    name: "A字裙",\n  },\n  {\n    parent_ind: "数码",\n    name: "电脑配件",\n  },\n  {\n    name: "数码",\n  },\n  {\n    parent_ind: "电脑配件",\n    name: "内存",\n  },\n  {\n    parent_ind: "内存",\n    name: "xxxxx",\n  },\n  {\n    parent_ind: "xxxxx",\n    name: "demo",\n  },\n];\n\n\n')])])]),a("p",[n._v("最终得到这样一个对象：")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('{"家电":{"洗衣机":{},"电冰箱":{}},"女装":{"连衣裙":{},"半身裙":{},"A字裙":{}},"数码":{"电脑配件":{"内存":{"xxxxx":{"demo":{}}}}}}\n')])])]),a("h3",{attrs:{id:"编码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编码实现"}},[n._v("#")]),n._v(" 编码实现")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('function format(data) {\n  const result = {}\n  const middle = {};\n  data.map(i => {\n    middle[i.name] = i.parent_ind ? i.parent_ind : {};\n  });\n  for (let name in middle) {\n    const parent = middle[name];\n    if (typeof parent === "object") {\n      result[name] = middle[name];\n    } else {\n      middle[name] = {};\n      middle[parent][name] = middle[name];\n    \n    }\n  }\n  return result;\n}\n')])])])])}),[],!1,null,null,null);e.default=r.exports}}]);