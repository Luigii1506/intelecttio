webpackJsonp([0],{"/74D":function(t,e,r){"use strict";var s=r("yj87"),i=r("/RVm"),a=r("kVKS");e.a={data:function(){return{show:!1,alertAnimation:"fade",load:!0,elementWidth:100,selectedComponent:"app-succes-alert",numbers:[1,2,3,4,5]}},components:{appAnimation:a.a,appDangerAlert:s.a,appSuccesAlert:i.a},methods:{beforeEnter:function(t){console.log("beforeEnter"),this.elementWidth=100,t.style.width=this.elementWidth+"px"},enter:function(t,e){var r=this;console.log("enter");var s=1,i=setInterval(function(){t.style.width=r.elementWidth+10*s+"px",++s>20&&(clearInterval(i),e())},20)},afterEnter:function(t){console.log("afterEnter")},enterCancelled:function(t){console.log("enterCancelled")},beforeLeave:function(t){console.log("beforeLeave"),this.elementWidth=300,t.style.width=this.elementWidth+"px"},leave:function(t,e){var r=this;console.log("leave");var s=1,i=setInterval(function(){t.style.width=r.elementWidth-10*s+"px",++s>20&&(clearInterval(i),e())},20)},afterLeave:function(t){console.log("afterLeave")},leaveCancelled:function(t){console.log("leaveCancelled")},switchedComponents:function(){return"app-succes-alert"==this.selectedComponent?this.selectedComponent="app-danger-alert":this.selectedComponent="app-succes-alert"},addItem:function(){var t=Math.floor(Math.random()*this.numbers.length);this.numbers.splice(t,0,this.numbers.length+1)},removeItem:function(t){this.numbers.splice(t,1)}}}},"/RVm":function(t,e,r){"use strict";var s=r("0LDI"),i=r("IBoK"),a=!1;var o=function(t){a||r("OynD")},n=r("VU/8")(s.a,i.a,!1,o,null,null);n.options.__file="components/SuccesAlert.vue",e.a=n.exports},"0LDI":function(t,e,r){"use strict";e.a={}},"2pst":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},D8ag:function(t,e,r){var s=r("XYLz");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r("rjj0")("27ac6732",s,!1,{sourceMap:!1})},DxK2:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".box[data-v-0cc58eb9]{position:relative;background:#fff;height:400px;width:600px;margin:auto;display:block;border:2px solid #41b883;margin-top:8%}.vueconf-logo[data-v-0cc58eb9]{position:absolute;height:50%;width:50%;top:25%;left:25%;-webkit-animation:slideInBounce-data-v-0cc58eb9 1s 1,flip-data-v-0cc58eb9 .5s 1s 1;animation:slideInBounce-data-v-0cc58eb9 1s 1,flip-data-v-0cc58eb9 .5s 1s 1}.sun[data-v-0cc58eb9]{position:absolute;height:20%;width:30%;right:20%;top:10%}.bush[data-v-0cc58eb9]{position:absolute;height:20%;width:15%;right:18%;bottom:21%;//border:solid red 1px}.tree-left[data-v-0cc58eb9]{position:absolute;height:25%;width:20%;left:5%;bottom:25%}.growActive[data-v-0cc58eb9]{-webkit-animation:grow-data-v-0cc58eb9 .5s 1;animation:grow-data-v-0cc58eb9 .5s 1}.growShrinkActive[data-v-0cc58eb9]{-webkit-animation:growShrink-data-v-0cc58eb9 .5s 1;animation:growShrink-data-v-0cc58eb9 .5s 1}.tree-right[data-v-0cc58eb9]{position:absolute;height:30%;width:35%;left:9%;bottom:25%}@-webkit-keyframes slideInBounce-data-v-0cc58eb9{0%{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);top:-100%}70%{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);top:33%}to{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);top:25%}}@keyframes slideInBounce-data-v-0cc58eb9{0%{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);top:-100%}70%{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);top:33%}to{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);top:25%}}@-webkit-keyframes flip-data-v-0cc58eb9{0%{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes flip-data-v-0cc58eb9{0%{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes grow-data-v-0cc58eb9{0%{-webkit-transform:translatey(100%);transform:translatey(100%)}to{-webkit-transform:translatey(0);transform:translatey(0)}}@keyframes grow-data-v-0cc58eb9{0%{-webkit-transform:translatey(100%);transform:translatey(100%)}to{-webkit-transform:translatey(0);transform:translatey(0)}}@-webkit-keyframes growShrink-data-v-0cc58eb9{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:scale(1.3);transform:scale(1.3)}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:scale(1);transform:scale(1)}}@keyframes growShrink-data-v-0cc58eb9{0%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:scale(1.3);transform:scale(1.3)}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:scale(1);transform:scale(1)}}",""])},FxQC:function(t,e,r){var s=r("DxK2");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r("rjj0")("7362ef50",s,!1,{sourceMap:!1})},IBoK:function(t,e,r){"use strict";var s=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"alert alert-success"},[this._v("this is succesful!")])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},KOKr:function(t,e,r){"use strict";e.a={}},OynD:function(t,e,r){var s=r("2pst");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r("rjj0")("d8f5775c",s,!1,{sourceMap:!1})},XYLz:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".fade-enter{opacity:0}.fade-enter-active{-webkit-transition:opacity 1s;transition:opacity 1s}.fade-leave-active{-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.slide-enter{opacity:0}.slide-enter-active{-webkit-animation:slide-in 1s ease-out forwards;animation:slide-in 1s ease-out forwards;-webkit-transition:opacity .5s;transition:opacity .5s}.slide-leave-active{-webkit-animation:slide-out 1s ease-out forwards;animation:slide-out 1s ease-out forwards;-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0;position:absolute}.slide-move{-webkit-transition:-webkit-transform 1s;transition:-webkit-transform 1s;transition:transform 1s;transition:transform 1s,-webkit-transform 1s}@-webkit-keyframes slide-in{0%{-webkit-transform:translateY(20px);transform:translateY(20px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes slide-in{0%{-webkit-transform:translateY(20px);transform:translateY(20px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes slide-out{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(20px);transform:translateY(20px)}}@keyframes slide-out{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(20px);transform:translateY(20px)}}",""])},eQMi:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"box"},[t.showSun?r("svg",{class:t.sunClass,staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.41421"},attrs:{viewBox:"0 0 89 87",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve"}},[r("g",{attrs:{id:"Sun"}},[r("ellipse",{staticStyle:{fill:"#41b883"},attrs:{id:"Sun-Circle-White",cx:"44.28",cy:"43.2",rx:"44.28",ry:"43.2"}}),r("ellipse",{staticStyle:{fill:"#fff"},attrs:{id:"Sun-Circle-Green",cx:"44.28",cy:"43.2",rx:"26.88",ry:"26.224"}})])]):t._e(),r("svg",{staticClass:"bush",staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.41421"},attrs:{viewBox:"-5 -20 70 100",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve"}},[r("g",{attrs:{id:"Bush"}},[t.showBushCircleLeft?r("ellipse",{class:t.bushCircleLeftClass,staticStyle:{fill:"#41b883"},attrs:{id:"Bush-Circle-Left",cx:"29.4",cy:"28.32",rx:"29.4",ry:"28.32"}}):t._e(),t.showBushCircleRight?r("ellipse",{class:t.bushCircleRightClass,staticStyle:{fill:"#41b883"},attrs:{id:"Bush-Circle-Right",cx:"58.8",cy:"38.76",rx:"18.562",ry:"17.88"}}):t._e()])]),r("svg",{staticClass:"tree-left",staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.41421"},attrs:{viewBox:"0 -10 77 147",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve"}},[r("g",{attrs:{id:"Tree-Left"}},[t.showTreeLeftBase?r("rect",{class:t.treeLeftBaseClass,staticStyle:{fill:"#35495e"},attrs:{id:"Tree-Left-Base",x:"33.171",y:"42.234",width:"10.32",height:"104.766"}}):t._e(),t.showTreeLeftCircleBottom?r("ellipse",{class:t.treeLeftCircleBottomClass,staticStyle:{fill:"#41b883"},attrs:{id:"Tree-Left-Circle-Bottom",cx:"38.331",cy:"59.367",rx:"38.331",ry:"36.122"}}):t._e(),t.showTreeLeftCircleTop?r("ellipse",{class:t.treeLeftCircleTopClass,staticStyle:{fill:"#41b883"},attrs:{id:"Tree-Left-Circle-Top",cx:"38.331",cy:"23.245",rx:"24.666",ry:"23.245"}}):t._e()])]),r("svg",{staticClass:"tree-right",staticStyle:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.41421"},attrs:{viewBox:"0 -16 110 171",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve"}},[r("g",{attrs:{id:"Tree-Right"}},[t.showTreeRightBase?r("rect",{class:t.treeRightBaseClass,staticStyle:{fill:"#35495e"},attrs:{id:"Tree-Right-Base",x:"49.615",y:"54.96",width:"10.32",height:"115.2"}}):t._e(),t.showTreeRightCircle?r("ellipse",{class:t.treeRightCircleClass,staticStyle:{fill:"#41b883"},attrs:{id:"Tree-Right-Circle",cx:"54.775",cy:"56.76",rx:"54.775",ry:"56.76"}}):t._e()])])])])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},kVKS:function(t,e,r){"use strict";var s=r("zmzl"),i=r("eQMi"),a=!1;var o=function(t){a||r("FxQC")},n=r("VU/8")(s.a,i.a,!1,o,"data-v-0cc58eb9",null);n.options.__file="components/Animation.vue",e.a=n.exports},npBV:function(t,e,r){var s=r("o5jI");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);r("rjj0")("02d69f3d",s,!1,{sourceMap:!1})},o5jI:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},qE56:function(t,e,r){"use strict";var s=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"alert alert-danger"},[this._v("this is dangerous!")])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},rEPx:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("/74D"),i=r("yOKH"),a=!1;var o=function(t){a||r("D8ag")},n=r("VU/8")(s.a,i.a,!1,o,null,null);n.options.__file="pages/animation.vue",e.default=n.exports},yOKH:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"},[r("h1",[t._v("Animations")]),r("hr"),r("select",{directives:[{name:"model",rawName:"v-model",value:t.alertAnimation,expression:"alertAnimation"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.alertAnimation=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"fade"}},[t._v("Fase")]),r("option",{attrs:{value:"slide"}},[t._v("Slide")])]),r("br"),r("br"),r("button",{staticClass:"btn btn-primary",on:{click:function(e){t.show=!t.show}}},[t._v("Show alert")]),r("br"),r("br"),r("transition",{attrs:{name:t.alertAnimation}},[t.show?r("div",{staticClass:"alert alert-info"},[t._v("This is some Info")]):t._e()]),r("transition",{attrs:{name:"slide",type:"animation"}},[t.show?r("div",{staticClass:"alert alert-info"},[t._v("This is some Info")]):t._e()]),r("transition",{attrs:{"enter-active-class":"animated bounce",appear:"","leave-active-class":"animated shake"}},[t.show?r("div",{staticClass:"alert alert-info"},[t._v("This is some Info")]):t._e()]),r("hr"),r("button",{staticClass:"btn btn-primary",on:{click:function(e){t.load=!t.load}}},[t._v("Load / Remove element")]),r("br"),r("br"),r("transition",{attrs:{css:!1},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"enter-cancelled":t.enterCancelled,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave,"leave-cancelled":t.leaveCancelled}},[t.load?r("div",{staticStyle:{width:"300px",height:"100px","background-color":"lightgreen"}}):t._e()]),r("hr"),r("button",{staticClass:"btn btn-primary",on:{click:t.switchedComponents}},[t._v("Toogle components")]),r("br"),r("br"),r("transition",{attrs:{name:"fade",mode:"out-in"}},[r(t.selectedComponent,{tag:"component"})],1),r("hr"),r("button",{staticClass:"btn btn-primary",on:{click:t.addItem}},[t._v("Add Item")]),r("br"),r("br"),r("ul",{staticClass:"list-group"},[r("transition-group",{attrs:{name:"slide"}},t._l(t.numbers,function(e,s){return r("li",{key:s,staticClass:"list-group-item",staticStyle:{cursor:"pointer"},on:{click:function(e){t.removeItem(s)}}},[t._v(t._s(e))])}))],1),t.show?r("app-animation"):t._e()],1)])])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},yj87:function(t,e,r){"use strict";var s=r("KOKr"),i=r("qE56"),a=!1;var o=function(t){a||r("npBV")},n=r("VU/8")(s.a,i.a,!1,o,null,null);n.options.__file="components/DangerAlert.vue",e.a=n.exports},zmzl:function(t,e,r){"use strict";e.a={data:function(){return{showTreeLeftBase:!1,showTreeLeftCircleBottom:!1,showTreeLeftCircleTop:!1,treeLeftBaseClass:"",treeLeftCircleBottomClass:"",treeLeftCircleTopClass:"",showTreeRightBase:!1,showTreeRightCircle:!1,treeRightBaseClass:"",treeRightCircleClass:"",showBushCircleLeft:"",showBushCircleRight:"",bushCircleLeftClass:"",bushCircleRightClass:"",showSun:!1,sunClass:"sun"}},methods:{toggleTreeLeftBase:function(){var t=this;this.showTreeLeftBase=!0,this.treeLeftBaseClass="growActive",setTimeout(function(){t.toggleTreeLeftCircleBottom(),t.toggleTreeRightBase(),t.toggleBushCircleLeft()},500)},toggleTreeLeftCircleBottom:function(){var t=this;this.showTreeLeftCircleBottom=!0,this.treeLeftCircleBottomClass="growShrinkActive",setTimeout(function(){t.toggleTreeLeftCircleTop()},500)},toggleTreeLeftCircleTop:function(){this.showTreeLeftCircleTop=!0,this.treeLeftCircleTopClass="growShrinkActive"},toggleTreeRightBase:function(){var t=this;this.showTreeRightBase=!0,this.treeRightBaseClass="growShrinkActive",setTimeout(function(){t.toggleTreeRightCircle()},500)},toggleTreeRightCircle:function(){var t=this;this.showTreeRightCircle=!0,this.treeRightCircleClass="growShrinkActive",setTimeout(function(){t.toggleSun()},250)},toggleBushCircleLeft:function(){var t=this;this.showBushCircleLeft=!0,this.bushCircleLeftClass="growShrinkActive",setTimeout(function(){t.toggleBushCircleRight()},250)},toggleBushCircleRight:function(){this.showBushCircleRight=!0,this.bushCircleRightClass="growShrinkActive"},toggleSun:function(){this.showSun=!0,this.sunClass="sun growShrinkActive"}},created:function(){var t=this;setTimeout(function(){t.toggleTreeLeftBase()},2e3)}}}});