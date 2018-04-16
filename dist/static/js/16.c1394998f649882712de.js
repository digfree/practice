webpackJsonp([16],{"3ICm":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={data:function(){return{code1:"<template>\n  <el-button :plain=\"true\" @click=\"open\">打开消息提示</el-button>\n  <el-button :plain=\"true\" @click=\"openVn\">VNode</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open(){\n        this.$message('这是一条消息提示');\n      },\n      openVn(){\n        const h = this.$createElement;\n        this.$message({\n          message: h('p',null,[\n            h('span',null,'内容可以是'),\n            h('i',{style:'color: teal'},'VNode')\n          ])\n        })\n      }\n    }\n  }\n<\/script>\n",code2:'<template>\n  <el-button :plain="true" @click="open2">成功</el-button>\n  <el-button :plain="true" @click="open3">警告</el-button>\n  <el-button :plain="true" @click="open">消息</el-button>\n  <el-button :plain="true" @click="open4">错误</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open(){\n        this.$message(\'这是一条消息提示\');\n      },\n      open2(){\n        this.$message({\n          message:\'这是一条成功消息\',\n          type:\'success\'\n        });\n      },\n      open3(){\n        this.$message({\n          message:\'这是一条警告消息\',\n          type:\'warning\'\n        });\n      },\n      open4(){\n        this.$message.error(\'这是一条错误消息\');\n      }\n    }\n  }\n<\/script>\n',code3:"<template>\n  <el-button :plain=\"true\" @click=\"open5\">可关闭消息</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open5(){\n        this.$message({\n          message: '这是一条可关闭的消息提示',\n          type:'success',\n          showClose: true\n        });\n      }\n    }\n  }\n<\/script>\n",code4:"<template>\n  <el-button :plain=\"true\" @click=\"open6\">文字居中的消息</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open6(){\n        this.$message({\n          message: '这是一条居中的消息提示',\n          type:'success',\n          center: true\n        });\n      }\n    }\n  }\n<\/script>\n",code5:'<template>\n  <el-button :plain="true" @click="open7">使用HTML片段</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open7(){\n        this.$message({\n          dangerouslyUseHTMLString: true,\n          message: \'<strong>这是 <i>HTML</i> 片段</strong>\'\n        });\n      }\n    }\n  }\n<\/script>\n',code6:"<template>\n  <el-button :plain=\"true\" @click=\"open8\">自定义提示icon</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open8(){\n        this.$message({\n          message: '这个消息的icon是自定义的',\n          iconClass: 'el-icon-delete'\n        });\n      }\n    }\n  }\n<\/script>\n",code7:"<template>\n  <el-button :plain=\"true\" @click=\"open9\">自定义关闭时间，消息弹出1s后自动关闭</el-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      open9(){\n        this.$message({\n          message: '这个消息的icon是自定义的',\n          duration: '1000'\n        });\n      }\n    }\n  }\n<\/script>\n"}},methods:{open:function(){this.$message("这是一条消息提示")},openVn:function(){var e=this.$createElement;this.$message({message:e("p",null,[e("span",null,"内容可以是"),e("i",{style:"color: teal"},"VNode")])})},open2:function(){this.$message({message:"这是一条成功消息",type:"success"})},open3:function(){this.$message({message:"这是一条警告消息",type:"warning"})},open4:function(){this.$message.error("这是一条错误消息")},open5:function(){this.$message({message:"这是一条可关闭的消息提示",type:"success",showClose:!0})},open6:function(){this.$message({message:"这是一条居中的消息提示",type:"success",center:!0})},open7:function(){this.$message({dangerouslyUseHTMLString:!0,message:"<strong>这是 <i>HTML</i> 片段</strong>"})},open8:function(){this.$message({message:"这个消息的icon是自定义的",iconClass:"el-icon-delete"})},open9:function(){this.$message({message:"这个消息的icon是自定义的",duration:"1000"})}},components:{CardBox:t("vhXa").a}},o={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("card-box",{attrs:{title:"基础用法(3s自动关闭)"}},[t("template",{slot:"content"},[t("el-button",{attrs:{plain:!0},on:{click:e.open}},[e._v("打开消息提示")]),e._v(" "),t("el-button",{attrs:{plain:!0},on:{click:e.openVn}},[e._v("VNode")])],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code1))])],2),e._v(" "),t("card-box",{attrs:{title:"不同状态"}},[t("template",{slot:"content"},[t("el-button",{attrs:{plain:!0},on:{click:e.open2}},[e._v("成功")]),e._v(" "),t("el-button",{attrs:{plain:!0},on:{click:e.open3}},[e._v("警告")]),e._v(" "),t("el-button",{attrs:{plain:!0},on:{click:e.open}},[e._v("消息")]),e._v(" "),t("el-button",{attrs:{plain:!0},on:{click:e.open4}},[e._v("错误")])],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code2))])],2),e._v(" "),t("card-box",{attrs:{title:"可关闭"}},[t("template",{slot:"content"},[t("el-button",{attrs:{plain:!0},on:{click:e.open5}},[e._v("可关闭消息")])],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code3))])],2),e._v(" "),t("card-box",{attrs:{title:"文字居中"}},[t("template",{slot:"content"},[t("el-button",{attrs:{plain:!0},on:{click:e.open6}},[e._v("文字居中的消息")])],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code4))])],2),e._v(" "),t("card-box",{attrs:{title:"使用 HTML 片段"}},[t("template",{slot:"content"},[t("el-button",{attrs:{plain:!0},on:{click:e.open7}},[e._v("使用HTML片段")])],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code5))])],2),e._v(" "),t("card-box",{attrs:{title:"自定义icon"}},[t("template",{slot:"content"},[t("el-button",{attrs:{plain:!0},on:{click:e.open8}},[e._v("自定义提示icon")])],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code6))])],2),e._v(" "),t("card-box",{attrs:{title:"自定义消息关闭时间（0则不关闭，默认3000ms）"}},[t("template",{slot:"content"},[t("el-button",{attrs:{plain:!0},on:{click:e.open9}},[e._v("自定义关闭时间，消息弹出1s后自动关闭")])],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code7))])],2)],1)},staticRenderFns:[]};var l=t("Z0/y")(s,o,!1,function(e){t("giSU")},"data-v-67afe78a",null);n.default=l.exports},giSU:function(e,n){}});
//# sourceMappingURL=16.c1394998f649882712de.js.map