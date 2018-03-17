<template>
  <v-app>
    <v-navigation-drawer fixed clipped app v-model="drawer">
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/women/85.jpg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Maxima Musterfrau</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      
    </v-navigation-drawer>
    <v-toolbar dark color="red darken-4" app fixed clipped-left scroll-off-screen>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer></v-footer>
  </v-app>

</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>


<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
