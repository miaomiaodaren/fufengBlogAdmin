webpackJsonp([1],{283:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{cjcon:[{index:0,text:"耳机",name:"icono-headphone"},{index:1,text:"iPhone",name:"icono-iphone"},{index:2,text:"相机",name:"icono-camera"},{index:3,text:"咖啡杯",name:"icono-cup"},{index:4,text:"日历",name:"icono-calendar"},{index:5,text:"键盘",name:"icono-keyboard"},{index:6,text:"卫生巾",name:"icono-wsj"}],lineListHtml:[],itemListHtml:[],cjcount:0}},computed:{turnNum:function(){return 1/this.cjcon.length}},methods:{startCJ:function(){var e=this.cjcon.length,n=360-360/e*2;this.cjcount++,document.getElementById("choujiang").querySelector(".gb-wheel-content").style="transform: rotate("+(n+1800)*this.cjcount+"deg)"}},mounted:function(){}}},309:function(e,n,t){n=e.exports=t(214)(!0),n.push([e.i,'.gb-wheel-container li,.gb-wheel-container p,.gb-wheel-container ul{margin:0;padding:0}.gb-wheel-container li{list-style:none}.gb-wheel-container{margin:0 auto;position:relative;width:8rem;height:8rem;border-radius:50%;-webkit-box-shadow:0 2px 3px #333,0 0 2px #000;box-shadow:0 2px 3px #333,0 0 2px #000;overflow:hidden}.gb-wheel-content{left:.26667rem;top:.26667rem;z-index:2;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:inherit;background-clip:padding-box;background:radial-gradient(hsla(0,0%,39%,.1) 15%,transparent 16%) 0 0,radial-gradient(hsla(0,0%,39%,.1) 15%,transparent 16%) 8px 8px,radial-gradient(hsla(0,0%,100%,.1) 15%,transparent 20%) 0 1px,radial-gradient(hsla(0,0%,100%,.1) 15%,transparent 20%) 8px 9px;background-color:#ffcb3f;background-size:.32rem .37333rem}.gb-wheel-content,.gb-wheel-content:before{position:absolute;width:7.46667rem;height:7.46667rem}.gb-wheel-content:before{content:" ";left:-.26667rem;top:-.26667rem;z-index:-1;border-radius:inherit;-webkit-box-sizing:content-box;box-sizing:content-box;border:.26667rem solid #e44025;-webkit-box-shadow:0 0 2px 2px rgba(0,0,0,.2) inset;box-shadow:inset 0 0 2px 2px rgba(0,0,0,.2)}.gb-wheel-list{width:inherit;height:inherit;z-index:9999}.gb-wheel-item,.gb-wheel-list{position:absolute;left:0;top:0}.gb-wheel-item{width:100%;height:100%;color:#e4370e;font-weight:700;text-shadow:0 1px 1px hsla(0,0%,100%,.6)}.gb-wheel-icontent{position:relative;display:block;padding-top:.4rem;margin:0 auto;text-align:center;-webkit-transform-origin:50% 3.73333rem;transform-origin:50% 3.73333rem}.gb-wheel-itext{@includes font-dpr(20);font-weight:lighter}.gb-wheel-iicon [class*=icono-]{color:#e4370e}.gb-wheel-line{position:absolute;left:0;top:0;width:inherit;height:inherit;z-index:99}.gb-wheel-litem{position:absolute;left:3.73333rem;top:0;width:1px;height:3.73333rem;background-color:rgba(228,55,14,.6);overflow:hidden;-webkit-transform-origin:50% 3.73333rem;transform-origin:50% 3.73333rem}.gb-wheel-btn{position:absolute;left:2.93333rem;top:2.93333rem;z-index:400;width:2.13333rem;height:2.13333rem;border-radius:50%;color:#f4e9cc;background-color:#e44025;line-height:2.13333rem;text-align:center;font-size:.53333rem;text-shadow:0 -1px 1px rgba(0,0,0,.6);-webkit-box-shadow:0 3px 5px rgba(0,0,0,.6),0 0 5px 4px rgba(0,0,0,.2) inset;box-shadow:0 3px 5px rgba(0,0,0,.6),inset 0 0 5px 4px rgba(0,0,0,.2);text-decoration:none}p.gb-wheel-btn{border-bottom:none}.gb-wheel-btn:after{position:absolute;content:"";left:.66667rem;top:-.26667rem;width:.8rem;height:.8rem;background-color:#e44025;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-box-shadow:0 3px 5px rgba(0,0,0,.6),0 0 5px 4px rgba(0,0,0,.2) inset;box-shadow:0 3px 5px rgba(0,0,0,.6),inset 0 0 5px 4px rgba(0,0,0,.2)}.gb-wheel-btn.disabled,.gb-wheel-btn.disabled:after{pointer-events:none;background:#b07a7b;color:#ccc}.gb-wheel-run{-webkit-transition:transform 6s ease;-webkit-transition:-webkit-transform 6s ease;transition:-webkit-transform 6s ease;transition:transform 6s ease;transition:transform 6s ease,-webkit-transform 6s ease}',"",{version:3,sources:["D:/allpro/mynode/myvuenode/src/pages/choujiang1.vue"],names:[],mappings:"AACA,oEAGE,SAAU,AACV,SAAW,CACZ,AACD,uBACE,eAAiB,CAClB,AACD,oBACE,cAAe,AACf,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,+CAAiD,AACzC,uCAAyC,AACjD,eAAiB,CAClB,AACD,kBAEE,eAAiB,AACjB,cAAgB,AAChB,UAAW,AAGX,8BAA+B,AACvB,sBAAuB,AAC/B,sBAAuB,AACvB,4BAA6B,AAC7B,mQAAqS,AACrS,yBAA0B,AAC1B,gCAAoC,CACrC,AACD,2CAdE,kBAAmB,AAInB,iBAAkB,AAClB,iBAAmB,CAuBpB,AAdD,yBACE,YAAa,AAEb,gBAAkB,AAClB,eAAiB,AACjB,WAAY,AAGZ,sBAAuB,AACvB,+BAAgC,AACxB,uBAAwB,AAChC,+BAAiC,AACjC,oDAAyD,AACjD,2CAAiD,CAC1D,AACD,eAIE,cAAe,AACf,eAAgB,AAChB,YAAc,CACf,AACD,8BAPE,kBAAmB,AACnB,OAAQ,AACR,KAAO,CAcR,AATD,eAIE,WAAY,AACZ,YAAa,AACb,cAAe,AACf,gBAAkB,AAClB,wCAAgD,CACjD,AACD,mBACE,kBAAmB,AACnB,cAAe,AACf,kBAAoB,AACpB,cAAe,AACf,kBAAmB,AACnB,wCAAyC,AACzC,+BAAiC,CAClC,AACD,gBACA,uBAAuB,AACrB,mBAAqB,CACtB,AACD,gCACE,aAAe,CAChB,AACD,eACE,kBAAmB,AACnB,OAAQ,AACR,MAAO,AACP,cAAe,AACf,eAAgB,AAChB,UAAY,CACb,AACD,gBACE,kBAAmB,AACnB,gBAAiB,AACjB,MAAO,AACP,UAAW,AACX,kBAAmB,AACnB,oCAAyC,AACzC,gBAAiB,AACjB,wCAAyC,AACzC,+BAAiC,CAClC,AACD,cACE,kBAAmB,AACnB,gBAAiB,AACjB,eAAgB,AAChB,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,cAAe,AACf,yBAA0B,AAC1B,uBAAwB,AACxB,kBAAmB,AACnB,oBAAsB,AACtB,sCAA2C,AAC3C,6EAAuF,AAC/E,qEAA+E,AACvF,oBAAsB,CACvB,AACD,eACE,kBAAoB,CACrB,AACD,oBACE,kBAAmB,AACnB,WAAY,AACZ,eAAiB,AACjB,eAAiB,AACjB,YAAc,AACd,aAAe,AACf,yBAA0B,AAC1B,gCAAiC,AACjC,wBAAyB,AACzB,6EAAuF,AAC/E,oEAA+E,CACxF,AACD,oDAEE,oBAAqB,AACrB,mBAAoB,AACpB,UAAY,CACb,AACD,cACE,qCAAsC,AACtC,6CAA8C,AAC9C,qCAAsC,AACtC,6BAA8B,AAC9B,sDAAyD,CAC1D",file:"choujiang1.vue",sourcesContent:["\n.gb-wheel-container ul,\n.gb-wheel-container li,\n.gb-wheel-container p {\n  margin: 0;\n  padding: 0;\n}\n.gb-wheel-container li {\n  list-style: none;\n}\n.gb-wheel-container {\n  margin: 0 auto;\n  position: relative;\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 2px 3px #333, 0 0 2px #000;\n          box-shadow: 0 2px 3px #333, 0 0 2px #000;\n  overflow: hidden;\n}\n.gb-wheel-content {\n  position: absolute;\n  left: 0.26667rem;\n  top: 0.26667rem;\n  z-index: 2;\n  width: 7.46667rem;\n  height: 7.46667rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-radius: inherit;\n  background-clip: padding-box;\n  background: radial-gradient(rgba(100, 100, 100, 0.1) 15%, transparent 16%) 0 0, radial-gradient(rgba(100, 100, 100, 0.1) 15%, transparent 16%) 8px 8px, radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px, radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;\n  background-color: #ffcb3f;\n  background-size: 0.32rem 0.37333rem;\n}\n.gb-wheel-content:before {\n  content: ' ';\n  position: absolute;\n  left: -0.26667rem;\n  top: -0.26667rem;\n  z-index: -1;\n  width: 7.46667rem;\n  height: 7.46667rem;\n  border-radius: inherit;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  border: 0.26667rem solid #E44025;\n  -webkit-box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2) inset;\n          box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2) inset;\n}\n.gb-wheel-list {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: inherit;\n  height: inherit;\n  z-index: 9999;\n}\n.gb-wheel-item {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  color: #e4370e;\n  font-weight: bold;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.6);\n}\n.gb-wheel-icontent {\n  position: relative;\n  display: block;\n  padding-top: 0.4rem;\n  margin: 0 auto;\n  text-align: center;\n  -webkit-transform-origin: 50% 3.73333rem;\n  transform-origin: 50% 3.73333rem;\n}\n.gb-wheel-itext {\n@includes font-dpr(20);\n  font-weight: lighter;\n}\n.gb-wheel-iicon [class*=icono-] {\n  color: #e4370e;\n}\n.gb-wheel-line {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: inherit;\n  height: inherit;\n  z-index: 99;\n}\n.gb-wheel-litem {\n  position: absolute;\n  left: 3.73333rem;\n  top: 0;\n  width: 1px;\n  height: 3.73333rem;\n  background-color: rgba(228, 55, 14, 0.6);\n  overflow: hidden;\n  -webkit-transform-origin: 50% 3.73333rem;\n  transform-origin: 50% 3.73333rem;\n}\n.gb-wheel-btn {\n  position: absolute;\n  left: 2.93333rem;\n  top: 2.93333rem;\n  z-index: 400;\n  width: 2.13333rem;\n  height: 2.13333rem;\n  border-radius: 50%;\n  color: #F4E9CC;\n  background-color: #E44025;\n  line-height: 2.13333rem;\n  text-align: center;\n  font-size: 0.53333rem;\n  text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.6);\n  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6), 0 0 5px 4px rgba(0, 0, 0, 0.2) inset;\n          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6), 0 0 5px 4px rgba(0, 0, 0, 0.2) inset;\n  text-decoration: none;\n}\np.gb-wheel-btn {\n  border-bottom: none;\n}\n.gb-wheel-btn::after {\n  position: absolute;\n  content: '';\n  left: 0.66667rem;\n  top: -0.26667rem;\n  width: 0.8rem;\n  height: 0.8rem;\n  background-color: #E44025;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6), 0 0 5px 4px rgba(0, 0, 0, 0.2) inset;\n          box-shadow: 0 3px 5px rgba(0, 0, 0, 0.6), 0 0 5px 4px rgba(0, 0, 0, 0.2) inset;\n}\n.gb-wheel-btn.disabled,\n.gb-wheel-btn.disabled::after {\n  pointer-events: none;\n  background: #B07A7B;\n  color: #ccc;\n}\n.gb-wheel-run {\n  -webkit-transition: transform 6s ease;\n  -webkit-transition: -webkit-transform 6s ease;\n  transition: -webkit-transform 6s ease;\n  transition: transform 6s ease;\n  transition: transform 6s ease, -webkit-transform 6s ease;\n}\n"],sourceRoot:""}])},326:function(e,n,t){var A=t(309);"string"==typeof A&&(A=[[e.i,A,""]]),A.locals&&(e.exports=A.locals);t(215)("05df1061",A,!0)},372:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"choujiang"}},[t("section",{staticClass:"gb-wheel-container",attrs:{id:"gbWheel"}},[t("div",{staticClass:"gb-wheel-content gb-wheel-run"},[t("ul",{staticClass:"gb-wheel-line"},e._l(e.cjcon,function(n,A){return t("li",{staticClass:"gb-wheel-litem",style:{transform:"rotate("+(A*e.turnNum+e.turnNum/2)+"turn)"}})})),e._v(" "),t("div",{staticClass:"gb-wheel-list"},[t("div",{staticClass:"gb-wheel-item"},e._l(e.cjcon,function(n,A){return t("div",{staticClass:"gb-wheel-icontent",style:{transform:"rotate("+A*e.turnNum+"turn)"}},[t("p",{staticClass:"gb-wheel-iicon"},[t("i",{class:n.name})]),e._v(" "),t("p",{staticClass:"gb-wheel-itext"},[e._v(e._s(n.text))])])}))])]),e._v(" "),t("p",{staticClass:"gb-wheel-btn",attrs:{id:"gbLottery"},on:{click:e.startCJ}},[e._v("抽奖")])])])},staticRenderFns:[]}},82:function(e,n,t){function A(e){t(326)}var i=t(23)(t(283),t(372),A,null,null);e.exports=i.exports}});
//# sourceMappingURL=1.0a693485785d1e7e3c57.js.map