import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Colors from './views/Colors.vue'
import Content from './views/Content.vue'
import UI from './views/UIComponents.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/colors',
      name: 'colors',
      component: Colors
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      path: '/ui',
      name: 'ui',
      component: UI
    }
  ]
})
