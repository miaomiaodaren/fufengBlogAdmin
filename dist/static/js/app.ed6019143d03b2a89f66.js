webpackJsonp([20],{123:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),i=n.n(o),r=n(2),a=n(76),u=n.n(a),s=n(41),c=n(42),l=n.n(c),h=n(74),f=(n.n(h),n(72)),p=n(71),d=n(73),m=n(77),v=n.n(m),b=(n(50),n(75));n.n(b);r.default.prototype.getAjax=f.a,r.default.use(l.a),r.default.use(v.a),r.default.config.productionTip=!1,i()(p).forEach(function(t){r.default.filter(t,p[t])}),r.default.prototype.onlyid=1,new r.default({el:"#app",router:s.a,store:d.a,template:"<App/>",components:{App:u.a}})},124:function(t,e,n){"use strict";var o=function(t){return n.e(0).then(function(){var e=[n(43)];t.apply(null,e)}.bind(this)).catch(n.oe)},i=function(t){return n.e(3).then(function(){var e=[n(230)];t.apply(null,e)}.bind(this)).catch(n.oe)};e.a={path:"/admin",name:"后台登录",component:o,redirect:"/admin/index",children:[{path:"index",name:"后台首页",components:{page:i}},{path:"login",name:"后台登录",components:{page:i}}]}},125:function(t,e,n){"use strict";var o=function(t){return n.e(0).then(function(){var e=[n(43)];t.apply(null,e)}.bind(this)).catch(n.oe)},i=function(t){return n.e(1).then(function(){var e=[n(82)];t.apply(null,e)}.bind(this)).catch(n.oe)},r=function(t){return n.e(2).then(function(){var e=[n(81)];t.apply(null,e)}.bind(this)).catch(n.oe)},a=function(t){return n.e(7).then(function(){var e=[n(223)];t.apply(null,e)}.bind(this)).catch(n.oe)},u=function(t){return n.e(11).then(function(){var e=[n(224)];t.apply(null,e)}.bind(this)).catch(n.oe)},s=function(t){return n.e(6).then(function(){var e=[n(226)];t.apply(null,e)}.bind(this)).catch(n.oe)};e.a={path:"/css",name:"css样式收集",component:o,redirect:"/css/index",children:[{path:"index",name:"css汇总",components:{page:i}},{path:"cj1",name:"抽奖转盘",components:{page:r}},{path:"flextop",name:"Sticky header",components:{page:a}},{path:"tabnav",name:"左侧切入",components:{page:u}},{path:"upload",name:"上拉刷新",components:{page:s}}]}},126:function(t,e){},127:function(t,e){},128:function(t,e,n){"use strict";var o=(n(2),{state:{keys:!1},mutations:{closekeys:function(t){t.keys=!1}},actions:{closekeys:function(t){(0,t.commit)("closekeys")}}});e.a=o},129:function(t,e,n){"use strict";var o=n(133),i=n.n(o),r=(n(2),{state:{users:JSON.parse(sessionStorage.getItem("user"))||""},mutations:{LoginSuccess:function(t,e){sessionStorage.setItem("user",i()(e)),object.assign(t.users,e)}},actions:{LoginSuccess:function(t,e){(0,t.commit)("LoginSuccess",e)}}});e.a=r},130:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(200),n(198),n(199),window.Quill||(window.Quill=n(69)),e.default={name:"quill-editor",data:function(){return{_content:"",defaultModules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]}}},props:{content:String,value:String,disabled:Boolean,options:{type:Object,required:!1,default:function(){return{}}}},mounted:function(){this.initialize()},beforeDestroy:function(){this.quill=null},methods:{initialize:function(){if(this.$el){var t=this;t.options.theme=t.options.theme||"snow",t.options.boundary=t.options.boundary||document.body,t.options.modules=t.options.modules||t.defaultModules,t.options.modules.toolbar=void 0!==t.options.modules.toolbar?t.options.modules.toolbar:t.defaultModules.toolbar,t.options.placeholder=t.options.placeholder||"Insert text here ...",t.options.readOnly=void 0!==t.options.readOnly&&t.options.readOnly,t.quill=new Quill(t.$refs.editor,t.options),(t.value||t.content)&&t.quill.pasteHTML(t.value||t.content),t.quill.on("selection-change",function(e){e?t.$emit("focus",t.quill):t.$emit("blur",t.quill)}),t.quill.on("text-change",function(e,n,o){var i=t.$refs.editor.children[0].innerHTML,r=t.quill.getText();"<p><br></p>"===i&&(i=""),t._content=i,t.$emit("input",t._content),t.$emit("change",{editor:t.quill,html:i,text:r})}),this.disabled&&this.quill.enable(!1),t.$emit("ready",t.quill)}}},watch:{content:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(""))},value:function(t,e){this.quill&&(t&&t!==this._content?(this._content=t,this.quill.pasteHTML(t)):t||this.quill.setText(""))},disabled:function(t,e){this.quill&&this.quill.enable(!t)}}}},131:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{}}}},132:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},198:function(t,e){},199:function(t,e){},200:function(t,e){},201:function(t,e){},202:function(t,e){},203:function(t,e){},213:function(t,e,n){function o(t){n(201)}var i=n(23)(n(132),n(215),o,"data-v-6dcb9d2c",null);t.exports=i.exports},214:function(t,e,n){function o(t){n(203)}var i=n(23)(n(130),n(217),o,null,null);t.exports=i.exports},215:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}},216:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},217:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quill-editor"},[t._t("toolbar"),t._v(" "),n("div",{ref:"editor"})],2)},staticRenderFns:[]}},41:function(t,e,n){"use strict";var o=n(2),i=n(218),r=n(213),a=(n.n(r),n(126)),u=(n.n(a),n(125)),s=n(124),c=function(t){return n.e(5).then(function(){var e=[n(227)];t.apply(null,e)}.bind(this)).catch(n.oe)},l=function(t){return n.e(0).then(function(){var e=[n(43)];t.apply(null,e)}.bind(this)).catch(n.oe)},h=function(t){return n.e(4).then(function(){var e=[n(228)];t.apply(null,e)}.bind(this)).catch(n.oe)},f=function(t){return n.e(13).then(function(){var e=[n(238)];t.apply(null,e)}.bind(this)).catch(n.oe)},p=function(t){return n.e(14).then(function(){var e=[n(237)];t.apply(null,e)}.bind(this)).catch(n.oe)},d=function(t){return n.e(12).then(function(){var e=[n(229)];t.apply(null,e)}.bind(this)).catch(n.oe)},m=function(t){return n.e(9).then(function(){var e=[n(235)];t.apply(null,e)}.bind(this)).catch(n.oe)},v=function(t){return n.e(10).then(function(){var e=[n(232)];t.apply(null,e)}.bind(this)).catch(n.oe)},b=function(t){return n.e(16).then(function(){var e=[n(233)];t.apply(null,e)}.bind(this)).catch(n.oe)},g=function(t){return n.e(15).then(function(){var e=[n(231)];t.apply(null,e)}.bind(this)).catch(n.oe)},y=function(t){return n.e(18).then(function(){var e=[n(234)];t.apply(null,e)}.bind(this)).catch(n.oe)},_=function(t){return n.e(8).then(function(){var e=[n(236)];t.apply(null,e)}.bind(this)).catch(n.oe)},x=function(t){return n.e(17).then(function(){var e=[n(225)];t.apply(null,e)}.bind(this)).catch(n.oe)};o.default.use(i.a),e.a=new i.a({routes:[{path:"/",name:"首页",component:c},{path:"/login",name:"登录",component:h},{path:"/userlist",name:"用户列表",component:f},{path:"/typeinfo",name:"类表列表",component:p},{path:"/addnews",name:"增加文章",component:d},{path:"/news",name:"文章列表",component:m},{path:"/question/:id",name:"文章详情",component:_},{path:"/books",name:"书城",component:l,redirect:"/books/index",children:[{path:"index",name:"书名",components:{page:v}},{path:"bookzlist/:id",name:"小说章节",components:{page:b}},{path:"bookcontent/:id/:_id",name:"小说内容",components:{page:g}}]},{path:"/music",name:"聊天室",component:l,redirect:"/music/index",children:[{path:"index",name:"聊天室",components:{page:y}}]},u.a,{path:"/outexcel",name:"导出excel",component:x},s.a]})},50:function(t,e,n){"use strict";var o=n(80),i=n.n(o),r=n(24),a=n.n(r),u=n(135),s=n.n(u),c=n(136),l=n.n(c),h=function(){function t(e){s()(this,t);var n=this;return this.NowTime=e||new Date,this.defftime=0,this.timeformt={y:31536e3,M:2678400,d:86400,H:3600,m:60,s:1},function(t){return n.NowTime=t?n.isNumber(t)?n.timestamp(t):t:new Date,n}}return l()(t,[{key:"each",value:function(t,e){if(!t)return[];var n=t.length,o=a()(t);if("[object Array]"===Object.prototype.toString.call(t))for(var i=0;i<n;i++)e(t[i],o[i],i,t);else for(var r=0;r<n;r++)e(t[r],o[r],r,t);return t}},{key:"getoftype",value:function(t,e){if(!t)return"";var n=e||this;return new Date(n)["get"+t]()}},{key:"isDate",value:function(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}},{key:"isNumber",value:function(t){return"[objcet Number]"===Object.prototype.toString.call(t)}},{key:"add",value:function(t,e){if(this.timeformt[e])return this.NowTime=this.timestamp(this.cfordate(this.NowTime)+Number(this.timeformt[e]*t)),this;alert("22")}},{key:"subtract",value:function(t,e){if(this.timeformt[e])return this.NowTime=this.timestamp(this.cfordate(this.NowTime)-Number(this.timeformt[e]*t)),this}},{key:"tiemrdeff",value:function(t,e){var n=arguments.length;i()(this.timeformt);console.info(this);var o=1===n?Math.abs(this.cfordate(t)-this.cfordate(this.NowTime)):this.cfordate(e)-this.cfordate(t);return this.defftime=o,this}},{key:"deffmart",value:function(t){var e=this.defftime,n=this.timeformt,o=t;if(e){var r=["年","月","日","时","分","秒"],a={y:Math.floor(e/n.y),M:Math.floor(e/n.M),d:Math.floor(e/n.d),H:Math.floor(e/n.H),h:Math.floor(e/n.h),m:Math.floor(e/n.m),s:Math.floor(e/n.s)};if(t)for(var u in a)if(t.length>1){i()(n);new RegExp("("+u+")").test(t)&&(o=o.replace(RegExp.$1,Math.floor(e/n[u])),e-=Number(n[u])*Math.floor(e/n[u]))}else new RegExp("("+u+")").test(t)&&(o=o.replace(RegExp.$1,Math.floor(e/n[u])));else r.forEach(function(t,a){var u=i()(n);o+=Math.floor(e/u[a])+r[a],e-=Number(u[a])*Math.floor(e/u[a])});return o}}},{key:"cfordate",value:function(t){return Number(Date.parse(t)/1e3)}},{key:"timestamp",value:function(t,e){return t?e?new Date(1e3*parseInt(t)).toLocaleString().replace(/:\d{1,2}$/," "):new Date(1e3*parseInt(t)):this}},{key:"formart",value:function(t,e){var n=Number(e)?this.timestamp(e):e,o=e?this.getoftype.bind(n):this.getoftype.bind(this.NowTime),i={"M+":o("Month")+1,"d+":o("Date"),"h+":o("Hours")%12==0?12:o("Hours")%12,"H+":o("Hours"),"m+":o("Minutes"),"s+":o("Seconds"),"q+":Math.floor((o("Month")+3)/3),S:o("Milliseconds")},r={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(o("FullYear")+"").substr(4-RegExp.$1.length))),/(E+)/.test(t)&&(t=t.replace(RegExp.$1,(RegExp.$1.length>1?RegExp.$1.length>2?"星期":"周":"")+r[o("Day")+""]));for(var a in i)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[a]:("00"+i[a]).substr((""+i[a]).length)));return t}}]),t}(),f=new h;e.a=f},71:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"timeFormat",function(){return o});var o=function(t,e){if(null==t)return"";if(!t)return"0000-00-00 00:00:00";var n=new Date;n.setTime(1e3*t);var o=n.getFullYear(),i=n.getMonth()+1,r=n.getDate(),a=n.getHours(),u=n.getMinutes(),s=n.getSeconds();return 1==e?o+"-"+(i<10?"0"+i:i)+"-"+(r<10?"0"+r:r):2==e?(a<10?"0"+a:a)+": "+(u<10?"0"+u:u)+": "+(s<10?"0"+s:s):o+"-"+(i<10?"0"+i:i)+"-"+(r<10?"0"+r:r)+" "+(a<10?"0"+a:a)+": "+(u<10?"0"+u:u)+": "+(s<10?"0"+s:s)}},72:function(t,e,n){"use strict";var o=n(79),i=n.n(o),r=n(78),a=n.n(r),u=n(51),s=n.n(u),c=n(104),l=n.n(c),h=(n(41),n(209)),f=n.n(h),p=n(42);n.n(p);l.a.defaults.withCredentials=!0;var d=l.a.create({headers:{"Content-Type":"application/x-www-form-urlencoded"},timeout:3e5});d.interceptors.request.use(function(t){return console.log(f.a),t},function(t){return s.a.reject(t)});var m=function(){var t=a()(i.a.mark(function t(e,n,o){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d({url:""+e,method:o,data:f.a.stringify(n)});case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}},t,this,[[0,6]])}));return function(e,n,o){return t.apply(this,arguments)}}();e.a=m},73:function(t,e,n){"use strict";var o=n(2),i=n(220),r=n(128),a=n(129),u=n(127),s=n.n(u);o.default.use(i.a);var c=new i.a.Store({modules:{keys:r.a,users:a.a},getters:s.a});e.a=c},74:function(t,e){},75:function(t,e){},76:function(t,e,n){function o(t){n(202)}var i=n(23)(n(131),n(216),o,"data-v-71b0a59e",null);t.exports=i.exports}},[123]);
//# sourceMappingURL=app.ed6019143d03b2a89f66.js.map