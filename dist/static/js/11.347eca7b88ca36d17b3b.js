webpackJsonp([11],{sNAB:function(e,t){},uONf:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),l=a("exGp"),o=a.n(l),s=a("CCn6"),u=a("oFuF"),i={name:"phoneapply",data:function(){return{userData:[],pageIndex:1}},created:function(){this.obtainFeedBackData()},methods:{obtainFeedBackData:function(){var e=o()(r.a.mark(function e(){var t,a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={pageIndex:this.pageIndex,pageSize:10},e.next=3,Object(s.o)(t);case 3:0==(a=e.sent).code&&(console.log(a),(n=a.data).rows.forEach(function(e){e.createdTime=u.formatDate(e.createdTime,!0),e.status=0==e.status?"提交成功":1==e.status?"审核中":2==e.status?"审核失败":"审核通过"}),this.userData=n);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleCurrentChange:function(e){this.pageIndex=e,this.obtainFeedBackData(),console.log("当前页: "+e)},seeFeebackDetail:function(e){this.$router.push({path:"./phoneapplydetail/"+e})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("div",{staticClass:"table_content"},[a("el-table",{attrs:{data:e.userData.rows,border:""}},[a("el-table-column",{attrs:{prop:"createdTime",label:"申请时间",width:"130"}}),e._v(" "),a("el-table-column",{attrs:{prop:"newPhoneNumber",label:"新手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"oldPhoneNumber",label:"老手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"loginDeviceName",label:"登录设备"}}),e._v(" "),a("el-table-column",{attrs:{prop:"loginRegion",label:"登录地区"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.seeFeebackDetail(t.row.id)}}},[e._v("查看")])]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-size":10,layout:"total, prev, pager, next, jumper",total:e.userData.total},on:{"current-change":e.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var p=a("VU/8")(i,c,!1,function(e){a("sNAB")},null,null);t.default=p.exports}});