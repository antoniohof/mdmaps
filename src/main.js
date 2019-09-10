import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import * as VueGoogleMaps from 'vue2-google-maps'
import firebase from 'firebase'
Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDqBGByZGBsCtHHDjCQD6fRywO70F9ph9o',
    libraries: 'places'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBleBVJ1b6bkFOqaomurNk_oADwy0r0ajg",
  authDomain: "mdmaps-95fcb.firebaseapp.com",
  databaseURL: "https://mdmaps-95fcb.firebaseio.com",
  projectId: "mdmaps-95fcb",
  storageBucket: "",
  messagingSenderId: "561644733683",
  appId: "1:561644733683:web:61a94c98e63f73c855e386"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

export const db = firebase.firestore()

messaging.usePublicVapidKey('BM4yc3WoicKO14-2-1ov1Fq3sxYpn8KLfH-v98MDhvH3L80NlrmeGrFjNkwQUtp0gWL1ERh2SFBPXWXalGxdrNg') // 1. Generate a new key pair

// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.')

  // Get Token
  messaging.getToken().then((token) => {
    console.log(token)
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err)
});