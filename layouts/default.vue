<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="!clipped"
      v-model="drawer"
      fixed
      app
      :style="{backgroundColor: '#FFFEEE'}"

    >
      <v-list :style="{backgroundColor: '#FFFEEE'}">
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :style="{backgroundColor: '#225C75'}" dark fixed app :clipped-left="clipped" >
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content :style="{backgroundColor: '#FFFEEE'}">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Home', to: '/' },
        { icon: 'file_upload', title: 'Agregar libro', to: '/addBook' },
        { icon: 'import_contacts', title: 'Catalogo de libros', to: '/books' },
        { icon: 'bookmark', title: 'Notas', to: '/notas' },
        { icon: 'brush', title: 'Animaciones', to: '/animation' },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Intelecttio'
    };
  }
};
</script>
