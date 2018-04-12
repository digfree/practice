export const code1 =
`<template>
  <el-button
    type="primary"
    @click="openFullScreen"
    v-loading.fullscreen.lock="fullscreenLoading">
    指令方式
  </el-button>

  <el-button
    type="primary"
    @click="openFullScreen2">
    服务方式
  </el-button>
</template>

<script>
export default {
  data(){
    return {
      fullscreenLoading: false
    };
  },
  methods: {
    openFullScreen(){
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      },2000);
    },
    openFullScreen2(){
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0,0,0,.7)'
      });
      setTimeout(() => {
        loading.close();
      },2000);
    }
  },
}
</script>
`;
export const code2 =
`<template>
  <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="180">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data(){
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      loading: true
    };
  }
}
</script>
`;
export const code3 =
`<template>
  <el-table
    v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0,0,0,0.8)"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="180">
    </el-table-column>
</el-table>
</template>

<script>
export default {
  data(){
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      loading2: true
    };
  }
}
</script>
`;