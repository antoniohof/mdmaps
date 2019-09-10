const mutations = {
  storeList: (state, value) => {
    state.people.list = value
  },
  storeMe: (state, value) => {
    state.people.me = value
  },
  storeSingleUserData: (state, value) => {
    state.people.list = state.people.list.map(p =>
      p.name === value.name
        ? { ...value }
        : p)
  }
}

export default mutations
