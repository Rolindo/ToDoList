<template>
  <div>
    <el-row>
      <h2>
        正在进行
        <span class="float-right ingNum">{{$store.state.dataList.length}}</span>
      </h2>
      <ul>
        <transition-group name="el-fade-in" :duration="{enter:500}">
          <li v-for="(item,index) in $store.state.dataList" :key="index + '-only'">
            <!-- <el-checkbox v-model="isChecked[index]" @change="checkChange(item,index)"></el-checkbox> -->
            {{item}}
            <el-button
              ref="ing"
              type="danger"
              size="medium"
              class="float-right"
              @click="deleteData(index)"
            >删除</el-button>
            <el-button
              type="warning"
              size="medium"
              class="float-right"
              @click="dialogVisible=true"
            >修改</el-button>
            <el-button
              type="success"
              size="medium"
              class="float-right"
              @click="finishEvent(item,index)"
            >完成</el-button>
            <el-dialog
              title="修改事件"
              width="50%"
              top="10%"
              :lock-scroll="false"
              :append-to-body="true"
              :visible="dialogVisible"
              :modal="false"
              @close="dialogVisible = false"
            >
              <span>请输入你想做的事</span>
              <el-input type="text" v-model="editData"></el-input>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false,changeData(index)">确 定</el-button>
              </span>
            </el-dialog>
          </li>
        </transition-group>
      </ul>
    </el-row>

    <el-row>
      <h2>
        已经完成
        <span class="float-right finishedNum">{{$store.state.finishList.length}}</span>
      </h2>

      <ul>
        <transition-group class="el-fade-in">
          <li v-for="(item,index) in $store.state.finishList" :key="index+'-'">
            <!-- <el-checkbox v-model="finishChecked[index]" @change="backChange(item,index)"></el-checkbox> -->
            {{item}}
            <el-button
              type="danger"
              ref="finish"
              size="medium"
              class="float-right"
              @click="deleteData(index)"
            >删除</el-button>
          </li>
        </transition-group>
      </ul>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      editData: "",
      isChecked: [],
      finishChecked: []
    };
  },
  methods: {
    finishEvent(item, index) {
      this.$store.state.dataList.splice(index, 1);
      this.$store.commit("addfinishList", item);
    },
    // 删除事件
    async deleteData(index) {
      const result = await this.$confirm("确定要删除此事件吗", "Warning", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).catch(err => err);
      if (result !== "confirm") return this.$message.info("你已经取消删除");
      if (this.$refs.finish) this.$store.state.finishList.splice(index, 1);
      else this.$store.state.dataList.splice(index, 1);
      if (true) return this.$message.success("删除成功");
    },
    // 修改数据
    changeData(index) {
      this.$store.state.dataList[index] = this.editData;
      const h = this.$createElement;
      this.$notify({
        title: "成功",
        message: h("b", { style: "color: green" }, "恭喜你修改成功")
      });
    }
  }
};
</script>

<style lang="less" scoped>
.el-row {
  margin-top: 2vw;
  border: 1px solid #ccc;
  h2 {
    background-color: rgba(0, 0, 0, 0.04);
    padding: 10px;
    .ingNum {
      background-color: green;
      border-radius: 50%;
      padding: 0 10px;
      margin-top: 5px;
      font-size: 25px;
    }
    .finishedNum {
      background-color: aqua;
      border-radius: 50%;
      padding: 0 10px;
      margin-top: 5px;
      font-size: 25px;
    }
  }
  ul {
    list-style-type: none;
    border-radius: 10px;
    li {
      padding: 15px;
      border-bottom: 2px solid #333;
      line-height: 40px;
      font-size: 25px;
      font-weight: bolder;
      .el-button {
        margin: 0 5px;
      }
    }
    li:nth-last-child(1) {
      border-bottom: 0;
    }
  }
}
.el-row:nth-child(2) {
  margin-top: 5vh;
}
@media screen and(max-width:768px) {
  li {
    font-size: 15px;
    line-height: 30px;
  }
  .el-button {
    padding: 10px;
    font-size: 15px;
  }
}
</style>