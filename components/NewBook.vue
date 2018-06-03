<template>
  <v-layout>
      <v-flex text-xs-center>
          <v-form @submit.prevent="saveBook">
              <v-text-field label="Id del libro" v-model="book_id" type="number"></v-text-field>
              <v-text-field label="Titulo del libro" v-model="titles.title"></v-text-field>
              <v-text-field label="Subtitulo" v-model="titles.subtitle"></v-text-field>
              <v-text-field label="Contenido de las paginas, agregar una por una" v-model="texto" textarea></v-text-field>
              <v-btn @click="addContent">
                Agregar pagina
              </v-btn>
              <v-text-field label="Agregar imagen para cada pagina, agregar una por una" v-model="imageLink"></v-text-field>
              <v-btn @click="addImage">
                Agregar imagen
              </v-btn>
              <v-text-field label="Pregunta" v-model="preguntaText"></v-text-field>
              <v-text-field label="Respuesta a" v-model="a"></v-text-field>
              <v-text-field label="Respuesta b" v-model="b"></v-text-field>
              <v-text-field label="Respuesta c" v-model="c"></v-text-field>
              <v-text-field label="Respuesta d" v-model="d"></v-text-field>
              <v-text-field label="Respuesta" v-model="respuestaText"></v-text-field>
              <v-btn @click="addQuestion">
                Agregar pregunta
              </v-btn>
              <hr>
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
  name: 'view-emplyee',
  data() {
    return {
      book_id: null,
      images: [],
      content: [],
      preguntas: [],
      titles: {
        title: null,
        subtitle: null
      },
      texto: '',
      imageLink: '',
      a: '',
      b: '',
      c: '',
      d: '',
      respuestaText: '',
      preguntaText: '',
      arreglo: 0
    }
  },
  methods: {
    saveBook() {
      db.collection('books').add({
        content: this.content,
        book_id: this.book_id,
        images: this.images,
        titles: this.titles,
        preguntas: this.preguntas
      })
      .then(docRef => {
        console.log('Book added: ', docRef.id)
      })
      .catch(error => {
        console.error('Error adding book', error)
      })
    },
    addContent() {
      this.content.push(this.texto)
      console.log(this.content)
      this.texto = ''
    },
    addImage() {
      this.images.push(this.imageLink)
      console.log(this.images)
      this.imageLink = ''
    },
    addQuestion() {
      let pregunta = {}
      pregunta.a = this.a
      pregunta.b = this.b
      pregunta.c = this.c
      pregunta.d = this.d
      pregunta.respuesta = this.respuestaText
      pregunta.pregunta = this.preguntaText
      this.preguntas.push(pregunta)
      console.log(this.preguntas)
      this.a = ''
      this.b = ''
      this.c = ''
      this.d = ''
      this.preguntaText = ''
      this.respuestaText = ''
    }
  }
}

</script>
