webpackJsonp([18],{235:function(t,e,n){var s=n(23)(n(281),n(346),null,null,null);t.exports=s.exports},281:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(79),r=n.n(s),i=n(78),o=n.n(i);e.default={data:function(){return{id:this.$route.params.id,zlist:""}},methods:{getZlist:function(t){var e=this;return o()(r.a.mark(function n(){var s;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.getAjax("/books/getZlist",{id:t},"POST");case 3:s=n.sent,console.log(s),e.zlist=s.data,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}},n,e,[[0,8]])}))()}},mounted:function(){this.getZlist(this.id)}}},346:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bookzlist"}},[n("h2",[t._v(t._s(t.zlist.title))]),t._v(" "),n("p",[n("span",[t._v(t._s(t.zlist.author))])]),t._v(" "),n("p",[n("span",{domProps:{innerHTML:t._s(t.zlist.jianjie)}})]),t._v(" "),n("el-row",t._l(t.zlist.zview,function(e,s){return n("el-col",{key:s,attrs:{span:4}},[n("div",{staticClass:"grid-content bg-purple"},[n("router-link",{attrs:{to:{path:"/books/bookcontent/"+e.id+"/"+t.id}}},[t._v(t._s(e.title)+" ")])],1)])}))],1)},staticRenderFns:[]}}});
//# sourceMappingURL=18.f5312b407a11ed948572.js.map