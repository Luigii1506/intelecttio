<template >
  <div>
    <p class="pregunta" > {{index}}.- {{preguntas[index].pregunta}}</p>
    <v-radio-group column>
      <v-radio :label="preguntas[index].a" :value="preguntas[index].a" @click="check(preguntas[index].a)" color="indigo darken-3"></v-radio>
      <v-radio :label="preguntas[index].b" :value="preguntas[index].b" @click="check(preguntas[index].b)" color="indigo darken-3"></v-radio>
      <v-radio :label="preguntas[index].c" :value="preguntas[index].c" @click="check(preguntas[index].c)" color="indigo darken-3"></v-radio>
      <v-radio :label="preguntas[index].d" :value="preguntas[index].d" @click="check(preguntas[index].d)" color="indigo darken-3"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: 'PreguntaMultiple',
  props: ['preguntas', 'index'],
  data(){
    return {
      resultado: 0,
      answer: ''
    }
  },
  methods: {
    check(value) {
      this.answer = value
      console.log(this.answer)
      if(this.answer == this.preguntas[this.index].respuesta) {
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
