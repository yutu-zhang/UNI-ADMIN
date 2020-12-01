<template>
    
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first"></el-tab-pane>
      <el-tab-pane label="审核中" name="second"></el-tab-pane>
      <el-tab-pane label="出售中" name="third"></el-tab-pane>
      <el-tab-pane label="已下架" name="fourth"></el-tab-pane>
      <el-tab-pane label="库存预警" name="kucun"></el-tab-pane>
      <el-tab-pane label="回收站" name="shou"></el-tab-pane>
      <!-- <router-view></router-view> -->
    </el-tabs>
    <div class="btns">
      <p>
        <button type="button" class="btn btn-success">发布商品</button>
        <button type="button" class="btn btn-danger">批量删除</button>
        <button type="button" class="btn btn-outline-secondary">上架</button>
        <button type="button" class="btn btn-outline-secondary">下架</button>
      </p>
      <p>
        <input
          type="text"
          class="form-control-inline"
          placeholder="要搜索的商品名称"
        />
        <button type="button" class="btn btn-secondary">搜索</button>
        <button type="button" class="btn btn-outline-secondary">
          高级搜索
        </button>
      </p>
    </div>
      
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="商品"> </el-table-column>
      <el-table-column prop="" label="实际销量"></el-table-column>
      <el-table-column prop="" label="商品状态"></el-table-column>
      <el-table-column prop="" label="审核状态"></el-table-column>
      <el-table-column prop="" label="总库存"></el-table-column>
      <el-table-column prop="" label="价格"></el-table-column>
      <el-table-column prop="" label="操作">
        <div>
          <el-link href="https://element.eleme.io" target="_blank"
            >默认链接</el-link
          >
          <el-link type="primary">主要链接</el-link>
          <el-link type="success">成功链接</el-link>
          <el-link type="warning">警告链接</el-link>
          <el-link type="danger">危险链接</el-link>
          <el-link type="info">信息链接</el-link>
        </div>
      </el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  name: "",
  data() {
    return {
      activeName: "second",
      tableData: [],
      multipleSelection: [],
    };
  },
  created() {},
  mounted() {}, //方法
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped lang="scss">
/* .el-tabs .el-tabs--top {
    height: 100%;
}
.el-tabs__content {
    width: 100%;
    height: 100%;
} */
.btns {
  display: flex;
  justify-content: space-between;
  p {
    width: 400px;
    button {
      margin-left: 10px;
    }
  }
}
</style>