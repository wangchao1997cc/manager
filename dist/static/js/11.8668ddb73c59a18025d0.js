webpackJsonp([11],{"6ybv":function(e,t){},"V7+5":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),s=a("exGp"),o=a.n(s),l=a("CCn6"),c=a("oFuF"),i={name:"feedback",data:function(){return{userData:[],pageIndex:1}},created:function(){this.obtainFeedBackData()},methods:{obtainFeedBackData:function(){var e=o()(r.a.mark(function e(){var t,a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={pageIndex:this.pageIndex,pageSize:10},e.next=3,Object(l.j)(t);case 3:0==(a=e.sent).code&&((n=a.data).rows.forEach(function(e){e.createdTime=c.formatDate(e.createdTime,!0),e.status=0==e.status?"未处理":1==e.status?"处理中":"处理完成"}),this.userData=n),console.log(111,a);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleCurrentChange:function(e){this.pageIndex=e,this.obtainFeedBackData(),console.log("当前页: "+e)},seeFeebackDetail:function(e){this.$router.push({path:"./feeddesc/"+e})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",[a("div",{staticClass:"table_content"},[a("el-table",{attrs:{data:e.userData.rows,border:""}},[a("el-table-column",{attrs:{prop:"createdTime",label:"反馈时间",width:"130"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phoneNumber",label:"手机号",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"problemDescription",label:"问题描述"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return e.seeFeebackDetail(t.row.id)}}},[e._v("查看")])]}}])})],1),e._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-size":10,layout:"total, prev, pager, next, jumper",total:e.userData.total},on:{"current-change":e.handleCurrentChange}})],1)],1)])},staticRenderFns:[]};var d=a("VU/8")(i,u,!1,function(e){a("6ybv")},null,null);t.default=d.exports}});