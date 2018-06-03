<template>
  <div>
    <p>Hola porfavor responde las siguientes preguntas</p>
    <form  @submit.prevent="checkAnswers">
     <div v-for="(pregunta, index) in preguntas" v-bind:key="index">
       <PreguntaMultiple :preguntas="preguntas" @correcto="respuestas[index] = $event" :index="index">
       </PreguntaMultiple>
     </div>
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
        respuestas: [],
        preguntas: [],
        book_id: null
      }
    },
    components:{
        PreguntaMultiple
    },
    beforeRouteEnter(to, from, next) {
      db.collection('books').where('book_id', '==', to.params.id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            console.log(doc)
            vm.book_id = doc.data().book_id
            vm.preguntas = doc.data().preguntas
          })
        })
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
        fetchData() {
          db.collection('books').where('book_id', '==', this.$route.params.id).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.book_id = doc.data().book_id
              this.preguntas = doc.data().preguntas
            })
          })
        },
        checkAnswers() {
          console.log(this.respuestas)
          console.log(eval(this.respuestas.join('+')))
          if(eval(this.respuestas.join('+')) < this.preguntas.length) {
            alert('No has pasado')
          } else {
            alert('Pasate al siguiente nivel')
          }
        }
    }
}
</script>

<style scoped>

</style>
