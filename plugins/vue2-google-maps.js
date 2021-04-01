import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBcven3Ob5DMbHtikbKNR15aTAftcTa2Sc',
    libraries: 'places'
  },
  installComponents: true
})