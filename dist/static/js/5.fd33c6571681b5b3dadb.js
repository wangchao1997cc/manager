webpackJsonp([5],{MyaR:function(e,t){},npYB:function(e,t){},yodo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Xxa5"),o=n.n(r),a=n("exGp"),i=n.n(a),s=n("CCn6"),c=n("oFuF"),u={name:"agreementsetup",data:function(){return{uploadData:{token:""},form:{id:"",content:"",description:""},qiniuirl:"",uploadToken:{key:"",token:""},rules:{content:[{required:!0,message:"请输入协议内容",trigger:"blur"}]}}},mounted:function(){var e=this.$route.params.id;this.id=e,console.log(e),"add"!=e&&(this.form.id=e,console.log("this.form",this.form),this.checkAgreement(e))},created:function(){},methods:{checkAgreement:function(){var e=i()(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)(t);case 2:0==(n=e.sent).code&&(this.form.content=n.data.content,this.form.description=n.data.description);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),agaminInput:function(){this.form={content:"",description:""}},handleSuccess:function(e,t){console.log(this.qiniuirl+e.key)},handleRemove:function(e,t){},beforeUpload:function(e){console.log(e);e.type,e.type,e.type,e.size;this.uploadToken.key="upload_apk_"+e.name+"?"+Date.parse(new Date)},onSubmit:function(){var e,t=this;this.$refs.form.validate((e=i()(o.a.mark(function e(n){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=8;break}return e.next=3,Object(s.p)(t.form);case 3:r=e.sent,console.log(r),0==r.code&&(t.$message({message:"操作成功",type:"success"}),t.$router.go(-1)),e.next=10;break;case 8:return console.log("error submit!!"),e.abrupt("return",!1);case 10:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)})),console.log("submit!"),console.log(this.form)},obtainUserDetail:function(){var e=i()(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,userDetailApi(t);case 2:0==(n=e.sent).code&&(n.data.createdTime=c.formatDate(n.data.createdTime,!0),this.userinfo=n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",attrs:{"label-width":"120px",rules:e.rules,model:e.form}},[n("el-form-item",{attrs:{label:"协议内容",prop:"content"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.content,callback:function(t){e.$set(e.form,"content",t)},expression:"form.content"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"描述",prop:"description"}},[n("el-input",{model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),e._v(" "),n("el-button",{on:{click:e.agaminInput}},[e._v("取消")])],1)},staticRenderFns:[]};var p=n("VU/8")(u,l,!1,function(e){n("npYB"),n("MyaR")},"data-v-23c4a373",null);t.default=p.exports}});