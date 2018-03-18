<template>
  <v-content>
    <v-container>
      <v-layout class="cBorder">
      <div > 
        <v-alert type="success" color="green" :value="true">
          <span>
            This is a success alert.
          </span>
        </v-alert>
        <v-alert type="info" color="blue" :value="true">
          This is a info alert.
        </v-alert>
        <v-alert type="warning" color="amber" :value="true">
          This is a warning alert.
        </v-alert>
        <v-alert type="error" color="red" :value="true">
          This is a error alert.
        </v-alert>
      </div>
      <div>
        <v-avatar
          :tile="myTile"
          :size="myAvatarSize"
          class="grey lighten-4"
        >
          <img src="https://randomuser.me/api/portraits/women/11.jpg">
        </v-avatar>
      </div>
      </v-layout>

    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'ui',
  data: () => ({
    myAlertValue: true,
    myAvatarSize: 90,
    myTile: true,
  }),
};
</script>

<style lang="stylus">

.cBorder {
  border: 1px solid grey;
  margin: 10px;
  padding: 10px;
}
</style>
