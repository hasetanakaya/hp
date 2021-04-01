<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  loading: false,
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      Typekit.load({
        async: true,
        active: () => {this.$nuxt.$loading.finish()}
      })
    })
  }
}
</script>

<style lang="sass">
html
  font-size: 12px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-border-box

*,
*::before,
*::after 
  box-sizing: border-box
  margin: 0

</style>
