<template>
    <div>

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
