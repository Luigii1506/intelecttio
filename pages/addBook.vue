<template>

  <NewBook />

</template>

<script>

import NewBook from '~/components/NewBook'

export default {
    data() {
      return {
          user: {
              bookname: '',
              urlLibro: '',
              urlPortada: ''
          },
          users: [],
          resource: {},
          node: 'data'
      }
    },
    components: {
      NewBook: NewBook
    }
}

</script>
