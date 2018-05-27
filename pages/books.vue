<template>
  <div>
    <transition name="fade">
      <div v-if="mostrarImagen" class="div-image">
        <img :src="books[cuento].imagenes[pagina]" class="imagen"/>
      </div>
    </transition>
    <v-container :style="{paddingTop: 0}">
      <v-layout row>
        <v-flex>
          <div v-if="pagina === 0">
            <h1>{{ books[cuento].titulos.principal }} </h1>
            <h2>{{ books[cuento].titulos.secundario }} </h2>
          </div>
          <pre>{{ books[cuento].contenido[pagina] }}</pre>
        </v-flex>
      </v-layout>
      <v-layout row v-if="!mostrarImagen">
        <v-flex xs5>
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
    </v-container>
  </div>
</template>


<script>

export default {
  data() {
    return {
      finalCuento: true,
      mostrarImagen: false,
      cuento: 0,
      pagina: 0,
      books: [
        {
            titulos: {
              principal: "Titulo principal",
              secundario: "Titulo secundario"
            },
            contenido: [
              "Este titulo es de prueba Sera un dia maravilloso, todo saldra como debe de ser Sera un dia maravilloso \r\nEste es parte del texto",
              "Sera un dia maravilloso, todo saldra como debe de ser \r\nAhora estoy agregando los nuevos cuentos",
              "Estoy haciendo pruebas da cambio de paginas, para ver como se va a renderizar los cuentos \r\n Asi que espermeos que se vean bien",
              ""
            ],
            imagenes: [
              "http://www.cuentosinfantiles.video/wp-content/uploads/2016/08/Cuentos-Infantiles-LOGO-mini.png",
              "http://www.musicainfantil.org/logoinfantil.png",
              "http://www.cuentosinfantilescortos.net/wp-content/uploads/2014/12/cuento-infantil-navidad.png"
            ]
        },
        {
            titulos: {
              principal: "Titulo",
              secundario: "Titulo secundario"
            },
            contenido: [
              "Este titulo es de prueba Sera un dia maravilloso, todo saldra como debe de ser Sera un dia maravilloso \r\nEste es parte del texto",
              "Sera un dia maravilloso, todo saldra como debe de ser \r\nAhora estoy agregando los nuevos cuentos",
              "Estoy haciendo pruebas da cambio de paginas, para ver como se va a renderizar los cuentos \r\n Asi que espermeos que se vean bien",
              ""
            ],
            imagenes: [
              "http://www.cuentosinfantiles.video/wp-content/uploads/2016/08/Cuentos-Infantiles-LOGO-mini.png",
              "http://www.musicainfantil.org/logoinfantil.png",
              "http://www.cuentosinfantilescortos.net/wp-content/uploads/2014/12/cuento-infantil-navidad.png"
            ]
        }
      ]
    }
  },
  methods: {
    nextPage() {
      this.mostrarImagen = true;
      const self = this;
      if(this.pagina >= this.books[this.cuento].contenido.length) {
        this.finalCuento = false;
      } else {
          this.intervalid1 = setTimeout(function() {
          self.pagina++;
          self.mostrarImagen = false;
        }, 3000);
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
