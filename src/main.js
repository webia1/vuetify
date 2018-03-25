import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store/store';

import 'vuetify/dist/vuetify.min.css';
import 'babel-polyfill';

Vue.config.productionTip = false;
Vue.use(Vuetify, {
  options: {
    minifyTheme: function() {
      return process.env.NODE_ENV === 'production'
        ? val.replace(/[\s|\r\n|\r|\n]/g, '')
        : null;
    },
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
