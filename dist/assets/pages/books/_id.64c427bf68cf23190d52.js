webpackJsonp([8],{"3qdN":function(t,a,e){var i=e("4jW/");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("530b7edb",i,!1,{sourceMap:!1})},"4jW/":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".div-image[data-v-225123a8]{position:relative;height:50vh}.imagen[data-v-225123a8]{width:100%;height:100%;position:absolute;z-index:1;background-color:#fffeee}.perro[data-v-225123a8]{margin-left:auto;margin-right:auto;width:80%}pre[data-v-225123a8]{font-family:Futura Std Condensed;line-height:2;font-size:16px;color:#000;border:none;background-color:#fefeee;white-space:pre-wrap;padding:0;word-break:keep-all}h1[data-v-225123a8]{font-size:2.747em}h3[data-v-225123a8]{font-size:.874em}h2[data-v-225123a8]{font-size:1.229em}.num-page[data-v-225123a8]{width:100%;text-align:center;font-size:20px;padding:10px}.fade-enter-active[data-v-225123a8],.fade-leave-active[data-v-225123a8]{-webkit-transition:opacity .3s;transition:opacity .3s}.fade-enter[data-v-225123a8],.fade-leave-to[data-v-225123a8]{opacity:0}.fade1-enter-active[data-v-225123a8]{-webkit-transition:opacity .2s;transition:opacity .2s}.fade1-enter[data-v-225123a8]{opacity:1}",""])},RKyI:function(t,a,e){"use strict";var i=e("wKgo");a.a={data:function(){return{book_id:null,titles:{title:null,subtitle:null},content:[],images:[],mostrarImagen:!1,pagina:0,finalCuento:!0,irPreguntas:!1,textFlag:!0}},beforeRouteEnter:function(t,a,e){i.a.collection("books").where("book_id","==",t.params.id).get().then(function(t){t.forEach(function(t){e(function(a){a.book_id=t.data().book_id,a.titles=t.data().titles,a.content=t.data().content,a.images=t.data().images})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;i.a.collection("books").where("book_id","==",this.$route.params.id).get().then(function(a){a.forEach(function(a){t.bookd_id=a.data().book_id,t.titles=a.data().titles,t.content=a.data().content,t.images=a.data().images})})},deleteBook:function(){var t=this;confirm("Estas seguro?")&&i.a.collection("books").where("book_id","==",this.$route.params.id).get().then(function(a){a.forEach(function(a){a.ref.delete(),t.$router.push("/")})})},nextPage:function(){this.textFlag=!1,this.mostrarImagen=!0;var t=this;this.pagina>=this.content.length?(this.finalCuento=!0,this.irPreguntas=!0,this.images[++this.pagina]="http://www.argbackoffice.com/wp-content/uploads/2015/08/faqs.png"):this.intervalid1=setTimeout(function(){t.mostrarImagen=!1,t.textFlag=!0,t.pagina++},3e3)}}}},gL0j:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("transition",[t.mostrarImagen?e("div",{staticClass:"div-image"},[e("img",{staticClass:"imagen",attrs:{src:t.images[t.pagina]}})]):t._e()]),e("v-container",{style:{paddingTop:0}},[e("transition",{attrs:{name:"fade"}},[t.textFlag?e("v-layout",{attrs:{row:""}},[e("v-flex",[0===t.pagina?e("div",[e("h1",[t._v(t._s(t.titles.title)+" ")]),e("h2",[t._v(t._s(t.titles.subtitle)+" ")])]):t._e(),e("pre",[t._v(t._s(t.content[t.pagina]))])])],1):t._e()],1),t.mostrarImagen?t._e():e("v-layout",{attrs:{row:""}},[t.finalCuento?e("v-flex",{attrs:{xs5:""}},[e("v-btn",{style:{backgroundColor:"#F7C122",width:"100%",padding:0,marginLeft:0,marginRight:0},attrs:{large:""},on:{click:function(a){t.pagina--}}},[e("v-icon",{attrs:{dark:"",left:""}},[t._v("arrow_back")]),t._v("\n          Atras\n        ")],1)],1):t._e(),e("v-flex",{attrs:{xs2:""}},[e("div",{staticClass:"num-page"},[t._v("\n          "+t._s(t.pagina+1)+"\n        ")])]),t.finalCuento?e("v-flex",{attrs:{xs5:""}},[e("v-btn",{style:{backgroundColor:"#62D4D4",width:"100%",padding:0,marginLeft:0,marginRight:0},attrs:{large:""},on:{click:function(a){a.preventDefault(),t.nextPage()}}},[t._v("\n          Continuar\n          "),e("v-icon",{attrs:{dark:"",right:""}},[t._v("arrow_forward")])],1)],1):t._e()],1),e("router-link",{attrs:{to:{name:"preguntas-id",params:{id:t.$route.params.id}}}},[t.irPreguntas?e("v-btn",{style:{backgroundColor:"#62D4D4",width:"100%",padding:0,marginLeft:"auto",marginRight:"auto",display:"block",textAlign:"center"},attrs:{large:""}},[t._v("\n          Ir al cuestionario\n          "),e("v-icon",{attrs:{dark:"",right:""}},[t._v("arrow_forward")])],1):t._e()],1)],1)],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};a.a=n},masj:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("RKyI"),n=e("gL0j"),o=!1;var r=function(t){o||e("3qdN")},s=e("VU/8")(i.a,n.a,!1,r,"data-v-225123a8",null);s.options.__file="pages/books/_id.vue",a.default=s.exports}});