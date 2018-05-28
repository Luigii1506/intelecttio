<template>
  <div>

  </div>
</template>


<script>
import { db } from '~/plugins/vuefire'

export default {
  data() {
    return {

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
