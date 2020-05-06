<template>
  <el-main>
    <!-- <div class="search_box"></div> -->
    <div class="table_content">
      <el-table :data="userData.rows" border>
        <el-table-column prop="createdTime" label="创建时间" width="130">
        </el-table-column>
        <el-table-column prop="type" label="系统类型" width="130">
        </el-table-column>
        <el-table-column prop="isForce" label="是否强制更新" width="130">
        </el-table-column>
        <el-table-column prop="downloadUrl" label="下载地址" width="250">
        </el-table-column>
        <el-table-column prop="version" label="版本号">
        </el-table-column>
        <el-table-column prop="description" label="描述">
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
<!--            <el-button type="primary" size="small" @click="seeFeebackDetail(scope.row.id)">查看</el-button>-->
            <!-- <el-button @click="seeFeebackDetail(scope.row.id)" type="text" size="small">查看</el-button> -->
            <el-button type="danger" size="small" @click="deleteData(scope.row.id,scope.$index)">删除</el-button>

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
    appVersionsData,
    deleteEdition
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
        let res = await appVersionsData(pamars);
        if (res.code == 0) {
          let data = res.data;
          data.rows.forEach((item) => {
            item.createdTime = tooUtils.formatDate(item.createdTime, true);
            item.isForce = item.isForce == 0 ? '推荐更新' : '强制更新';
            item.type = item.type == 1 ? 'android' : 'ios';
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
      // seeFeebackDetail(id) {
      //   this.$router.push({
      //     path: `./feeddesc/${id}`
      //   })
      // },
      deleteData: async function(id,index){
        let res = await deleteEdition(id);
        if(res.code==0){
          this.userData.rows.splice(index,1);
          this.$message({
            message: '操作成功',
            type: 'success'
          });
        }
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
