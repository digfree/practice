webpackJsonp([11],{"2qTR":function(r,a){},Tbjf:function(r,a){r.exports='```\r\n<template>\r\n  <el-radio v-model="radio6" label="1" border>备选项</el-radio>\r\n  <el-radio v-model="radio6" label="2" border>备选项</el-radio>\r\n\r\n  <el-radio-group v-model="radio7" size="medium">\r\n    <el-radio label="1" border>备选项</el-radio>\r\n    <el-radio label="2" border>备选项</el-radio>\r\n  </el-radio-group>\r\n\r\n  <el-radio-group v-model="radio8" disabled>\r\n    <el-radio label="1" border>备选项</el-radio>\r\n    <el-radio label="2" border>备选项</el-radio>\r\n  </el-radio-group>\r\n\r\n  <el-radio-group v-model="radio9">\r\n    <el-radio label="1" border>备选项</el-radio>\r\n    <el-radio label="2" border size="small" disabled>备选项</el-radio>\r\n  </el-radio-group>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data(){\r\n    return {\r\n      radio6: \'1\',\r\n      radio7: \'1\',\r\n      radio8: \'1\',   \r\n      radio9: \'1\',   \r\n    };\r\n  }\r\n}\r\n<\/script>\r\n```'},hIO7:function(r,a){r.exports='```\r\n<template>\r\n  \x3c!--change事件如果有需要请添加，没有需要请移除，此处仅供演示--\x3e\r\n  <el-radio v-model="radio1" label="1" @change="getRadio1Value">备选项</el-radio>\r\n  <el-radio v-model="radio1" label="2" @change="getRadio1Value">备选项</el-radio>\r\n\r\n  \x3c!--禁用：disabled--\x3e\r\n  <el-radio disabled v-model="radio1" label="3">备选项（禁用）</el-radio>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data(){\r\n    return {\r\n      radio1: \'1\',  //默认选中label为\'1\'的radio元素（如果没有默认选中项，此处值可设置为空\'\'），label的值可以是：String, Number, Boolean\r\n    };\r\n  },\r\n  method: {\r\n    getRadio1Value(){\r\n      alert(this.radio1);\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n```'},mpeD:function(r,a){r.exports='```\r\n<template>\r\n  \x3c!--change事件如果有需要请添加，没有需要请移除，此处仅供演示--\x3e\r\n  <el-radio-group v-model="radio2" @change="getRadioValue">\r\n    <el-radio :label="1">备选项</el-radio>\r\n    <el-radio :label="2">备选项</el-radio>\r\n    <el-radio :label="3">备选项</el-radio>\r\n  </el-radio-group>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data(){\r\n    return {\r\n      radio2: 1,   //若label前面加了冒号,可用变量代替初始值，此处值不需要加引号\r\n    };\r\n  }，\r\n  method: {\r\n    getRadio2Value(){\r\n      alert(this.radio2);\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n```'},s33b:function(r,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("vhXa"),l=e("hIO7"),d=e.n(l),t=e("mpeD"),i=e.n(t),n=e("zgBU"),b=e.n(n),s=e("Tbjf"),u=e.n(s),c={data:function(){return{code1:d.a,code2:i.a,code3:b.a,code4:u.a,radio1:"1",radio2:1,radio3:"1",radio4:"1",radio5:"1",radio6:"1",radio7:"1",radio8:"1",radio9:"1"}},methods:{getRadio1Value:function(){alert(this.radio1)},getRadio2Value:function(){alert(this.radio2)}},components:{CardBox:o.a}},v={render:function(){var r=this,a=r.$createElement,e=r._self._c||a;return e("div",[e("card-box",{attrs:{title:"基本用法"}},[e("template",{slot:"content"},[e("el-radio",{attrs:{label:"1"},on:{change:r.getRadio1Value},model:{value:r.radio1,callback:function(a){r.radio1=a},expression:"radio1"}},[r._v("备选项")]),r._v(" "),e("el-radio",{attrs:{label:"2"},on:{change:r.getRadio1Value},model:{value:r.radio1,callback:function(a){r.radio1=a},expression:"radio1"}},[r._v("备选项")]),r._v(" "),e("br"),r._v(" "),e("el-radio",{attrs:{disabled:"",label:"3"},model:{value:r.radio1,callback:function(a){r.radio1=a},expression:"radio1"}},[r._v("备选项（禁用）")])],1),r._v(" "),e("template",{slot:"code"},[r._v(r._s(r.code1))])],2),r._v(" "),e("card-box",{attrs:{title:"单选框组"}},[e("template",{slot:"content"},[e("el-radio-group",{on:{change:r.getRadio2Value},model:{value:r.radio2,callback:function(a){r.radio2=a},expression:"radio2"}},[e("el-radio",{attrs:{label:1}},[r._v("备选项")]),r._v(" "),e("el-radio",{attrs:{label:2}},[r._v("备选项")]),r._v(" "),e("el-radio",{attrs:{label:3}},[r._v("备选项")])],1)],1),r._v(" "),e("template",{slot:"code"},[r._v(r._s(r.code2))])],2),r._v(" "),e("card-box",{attrs:{title:"按钮样式"}},[e("template",{slot:"content"},[e("el-radio-group",{model:{value:r.radio3,callback:function(a){r.radio3=a},expression:"radio3"}},[e("el-radio-button",{attrs:{label:"1"}},[r._v("备选项")]),r._v(" "),e("el-radio-button",{attrs:{label:"2"}},[r._v("备选项")])],1),r._v(" "),e("br"),r._v(" "),e("el-radio-group",{attrs:{disabled:""},model:{value:r.radio4,callback:function(a){r.radio4=a},expression:"radio4"}},[e("el-radio-button",{attrs:{label:"1"}},[r._v("备选项")]),r._v(" "),e("el-radio-button",{attrs:{label:"2"}},[r._v("备选项")])],1),r._v(" "),e("br"),r._v(" "),e("el-radio-group",{attrs:{size:"small","text-color":"#fff",fill:"#f00"},model:{value:r.radio5,callback:function(a){r.radio5=a},expression:"radio5"}},[e("el-radio-button",{attrs:{label:"1"}},[r._v("备选项")]),r._v(" "),e("el-radio-button",{attrs:{label:"2"}},[r._v("备选项")])],1)],1),r._v(" "),e("template",{slot:"code"},[r._v(r._s(r.code3))])],2),r._v(" "),e("card-box",{attrs:{title:"带有边框"}},[e("template",{slot:"content"},[e("el-radio",{attrs:{label:"1",border:""},model:{value:r.radio6,callback:function(a){r.radio6=a},expression:"radio6"}},[r._v("备选项")]),r._v(" "),e("el-radio",{attrs:{label:"2",border:""},model:{value:r.radio6,callback:function(a){r.radio6=a},expression:"radio6"}},[r._v("备选项")]),r._v(" "),e("br"),r._v(" "),e("el-radio-group",{attrs:{size:"medium"},model:{value:r.radio7,callback:function(a){r.radio7=a},expression:"radio7"}},[e("el-radio",{attrs:{label:"1",border:""}},[r._v("备选项")]),r._v(" "),e("el-radio",{attrs:{label:"2",border:""}},[r._v("备选项")])],1),r._v(" "),e("br"),r._v(" "),e("el-radio-group",{attrs:{disabled:""},model:{value:r.radio8,callback:function(a){r.radio8=a},expression:"radio8"}},[e("el-radio",{attrs:{label:"1",border:""}},[r._v("备选项")]),r._v(" "),e("el-radio",{attrs:{label:"2",border:""}},[r._v("备选项")])],1),r._v(" "),e("br"),r._v(" "),e("el-radio-group",{model:{value:r.radio9,callback:function(a){r.radio9=a},expression:"radio9"}},[e("el-radio",{attrs:{label:"1",border:""}},[r._v("备选项")]),r._v(" "),e("el-radio",{attrs:{label:"2",border:"",size:"small",disabled:""}},[r._v("备选项")])],1)],1),r._v(" "),e("template",{slot:"code"},[r._v(r._s(r.code4))])],2)],1)},staticRenderFns:[]};var p=e("Z0/y")(c,v,!1,function(r){e("2qTR")},"data-v-551bde12",null);a.default=p.exports},zgBU:function(r,a){r.exports='```\r\n<template>\r\n  <el-radio-group v-model="radio3">\r\n    <el-radio-button label="1">备选项</el-radio-button>\r\n    <el-radio-button label="2">备选项</el-radio-button>\r\n  </el-radio-group>\r\n\r\n  \x3c!--全部禁用，也可作用于el-radio-button单个禁用--\x3e\r\n  <el-radio-group v-model="radio4" disabled>\r\n    <el-radio-button label="1">备选项</el-radio-button>\r\n    <el-radio-button label="2">备选项</el-radio-button>\r\n  </el-radio-group>\r\n\r\n  \x3c!--自定义按钮大小(也可以给el-radio-button单独设置size,可选值：medium,small,mini)，字体颜色，背景色--\x3e\r\n  <el-radio-group v-model="radio5" size="small" text-color="#fff" fill="#f00">\r\n    <el-radio-button label="1">备选项</el-radio-button>\r\n    <el-radio-button label="2">备选项</el-radio-button>\r\n  </el-radio-group>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data(){\r\n    return {\r\n      radio3: \'1\',\r\n      radio4: \'1\',\r\n      radio5: \'1\',   \r\n    };\r\n  }\r\n}\r\n<\/script>\r\n```'}});
//# sourceMappingURL=11.5d91033f6f2886382edd.js.map