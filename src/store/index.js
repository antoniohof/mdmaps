import Vuex from 'vuex'
import Vue from 'vue'
import modal from './modal'
import alert from './alert'
import globals from './globals'
import map from './map'
import people from './people'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    modal,
    alert,
    people,
    globals,
    map
  }
})
