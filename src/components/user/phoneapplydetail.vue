<template>
  <el-form label-width="120px">
    <el-form-item label="身份证正面">
      <el-image class="user_pic" :src="feedbackinfo.frontIdCard">
      </el-image>
    </el-form-item>
    <el-form-item label="身份证反面">
      <el-image class="user_pic" :src="feedbackinfo.backIdCard">
      </el-image>
    </el-form-item>
    <el-form-item label="手持身份证照片">
      <el-image class="user_pic" :src="feedbackinfo.handIdCard">
      </el-image>
    </el-form-item>
    <el-form-item label="新手机号">
      {{feedbackinfo.newPhoneNumber}}
    </el-form-item>
    <el-form-item label="老手机号">
      {{feedbackinfo.oldPhoneNumber}}
    </el-form-item>
    <el-form-item label="申请时间">
      {{feedbackinfo.createdTime}}
    </el-form-item>
    <el-form-item label="常用登录设备">
      {{feedbackinfo.loginDeviceName}}
    </el-form-item>
    <el-form-item label="常用登录地区">
      {{feedbackinfo.loginRegion}}
    </el-form-item>
    <el-form-item label="手机号购买凭证">
      {{feedbackinfo.purchaseProof}}
    </el-form-item>
    <el-select v-model="selectvalue" placeholder="请选择" @change="choseValue">
      <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label">
      </el-option>
    </el-select>
    <el-input
      v-if="selectvalue==2"
      type="textarea"
      :rows="3"
      placeholder="请输入原因"
      v-model="textarea">
    </el-input>
    <div class="solve_problem" @click="begainSove(feedbackinfo.id)">
      确认
    </div>
  </el-form>
</template>

<script>
  import {
    phoneApplyDetail,
    editClientApply
  } from '../../service/api.js';
  const tooUtils = require("../../utils/util.js");
  export default {
    name: 'phoneapplydetail',
    data() {
      return {
        feedbackinfo: {}, //反馈信息
        options: [{
          value: '0',
          label: '提交成功'
        }, {
          value: '1',
          label: '审核中'
        }, {
          value: '2',
          label: '审核失败'
        }, {
          value: '3',
          label: '审核通过'
        }, ],
        selectvalue: '', //选择的状态
        textarea: ''
      }
    },
    mounted() {
      let id = this.$route.params.id

      this.obtainUserDetail(id); //获取用户详细信息
    },
    methods: {
      choseValue(){
        console.log(this.selectvalue)
      },
      //获取·用户详细信息
      obtainUserDetail: async function(id) {
        let res = await phoneApplyDetail(id);
        if (res.code == 0) {
          res.data.createdTime = tooUtils.formatDate(res.data.createdTime, true)
          this.feedbackinfo = res.data;
        }
      },
      //解决反馈问题
      begainSove: async function(id) {
        let params = {
          id: id,
          status: this.selectvalue
        }
        if(params.status==2){
          if(!this.textarea){
            return this.$message({
              message: '请填写原因',
              type: 'error'
            });
          }
          params.remark = this.textarea;
        }
        let res = await editClientApply(params);
        if (res.code == 0) {
          this.$message({
            message: '操作成功',
            type: 'success'
          });
          this.$router.go(-1); //返回上一层
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

  .el-textarea{
    width: 400px;
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
