<template>
  <v-layout>
      <v-flex text-xs-center>
          <v-form @submit.prevent="saveBook">
              <v-text-field label="Id del libro" v-model="book_id" type="number"></v-text-field>
              <v-text-field label="Titulo del libro" v-model="titles.title"></v-text-field>
              <v-text-field label="Subtitulo" v-model="titles.subtitle"></v-text-field>
              <v-text-field label="Contenido de las paginas, agregar una por una" v-model="texto" textarea></v-text-field>
              <v-text-field label="Agregar imagen para cada pagina, agregar una por una" v-model="imageLink"></v-text-field>
              <v-btn @click="deleteBook">
                Agregar imagen
              </v-btn>
              <br>
              <v-btn type="submit">
                submit
              </v-btn>
          </v-form>
      </v-flex>
  </v-layout>
</template>



<script>
import { db } from '~/plugins/vuefire'

export default {
  data() {
    return {
      book_id: null,
      titles: {
        title: null,
        subtitle: null
      },
      content: [],
      images: [],
      mostrarImagen: false,
      pagina: 0,
      finalCuento: true,
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('books').where('book_id', '==', to.params.id).get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        next(vm => {
          vm.book_id = doc.data().book_id
          vm.titles = doc.data().titles
          vm.content = doc.data().content
          vm.images = doc.data().images
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
          this.bookd_id = doc.data().book_id
          this.titles = doc.data().titles
          this.content = doc.data().content
          this.images = doc.data().images
        })
      })
    },
    deleteBook() {
      if(confirm('Estas seguro?')) {
        db.collection('books').where('book_id', '==', this.$route.params.id).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete()
            this.$router.push('/')
          })
        })
      }
    }
  }
}

</script>


<style scoped>

.div-image {
  position: relative;
}

.imagen {
  width: 100%;
  position: absolute;
  z-index: 1;
  background-color: #FFFEEE;
}

pre {
   font-family:'Futura Std Condensed';
    line-height: 2;
    font-size: 16px;
    color: #000000;
    border: none;
    background-color: #FEFEEE;
    white-space: pre-wrap;
    padding: 0;
    word-break: keep-all;
}

h1 {
  font-size: 2.747em;
}
h3 {
  font-size: 0.874em;
}
h2 {
  font-size:1.229em;
}

.num-page {
    width: 100%;
    text-align: center;
    font-size: 20px;
    padding: 10px
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
