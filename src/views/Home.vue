<template>
  <div class="home">
    <div class='choose'>
      <MD
      class='md'
      v-for="(s, index) in getPeople"
      @click.native='chooseMe(s)'
      :key='index'
      :people='s'>
      </MD>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
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
      'getPeople'
    ])
  },
  methods: {
    chooseMe (p) {
      console.log('choose', p)
      this.fetchUserPosition()
      this.updateMe(p)
      setTimeout(() => {
        this.$router.push('/map')
      }, 250)
    },
    ...mapActions('people', [
      'updateMe'
    ]),
    ...mapActions('map', [
      'fetchUserPosition'
    ])
  }
}
</script>

<style lang='scss' scoped>
.choose {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 200px;
  .md {
    transform: scale(1.5)
  }
}

</style>
