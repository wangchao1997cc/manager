webpackJsonp([14],{vUrS:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Xxa5"),s=n.n(r),a=n("exGp"),i=n.n(a),o=n("CCn6"),l=n("oFuF"),f={name:"userdetail",data:function(){return{userinfo:{}}},mounted:function(){var e=this.$route.params.id;this.obtainUserDetail(e)},methods:{obtainUserDetail:function(){var e=i()(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.v)(t);case 2:0==(n=e.sent).code&&(n.data.createdTime=l.formatDate(n.data.createdTime,!0),this.userinfo=n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),onSubmit:function(){console.log("submit!")}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{attrs:{"label-width":"80px"}},[n("el-form-item",{attrs:{label:"用户姓名"}},[e._v("\n    "+e._s(e.userinfo.nickname)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"用户头像"}},[n("img",{staticClass:"user_pic",attrs:{src:e.userinfo.headPortrait}})]),e._v(" "),n("el-form-item",{attrs:{label:"用户标识"}},[e._v("\n    "+e._s(0==e.userinfo.status?"观众":"主播")+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"等级"}},[e._v("\n    "+e._s(e.userinfo.level)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"关注数量"}},[e._v("\n    "+e._s(e.userinfo.followCount)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"粉丝数量"}},[e._v("\n    "+e._s(e.userinfo.fansCount)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"手机号"}},[e._v("\n    "+e._s(e.userinfo.phoneNumber)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"状态"}},[e._v("\n    "+e._s(1==e.userinfo.status?"可用":"不可用")+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"累积充值"}},[e._v("\n    "+e._s(e.userinfo.money)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"成长值"}},[e._v("\n    "+e._s(e.userinfo.point)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"性别"}},[e._v("\n    "+e._s(1==e.userinfo.gender?"男":"女")+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"生日"}},[e._v("\n    "+e._s(e.userinfo.birthday)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"豆票数"}},[e._v("\n    "+e._s(e.userinfo.coin)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"总豆票数"}},[e._v("\n    "+e._s(e.userinfo.totalCoin)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"注册时间"}},[e._v("\n    "+e._s(e.userinfo.createdTime)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"所在地"}},[e._v("\n    "+e._s(e.userinfo.region)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"注册设备"}},[e._v("\n    "+e._s(e.userinfo.signInDeviceType)+"\n  ")]),e._v(" "),n("el-form-item",{attrs:{label:"个人简介"}},[e._v("\n    "+e._s(e.userinfo.profile)+"\n  ")])],1)},staticRenderFns:[]};var _=n("VU/8")(f,u,!1,function(e){n("vdEQ")},null,null);t.default=_.exports},vdEQ:function(e,t){}});