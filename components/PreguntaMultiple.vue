<template >
  <div  :v-bind="puntos" v-bind:alt="resultado" :v-on="enviarRespuestas()">
  <p :v-bind="id" v-bind:alt="Pregunta" class="pregunta" > {{id}}.- {{Pregunta}}</p>
  <div>
    <label class="container">
    <input type="radio" @click="valida1()" :class=uno :v-bind="a" required>a.) {{aa}}
    <span class="checkmark"></span>
    </label>
  </div>
  <div>
    <label class="container">
    <input type="radio" @click="valida2()"  :class=dos :v-bind="b" required>b.) {{bb}}
    <span class="checkmark"></span>
    </label>
    
  </div>
  <div>
    <label class="container">
    <input type="radio" @click="valida3()"  :class=tres :v-bind="c" required>c.) {{cc}}
    <span class="checkmark"></span>
    </label>
    
  </div>
  <div>
    <label class="container">
    <input type="radio" @click="valida4()"  :class=cuatro :v-bind="d" required>d.) {{dd}}
    <span class="checkmark"></span>
    </label>
    
  </div>
  <button @click="Comprueba()">
    presion
  </button>
  </div>
</template>

<script>

export default {
  name: 'PreguntaMultiple',
  props: ['id','Correcta','puntos','Pregunta', 'a', 'b', 'c', 'd', 'respuesta', 'acumulado'],
  data(){
    return {
      uno: 'a'+this.id*this.id+1,
      dos: 'a'+this.id*this.id+2,
      tres: 'a'+this.id*this.id+3,
      cuatro: 'a'+this.id*this.id+4,
      aa: '',
      bb: '',
      cc: '',
      dd: '',
      myArray: [],
      resultado: 0
      }    
  },
  methods: {
    enviarRespuestas: function(){
    
    var res= RespuestasAleatoreas(this.myArray,this.a,this.b,this.c,this.d,this.respuesta);
    this.aa=this.myArray[0];
    this.bb=this.myArray[1];
    this.cc=this.myArray[2];
    this.dd=this.myArray[3];
  
  },
  Comprueba: function(){
        var arr = this.myArray

        if($("."+this.uno+"").prop('checked')){
          if(arr[0]===this.respuesta){
            console.log("respuesta correcta ");
            this.resultado++;
            console.log(this.resultado);
          }else{
              console.log("respuesta incorrecta")
          }
       }else
       if($("."+this.dos+"").prop('checked')){
          if(arr[1]===this.respuesta){
            console.log("respuesta correcta ");
            this.resultado++;
            console.log(this.resultado);
          }else{
              console.log("respuesta incorrecta")
          }
       }else
       if($("."+this.tres+"").prop('checked')){
          if(arr[2]===this.respuesta){
            console.log("respuesta correcta ");
            this.resultado++;
            console.log(this.resultado);
          }else{
              console.log("respuesta incorrecta")
          }
       }else
       if($("."+this.cuatro+"").prop('checked')){
          if(arr[3]===this.respuesta){
            console.log("respuesta correcta ");
            this.resultado++;
            console.log(this.resultado);
          }else{
              console.log("respuesta incorrecta")
          }
       }

     

      arr=[];
    },

    valida1: function(){
      if( $("."+this.uno+"").prop('checked') ) {
          $("."+this.dos+"").prop( "checked", false )
          $("."+this.tres+"").prop( "checked", false )
          $("."+this.cuatro+"").prop( "checked", false )
      }
    },
    valida2: function(){
      if( $("."+this.dos+"").prop('checked') ) {
        $("."+this.uno+"").prop( "checked", false )
        $("."+this.tres+"").prop( "checked", false )
        $("."+this.cuatro+"").prop( "checked", false )
      
      }
    },
    valida3: function(){
      if( $("."+this.tres+"").prop('checked') ) {
        $("."+this.dos+"").prop( "checked", false )
        $("."+this.uno+"").prop( "checked", false )
        $("."+this.cuatro+"").prop( "checked", false )
      
      }
    },
    valida4: function(){
      if( $("."+this.cuatro+"").prop('checked') ) {
        $("."+this.dos+"").prop( "checked", false )
        $("."+this.tres+"").prop( "checked", false )
        $("."+this.uno+"").prop( "checked", false )
      
      }
    }
  }
}
function envia(){
  var bus = new Vue()
  bus.$emit('id-selected', 1)
}

function RespuestasAleatoreas(myArray,a,b,c,d,respuesta){
  var cantidadNumeros=4;
  while(myArray.length < cantidadNumeros ){
    var numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
    var existe = false;
    for(var i=0;i<myArray.length;i++){
	    if(myArray [i] == numeroAleatorio){
      existe = true;
      break;
      }
    }
    if(!existe){
      myArray[myArray.length] = numeroAleatorio;
    }
  }
  for(var i=0;i<myArray.length;i++){
   if(myArray[i]===1){
        myArray[i] = a;
      }
      if(myArray[i]===2){
        myArray[i] = b;
      }
      if(myArray[i]===3){
        myArray[i] = c;
      }
      if(myArray[i]===4){
        myArray[i] = d;
      }
  }
  for(var i=0;i<myArray.length;i++){
   if(myArray[i]===respuesta){
       return i;
      }    
  }

}


</script>

<style>
.pregunta{
  display: block;
  position: relative;
  padding-left: 10px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 6px;
  left: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>