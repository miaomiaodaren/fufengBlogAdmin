webpackJsonp([6],{186:function(t,n,e){function o(t){e(259)}var a=e(38)(e(243),e(267),o,"data-v-290ffc82",null);t.exports=a.exports},243:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(70),a=e.n(o),s=e(69),c=e.n(s);n.default={data:function(){return{type:this.$route.params,aa:{}}},methods:{getData:function(t,n){var e=this;return c()(a.a.mark(function o(){var s;return a.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,e.getAjax("/books/showcontent",{id:t,_id:n},"POST");case 3:s=o.sent,e.aa=s.data[0],console.log(e.aa),o.next=11;break;case 8:o.prev=8,o.t0=o.catch(0),console.log(o.t0);case 11:case"end":return o.stop()}},o,e,[[0,8]])}))()},gozlist:function(){this.$router.push({path:"/books/bookzlist/"+this.type._id})}},created:function(){this.getData(this.type.id,this.type._id)}}},252:function(t,n,e){n=t.exports=e(180)(!0),n.push([t.i,"#bookcontent .xscon[data-v-290ffc82]{width:1200px;margin:0 auto;text-align:left}#bookcontent .lc[data-v-290ffc82]{height:50px}#bookcontent .lc span[data-v-290ffc82]{padding:0 50px;cursor:pointer}","",{version:3,sources:["E:/allpro/fufengBlog/src/pages/bookcontent.vue"],names:[],mappings:"AACA,qCACE,aAAc,AACd,cAAe,AACf,eAAiB,CAClB,AACD,kCACE,WAAa,CACd,AACD,uCACI,eAAgB,AAChB,cAAgB,CACnB",file:"bookcontent.vue",sourcesContent:["\n#bookcontent .xscon[data-v-290ffc82] {\n  width: 1200px;\n  margin: 0 auto;\n  text-align: left;\n}\n#bookcontent .lc[data-v-290ffc82] {\n  height: 50px;\n}\n#bookcontent .lc span[data-v-290ffc82] {\n    padding: 0 50px;\n    cursor: pointer;\n}\n"],sourceRoot:""}])},259:function(t,n,e){var o=e(252);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(181)("826a81ee",o,!0)},267:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"bookcontent"}},[t.aa.zview?e("h2",[t._v(t._s(t.aa.zview.title))]):t._e(),t._v(" "),e("div",{staticClass:"lc"},[e("span",[t._v("上一章")]),e("span",{on:{click:t.gozlist}},[t._v("返回目录")]),e("span",[t._v("下一章")])]),t._v(" "),t.aa.zview?e("div",{staticClass:"xscon",domProps:{innerHTML:t._s(t.aa.zview.content)}}):t._e()])},staticRenderFns:[]}}});
//# sourceMappingURL=6.dc340acd29ece622984a.js.map