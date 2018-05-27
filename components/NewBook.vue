<template>
  <div>
    <button @click="saveBook" class="btn">Submit</button>
    <router-link to="/" class="btn grey">Cancel</router-link>
  </div>
</template>

<script>

import { db } from '~/plugins/vuefire'

export default {
  name: 'view-emplyee',
  data() {
    return {
      book_id: null,
      image: null,
      name: null,
      array: []
    }
  },
  methods: {
    saveBook() {
      db.collection('books').add({
        image: 'prueba no name',
        book_id: 2,
        array: this.array
      })
      .then(docRef => {
        console.log('Book added: ', docRef.id)
      })
      .catch(error => {
        console.error('Error adding book', error)
      })
    }
  }
}

</script>
