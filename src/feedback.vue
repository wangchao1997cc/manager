<template>
  <el-main>
    <!-- <div class="search_box"></div> -->
    <div class="table_content">
      <el-table :data="userData.rows" border>
        <el-table-column prop="createdTime" label="反馈时间" width="130">
        </el-table-column>
        <el-table-column prop="phoneNumber" label="手机号" width="200">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100">
        </el-table-column>
        <el-table-column prop="problemDescription" label="问题描述">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClick(scope.row.clientId)" type="text" size="small">查看</el-button> -->
            <el-button type="primary" size="small" @click="seeFeebackDetail(scope.row.id)">查看</el-button>
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
    feedBackData
  } from '../../service/api.js';
  export default {
    name: 'feedback',
    data() {
      return {
        userData: [], //用户列表
        pageIndex: 1, //当前的页码
      }
    },
    // components: {
    //   search: search
    // },
    created() {
      this.obtainFeedBackData(); //获取反馈分页
    },
    methods: {
      //获取反馈分页
      obtainFeedBackData: async function() {
        let pamars = {
          "pageIndex": this.pageIndex,
          "pageSize": 10,
        }
        let res = await feedBackData(pamars);
        if (res.code == 0) {
          let data = res.data;
          data.rows.forEach((item) => {
            item.createdTime = tooUtils.formatDate(item.createdTime, true);
            item.status = item.status == 0 ? '未处理':(item.status == 1?'处理中':'处理完成') ;
          })
          this.userData = data
        }
        console.log(111, res)
      },
      //点击翻页
      handleCurrentChange(val) {
        this.pageIndex = val;
        this.obtainFeedBackData();
        console.log(`当前页: ${val}`);
      },
      seeFeebackDetail(id) {
        this.$router.push({
          path: `./feeddesc/${id}`
        })
      },
    }
  };
</script>

<!-- <style scoped>
  .el-button {
    margin-left: 20px;
  }
</style> -->
<style>
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
