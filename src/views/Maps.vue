<template>
  <div class='map'>
    <!--
    <div @click='fetchUserPosition' class='location'>
      <img src=''/>
      get position
    </div>
    -->
    <GmapMap
        ref='mapRef'
        :center='center'
        :zoom='zoom'
        class='gmap'
        @center_changed='onCenterChanged'
        @zoom_changed='onZoomChanged'
    >
    <!--
      <GmapInfoWindow
        :options="infoWindow.infoOptions"
        :position="infoWindow.infoWindowPos"
        :opened="infoWindow.infoWinOpen"
        @closeclick="closeInfo"
      >{{infoWindow.infoContent}}
        <MD>
        </MD>
      </GmapInfoWindow>
      -->
      <gmap-custom-marker
        :key="index"
        v-for="(s, index) in getPeople"
        :marker="{ lat: s.location.lat, lng: s.location.lng }"
        :clickable="true"
        :title="s.name"
        :draggable="false"
        @click="onClickMD(s)"
      >
      <MD :people='s'/>
      </gmap-custom-marker>
    </GmapMap>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import mapStyle from '@/utils/mapStyle'
import GmapCustomMarker from 'vue2-gmap-custom-marker'
import store from '@/store'
import {
  MD
} from '../components'

export default {
  components: {
    MD,
    GmapCustomMarker
  },
  mounted () {
    this.center = {
      lat: this.getLastLocation.lat,
      lng: this.getLastLocation.lng
    }
    this.$refs.mapRef.$mapPromise.then((map) => {
      map.setZoom(this.getLastLocation.zoom)
      map.setOptions({
        gestureHandling: 'greedy',
        styles: mapStyle(),
        mapTypeControl: false,
        streetViewControl: false
      })
    })
  },
  data () {
    return {
      lastSelected: '',
      /*
      infoWindow: {
        infoWinOpen: false,
        infoContent: '',
        infoWindowPos: {
          lat: 0,
          lng: 0
        },
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -65
          }
        }
      },
      */
      center: {lat: 10.0, lng: 10.0},
      zoom: 3
    }
  },
  computed: {
    ...mapGetters('map', [
      'getLastLocation',
      'getUserPosition'
    ]),
    ...mapGetters('people', [
      'getPeople'
    ])
  },
  updated () {
    if (this.center.lng === 0 && this.getLastLocation.lng !== 0) {
      this.center = {
        lat: this.getLastLocation.lat,
        lng: this.getLastLocation.lng
      }
    }
  },
  methods: {
    onClickMD (s) {
      console.log('clicked md', s)
      /*
      if (this.lastSelected !== s.name) {
        this.lastSelected = s.name
        this.infoWindow.infoWinOpen = true
        this.infoWindow.infoWindowPos = { lat: s.location.lat, lng: s.location.lng }
        this.infoWindow.infoContent = s.name
        this.infoWindow.infoWinOpen = true
      } else {
        this.infoWindow.infoWinOpen = false
      }
      */
    },
    closeInfo () {
      /*
      this.infoWindow.infoWinOpen = false
      this.lastSelected = ''
      */
    },
    onZoomChanged (newZoom) {
      // save zoom inside store
      this.zoom = newZoom
      this.setLastLocation({ lat: this.center.lat, lng: this.center.lng, zoom: this.zoom })
    },
    onCenterChanged (newCenter) {
      // save location inside store
      this.setLastLocation({ lat: newCenter.lat(), lng: newCenter.lng(), zoom: this.zoom })
    },
    getOnePerson (name) {
      return this.getPeople.find((people) => people.name === name)
    },
    ...mapActions('map', [
      'setLastLocation',
      'fetchUserPosition'
    ])
  },
  watch: {
    getUserPosition: function (position) {
      console.log('watched')
      this.center = {
        lat: position.lat,
        lng: position.lng
      }
    }
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
.custommarker {
  height: 50px;
  width: 50px;
  background: yellow
}
.map {
  width: 100%;
  height: 100%;
  position: relative;
  .location {
    position: absolute;
    top: 100px;
    height: 20px;
    width: 20px;
    z-index: 1000;
    background: red;
  }
  .gmap {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 100%;
}
}
</style>