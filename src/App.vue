<template>
  <div id="app">
    <router-view
      class="view"
    ></router-view>
    <Footer v-if="getMe.name !== ''">
    </Footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { db } from "./main" // <--- or wherever the config file is

import {
  Footer
} from '@/components'
export default {
  components: {
    Footer
  },
  data () {
    return {
    }
  },
  created () {
    console.log('app created')
  },
  mounted () {
    setTimeout(() => {
      db.collection("users")
      .onSnapshot(() => {
        console.log('snapshot!')
        this.fetchList()
      })
      this.fetchList()
    }, 1000)
  },
  updated () {
  },
  computed: {
    ...mapGetters('people', [
      'getMe'
    ])
  },
  methods: {
    ...mapActions('people', [
      'fetchList'
    ])
  },
  watch: {
  },
  beforeDestroy () {
  },
  name: 'app'
}
</script>

<style lang="scss">
@import 'src/assets/css/normalize/_import-now.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  overflow-x: hidden;
  .view {
    width: 100%;
    height: 100%;
    bottom: 50px; // top bar height
  }
}


#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
