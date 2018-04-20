```
<template>
  <el-button type="text" @click="dialogVisible=true">点击显示弹窗</el-button>
          
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
    >
    <span>这是一段内容</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible=false">取消</el-button>
      <el-button type="primary" @click="dialogVisible=false">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data(){
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done){
      this.$confirm('确认关闭？')
      .then(_ => {
        done();
      })
      .catch(_ => {});
    }
  },
}
</script>
```