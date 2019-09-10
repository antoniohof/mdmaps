// import Vue from 'vue'

const getters = {
  getPeople: state => state.people.list,
  getMe: state => state.people.me
}

export default getters
