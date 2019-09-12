// import Vue from 'vue'
import { db } from "../../main" // <--- or wherever the config file is
const actions = {
  fetchList: ({ commit, getters }) =>  {
    return db.collection('users').get().then((users) => {
      var data = users.docs.map(doc => {
        return {
          location: {
            lat:  doc.data().location.latitude,
            lng:  doc.data().location.longitude
          },
          image: getters.getPeople.find((p) => p.name === doc.id).image,
          name: doc.id
        }
      })
      console.log(data)
      commit('storeList', data)
      return data
    })
  },
  updateMyLocation: ({ commit, getters }, value) => {

    let me = Object.assign(getters['getMe'])

    db.collection("users").doc(me.name).update({location: {
      latitude: value.location.lat,
      longitude: value.location.lng
    }})
    me.location = value.location

    // todo update firebase
    commit('storeSingleUserData', me)
  },
  updateMe: ({ commit }, value) => commit('storeMe', value)
}

export default actions
