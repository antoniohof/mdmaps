<template>
  <div class="scene-circle" @click="onClick">
    <div class="scene-circle--wrapper">
      <span class="scene-circle-icon" :class="{'selected': people.name === getMe.name}">
        <div class='img-wrapper' >
          <img class="scene-circle-thumb"
            :src="people.image"
          />
        </div>
        <div class="marker-arrow">
        </div>
      </span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MD',
  props: {
    people: {
      type: Object,
      required: true
    }
  },
  mounted () {
    console.log(this.people)
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('people', [
      'getMe'
    ])
  },
  methods: {
    onClick () {
      console.log('click')
    }
  }
}
</script>

<style scoped lang="sass">

.scene-circle
  display: inline-block
  position: relative
  z-index: 9999999 !important
  &--wrapper
    transform: scale(1)
    transition: transform 0.3s
    &:hover
      cursor: pointer
      transform: scale(1.08)
    &:active
      transform: scale(0.98)
  .scene-circle-icon
    display: inline-block
    width: 44px
    height: 44px
    border-radius: 50%
    position: relative
    box-shadow: 0 0 0 2px grey
    border: 1px solid #000
    -webkit-touch-callout: none !important
    -webkit-user-select: none !important
    &.mini
      width: 20px
      height: 20px
      .img-wrapper
        height: 20px
        width: 20px
    &.draggable
      cursor: grab !important
      &:active
        cursor: grabbing !important
    .img-wrapper
      height: 44px
      width: 44px
      overflow: hidden
      border-radius: 50%
      pointer-events: all
      .scene-circle-thumb
        width: 98%
        -webkit-touch-callout: none !important
        -webkit-user-select: none !important
        height: 44px
        -webkit-user-drag: none
        -khtml-user-drag: none
        -moz-user-drag: none
        -o-user-drag: none
        user-drag: none
        pointer-events: none
    &.selected:not(.loading)
      box-shadow: 0 0 0 2px red
      &.inside-meeting
        box-shadow: 0 0 0 2px orange
    .scene-circle-icon
      filter: drop-shadow(0 0 5px black)
      box-shadow: 0 0 0 3px grey
      border: none
  &--marker
    position: absolute !important
    .scene-circle-icon
      filter: drop-shadow(0 0 5px black)
      box-shadow: 0 0 0 3px grey
      border: none
      .marker-arrow
        width: 0
        height: 0
        border-style: solid
        position: absolute
        z-index: 1
        border-color: grey
        border-width: 10px 7px 0 7px
        border-left-color: transparent !important
        border-right-color: transparent !important
        border-bottom-color: transparent !important
        bottom: -11px
        left: calc(50% - 7px)
        margin-top: 0
        margin-bottom: 0
        &.selected
          border-color: yellow !important
          border-left-color: transparent !important
          border-right-color: transparent !important
          border-bottom-color: transparent !important
      .img-wrapper
        pointer-events: all
        height: 44px
        width: 44px
        .scene-circle-thumb
          -webkit-touch-callout: none !important
          -webkit-user-select: none !important
          pointer-events: none
          height: 44px
          -webkit-user-drag: none
          -khtml-user-drag: none
          -moz-user-drag: none
          -o-user-drag: none
          user-drag: none
      &.inside-meeting
        .marker-arrow.selected
          border-color: orange !important
          border-left-color: transparent !important
          border-right-color: transparent !important
          border-bottom-color: transparent !important
  &-loading
    height: 100%
    width: 100%
    position: absolute
    top: -2px
    left: -2px
    z-index: 9999
    pointer-events: none
.hover-title
  display: flex
  flex-wrap: wrap
  width: 120px
  justify-content: center
  position: absolute
  transform: translate(-50%, calc(-100% - 10px))
  z-index: 9999999
  pointer-events: none
  transition: opacity 0.2s 0.2s
  opacity: 0
  top: 0px
  left: 50%
  text-align: center
  &-label
    line-height: 13px
    padding: 2px 6px
    display: inline-block
    background: #131215
    color: white
    border-radius: 8px
    font-size: 10px
    word-break: break-word
.scene-circle--marker:hover
  .hover-title
    opacity: 1
    pointer-events: all !important
</style>
