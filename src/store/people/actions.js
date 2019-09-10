// import Vue from 'vue'
const actions = {
  updateList: ({ commit }, value) => commit('storeList', value),
  updateSingleUserdata: ({ commit }, value) => commit('storeSingleUserData', value),
  updateMe: ({ commit }, value) => commit('storeMe', value)
}

export default actions
