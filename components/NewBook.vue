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
  name: 'view-emplyee',
  data() {
    return {
      book_id: null,
      images: [],
      content: [],
      titles: {
        title: null,
        subtitle: null
      },
      texto: '',
      imageLink: ''
    }
  },
  methods: {
    saveBook() {
      db.collection('books').add({
        content: this.content,
        book_id: this.book_id,
        images: this.images,
        titles: this.titles
      })
      .then(docRef => {
        console.log('Book added: ', docRef.id)
      })
      .catch(error => {
        console.error('Error adding book', error)
      })
    },
    addContent() {
      console.log(this.content)
      this.content.push(this.texto)
      this.texto = ''
    },
    addImage() {
      console.log(this.images)
      this.images.push(this.imageLink)
      this.imageLink = ''
    }
  }
}

</script>
