<template>
  <el-container style="border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']" router>
        <el-submenu index="1" v-for="(item,index) in menusArr" :key="index">
          <template slot="title"><i class="el-icon-user-solid"></i>{{item.name}}</template>
          <el-menu-item v-for="(data,idx) in item.sarr" :key="idx" :index="data.route">{{data.name}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="font-size: 12px">
        <div class="head_title">拼豆直播管理系统</div>
        <div>
          <i class="el-icon-user" style="margin-right: 15px"></i>
          <span>管理员</span>
          <button class="singout" @click="bindSingOut">退出登录</button>
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
        menusArr: [{
          name: '用户',
          power: 'pd:client:view',
          sarr: [{
            name: '用户管理',
            route: '/user/home',
            power: 'pd:client:view',
          }, {
            name: '用户反馈',
            route: '/user/feedback',
            power: 'pd:feedbackProblem:view',
          }, {
            name: '用户账号申请管理',
            route: '/user/phoneapply',
            power: 'pd:clientApply:view',
          }]
        }, {
          name: '其他配置',
          power: 'pd:config:view',
          sarr: [{
            name: '版本配置',
            route: '/configure/addedition',
            power: 'pd:appConfig:view',
          }, {
            name: '版本记录',
            route: '/configure/edition',
            power: 'pd:appConfig:view',
          }, {
            name: '用户协议',
            route: '/user/agreement',
            power: 'pd:protocol:view',
          }, {
            name: '上传协议',
            route: '/user/agreementsetup/add',
            power: 'pd:protocol:view',
          }]
        }, {
          name: '管理员',
          power: 'system:user:view',
          sarr: [{
            name: '管理员列表',
            route: '/admin/adminlist',
            power: 'system:user:view',
          }, {
            name: '添加管理员',
            route: '/admin/addsystemuser/add',
            power: 'system:user:view',
          }]
        }]
      }
    },
    // components: {
    //   search: search
    // },
    created() {
      console.log(this.$store.state.menus)
      this.arrSplice(this.menusArr);
      // for (let i in Arr) {
      //   if (this.$store.state.menus.indexOf(Arr[i].power) == -1) {
      //     this.menusArr.splice(i, 1);
      //     this.arrSplice(this.menusArr)
      //   }
      // Arr[i].sarr.forEach((item, index) => {
      //   if (this.$store.state.menus.indexOf(item.power) == -1) {
      //     this.menusArr[i].sarr.splice(index, 1);
      //   }
      // })
      // }
    },

    methods: {
      arrSplice(Arr) {
        for (let i in Arr) {
          if (this.$store.state.menus.indexOf(Arr[i].power) == -1) {
            this.menusArr.splice(i, 1);
            this.arrSplice(this.menusArr)
          }
          if (Arr[i]) {
            Arr[i].sarr.forEach((item, index) => {
              if (this.$store.state.menus.indexOf(item.power) == -1) {
                this.menusArr[i].sarr.splice(index, 1);
                this.arrSplice(this.menusArr);
              }
            })
          }
        }
      },
      //退出登录
      bindSingOut() {
        //清除用户数据
        sessionStorage.removeItem("store");
        this.$router.replace('/')
      }
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

  .singout {
    background-color: transparent;
    border: none;
    margin-left: 7px;
    font-size: 16px;
    outline: none;
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
