webpackJsonp([16],{"0A8X":function(t,e){t.exports='```\r\n<el-tooltip content="Bottom center" placement="bottom">\r\n  <el-button>Dark</el-button>\r\n</el-tooltip>\r\n\r\n<el-tooltip content="Bottom center" placement="bottom" effect="light">\r\n  <el-button>Light</el-button>\r\n</el-tooltip>\r\n```'},"7Om1":function(t,e){},"LYD+":function(t,e){t.exports='```\r\n<el-tooltip placement="bottom">\r\n  <div slot="content">多行信息<br/>第二行信息</div>\r\n  <el-button>Bottom center</el-button>\r\n</el-tooltip>\r\n```'},TrFr:function(t,e){t.exports='```\r\n<el-tooltip content="Top Left 提示文字" placement="top-start">\r\n  <el-button>上左</el-button>\r\n</el-tooltip>\r\n<el-tooltip content="Top Center 提示文字" placement="top">\r\n  <el-button>上边</el-button>\r\n</el-tooltip>\r\n<el-tooltip content="Top Right 提示文字" placement="top-end">\r\n  <el-button>上右</el-button>\r\n</el-tooltip>\r\n\r\n<el-tooltip content="Left Top 提示文字" placement="left-start">\r\n  <el-button>左上</el-button>\r\n</el-tooltip>\r\n<el-tooltip content="Left Center 提示文字" placement="left">\r\n  <el-button>左边</el-button>\r\n</el-tooltip>\r\n<el-tooltip content="Left Bottom 提示文字" placement="left-end">\r\n  <el-button>左下</el-button>\r\n</el-tooltip>\r\n\r\n<el-tooltip content="Right Top 提示文字" placement="right-start">\r\n  <el-button>右上</el-button>\r\n</el-tooltip>\r\n<el-tooltip content="Right Center 提示文字" placement="right">\r\n  <el-button>右边</el-button>\r\n</el-tooltip>\r\n<el-tooltip content="Right Bottom 提示文字" placement="right-end">\r\n  <el-button>右下</el-button>\r\n</el-tooltip>\r\n\r\n<el-tooltip content="Bottom Left 提示文字" placement="bottom-start">\r\n  <el-button>下左</el-button>\r\n</el-tooltip>\r\n<el-tooltip content="Bottom Center 提示文字" placement="bottom">\r\n  <el-button>下边</el-button>\r\n</el-tooltip>\r\n<el-tooltip content="Bottom Right 提示文字" placement="bottom-end">\r\n  <el-button>下右</el-button>\r\n</el-tooltip>\r\n```'},"q27/":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("vhXa"),l=o("TrFr"),r=o.n(l),a=o("0A8X"),i=o.n(a),c=o("LYD+"),p=o.n(c),s={data:function(){return{code1:r.a,code2:i.a,code3:p.a}},components:{CardBox:n.a}},m={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("card-box",{attrs:{title:"基础用法"}},[o("template",{slot:"content"},[o("div",{staticClass:"box"},[o("div",{staticClass:"top"},[o("el-tooltip",{staticClass:"item",attrs:{content:"Top Left 提示文字",placement:"top-start"}},[o("el-button",[t._v("上左")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{content:"Top Center 提示文字",placement:"top"}},[o("el-button",[t._v("上边")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{content:"Top Right 提示文字",placement:"top-end"}},[o("el-button",[t._v("上右")])],1)],1),t._v(" "),o("div",{staticClass:"left"},[o("el-tooltip",{staticClass:"item",attrs:{content:"Left Top 提示文字",placement:"left-start"}},[o("el-button",[t._v("左上")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{content:"Left Center 提示文字",placement:"left"}},[o("el-button",[t._v("左边")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{content:"Left Bottom 提示文字",placement:"left-end"}},[o("el-button",[t._v("左下")])],1)],1),t._v(" "),o("div",{staticClass:"right"},[o("el-tooltip",{staticClass:"item",attrs:{content:"Right Top 提示文字",placement:"right-start"}},[o("el-button",[t._v("右上")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{content:"Right Center 提示文字",placement:"right"}},[o("el-button",[t._v("右边")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{content:"Right Bottom 提示文字",placement:"right-end"}},[o("el-button",[t._v("右下")])],1)],1),t._v(" "),o("div",{staticClass:"bottom"},[o("el-tooltip",{staticClass:"item",attrs:{content:"Bottom Left 提示文字",placement:"bottom-start"}},[o("el-button",[t._v("下左")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{content:"Bottom Center 提示文字",placement:"bottom"}},[o("el-button",[t._v("下边")])],1),t._v(" "),o("el-tooltip",{staticClass:"item",attrs:{content:"Bottom Right 提示文字",placement:"bottom-end"}},[o("el-button",[t._v("下右")])],1)],1)])]),t._v(" "),o("template",{slot:"code"},[t._v(t._s(t.code1))])],2),t._v(" "),o("card-box",{attrs:{title:"主题"}},[o("template",{slot:"content"},[o("el-tooltip",{attrs:{content:"Bottom center",placement:"bottom"}},[o("el-button",[t._v("Dark")])],1),t._v(" "),o("el-tooltip",{attrs:{content:"Bottom center",placement:"bottom",effect:"light"}},[o("el-button",[t._v("Light")])],1)],1),t._v(" "),o("template",{slot:"code"},[t._v(t._s(t.code2))])],2),t._v(" "),o("card-box",{attrs:{title:"内容换行"}},[o("template",{slot:"content"},[o("el-tooltip",{attrs:{placement:"bottom"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._v("多行信息"),o("br"),t._v("第二行信息")]),t._v(" "),o("el-button",[t._v("Bottom center")])],1)],1),t._v(" "),o("template",{slot:"code"},[t._v(t._s(t.code3))])],2)],1)},staticRenderFns:[]};var b=o("Z0/y")(s,m,!1,function(t){o("7Om1")},"data-v-4cd4aadb",null);e.default=b.exports}});
//# sourceMappingURL=16.dfb904a7d90d75a4e9c9.js.map