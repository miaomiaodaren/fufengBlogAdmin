webpackJsonp([5],{185:function(t,e,n){var a=n(38)(n(190),n(210),null,null,null);t.exports=a.exports},190:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(70),l=n.n(a),r=n(69),o=n.n(r);e.default={data:function(){return{tableData:[]}},methods:{getData:function(){var t=this;return o()(l.a.mark(function e(){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.getAjax("/news/newslist",{},"GET");case 3:n=e.sent,t.tableData=n.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,t,[[0,7]])}))()}},mounted:function(){this.getData()}}},210:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"news"}},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{label:"_id",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(e.row._id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.title)+"\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"内容"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.content)+"\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"类别"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.type)+"\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"发布时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                "+t._s(e.row.addtime)+"\n            ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"small"},on:{click:function(n){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(n){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.7251899a011003c859b1.js.map