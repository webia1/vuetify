import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import 'babel-polyfill';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  theme: {
    primary: colors.red.darken1, // #E53935
    secondary: colors.red.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
