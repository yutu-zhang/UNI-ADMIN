<template>
  <div class="Home">
    <el-container>
      <el-header>
        <span style="font-weight: 550; font-size: 22px">{{ $conf.logo }}</span>
        <el-menu
          @select="handleSelect"
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item
            :index="index | numToString"
            v-for="(item, index) in navBar.list"
            :key="index"
            >{{ item.name }}</el-menu-item
          >
          <!-- <el-menu-item index="/index">首页</el-menu-item>
          <el-menu-item index="/shop">商品</el-menu-item>
          <el-menu-item index="/order">订单</el-menu-item>
          <el-menu-item index="/user">会员</el-menu-item>
          <el-menu-item index="/set">设置</el-menu-item> -->
          <el-menu-item>
            <img src="" alt="" style="width: 50px; height: 50px" />
            <el-dropdown>
              <span class="el-dropdown-link">
                admin<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <!-- <router-view></router-view> -->
        <!-- 侧边导航布局 -->
        <el-aside width="200px">
          <!-- <router-view></router-view> -->
          <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            @select="slideSelect"
            background-color="#fff"
            text-color="#aaa"
            active-text-color="#ffd04b"
            router
          >
            <el-menu-item
              :index="index | numToString"
              :key="index"
              v-for="(item, index) in sliderMenus"
            >
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="main-content">
            <!-- 主体 -->
            <div class="main-header">
              <!-- 面包屑 -->
              <div class="border-bottom" style="padding: 20px; margin: -20px">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item
                    :key="index"
                    v-for="(item, index) in bran"
                    :to="{ path: item.path }"
                    >{{ item.title }}</el-breadcrumb-item
                  >
                </el-breadcrumb>
              </div>
            </div>
            <div class="center-main">
              <!-- 主体 -->
              <router-view></router-view>
            </div>
            <div class="main-footer">
              <!-- 分页 -->
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="page.current"
                :page-sizes="[10, 20, 30]"
                :page-size="page.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="page.total"
              >
              </el-pagination>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import common from "@/common/mixins/common.js";
export default {
  mixins: [common],
  name: "Home",
  data() {
    return {
      info: "",
      activeIndex: 1,
      navBar: [], // 导航
      bran: "",
      page:{
        current:1,
        size:10,
        total:0
      }
    };
  },
  computed: {
    slideMenuActive: {
      get() {
        return this.navBar.list[this.navBar.active].subActive || "0";
      },
      set(val) {
        this.navBar.list[this.navBar.active].submenu || [];
      },
    },
    sliderMenus() {
      return this.navBar.list[this.navBar.active].submenu || [];
    },
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      this.navBar.active = key;
    },
    slideSelect(key, keyPath) {
      // this.slideMenuActive = key
      console.log(key, keyPath);
    },
    // 获取面包屑导航
    getRouterBran() {
      // console.log(this.$route);
      let b = this.$route.matched.filter((v) => v.name);
      let arr = [];
      b.forEach((v, k) => {
        if (v.name === "index" || v.name === "login") return;
        arr.push({
          name: v.name,
          path: v.path,
          title: v.meta.title,
        });
      });
      if (arr.length > 0) {
        arr.unshift({ name: "index", path: "/index", title: "后台首页" });
      }
      this.bran = arr;
    },

    // 分页
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  },
  created() {
    // 面包屑
    this.getRouterBran();
    //   this.info = JSON.parse(localStorage.getItem("admin"))
    //   console.log(this.info);
    this.navBar = this.$conf.navBar;
    // console.log(this.navBar.list);
  },
  mounted() {},
};
</script> 
<style scoped lang="scss">
.Home {
  height: 100%;
}
.el-header {
  height: 60px !important;
  line-height: 60px !important;
  background: rgb(84, 92, 100);
  color: #f8f9fa !important;
}
.el-aside {
  background-color: #fff;
  color: #333;
  border-right: 1px solid #ccc;
}
.el-main {
  background-color: #f8f9fa !important;
  color: #333;
}
body > .el-container {
  //   margin-bottom: 40px;
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-menu {
  width: 504px;
  color: rgb(255, 255, 255) !important;
  background: rgb(84, 92, 100);
}
.el-header {
  display: flex;
  justify-content: space-between;
}
.el-dropdown-link {
  cursor: pointer;
  color: rgb(255, 255, 255);
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.el-menu-item img {
  border-radius: 50% !important;
}
.main-content {
  width: 100%;
  height: 100%;
  position: relative;
  .main-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    margin: 0px -40px -40px -20px;
    background-color: #eee;
    border-top: 1px solid #aaa;
    color: #333;
    padding: 20px ;
  }
  .main-header {
    margin: -20px;
    padding-left:20px;
    background-color: #fff!important;
  }
  .center-main {
    padding-top: 20px;
  }
}
</style>
