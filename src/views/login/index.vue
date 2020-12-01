<template>
    
  <div>
    <el-row :gutter="20">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h3 style="font-size: 30px; text-align: center">UNI-ADMIN</h3>
        </div>
        <div class="text item">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            class="demo-ruleForm"
          >
            <el-form-item prop="username">
              <el-input
                v-model.number="ruleForm.username"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-form-item prop="password">
                <el-input
                  type="password"
                  v-model="ruleForm.password"
                  autocomplete="off"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
              <!-- <el-button type="primary" @click="submitForm('ruleForm')"
                >提交</el-button
              >
              <el-button @click="resetForm('ruleForm')">重置</el-button> -->
              <el-button type="primary" @click="login('ruleForm')">立即登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-row>
      
  </div>
</template>


<script>
import {Login} from '@/api/login'
export default {
  name: "",
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
         { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 20, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  created() {},
  mounted() {}, 
  methods: {
    login(formName) {
      this.$refs[formName].validate(async(valid) => {
          // console.log(valid);
        if (valid) {
          let res = await Login(this.ruleForm.username,this.ruleForm.password)
          // console.log(res);
          if(res.status == 200){
            this.$message({
              type:'success',
              message:'登录成功'+res.data.msg
            })
            window.sessionStorage.setItem('token',res.data.data.token)
            localStorage.setItem('admin',JSON.parse(res.config.data))
            // console.log(localStorage.getItem('admin'),JSON.parse(res.config.data));
            this.$router.push('/index')
          }
        } else {
          this.$message({
            message: '登录失败',
            type: 'error',
            duration:2000
          })
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.el-row {
  margin-top: 180px;
  &:last-child {
    box-sizing: border-box;
  }
}
h3 {
  color: #6c757d !important;
}
.el-card .el-card__header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  margin: 0 auto;
}
.el-input__inner {
  height: 36px;
  line-height: 36px;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.el-button {
  margin-top: 20px;
  width: 100%;
}
</style>