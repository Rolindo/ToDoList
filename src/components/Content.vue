<template>
  <div>
    <el-row class="content">
      <el-input
        placeholder="请输入你要做的事"
        prefix-icon="el-icon-edit"
        v-model="inputDatas"
        @keyup.native.13="submitData"
        ref="inputSub"
        autofocus
      ></el-input>
      <el-button type="primary" @click="submitData">提交</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputDatas: ""
    };
  },
  methods: {
    submitData() {
      if (this.inputDatas === "") return this.$message.error("事件不可以为空");
      this.$store.commit("addData", this.inputDatas);
      if (true) this.$message.success("添加事件成功");
      this.inputDatas = "";
      // 点击提交按钮后重新聚焦
      this.$nextTick(() => {
        this.$refs.inputSub.$refs.input.focus();
      });
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  display: flex;
  .el-input {
    width: 50vw;
  }
  .el-button {
    border-radius: 0 !important;
  }
}
@media screen and (max-width: 768px) {
  .el-input {
  }
}
</style>