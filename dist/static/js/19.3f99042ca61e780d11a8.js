webpackJsonp([19],{248:function(t,i,n){function e(t){n(411)}var s=n(22)(n(335),n(466),e,"data-v-bbb79c12",null);t.exports=s.exports},335:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{activess:[1,2,3,4,8,12,16,15,14,13,9,5],st:"",st2:"",startindex:1,cjcount:12,spend:50,cycle:10,scycle:0,winer:8,winid:""}},computed:{},methods:{startcj:function(){var t=this;this.st=setInterval(function(){t.chageactive("s")},this.spend)},chageactive:function(t){var i=this;if("s"===t){if(this.scycle===this.cycle+3&&(this.winid=this.activess.findIndex(function(t,n,e){return t===i.winer}),clearInterval(this.st),this.st=setInterval(function(){i.startindex++},this.spend),setTimeout(function(){return clearInterval(i.st),i.okcj(),!1},this.spend*this.winid)),12===this.startindex)return this.cycle-this.scycle<=3&&(this.spend=this.spend+20),this.startindex=1,clearInterval(this.st),this.st=setInterval(function(){i.chageactive("s")},this.spend),this.scycle++,!1;this.startindex++}},okcj:function(){this.scycle=0,this.startindex=this.winid+1,this.sendcyle=0,this.spend=50,alert("2222222")}}}},386:function(t,i,n){i=t.exports=n(246)(!0),i.push([t.i,".choujiang[data-v-bbb79c12]{padding:.53333rem;position:relative}.choujiang ul[data-v-bbb79c12]{width:100%;background-color:#fff}.choujiang ul li[data-v-bbb79c12]{width:2.23333rem;height:2.23333rem;float:left;border:1px solid #ddd;line-height:2.23333rem}.choujiang ul li.active[data-v-bbb79c12]{background-color:red}.choujiang .isstart[data-v-bbb79c12]{width:4.46667rem;height:4.46667rem;position:absolute;top:2.76667rem;left:2.76667rem;z-index:10;background-color:#fff;border:1px solid #ddd;cursor:pointer;line-height:4.46667rem}","",{version:3,sources:["D:/allpro/mynode/myvuenode/src/components/css/choujiang.vue"],names:[],mappings:"AACA,4BACE,kBAAoB,AACpB,iBAAmB,CACpB,AACD,+BACI,WAAY,AACZ,qBAAuB,CAC1B,AACD,kCACM,iBAAkB,AAClB,kBAAmB,AACnB,WAAY,AACZ,sBAAuB,AACvB,sBAAwB,CAC7B,AACD,yCACQ,oBAA0B,CACjC,AACD,qCACI,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,eAAgB,AAChB,gBAAiB,AACjB,WAAY,AACZ,sBAAuB,AACvB,sBAAuB,AACvB,eAAgB,AAChB,sBAAwB,CAC3B",file:"choujiang.vue",sourcesContent:["\n.choujiang[data-v-bbb79c12] {\n  padding: 0.53333rem;\n  position: relative;\n}\n.choujiang ul[data-v-bbb79c12] {\n    width: 100%;\n    background-color: #fff;\n}\n.choujiang ul li[data-v-bbb79c12] {\n      width: 2.23333rem;\n      height: 2.23333rem;\n      float: left;\n      border: 1px solid #ddd;\n      line-height: 2.23333rem;\n}\n.choujiang ul li.active[data-v-bbb79c12] {\n        background-color: #ff0000;\n}\n.choujiang .isstart[data-v-bbb79c12] {\n    width: 4.46667rem;\n    height: 4.46667rem;\n    position: absolute;\n    top: 2.76667rem;\n    left: 2.76667rem;\n    z-index: 10;\n    background-color: #fff;\n    border: 1px solid #ddd;\n    cursor: pointer;\n    line-height: 4.46667rem;\n}\n"],sourceRoot:""}])},411:function(t,i,n){var e=n(386);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n(247)("3e5276fc",e,!0)},466:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"choujiang"},[n("ul",{attrs:{id:"cjmain clearfix"}},t._l(16,function(i,e){return n("li",{class:{isuse:t.activess.includes(e+1),active:i===t.activess[t.startindex-1]}},[t._v(t._s(i))])})),t._v(" "),n("div",{staticClass:"isstart",on:{click:t.startcj}},[t._v("点击开始")])])},staticRenderFns:[]}}});
//# sourceMappingURL=19.3f99042ca61e780d11a8.js.map