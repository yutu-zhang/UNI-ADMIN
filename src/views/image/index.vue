<template>
  <div>
    <div class="top">
        <!-- 查询 创建 上传 -->
        <el-form
          :inline="true"
          :model="formInline"
          class="demo-form-inline mt-2 border-bottom"
          style="margin: -20px -20px 10px -20px;padding:10px 20px 0 20px"
        >
          <el-form-item>
            <el-select
              v-model="formInline.region"
              size="small"
              placeholder=""
            >
              <el-option label="降序" value="up"></el-option>
              <el-option label="升序" value="top"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formInline.user"
              size="small"
              placeholder="审批人"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" size="small" @click="search"
              >搜索</el-button
            >
          </el-form-item>
          <el-from-item style="float: right">
            <el-button size="small" type="success">创建相册</el-button>
            <el-button size="small" type="warning">上传图片</el-button>
          </el-from-item>
        </el-form>
    </div>
    <!-- 表格 -->
    <el-tabs :tab-position="tabPosition" style="height: 200px">
      <el-tab-pane>
        <label for="phone1">默认相册</label>
        <el-select v-model="pic.region" placeholder="活动区域" id="phone1">
          <el-option label="修改" value="updataes"></el-option>
          <el-option label="删除" value="removes"></el-option>
        </el-select>
      </el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>

      
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      formInline: {},
      tabPosition: "left",
      pic:{},
    };
  },
  created() {},
  mounted() {}, //方法
  methods: {
    //   搜索
    search() {
      console.log(123);
    },
  },
};
</script>

<style scoped>
</style>