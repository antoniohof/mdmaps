<template>
  <div class="home">
    <div id="info"></div>
    <div id="predictions"></div>
    <div id="canvas-wrapper">
      <canvas id="output" style=""></canvas>
      <video id="video" playsinline style="
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      visibility: hidden;
      width: auto;
      height: auto;
      position: absolute;
      ">
      </video>
    </div>
    <div id="scatter-gl-container"></div>
  </div>
</template>

<script>
import { start } from '@/assets/js/handpose/index.js'
export default {
  name: 'home',
  components: {
  },
  computed: {
  },
  data () {
    return {
    }
  },
  mounted () {
    setTimeout(() => {
      console.log('go start')
      start()
    }, 1000)
  },
  destroyed () {

  },
  methods: {

  }
}
</script>

<style lang='sass' scoped>
.home
  width: 100vw
  height: 100vh

</style>
