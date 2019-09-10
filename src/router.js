import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Maps from './views/Maps.vue'
import Chat from './views/Chat.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/map',
      name: 'map',
      component: Maps
    }
  ]
})
