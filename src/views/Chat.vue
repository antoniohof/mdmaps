<template>
  <div class="chat">
    NOT READY
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store'
import {
  MD
} from '../components'
import { mapGetters, mapActions} from 'vuex'
export default {
  name: 'home',
  components: {
    MD
  },
  computed: {
    ...mapGetters('people', [
      'getPeople',
      'getMe'
    ])
  },
  methods: {
    chooseMe (p) {
      console.log('choose', p)
      this.updateMe(p)
    },
    ...mapActions('people', [
      'updateMe'
    ])
  },
  beforeRouteEnter (to, from, next) {
    if (store.getters['people/getMe'].name === '') {
      next('/')
      return
    }
    next()
  },
}
</script>

<style lang='scss' scoped>
.chat {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 200px;
  color: red;
  font-size: 30px;
}

</style>
