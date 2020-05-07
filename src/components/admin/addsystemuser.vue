<template>
  <el-form label-width="120px" :rules="rules" :model="form" ref="form">
    <el-form-item label="用户昵称" prop="userName">
      <el-input v-model="form.userName"></el-input>
    </el-form-item>
    <el-form-item label="账号" prop="loginName">
      <el-input v-model="form.loginName"></el-input>
    </el-form-item>
    <el-form-item label="账号密码" prop="password" v-if="!userId">
      <el-input v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item label="管理员权限" prop="roleId">
      <el-checkbox-group v-model="form.roleIds">
        <el-checkbox v-for="(item,index) in rolelist" :key='index' :label="item.roleId">{{item.roleName}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="备注" prop="remark">
      <el-input type="textarea" v-model="form.remark"></el-input>
    </el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button @click="agaminInput">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {
    userRoleList,
    saveSystemUser,
    systemUserDestail,
    checkLoginNameUnique,
    updateSystemUser
  } from '../../service/api.js';
  const tooUtils = require("../../utils/util.js");
  export default {
    name: 'addedition',
    data() {
      return {
        rolelist: [],
        form: {
          userName: '', //用户昵称
          loginName: '', //账号
          password: '', //账号密码
          roleIds: [], //账号权限
          remark: '',
        },
        userId: '',
        qiniuirl: '',
        uploadToken: {
          key: '',
          token: ''
        },
        rules: {
          userName: [{
            required: true,
            message: '请输入昵称',
            trigger: 'blur'
          }, ],
          loginName: [{
            required: true,
            message: '请输入登录账号',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入账号密码',
            trigger: 'blur'
          }],
          roleIds: [{
            required: true,
            message: '请选择账号权限',
            trigger: 'blur'
          }],
        }
      }
    },
    mounted() {
      let id = this.$route.params.id;
      if (id != 'add') {
        this.systemUserDeatil(id);
        this.userId = id;
      }
      // this.obtainUserDetail(id); //获取用户详细信息
    },
    created: async function() {
      let res = await userRoleList();
      if (res.code == 0) {
        this.rolelist = res.data;
      }
      console.log(res)

    },
    methods: {
      //获取用户信息详情
      systemUserDeatil: async function(id) {
        let res = await systemUserDestail(id);
        if (res.code == 0) {
          let data = res.data;
          this.form = {
            userName: data.userName, //用户昵称
            loginName: data.loginName, //账号
            remark: data.remark,
            roleIds: [],
          };
          let roleId = [];
          data.roles.forEach((item) => {
            roleId.push(item.roleId)
          })
          this.form.roleIds = roleId;
        }
      },
      //重新输入
      agaminInput() {
        this.form = {
          version: '', //版本号
          type: '2', //选择的系统
          downloadUrl: '', //app下载地址
          isForce: false, //更新方式
          description: '', //版本描述
        }
      },
      //表单提交
      onSubmit() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            let info = null;
            if (!this.userId) {
              let res = await checkLoginNameUnique(this.form.loginName);
              if (res.code == 0) {
                info = await saveSystemUser(this.form);
              }
            } else {
              this.form.userId = this.userId;
              info = await updateSystemUser(this.form);
            }
            if (info.code == 0) {
              this.$message({
                message: '操作成功',
                type: 'success'
              });
              this.$router.go(-1); //返回上一层
            }


            console.log(res)

          } else {
            console.log('error submit!!');
            return false;
          }
        });
        console.log('submit!');
        console.log(this.form)
      },
      //获取·用户详细信息
      obtainUserDetail: async function(id) {
        let res = await userDetailApi(id);
        if (res.code == 0) {
          res.data.createdTime = tooUtils.formatDate(res.data.createdTime, true)
          this.userinfo = res.data;

        }
      },
    }
  }
</script>

<style>
  .el-form {
    height: 90%;
    overflow: scroll;
    padding: 30px 40px;
    box-sizing: border-box;
    background: white;
    margin: 30px 20px;
  }

  .el-container {
    /*    padding: 0 20px; */
    box-sizing: border-box;
    background: rgb(238, 241, 246)
  }

  .user_pic {
    width: 200px;
    height: 200px;
  }
</style>
