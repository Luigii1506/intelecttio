<template>
    <div>
   <p>Hola porfavor responde las siguientes preguntas</p>
   <form  @submit.prevent="checkAnswers">
     <PreguntaMultiple
      id='1'
      Correcta=0
      puntos='3'
      Pregunta= "¿Cual es el nombre del libro?"
      a='el gato con botas'
      b='el loro'
      c='sherk'
      d='otro'
      respuesta='otro'
      @correcto="respuestas[0] = $event"
     >
   </PreguntaMultiple>
   <PreguntaMultiple
   id='2'
   Correcta=0
   puntos='3'
   Pregunta= "¿Cual es la idea principal del cuento?"
   a='conocer al gato '
   b='querer al gato'
   c='comer con el gato'
   d='otro'
   respuesta='otro'
   @correcto="respuestas[1] = $event"
  >
  </PreguntaMultiple>
     <button type="submit">
         sumbmit
     </button>
   </form>
 </div>
</template>


<script>

import { db } from '~/plugins/vuefire'
import PreguntaMultiple from '~/components/PreguntaMultiple'

export default {
    data() {
      return {
        respuestas: []
      }
    },
    components:{
        PreguntaMultiple
    },
    methods: {
        pruebaRespuesta: function(){
            console.log("la respuesta es "+this.resultados);
        },
        checkAnswers() {
          console.log(this.respuestas)
          console.log(eval(this.respuestas.join('+')))
        }
    }
}
</script>

<style scoped>

</style>
