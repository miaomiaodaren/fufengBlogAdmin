webpackJsonp([16],{263:function(t,e,a){function s(t){a(398)}var n=a(30)(a(338),a(443),s,"data-v-05050aea",null);t.exports=n.exports},338:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{tableData:[],isshow:!1,addtype:{name:"",sort:0}}},methods:{handleEdit:function(){},handleDelete:function(t,e){var a=this;this.getAjax("/types/RemoveTypes",{id:e._id},"POST").then(function(t){a.$message(t.data.message),a.GetType()})},GetType:function(){var t=this;this.getAjax("/types/GetTypes",{},"GET").then(function(e){t.tableData=e.data})},handleClose:function(){this.isshow=!1},addtypes:function(){var t=this;this.getAjax("/types/addTypes",this.addtype,"POST").then(function(e){1==e.data.code?(t.$message(e.data.message),t.isshow=!1,t.GetType()):t.$message(e.data.message)})}},mounted:function(){this.GetType()}}},364:function(t,e,a){e=t.exports=a(244)(!0),e.push([t.i,"#types .mian[data-v-05050aea]{width:1200px;margin:0 auto}#types .addstyle[data-v-05050aea]{width:250px;height:45px;display:block;text-align:center;margin:0 auto}","",{version:3,sources:["E:/allpro/fufengBlog/src/pages/types.vue"],names:[],mappings:"AACA,8BACE,aAAc,AACd,aAAe,CAChB,AACD,kCACE,YAAa,AACb,YAAa,AACb,cAAe,AACf,kBAAmB,AACnB,aAAe,CAChB",file:"types.vue",sourcesContent:["\n#types .mian[data-v-05050aea] {\n  width: 1200px;\n  margin: 0 auto;\n}\n#types .addstyle[data-v-05050aea] {\n  width: 250px;\n  height: 45px;\n  display: block;\n  text-align: center;\n  margin: 0 auto;\n}\n"],sourceRoot:""}])},398:function(t,e,a){var s=a(364);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(245)("c15e285a",s,!0)},443:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"types"}},[a("div",{staticClass:"exit"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.isshow=!0}}},[t._v("添加类别")])],1),t._v(" "),a("div",{staticClass:"main"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{label:"_id",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.$index))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"类名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.name)+"\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.isshow,size:"tiny","before-close":t.handleClose},on:{"update:visible":function(e){t.isshow=e}}},[a("span",[a("el-input",{staticClass:"addstyle",attrs:{placeholder:"请输入内容"},model:{value:t.addtype.name,callback:function(e){t.addtype.name=e},expression:"addtype.name"}})],1),t._v(" "),a("span",[a("el-input",{staticClass:"addstyle",attrs:{placeholder:"请输入排序"},model:{value:t.addtype.sort,callback:function(e){t.addtype.sort=e},expression:"addtype.sort"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.isshow=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.addtypes}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=16.43894c6fbde4e8fe4b3e.js.map