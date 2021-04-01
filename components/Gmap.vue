<template>
  <GmapMap
    map-type-id="roadmap"
    :center="center"
    :zoom="15"
    :options="options.map"
  >
    <GmapCustomMarker :marker="marker">
      <img src="~/assets/img/marker.svg" />
    </GmapCustomMarker>
  </GmapMap>
  <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.778934144261!2d135.906711315484!3d34.53382839964419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6006b55c28f9ff09%3A0x6a77a912a6b7f1f8!2z55Sw5Lit5bGL!5e0!3m2!1sja!2sjp!4v1615649041484!5m2!1sja!2sjp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> -->
</template>

<script>
export default {
  data: function() {
    return {
      center: {
        lat: 34.53383845746144, 
        lng: 135.90889791266693
      },
      marker: {
        lat: 34.53383845746144, 
        lng: 135.90889791266693
      },
      infos: {
        pos: null,
        open: false,
      },
      options: {
        map: {
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false
        }
      }
    }
  },
}
</script>

<style lang="sass">
.vue-map-container
  width: 100%
  height: 589px
  filter: saturate(0)
</style>