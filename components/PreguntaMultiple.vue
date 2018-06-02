<template >
  <div  :v-bind="puntos" v-bind:alt="resultado">
    <p :v-bind="id" v-bind:alt="Pregunta" class="pregunta" > {{id}}.- {{Pregunta}}</p>
    <v-radio-group column>
      <v-radio label="Option 1" :value="a" @click="check(a)"></v-radio>
      <v-radio label="Option 2" :value="b" @click="check(b)"></v-radio>
      <v-radio label="Option 3" :value="c" @click="check(c)"></v-radio>
      <v-radio label="Option 4" :value="d" @click="check(d)"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'PreguntaMultiple',
  props: ['id','Correcta','puntos','Pregunta', 'a', 'b', 'c', 'd', 'respuesta', 'acumulado'],
  data(){
    return {
      resultado: 0,
      answer: ''
    }
  },
  methods: {
    test () {
      console.log(this.answer)
    },
    check(value) {
      this.answer = value
      console.log(this.answer)
      if(this.answer == this.respuesta) {
        console.log('correcto')
        this.resultado = 1
      } else {
        console.log('incorrecto')
        this.resultado = 0
      }
      this.$emit('correcto', this.resultado)
    }
  }
}


</script>

<style scoped >

.pregunta{
  display: block;
  position: relative;
  padding-left: 10px;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

}
/* Cambial el lebel del check */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
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

/* Crea el radio del boton  */
.checkmark {
  position: absolute;
  top: 5;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
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
