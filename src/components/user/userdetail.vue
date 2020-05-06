<template>
  <el-form  label-width="80px">
    <el-form-item label="用户姓名">
      {{userinfo.nickname}}
    </el-form-item>
    <el-form-item label="用户头像">
      <img class="user_pic" :src="userinfo.headPortrait"/>
    </el-form-item>
    <el-form-item label="用户标识">
      {{userinfo.status==0?'观众':'主播'}}
    </el-form-item>
    <el-form-item label="等级">
      {{userinfo.level}}
    </el-form-item>
    <el-form-item label="关注数量">
      {{userinfo.followCount}}
    </el-form-item>
    <el-form-item label="粉丝数量">
      {{userinfo.fansCount}}
    </el-form-item>
    <el-form-item label="手机号">
      {{userinfo.phoneNumber}}
    </el-form-item>
    <el-form-item label="状态">
      {{userinfo.status==1?'可用':'不可用'}}
    </el-form-item>
    <el-form-item label="累积充值">
      {{userinfo.money}}
    </el-form-item>
    <el-form-item label="成长值">
      {{userinfo.point}}
    </el-form-item>
    <el-form-item label="性别">
      {{userinfo.gender==1?'男':'女'}}
    </el-form-item>
    <el-form-item label="生日">
      {{userinfo.birthday}}
    </el-form-item>
    <el-form-item label="豆票数">
      {{userinfo.coin}}
    </el-form-item>
    <el-form-item label="总豆票数">
      {{userinfo.totalCoin}}
    </el-form-item>
    <el-form-item label="注册时间">
      {{userinfo.createdTime}}
    </el-form-item>
    <el-form-item label="所在地">
      {{userinfo.region}}
    </el-form-item>
    <el-form-item label="注册设备">
      {{userinfo.signInDeviceType}}
    </el-form-item>
    <el-form-item label="个人简介">
      {{userinfo.profile}}
    </el-form-item>
  </el-form>
</template>

<script>
  import {
    userDetailApi
  } from '../../service/api.js';
   const tooUtils = require("../../utils/util.js");
  export default {
    name:'userdetail',
    data() {
      return {
        userinfo:{},   //用户信息
      }
    },
    mounted() {
      let id = this.$route.params.id
      this.obtainUserDetail(id);   //获取用户详细信息
    },
    methods: {
      //获取·用户详细信息
      obtainUserDetail: async function(id){
        let res = await userDetailApi(id);
        if(res.code==0){
          res.data.createdTime = tooUtils.formatDate(res.data.createdTime,true)
          this.userinfo = res.data;

        }
      },
      onSubmit() {
        console.log('submit!');
      }
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

  .user_pic{
    width: 200px;
    height: 200px;
  }
</style>
