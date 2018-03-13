<template>
<v-app>
  <v-navigation-drawer fixed clipped app>Navigation Drawer</v-navigation-drawer>
  <v-toolbar dark color="red darken-4" app fixed clipped-left scroll-off-screen>Vtoolbar</v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer></v-footer>
</v-app>

</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
