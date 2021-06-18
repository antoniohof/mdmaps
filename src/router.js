import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HOME',
      component: Home,
      meta: {
        auth: false,
        top: {
          show: true
        }
      }
    }
  ]
})
/*
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.auth)
  const isAuthenticated = store.getters['auth/isAuthenticated']
  if (requiresAuth && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})
*/

export default router