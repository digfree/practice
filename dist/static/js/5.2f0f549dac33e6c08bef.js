webpackJsonp([5],{I2D6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:function(){return{code1:'<template>\n  <div class="block">\n    <span class="demonstration">默认</span>\n    <el-date-picker\n      v-model="value1"\n      type="date"\n      placeholder="选择日期">\n    </el-date-picker>\n  </div>\n  <div class="block">\n    <span class="demonstration">带快捷选项</span>\n    <el-date-picker\n      v-model="value2"\n      type="date"\n      align="right"\n      placeholder="选择日期"\n      :picker-options="pickerOptions1">\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      pickerOptions1: {\n        disabledDate(time) {\n          return time.getTime() > Date.now();\n        },\n        shortcuts: [{\n          text: \'今天\',\n          onClick(picker) {\n            picker.$emit(\'pick\', new Date());\n          }\n        }, {\n          text: \'昨天\',\n          onClick(picker) {\n            const date = new Date();\n            date.setTime(date.getTime() - 3600 * 1000 * 24);\n            picker.$emit(\'pick\', date);\n          }\n        }, {\n          text: \'一周前\',\n          onClick(picker) {\n            const date = new Date();\n            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n            picker.$emit(\'pick\', date);\n          }\n        }]\n      },\n      value1: \'\',\n      value2: \'\',\n    };\n  }\n}\n<\/script>\n',code2:'<template>\n  <div class="block">\n    <span class="demonstration">周</span>\n    <el-date-picker\n      v-model="value3"\n      type="week"\n      format="yyyy年WW周"\n      placeholder="选择周">\n    </el-date-picker>\n  </div>\n  <div class="block">\n    <span class="demonstration">月</span>\n    <el-date-picker\n      v-model="value4"\n      type="month"\n      placeholder="选择月">\n    </el-date-picker>\n  </div>\n  <div class="block">\n    <span class="demonstration">年</span>\n    <el-date-picker\n      v-model="value5"\n      align="right"\n      type="year"\n      placeholder="选择年">\n    </el-date-picker>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      value3: \'\',\n      value4: \'\',\n      value5: \'\',\n    };\n  }\n}\n<\/script>\n',code3:'<template>\n  <div class="block-wrap">\n    <div class="block">\n      <span class="demonstration">默认</span>\n      <el-date-picker\n        v-model="value6"\n        type="daterange"\n        range-separator="至"\n        start-placeholder="开始日期"\n        end-placeholder="结束日期">\n      </el-date-picker>\n    </div>\n    <div class="block">\n      <span class="demonstration">带快捷键</span>\n      <el-date-picker\n        v-model="value7"\n        type="daterange"\n        align="right"\n        unlink-panels\n        range-separator="至"\n        start-placeholder="开始日期"\n        end-placeholder="结束日期"\n        :picker-options="pickerOptions2">\n      </el-date-picker>\n    </div>\n  </div> \n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      pickerOptions2: {\n        shortcuts: [{\n          text: \'最近一周\',\n          onClick(picker) {\n            const end = new Date();\n            const start = new Date();\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);\n            picker.$emit(\'pick\', [start,end]) ;\n          }\n        }, {\n          text: \'最近一个月\',\n          onClick(picker) {\n            const end = new Date();\n            const start = new Date();\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);\n            picker.$emit(\'pick\', [start,end]);\n          }\n        }, {\n          text: \'最近三个月\',\n          onClick(picker) {\n            const end = new Date();\n            const start = new Date();\n            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);\n            picker.$emit(\'pick\', [start,end]);\n          }\n        }]，\n        value6: \'\',\n        value7: \'\'\n      },\n    };\n  }\n}\n<\/script>\n',pickerOptions1:{disabledDate:function(e){return e.getTime()>Date.now()},shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]},pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-6048e5),e.$emit("pick",[n,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-2592e6),e.$emit("pick",[n,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,n=new Date;n.setTime(n.getTime()-7776e6),e.$emit("pick",[n,t])}}]},value1:"",value2:"",value3:"",value4:"",value5:"",value6:"",value7:""}},components:{CardBox:n("vhXa").a}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("card-box",{attrs:{title:"选择日"}},[n("template",{slot:"content"},[n("div",{staticClass:"block-wrap"},[n("div",{staticClass:"block"},[n("span",{staticClass:"demonstration"},[e._v("默认")]),e._v(" "),n("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),n("div",{staticClass:"block"},[n("span",{staticClass:"demonstration"},[e._v("带快捷选项")]),e._v(" "),n("el-date-picker",{attrs:{type:"date",align:"right",placeholder:"选择日期","picker-options":e.pickerOptions1},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)])]),e._v(" "),n("template",{slot:"code"},[e._v(e._s(e.code1))])],2),e._v(" "),n("card-box",{attrs:{title:"其它日期单位"}},[n("template",{slot:"content"},[n("div",{staticClass:"block-wrap"},[n("div",{staticClass:"block"},[n("span",{staticClass:"demonstration"},[e._v("周")]),e._v(" "),n("el-date-picker",{attrs:{type:"week",format:"yyyy年WW周",placeholder:"选择周"},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}})],1),e._v(" "),n("div",{staticClass:"block"},[n("span",{staticClass:"demonstration"},[e._v("月")]),e._v(" "),n("el-date-picker",{attrs:{type:"month",placeholder:"选择月"},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1),e._v(" "),n("div",{staticClass:"block"},[n("span",{staticClass:"demonstration"},[e._v("年")]),e._v(" "),n("el-date-picker",{attrs:{align:"right",type:"year",placeholder:"选择年"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}})],1)])]),e._v(" "),n("template",{slot:"code"},[e._v(e._s(e.code2))])],2),e._v(" "),n("card-box",{attrs:{title:"选择日期范围"}},[n("template",{slot:"content"},[n("div",{staticClass:"block-wrap"},[n("div",{staticClass:"block"},[n("span",{staticClass:"demonstration"},[e._v("默认")]),e._v(" "),n("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.value6,callback:function(t){e.value6=t},expression:"value6"}})],1),e._v(" "),n("div",{staticClass:"block"},[n("span",{staticClass:"demonstration"},[e._v("带快捷键")]),e._v(" "),n("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions2},model:{value:e.value7,callback:function(t){e.value7=t},expression:"value7"}})],1)])]),e._v(" "),n("template",{slot:"code"},[e._v(e._s(e.code3))])],2)],1)},staticRenderFns:[]};var i=n("Z0/y")(a,l,!1,function(e){n("ID9+")},"data-v-d16460f6",null);t.default=i.exports},"ID9+":function(e,t){}});
//# sourceMappingURL=5.2f0f549dac33e6c08bef.js.map