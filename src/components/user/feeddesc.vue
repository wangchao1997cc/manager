<template>
  <el-form label-width="80px">
    <el-form-item label="反馈图片">
      <!-- <block v-for="(item,index) in feedbackinfo.imgList" :key="index"> -->
      <el-image class="user_pic" v-for="(item,index) in feedbackinfo.imgList" :src="item" :key="index"
        :preview-src-list="feedbackinfo.imgList">
      </el-image>
      <!--      </block> -->
    </el-form-item>
    <el-form-item label="问题描述">
      {{feedbackinfo.problemDescription}}
    </el-form-item>
    <el-form-item label="手机号">
      {{feedbackinfo.phoneNumber}}
    </el-form-item>
    <el-form-item label="状态">
      {{feedbackinfo.status == 0?'未处理':(feedbackinfo.status == 1?'处理中':'处理完成')}}
    </el-form-item>
    <el-form-item label="反馈时间">
      {{feedbackinfo.createdTime}}
    </el-form-item>
    <div class="solve_problem" v-if="feedbackinfo.status!=2" @click="begainSove(feedbackinfo.id)">
      已解决
    </div>
  </el-form>
</template>

<script>
  import {
    feedBackDetail,
    solveFeedback
  } from '../../service/api.js';
  const tooUtils = require("../../utils/util.js");
  export default {
    name: 'feeddesc',
    data() {
      return {
        feedbackinfo: {}, //反馈信息
      }
    },
    mounted() {
      let id = this.$route.params.id

      this.obtainUserDetail(id); //获取用户详细信息
    },
    methods: {
      //获取·用户详细信息
      obtainUserDetail: async function(id) {
        let res = await feedBackDetail(id);
        if (res.code == 0) {
          res.data.createdTime = tooUtils.formatDate(res.data.createdTime, true)
          this.feedbackinfo = res.data;
        }
      },
      //解决反馈问题
      begainSove: async function(id) {
        let params = {
          id: id,
          status: 2
        }
        let res = await solveFeedback(params);
        if (res.code == 0) {
          this.feedbackinfo.status = 2;
          this.$message({
            message: '操作成功',
            type: 'success'
          });
        }
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
    height: 100%;
/*    padding: 0 20px; */
    box-sizing: border-box;
    background: rgb(238, 241, 246)
  }

  .user_pic {
    width: 200px;
    height: 200px;
    margin-right: 20px;
  }

  .solve_problem {
    width: 100px;
    height: 50px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    float: right;
    text-align: center;
    line-height: 50px;
    border-radius: 4px;
  }
</style>
