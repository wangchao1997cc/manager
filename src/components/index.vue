<template>
  <el-container style="border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']" router>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-user-solid"></i>用户</template>
          <el-menu-item index="/user/home">用户管理</el-menu-item>
          <el-menu-item index="/user/feedback">用户反馈</el-menu-item>
          <el-menu-item index="/user/phoneapply">用户账号申请管理</el-menu-item>

        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-s-tools"></i>其他配置</template>
          <el-menu-item-group>
            <el-menu-item index="/configure/addedition">版本配置</el-menu-item>
            <el-menu-item index="/configure/edition">版本记录</el-menu-item>
            <el-menu-item index="/user/agreement">用户协议</el-menu-item>
            <el-menu-item index="/user/agreementsetup/add">上传协议</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-s-tools"></i>管理员</template>
          <el-menu-item-group>
            <el-menu-item index="/admin/adminlist">管理员列表</el-menu-item>
            <el-menu-item index="/admin/addsystemuser/add">添加管理员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="font-size: 12px">
        <div class="head_title">拼豆直播管理系统</div>
        <div>
          <i class="el-icon-user" style="margin-right: 15px"></i>
          <span>管理员</span>
        </div>
      </el-header>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>
<script>
  // const tooUtils = require("../utils/util.js");
  // import {
  //   userListInfo
  // } from '../service/api.js';
  // import search from './search.vue'

  export default {
    name: 'index',
    data() {
      return {

      }
    },
    // components: {
    //   search: search
    // },
    created() {

    },
    methods: {

    }
  };
</script>

<style>
  html,
  body,
  #app,
  .login {
    height: 100%;

  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-header {
    display: flex;
    justify-content: space-between;
  }

  .head_title {
    font-size: 14px;
  }

  .el-container {
    height: 100%;
    box-sizing: border-box;
    background: rgb(238, 241, 246)
  }


  /* .radio_box {
    background: white;
    height: 40px;
    border: 1px solid #DCDFE6;
    padding: 6px 10px;
    box-sizing: border-box;
  }

  .el-radio {
    margin-right: 10px;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-container {
    height: 100%;
  }

  .el-header {
    display: flex;
    justify-content: space-between;
  }



  .el-aside {
    color: #333;
  }

  .el-table {
    border: 1px solid #EBEEF5;
  }

  .table_content {
    padding: 20px;
    overflow: scroll;
    height: 100%;
    background: white;
  }

  .search_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .block {
    width: calc(100% - 60px);
    background: white;
    height: 100px;
    position: absolute;
    bottom: 40px;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  .el-main {
    position: relative;
    background: rgb(238, 241, 246);
  }

  .search {


  } */
</style>
