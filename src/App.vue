<template>
  <v-app >
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
    <v-toolbar dark color="blue" app fixed clipped-left scroll-off-screen>
      <v-toolbar-title>Toolbar-Title</v-toolbar-title>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content >
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer>
      <v-toolbar>
        
      </v-toolbar>
    </v-footer>
  </v-app>

</template>

<script>
export default {
  mounted () {
     console.log(this.$el);
   },
  data: () => ({
    drawer: false,
  }),
};
</script>


<style>
.showBorder {
  border: 10px solid red;
}
</style>
