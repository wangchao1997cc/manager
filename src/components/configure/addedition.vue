<template>
  <el-form label-width="120px" :rules="rules" :model="form" ref="form">
    <el-form-item label="选择系统" prop="type">
      <el-select v-model="form.type">
        <el-option label="苹果手机" value="2"></el-option>
        <el-option label="安卓手机" value="1"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item v-if="form.type === '1'" label="上传apk">
      <el-upload class="upload-demo"
      action="http://upload.qiniup.com"
      :on-remove='handleRemove'
      :on-success="handleSuccess"
      accept=".apk"
      :data='uploadToken'
      :before-upload="beforeUpload"
      >
        <el-button type="primary" plain>点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="版本号" prop="version">
      <el-input v-model="form.version"></el-input>
    </el-form-item>
    <el-form-item label="app下载地址" prop="downloadUrl">
      <el-input v-model="form.downloadUrl"></el-input>
    </el-form-item>
    <el-form-item label="更新方式" prop="isForce">
      <el-radio-group v-model="form.isForce">
        <el-radio :label="false">推荐更新</el-radio>
        <el-radio :label="true">强制更新</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="版本描述" prop="description">
      <el-input v-model="form.description"></el-input>
    </el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button @click="agaminInput">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {
    setupAppVersion,
    qiniuToken
  } from '../../service/api.js';
  const tooUtils = require("../../utils/util.js");
  export default {
    name: 'addedition',
    data() {
      return {
        uploadData: {
          token: ""
        },
        form: {
          version: '', //版本号
          type: '2', //选择的系统
          downloadUrl: '', //app下载地址
          isForce: false, //更新方式
          description: '', //版本描述
        },
        qiniuirl:'',
        uploadToken: {
          key: '',
          token: ''
        },
        rules: {
          version: [{
            required: true,
            message: '请输入版本号',
            trigger: 'blur'
          }, ],
          downloadUrl: [{
            required: true,
            message: '请输入下载地址',
            trigger: 'blur'
          }],
        }
      }
    },
    mounted() {
      let id = this.$route.params.id
      // this.obtainUserDetail(id); //获取用户详细信息
    },
    created: async function() {
      let res = await qiniuToken();
      if(res.code==0){
        this.uploadToken.token = res.data.token;
        this.qiniuirl = res.data.urlPrefix;
        console.log(111,res);
      }

    },
    methods: {
      //重新输入
      agaminInput(){
        this.form = {
          version: '', //版本号
          type: '2', //选择的系统
          downloadUrl: '', //app下载地址
          isForce: false, //更新方式
          description: '', //版本描述
        }
      },
      handleSuccess(file, fileList){
        console.log(this.qiniuirl+file.key)
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
            let res = await setupAppVersion(this.form);
            if (res.code == 0) {
              this.$message({
                message: '添加成功',
                type: 'success'
              });
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
