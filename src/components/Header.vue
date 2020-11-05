<template>
  <div>
    <el-row>
      <h1>ToDoList</h1>
    </el-row>
    <el-row>
      <p class="float-right">————记录属于你的生活</p>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
h1 {
  transition: 0.2s;
  font-size: 70px;
  text-align: center;
}
h1:hover {
  transform: scale(1.1);
}
.el-row p {
  color: rgba(0, 0, 0, 0.5);
}
</style>