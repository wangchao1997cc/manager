<template>
  <el-form label-width="120px" :rules="rules" :model="form" ref="form">

    <el-form-item label="协议内容" prop="content">
      <el-input type="textarea" v-model="form.content"></el-input>
    </el-form-item>

    <el-form-item label="描述" prop="description">
      <el-input v-model="form.description"></el-input>
    </el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button @click="agaminInput">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {
    agreementDetail,
    saveAgreement
  } from '../../service/api.js';
  const tooUtils = require("../../utils/util.js");
  export default {
    name: 'agreementsetup',
    data() {
      return {
        uploadData: {
          token: ""
        },
        form: {
          id: '', //   //id
          content: '', //版本号
          description: '', //版本描述
        },
        qiniuirl: '',
        uploadToken: {
          key: '',
          token: ''
        },
        rules: {
          content: [{
            required: true,
            message: '请输入协议内容',
            trigger: 'blur'
          }, ],
        }
      }
    },
    mounted() {
      let id = this.$route.params.id;
      this.id = id;
      console.log(id)
      if (id != 'add') {
        this.form.id = id;
        console.log('this.form',this.form)
        this.checkAgreement(id);
      }
      // this.obtainUserDetail(id); //获取用户详细信息
    },
    created() {
      // let res = await qiniuToken();
      // if(res.code==0){
      //   this.uploadToken.token = res.data.token;
      //   this.qiniuirl = res.data.urlPrefix;
      //   console.log(111,res);
      // }
    },
    methods: {
      //查询协议
      checkAgreement: async function(id) {
        let res = await agreementDetail(id);
        if (res.code == 0) {
          this.form.content = res.data.content;
          this.form.description = res.data.description;
        }
      },
      //重新输入
      agaminInput() {
        this.form = {
          content: '', //版本号
          description: '', //版本描述
        }
      },
      handleSuccess(file, fileList) {
        console.log(this.qiniuirl + file.key)
      },
      handleRemove(file, fileList) {
        // this.addGoodsForm.imgUrl=''
      },
      //点击上传按钮
      beforeUpload(file) {
        console.log(file)
        const isPNG = file.type === "image/png";
        const isJPEG = file.type === "image/jpeg";
        const isJPG = file.type === "image/jpg";
        const isLt2M = file.size / 1024 / 1024 < 2;
        // if (!isPNG && !isJPEG && !isJPG) {
        //   this.$message.error("上传头像图片只能是 jpg、png、jpeg 格式!");
        //   return false;
        // }
        // if (!isLt2M) {
        //   this.$message.error("上传头像图片大小不能超过 2MB!");
        //   return false;
        // }
        //将上传的文件名保存成key,把这个key拼接到外链地址
        this.uploadToken.key = `upload_apk_${file.name}?` + Date.parse(new Date()) //模板语法`字符串${变量}`
      },
      //表单提交
      onSubmit() {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            let res = await saveAgreement(this.form);
            console.log(res)
            if (res.code == 0) {
              this.$message({
                message: '操作成功',
                type: 'success'
              });
              this.$router.go(-1); //返回上一层
            }
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
<style scoped>
  .el-textarea {
    width: 100% !important;
  }
</style>
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
