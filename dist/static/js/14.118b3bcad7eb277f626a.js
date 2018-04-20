webpackJsonp([14],{"1K3l":function(n,e){},"I/vN":function(n,e){n.exports='```\r\n<template>\r\n  <el-table\r\n    v-loading="loading"\r\n    :data="tableData"\r\n    style="width: 100%">\r\n    <el-table-column\r\n      prop="date"\r\n      label="日期"\r\n      width="180">\r\n    </el-table-column>\r\n    <el-table-column\r\n      prop="name"\r\n      label="姓名"\r\n      width="180">\r\n    </el-table-column>\r\n    <el-table-column\r\n      prop="address"\r\n      label="地址"\r\n      width="180">\r\n    </el-table-column>\r\n  </el-table>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data(){\r\n    return {\r\n      tableData: [{\r\n        date: \'2016-05-03\',\r\n        name: \'王小虎\',\r\n        address: \'上海市普陀区金沙江路 1518 弄\'\r\n      }, {\r\n        date: \'2016-05-02\',\r\n        name: \'王小虎\',\r\n        address: \'上海市普陀区金沙江路 1518 弄\'\r\n      }, {\r\n        date: \'2016-05-04\',\r\n        name: \'王小虎\',\r\n        address: \'上海市普陀区金沙江路 1518 弄\'\r\n      }],\r\n      loading: true\r\n    };\r\n  }\r\n}\r\n<\/script>\r\n```'},Q51X:function(n,e){n.exports='```\r\n<template>\r\n  <el-table\r\n    v-loading="loading2"\r\n    element-loading-text="拼命加载中"\r\n    element-loading-spinner="el-icon-loading"\r\n    element-loading-background="rgba(0,0,0,0.8)"\r\n    :data="tableData"\r\n    style="width: 100%">\r\n    <el-table-column\r\n      prop="date"\r\n      label="日期"\r\n      width="180">\r\n    </el-table-column>\r\n    <el-table-column\r\n      prop="name"\r\n      label="姓名"\r\n      width="180">\r\n    </el-table-column>\r\n    <el-table-column\r\n      prop="address"\r\n      label="地址"\r\n      width="180">\r\n    </el-table-column>\r\n</el-table>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data(){\r\n    return {\r\n      tableData: [{\r\n        date: \'2016-05-03\',\r\n        name: \'王小虎\',\r\n        address: \'上海市普陀区金沙江路 1518 弄\'\r\n      }, {\r\n        date: \'2016-05-02\',\r\n        name: \'王小虎\',\r\n        address: \'上海市普陀区金沙江路 1518 弄\'\r\n      }, {\r\n        date: \'2016-05-04\',\r\n        name: \'王小虎\',\r\n        address: \'上海市普陀区金沙江路 1518 弄\'\r\n      }],\r\n      loading2: true\r\n    };\r\n  }\r\n}\r\n<\/script>\r\n```'},yf6E:function(n,e){n.exports='```\r\n<template>\r\n  <el-button\r\n    type="primary"\r\n    @click="openFullScreen"\r\n    v-loading.fullscreen.lock="fullscreenLoading">\r\n    指令方式\r\n  </el-button>\r\n\r\n  <el-button\r\n    type="primary"\r\n    @click="openFullScreen2">\r\n    服务方式\r\n  </el-button>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data(){\r\n    return {\r\n      fullscreenLoading: false\r\n    };\r\n  },\r\n  methods: {\r\n    openFullScreen(){\r\n      this.fullscreenLoading = true;\r\n      setTimeout(() => {\r\n        this.fullscreenLoading = false;\r\n      },2000);\r\n    },\r\n    openFullScreen2(){\r\n      const loading = this.$loading({\r\n        lock: true,\r\n        text: \'Loading\',\r\n        spinner: \'el-icon-loading\',\r\n        background: \'rgba(0,0,0,.7)\'\r\n      });\r\n      setTimeout(() => {\r\n        loading.close();\r\n      },2000);\r\n    }\r\n  },\r\n}\r\n<\/script>\r\n```'},zCvX:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r("vhXa"),l=r("yf6E"),a=r.n(l),o=r("I/vN"),d=r.n(o),i=r("Q51X"),s=r.n(i),c={data:function(){return{code1:a.a,code2:d.a,code3:s.a,fullscreenLoading:!1,tableData:[{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],loading:!0,loading2:!0}},methods:{openFullScreen:function(){var n=this;this.fullscreenLoading=!0,setTimeout(function(){n.fullscreenLoading=!1},2e3)},openFullScreen2:function(){var n=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0,0,0,.7)"});setTimeout(function(){n.close()},2e3)}},components:{CardBox:t.a}},u={render:function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",[r("card-box",{attrs:{title:"整页加载"}},[r("template",{slot:"content"},[r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:n.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:n.openFullScreen}},[n._v("\n       指令方式\n      ")]),n._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:n.openFullScreen2}},[n._v("\n       服务方式\n      ")])],1),n._v(" "),r("template",{slot:"code"},[n._v(n._s(n.code1))])],2),n._v(" "),r("card-box",{attrs:{title:"区域加载"}},[r("template",{slot:"content"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:n.tableData}},[r("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),n._v(" "),r("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),n._v(" "),r("el-table-column",{attrs:{prop:"address",label:"地址",width:"180"}})],1)],1),n._v(" "),r("template",{slot:"code"},[n._v(n._s(n.code2))])],2),n._v(" "),r("card-box",{attrs:{title:"自定义加载样式"}},[r("template",{slot:"content"},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading2,expression:"loading2"}],staticStyle:{width:"100%"},attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0,0,0,0.8)",data:n.tableData}},[r("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),n._v(" "),r("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),n._v(" "),r("el-table-column",{attrs:{prop:"address",label:"地址",width:"180"}})],1)],1),n._v(" "),r("template",{slot:"code"},[n._v(n._s(n.code3))])],2)],1)},staticRenderFns:[]};var p=r("Z0/y")(c,u,!1,function(n){r("1K3l")},"data-v-65b016a7",null);e.default=p.exports}});
//# sourceMappingURL=14.118b3bcad7eb277f626a.js.map