<template>
  <el-main>
    <div class="search_content">
      <search class="search" @searchData="searchData" :selectData="selectdata"></search>
      <div class="radio_box">
        <el-radio v-model="radio1" label="1">观众</el-radio>
        <el-radio v-model="radio1" label="2">主播</el-radio>
      </div>
      <div class="radio_box">
        <el-radio v-model="radio2" label="1">男</el-radio>
        <el-radio v-model="radio2" label="2">女</el-radio>
      </div>
      <el-button slot="append" icon="el-icon-search" @click="bindSearchInfo">点击搜索</el-button>
    </div>

    <!-- <div class="search_box"></div> -->
    <div class="table_content">
      <el-table :data="userData.rows" border>
        <el-table-column prop="nickname" label="姓名">
        </el-table-column>
        <el-table-column prop="createdTime" label="注册时间">
        </el-table-column>
        <el-table-column prop="level" label="等级">
        </el-table-column>
        <el-table-column prop="phoneNumber" label="手机号">
        </el-table-column>
        <el-table-column prop="gender" label="性别">
        </el-table-column>
        <el-table-column prop="status" label="状态">
        </el-table-column>
        <el-table-column prop="signInDeviceType" label="设备">
        </el-table-column>
        <el-table-column prop="anchor" label="用户标识">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row.clientId)" type="text" size="small">查看</el-button>
            <el-button :type="scope.row.status=='可用'?'danger':'warning'" size="small" @click="prohibitUser(scope.row.clientId)">{{scope.row.status=='可用'?'禁用':'恢复'}}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @current-change="handleCurrentChange" :page-size="10" layout="total, prev, pager, next, jumper"
          :total="userData.total">
        </el-pagination>
      </div>
    </div>
  </el-main>
</template>

<script>
  const tooUtils = require("../../utils/util.js");
  import {
    userListInfo,
    prohibitUserApi
  } from '../../service/api.js';
  import search from '../search.vue'

  export default {
    name: 'home',
    data() {
      return {
        pageIndex: 1, //当前的页码
        radio1: 0, //身份标识
        radio2: 0, //性别标识
        // tableData: Array(20).fill(item),
        userData: [], //用户列表
        selectdata: ['用户昵称', '手机号码'],
        model: {}, //搜索查询所需要的参数
      }
    },
    components: {
      search: search
    },
    created() {
      this.obtainUserList();
    },
    methods: {
      //搜索内容
      searchData(val) {
        if (val.id == '0') {
          this.model.nickname = val.searchinfo
        } else {
          this.model.phoneNumber = val.searchinfo
        }
      },
      obtainUserList: async function() {
        let params = {
          "pageIndex": this.pageIndex,
          "pageSize": 10,
        }
        Object.assign(params, this.model);
        let res = await userListInfo(params);
        if (res) {
          let data = res.data;
          data.rows.forEach((item) => {
            item.createdTime = tooUtils.formatDate(item.createdTime, true);
            item.gender = item.gender == 1 ? '男' : '女';
            item.status = item.status == 1 ? '可用' : '不可用';
            item.anchor = item.anchor == 0 ? '观众' : '主播';
          })
          this.userData = data;
        }
      },
      //点击查看
      handleClick(id){
        this.$router.push({
          path:`./userdetail/${id}`
        })
      },
      //点击翻页
      handleCurrentChange(val) {
        this.pageIndex = val;
        this.obtainUserList();
        console.log(`当前页: ${val}`);
      },
      //点击搜索
      bindSearchInfo() {
        // console.log(this.radio1)
        if (this.radio1) {
          this.model.anchor = this.radio1 - 1;
        }
        if (this.radio2) {
          this.model.gender = this.radio2;
        }
        console.log(this.model)
        this.obtainUserList(); //搜索用户列表分页
      },
      //禁用用户
      prohibitUser: async function(id){
        let params = id
        let res = await prohibitUserApi(params);
        console.log(res)
        if(res.code==0){
          this.$message({
            message: '操作成功',
            type: 'success'
          });
          this.obtainUserList();   //刷新用户列表
        }
      }
    }
  };
</script>



<style>
  /* .el-main{
    border: 1px red solid;
  } */

  .radio_box {
    background: white;
    height: 40px;
    border: 1px solid #DCDFE6;
    padding: 6px 10px;
    box-sizing: border-box;
  }

  .el-radio {
    margin-right: 10px;
  }

  .el-container {
    height: 100%;
    background: rgb(238, 241, 246)
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
    width: calc(100% - 288px);
    background: white;
    z-index: 100;
    height: 100px;
    position: fixed;
    bottom: 40px;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  .el-main {
    position: relative;
   /* background: rgb(238, 241, 246); */
  }

  .is-leaf {
    text-align: center !important;
  }


</style>
