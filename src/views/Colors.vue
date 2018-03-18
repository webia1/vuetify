<template>
  <div>
    <h1>Colors</h1>
    <v-content>
      <v-container >
        <v-layout v-for="(c,i) in myColors" :key="i" justify-center>
          <div :class="[c,'box']">{{c}}</div>
          <div v-for="(n,i) in 5" :key="i" :class="[c, 'lighten-'+n,'box']">lighten-{{n}}</div>
          <div v-for="(n,i) in 4" :key="'k'+i" :class="[c, 'darken-'+n,'box']">darken-{{n}}</div>
          <div v-for="(n,i) in 4" :key="'j'+i" :class="[c, 'accent-'+n,'box']">accent-{{n}}</div>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'colors',
  data: () => ({
    myColors: [
      'red',
      'pink ',
      'purple',
      'deep-purple',
      'purple',
      'indigo',
      'blue',
      'light-blue',
      'cyan',
      'teal',
      'green',
      'light-green',
      'lime',
      'yellow',
      'amber',
      'orange',
      'deep-orange',
      'brown',
      'blue-grey',
      'grey',
    ],
  }),
  components: {
  },
};
</script>

<style>
.box {
  width: 100px;
  height: 30px;
  border: 1px solid black;
  margin: 2px;
}
</style>