webpackJsonp([4],{"5uiE":function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,"",""])},LJ9X:function(e,t,n){"use strict";t.a={name:"PreguntaMultiple",props:["preguntas","index"],data:function(){return{resultado:0,answer:""}},methods:{check:function(e){this.answer=e,console.log(this.answer),this.answer==this.preguntas[this.index].respuesta?(console.log("correcto"),this.resultado=1):(console.log("incorrecto"),this.resultado=0),this.$emit("correcto",this.resultado)}}}},OdsX:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,'.pregunta[data-v-b565f916]{padding-left:10px}.container[data-v-b565f916],.pregunta[data-v-b565f916]{display:block;position:relative;margin-bottom:6px;cursor:pointer;font-size:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container[data-v-b565f916]{padding-left:35px}.container input[data-v-b565f916]{position:absolute;opacity:0}.checkmark[data-v-b565f916]{position:absolute;top:5;left:0;height:20px;width:20px;background-color:#eee;border-radius:50%}.container input:checked~.checkmark[data-v-b565f916]{background-color:#2196f3}.checkmark[data-v-b565f916]:after{content:"";position:absolute;display:none}.container input:checked~.checkmark[data-v-b565f916]:after{display:block}.container .checkmark[data-v-b565f916]:after{top:6px;left:6px;width:8px;height:8px;border-radius:50%;background:#fff}',""])},Zc7o:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("mw98"),o=n("i5iw"),r=!1;var i=function(e){r||n("ZreZ")},s=n("VU/8")(a.a,o.a,!1,i,"data-v-58ca97cb",null);s.options.__file="pages/preguntas/_id.vue",t.default=s.exports},ZreZ:function(e,t,n){var a=n("5uiE");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("2198aa64",a,!1,{sourceMap:!1})},i5iw:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Hola porfavor responde las siguientes preguntas")]),n("form",{on:{submit:function(t){return t.preventDefault(),e.checkAnswers(t)}}},[e._l(e.preguntas,function(t,a){return n("div",{key:a},[n("PreguntaMultiple",{attrs:{preguntas:e.preguntas,index:a},on:{correcto:function(t){e.respuestas[a]=t}}})],1)}),n("button",{attrs:{type:"submit"}},[e._v("\n        sumbmit\n    ")])],2)])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};t.a=o},mw98:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__plugins_vuefire__=__webpack_require__("wKgo"),__WEBPACK_IMPORTED_MODULE_1__components_PreguntaMultiple__=__webpack_require__("qN5J");__webpack_exports__.a={data:function(){return{respuestas:[],preguntas:[],book_id:null}},components:{PreguntaMultiple:__WEBPACK_IMPORTED_MODULE_1__components_PreguntaMultiple__.a},beforeRouteEnter:function(e,t,n){__WEBPACK_IMPORTED_MODULE_0__plugins_vuefire__.a.collection("books").where("book_id","==",e.params.id).get().then(function(e){e.forEach(function(e){n(function(t){console.log(e),t.book_id=e.data().book_id,t.preguntas=e.data().preguntas})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;__WEBPACK_IMPORTED_MODULE_0__plugins_vuefire__.a.collection("books").where("book_id","==",this.$route.params.id).get().then(function(t){t.forEach(function(t){e.book_id=t.data().book_id,e.preguntas=t.data().preguntas})})},checkAnswers:function checkAnswers(){console.log(this.respuestas),console.log(eval(this.respuestas.join("+"))),eval(this.respuestas.join("+"))<this.preguntas.length?alert("No has pasado"):alert("Pasate al siguiente nivel")}}}},oOoI:function(e,t,n){var a=n("OdsX");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("5fc4132a",a,!1,{sourceMap:!1})},"q+rA":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",{staticClass:"pregunta"},[e._v(" "+e._s(e.index)+".- "+e._s(e.preguntas[e.index].pregunta))]),n("v-radio-group",{attrs:{column:""}},[n("v-radio",{attrs:{label:e.preguntas[e.index].a,value:e.preguntas[e.index].a,color:"indigo darken-3"},on:{click:function(t){e.check(e.preguntas[e.index].a)}}}),n("v-radio",{attrs:{label:e.preguntas[e.index].b,value:e.preguntas[e.index].b,color:"indigo darken-3"},on:{click:function(t){e.check(e.preguntas[e.index].b)}}}),n("v-radio",{attrs:{label:e.preguntas[e.index].c,value:e.preguntas[e.index].c,color:"indigo darken-3"},on:{click:function(t){e.check(e.preguntas[e.index].c)}}}),n("v-radio",{attrs:{label:e.preguntas[e.index].d,value:e.preguntas[e.index].d,color:"indigo darken-3"},on:{click:function(t){e.check(e.preguntas[e.index].d)}}})],1)],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]};t.a=o},qN5J:function(e,t,n){"use strict";var a=n("LJ9X"),o=n("q+rA"),r=!1;var i=function(e){r||n("oOoI")},s=n("VU/8")(a.a,o.a,!1,i,"data-v-b565f916",null);s.options.__file="components/PreguntaMultiple.vue",t.a=s.exports}});