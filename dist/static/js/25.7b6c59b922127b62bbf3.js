webpackJsonp([25],{"87KO":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("vhXa"),l=t("T4Md"),r=t.n(l),b={data:function(){return{code1:r.a,activeName:"first"}},methods:{handleClick:function(e,a){console.log(e,a)}},components:{CardBox:n.a}},c={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("card-box",{attrs:{title:"选项卡样式"}},[t("template",{slot:"content"},[t("el-tabs",{attrs:{type:"card"},on:{click:e.handleClick},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"tab1",name:"first"}},[e._v("tab1内容")]),e._v(" "),t("el-tab-pane",{attrs:{label:"tab2",name:"second"}},[e._v("tab2内容")]),e._v(" "),t("el-tab-pane",{attrs:{label:"tab3",name:"third"}},[e._v("tab3内容")]),e._v(" "),t("el-tab-pane",{attrs:{label:"tab4",name:"fourth"}},[e._v("tab4内容")])],1)],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code1))])],2)],1)},staticRenderFns:[]};var o=t("Z0/y")(b,c,!1,function(e){t("EsLP")},"data-v-b8ea0e02",null);a.default=o.exports},EsLP:function(e,a){},T4Md:function(e,a){e.exports='```\r\n<template>\r\n  <el-tabs v-model="activeName" type="card" @click="handleClick">\r\n    <el-tab-pane label="tab1" name="first">tab1内容</el-tab-pane>\r\n    <el-tab-pane label="tab2" name="second">tab2内容</el-tab-pane>\r\n    <el-tab-pane label="tab3" name="third">tab3内容</el-tab-pane>\r\n    <el-tab-pane label="tab4" name="fourth">tab4内容</el-tab-pane>\r\n  </el-tabs>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data(){\r\n    return {\r\n      activeName: \'first\'\r\n    };\r\n  },\r\n  methods: {\r\n    handleClick(tab,event){\r\n      console.log(tab,event);\r\n    }\r\n  },\r\n}\r\n<\/script>\r\n```'}});
//# sourceMappingURL=25.7b6c59b922127b62bbf3.js.map