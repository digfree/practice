webpackJsonp([3],{"87KO":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t("vhXa"),l=t("qnrP"),c={data:function(){return{code1:l.a,activeName:"first"}},methods:{handleClick:function(e,a){console.log(e,a)}},components:{CardBox:n.a}},b={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("card-box",{attrs:{title:"选项卡样式"}},[t("template",{slot:"content"},[t("el-tabs",{attrs:{type:"card"},on:{click:e.handleClick},model:{value:e.activeName,callback:function(a){e.activeName=a},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"tab1",name:"first"}},[e._v("tab1内容")]),e._v(" "),t("el-tab-pane",{attrs:{label:"tab2",name:"second"}},[e._v("tab2内容")]),e._v(" "),t("el-tab-pane",{attrs:{label:"tab3",name:"third"}},[e._v("tab3内容")]),e._v(" "),t("el-tab-pane",{attrs:{label:"tab4",name:"fourth"}},[e._v("tab4内容")])],1)],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code1))])],2)],1)},staticRenderFns:[]};var r=t("Z0/y")(c,b,!1,function(e){t("nxmM")},"data-v-8cb7b73c",null);a.default=r.exports},nxmM:function(e,a){},qnrP:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n='<template>\n  <el-tabs v-model="activeName" type="card" @click="handleClick">\n    <el-tab-pane label="tab1" name="first">tab1内容</el-tab-pane>\n    <el-tab-pane label="tab2" name="second">tab2内容</el-tab-pane>\n    <el-tab-pane label="tab3" name="third">tab3内容</el-tab-pane>\n    <el-tab-pane label="tab4" name="fourth">tab4内容</el-tab-pane>\n  </el-tabs>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      activeName: \'first\'\n    };\n  },\n  methods: {\n    handleClick(tab,event){\n      console.log(tab,event);\n    }\n  },\n}\n<\/script>\n'}});
//# sourceMappingURL=3.9a7c7a00107d82bfe7d6.js.map