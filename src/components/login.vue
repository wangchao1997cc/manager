<template>
  <div class="login">

    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <div class="title"><i class="el-icon-setting"></i>拼豆直播管理系统</div>
      <el-form-item label="用户名" prop="name">
        <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {
    userLogin
  } from '../service/api.js'

  export default {
    name: 'login',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.name !== '') {
            this.$refs.ruleForm.validateField('name');
          }
          callback();
        }
      };
      var validatename = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          name: '',
        },
        rules: {
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          name: [{
            validator: validatename,
            trigger: 'blur'
          }],
        }
      };
    },
    created() {
      // this.$axios.get('/emsTest/#docs/let')
      //   .then(res => {
      //     console.log(res)
      //   })
      // this.att();
    },
    // created: async function() {
    //   const params = {
    //     "password": "admin123",
    //     "username": "admin"
    //   };
    //   let res = await userLogin(params);
    //   console.log(res);
    // },

    methods: {
      submitForm(formName) {
        let that = this;
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            const params = {
              "password": this.ruleForm.pass,
              "username": this.ruleForm.name
            };
            let res = await userLogin(params);
            if (res) {
              that.$store.commit('SAVE_TOKEN', res.data.jToken)
              that.$store.commit('SAVE_MENUS', res.data.menus)
              that.$message({
                message: '恭喜你，登录成功',
                type: 'success'
              })
              that.$router.push('./user/home');
            }
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
	.el-form {
	  width: 400px;
	  border: 1px solid #ccc;
	  border-radius: 4upx;
	  padding: 30px 45px 10px 10px;
	}
</style>

<style>
  html,
  body,
  #app,
  .login {
    height: 100%;

  }

  .login {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  

  .title {
    color: #666666;
    font-size: 22px;
    text-align: center;
    margin: 0px 0 30px 0;
    margin-left: 18px;
  }

  .el-icon-setting {
    margin-right: 10px;
  }
</style>
