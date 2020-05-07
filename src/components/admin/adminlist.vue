<template>
  <el-main>
    <!-- <div class="search_box"></div> -->
    <div class="table_content">
      <el-table :data="userData.rows" border>
        <el-table-column prop="loginName" label="登录账号">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间">
        </el-table-column>
        <el-table-column prop="userName" label="用户昵称">
        </el-table-column>
        <el-table-column prop="status" label="用户状态">
        </el-table-column>
        <el-table-column prop="roles" label="用户权限">
        </el-table-column>
        <el-table-column prop="remark" label="备注">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="300">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="setupAgreement(scope.row.userId)">修改</el-button>
            <el-button type="warning" size="small" @click="resetPassword(scope.row.userId)">重置密码</el-button>
            <el-button type="danger" size="small" @click="deleteAgreement(scope.row.userId,scope.$index)">删除</el-button>
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
    adminList,
    deleteAdmin,
    userResetPwd
  } from '../../service/api.js';
  export default {
    name: 'adminlist',
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
      this.obtainAgreementList(); //获取反馈分页
    },
    methods: {
      //获取反馈分页
      obtainAgreementList: async function() {
        let pamars = {
          "pageIndex": this.pageIndex,
          "pageSize": 10,
        }
        let res = await adminList(pamars);
        if (res.code == 0) {
          console.log(111, res)
          let data = res.data;
          data.rows.forEach((item) => {
            item.createTime = tooUtils.formatDate(item.createTime, true);
            item.status = item.status == 0 ? '正常' : '停用';
          })
          this.userData = data
        }
        // console.log(111, res)
      },
      //前往设置协议
      setupAgreement(id) {
        this.$router.push({
          path: `./addsystemuser/${id}`
        })
      },
      //点击重置密码
      resetPassword(userId) {
        this.$prompt('请输入邮箱', '提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(async({
          value
        })=> {
          let pamars = {
            userId: userId,
            password: value
          }
          let res = await userResetPwd(pamars);
          this.$message({
            type: 'success',
            message: '重置密码成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      //删除用户协议
      deleteAgreement: async function(id, index) {
        let res = await deleteAdmin(id);
        if (res.code == 0) {
          this.userData.rows.splice(index, 1);
          this.$message({
            message: '操作成功',
            type: 'success'
          });
        }
        console.log(res)
      },
      //点击翻页
      handleCurrentChange(val) {
        this.pageIndex = val;
        this.obtainFeedBackData();
        console.log(`当前页: ${val}`);
      },
      // seeFeebackDetail(id) {
      //   this.$router.push({
      //     path: `./phoneapplydetail/${id}`
      //   })
      // },
    }
  };
</script>
<style scoped>
  .el-button {
    /* margin-left: 20px; */
  }
</style>
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
