webpackJsonp([13],{"37h1":function(e,c){},CjkQ:function(e,c,t){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var l=["上海","北京","广州","深圳"],o={data:function(){return{code1:'<template>\x3c!--change事件如果有需要请添加，没有需要请移除，此处仅供演示--\x3e\n  <el-checkbox v-model="checked1" @change="getRadio1Value">备选项</el-checkbox>\n  <el-checkbox v-model="checked2" disabled>备选项（禁用）</el-checkbox>\n  <el-checkbox v-model="checked3" disabled>备选项（选中且禁用）</el-checkbox>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      checked1: true,\n      checked2: false,\n      checked3: true, \n    };\n  },\n  method: {\n    getRadio1Value(){\n      alert(this.checked1);\n    }\n  }\n}\n<\/script>\n',code2:'<template>\n  <el-checkbox-group v-model="checkList1">\n    <el-checkbox label="复选框 A"></el-checkbox>\n    <el-checkbox label="复选框 B"></el-checkbox>\n    <el-checkbox label="复选框 C"></el-checkbox>\n    <el-checkbox label="禁用" disabled></el-checkbox>\n    <el-checkbox label="选中且禁用" disabled></el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      checkList1: [\'复选框 A\',\'选中且禁用\'],\n    };\n  }\n}\n<\/script>\n',code3:'<template>\n  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>\n  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">\n    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\nconst cityOptions = [\'上海\', \'北京\', \'广州\', \'深圳\'];\n\nexport default {\n  data(){\n    return {\n      checkAll: false,\n      indeterminate: true,\n      cities: cityOptions,\n      checkedCities: [\'上海\', \'北京\'],   \n    };\n  },\n  method: {\n    handleCheckAllChange(val) {\n      this.checkedCities = val ? cityOptions : [];\n      this.isIndeterminate = false;\n    },\n    handleCheckedCitiesChange(value) {\n      let checkedCount = value.length;\n      this.checkAll = checkedCount === this.cities.length;\n      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;\n    }\n  }\n}\n<\/script>\n',code4:"<template>\n  <el-checkbox-group \n    v-model=\"checkedCities1\"\n    :min=\"1\"\n    :max=\"2\">\n    <el-checkbox v-for=\"city in cities2\" :label=\"city\" :key=\"city\">{{city}}</el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\nconst cityOptions = ['上海', '北京', '广州', '深圳'];\n\nexport default {\n  data(){\n    return {\n      cities1: cityOptions   \n      checkedCities1: ['上海', '北京'],\n    };\n  }\n}\n<\/script>\n",code5:'<template>\n  <el-checkbox-group v-model="checkboxGroup1">\n    <el-checkbox-button v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox-button>\n  </el-checkbox-group>\n  <br>\n  <el-checkbox-group v-model="checkboxGroup2" size="small">\n    <el-checkbox-button v-for="city in cities3" :label="city" :key="city" :disabled="city===\'广州\'">{{city}}</el-checkbox-button>\n  </el-checkbox-group>\n  <br>\n  <el-checkbox-group v-model="checkboxGroup3" size="small" text-color="#fff" fill="#f00">\n    <el-checkbox-button v-for="city in cities4" :label="city" :key="city" :disabled="city===\'广州\'">{{city}}</el-checkbox-button>\n  </el-checkbox-group>\n</template>\n\n<script>\nconst cityOptions = [\'上海\', \'北京\', \'广州\', \'深圳\'];\n\nexport default {\n  data(){\n    return {\n      cities2: cityOptions,\n      cities3: cityOptions,\n      checkboxGroup1: [\'上海\'],\n      checkboxGroup2: [\'上海\'],\n    };\n  }\n}\n<\/script>\n',code6:'<template>\n  <div>\n    <el-checkbox v-model="checked4" label="备选项1" border size="medium"></el-checkbox>\n    <el-checkbox v-model="checked5" label="备选项2" border size="medium"></el-checkbox>\n  </div>\n  <el-checkbox-group v-model="checkboxGroup4" border>\n    <el-checkbox label="备选项1" border></el-checkbox>\n    <el-checkbox label="备选项2" border></el-checkbox>\n  </el-checkbox-group>\n  <el-checkbox-group v-model="checkboxGroup5" size="mini">\n    <el-checkbox label="备选项1" border></el-checkbox>\n    <el-checkbox label="备选项2" border disabled></el-checkbox>\n  </el-checkbox-group>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      checked4: false,\n      checked5: false,\n      checkboxGroup4: [],\n      checkboxGroup5: [],\n    };\n  }\n}\n<\/script>\n',checked1:!0,checked2:!1,checked3:!0,checked4:!1,checked5:!1,checkList1:["复选框 A","选中且禁用"],checkAll:!1,isIndeterminate:!0,cities:l,cities1:l,cities2:l,cities3:l,cities4:l,checkedCities:["上海","北京"],checkedCities1:["上海","北京"],checkboxGroup1:["上海"],checkboxGroup2:["上海"],checkboxGroup3:["上海"],checkboxGroup4:[],checkboxGroup5:[]}},methods:{getRadio1Value:function(){alert(this.checked1)},handleCheckAllChange:function(e){this.checkedCities=e?l:[],this.isIndeterminate=!1},handleCheckedCitiesChange:function(e){var c=e.length;this.checkAll=c===this.cities.length,this.isIndeterminate=c>0&&c<this.cities.length}},components:{CardBox:t("vhXa").a}},n={render:function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",[t("card-box",{attrs:{title:"基本用法"}},[t("template",{slot:"content"},[t("el-checkbox",{on:{change:e.getRadio1Value},model:{value:e.checked1,callback:function(c){e.checked1=c},expression:"checked1"}},[e._v("备选项")]),e._v(" "),t("el-checkbox",{attrs:{disabled:""},model:{value:e.checked2,callback:function(c){e.checked2=c},expression:"checked2"}},[e._v("禁用")]),e._v(" "),t("el-checkbox",{attrs:{disabled:""},model:{value:e.checked3,callback:function(c){e.checked3=c},expression:"checked3"}},[e._v("选中且禁用")])],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code1))])],2),e._v(" "),t("card-box",{attrs:{title:"多选框组"}},[t("template",{slot:"content"},[t("el-checkbox-group",{model:{value:e.checkList1,callback:function(c){e.checkList1=c},expression:"checkList1"}},[t("el-checkbox",{attrs:{label:"复选框 A"}}),e._v(" "),t("el-checkbox",{attrs:{label:"复选框 B"}}),e._v(" "),t("el-checkbox",{attrs:{label:"复选框 C"}}),e._v(" "),t("el-checkbox",{attrs:{label:"禁用",disabled:""}}),e._v(" "),t("el-checkbox",{attrs:{label:"选中且禁用",disabled:""}})],1)],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code2))])],2),e._v(" "),t("card-box",{attrs:{title:"indeterminate 状态"}},[t("template",{slot:"content"},[t("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(c){e.checkAll=c},expression:"checkAll"}},[e._v("全选")]),e._v(" "),t("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.checkedCities,callback:function(c){e.checkedCities=c},expression:"checkedCities"}},e._l(e.cities,function(c){return t("el-checkbox",{key:c,attrs:{label:c}},[e._v(e._s(c))])}))],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code3))])],2),e._v(" "),t("card-box",{attrs:{title:"可选项目数量的限制"}},[t("template",{slot:"content"},[t("el-checkbox-group",{attrs:{min:1,max:2},model:{value:e.checkedCities1,callback:function(c){e.checkedCities1=c},expression:"checkedCities1"}},e._l(e.cities1,function(c){return t("el-checkbox",{key:c,attrs:{label:c}},[e._v(e._s(c))])}))],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code4))])],2),e._v(" "),t("card-box",{attrs:{title:"按钮样式"}},[t("template",{slot:"content"},[t("el-checkbox-group",{model:{value:e.checkboxGroup1,callback:function(c){e.checkboxGroup1=c},expression:"checkboxGroup1"}},e._l(e.cities2,function(c){return t("el-checkbox-button",{key:c,attrs:{label:c}},[e._v(e._s(c))])})),e._v(" "),t("br"),e._v(" "),t("el-checkbox-group",{attrs:{size:"small"},model:{value:e.checkboxGroup2,callback:function(c){e.checkboxGroup2=c},expression:"checkboxGroup2"}},e._l(e.cities3,function(c){return t("el-checkbox-button",{key:c,attrs:{label:c,disabled:"广州"===c}},[e._v(e._s(c))])})),e._v(" "),t("br"),e._v(" "),t("el-checkbox-group",{attrs:{"text-color":"#fff",fill:"#f00"},model:{value:e.checkboxGroup3,callback:function(c){e.checkboxGroup3=c},expression:"checkboxGroup3"}},e._l(e.cities4,function(c){return t("el-checkbox-button",{key:c,attrs:{label:c}},[e._v(e._s(c))])}))],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code5))])],2),e._v(" "),t("card-box",{attrs:{title:"带有边框"}},[t("template",{slot:"content"},[t("div",[t("el-checkbox",{attrs:{label:"备选项1",border:"",size:"medium"},model:{value:e.checked4,callback:function(c){e.checked4=c},expression:"checked4"}}),e._v(" "),t("el-checkbox",{attrs:{label:"备选项2",border:"",size:"medium"},model:{value:e.checked5,callback:function(c){e.checked5=c},expression:"checked5"}})],1),e._v(" "),t("el-checkbox-group",{attrs:{border:""},model:{value:e.checkboxGroup4,callback:function(c){e.checkboxGroup4=c},expression:"checkboxGroup4"}},[t("el-checkbox",{attrs:{label:"备选项1",border:""}}),e._v(" "),t("el-checkbox",{attrs:{label:"备选项2",border:""}})],1),e._v(" "),t("el-checkbox-group",{attrs:{size:"mini"},model:{value:e.checkboxGroup5,callback:function(c){e.checkboxGroup5=c},expression:"checkboxGroup5"}},[t("el-checkbox",{attrs:{label:"备选项1",border:""}}),e._v(" "),t("el-checkbox",{attrs:{label:"备选项2",border:"",disabled:""}})],1)],1),e._v(" "),t("template",{slot:"code"},[e._v(e._s(e.code6))])],2)],1)},staticRenderFns:[]};var i=t("Z0/y")(o,n,!1,function(e){t("37h1")},"data-v-5ac40d43",null);c.default=i.exports}});
//# sourceMappingURL=13.da48ee8463a893eda982.js.map