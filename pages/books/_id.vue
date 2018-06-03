<template>
  <div>
    <transition name="fade">
      <div v-if="mostrarImagen" class="div-image">
        <img :src="images[pagina]" class="imagen"/>
      </div>
    </transition>
    <v-container :style="{paddingTop: 0}">
      <v-layout row>
        <v-flex>
          <div v-if="pagina === 0">
            <h1>{{ titles.title }} </h1>
            <h2>{{ titles.subtitle }} </h2>
          </div>
          <pre>{{ content[pagina] }}</pre>
        </v-flex>
      </v-layout>
      <v-layout row v-if="!mostrarImagen">
        <v-flex xs5 v-if="finalCuento">
          <v-btn @click="pagina--" :style="{backgroundColor: '#F7C122', width: '100%', padding: 0, marginLeft: 0, marginRight: 0}" large>
            <v-icon dark left>arrow_back</v-icon>
            Atras
          </v-btn>
        </v-flex>
        <v-flex xs2>
          <div class="num-page">
            {{ pagina+1 }}
          </div>
        </v-flex>
        <v-flex xs5 v-if="finalCuento">
          <v-btn @click.prevent="nextPage()" :style="{backgroundColor: '#62D4D4', width: '100%', padding: 0, marginLeft: 0, marginRight: 0}" large>
            Continuar
            <v-icon dark right>arrow_forward</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-flex xs5 v-if="irPreguntas">
        <router-link :to="{ name: 'preguntas-id', params: {id: $route.params.id} }">
          <v-btn :style="{backgroundColor: '#62D4D4', width: '100%', padding: 0, marginLeft: 'auto', marginRight: 'auto', display: 'block', textAlign: 'center'}" large>
            Ir al cuestionario
            <v-icon dark right>arrow_forward</v-icon>
          </v-btn>
        </router-link>
      </v-flex>
    </v-container>
  </div>
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
      irPreguntas: false
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
    },
    nextPage() {
     this.mostrarImagen = true;
     const self = this;
     if(this.pagina >= this.content.length) {
       this.finalCuento = true;
       this.irPreguntas = true;
     } else {
         this.intervalid1 = setTimeout(function() {
         self.mostrarImagen = false;
         self.pagina++;
       }, 1000);
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
