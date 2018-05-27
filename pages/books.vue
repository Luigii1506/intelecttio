<template>
  <div>
    <h2>Lista de libros</h2>
    <v-list :style="{background: '#fffeee'}">
      <v-list-tile
        v-for="book in books"
        v-bind:key="book.id"
        :style="{display: 'block', padding: '10px 15px', border: '2px solid #dddd', position: 'relative', marginTop: '.4px'}">
        <v-chip v-bind:style="{background: '#225B76', marginRight: '20px'}" text-color="white">{{book.book_id}}</v-chip>
        <v-list-tile-content>
            <v-list-tile-title>{{ book.titles.title }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ book.titles.subtitle }}</v-list-tile-sub-title>
          </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>

import { db } from '~/plugins/vuefire'
import NewBook from '~/components/NewBook'

export default {
  data() {
    return {
      books: []
    }
  },
  components: {
    NewBook: NewBook
  },
  created() {
    db.collection('books').get().then(
      querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data());
          const data = {
            'id': doc.id,
            'book_id': doc.data().book_id,
            'images': doc.data().images,
            'content': doc.data().content,
            'titles': doc.data().titles
          }
          this.books.push(data)
        })
      }
    )
  }
}

</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
