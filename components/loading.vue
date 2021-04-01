<template>
  <transition name='l'>
    <div v-if="loading" class="h-screen fixed inset-x-0 top-0 bg-white"></div>
  </transition>
</template>

<script>
export default {
  data: () => ({ loading: true }),
  methods: {
    start() { this.loading = true },
    finish() { this.loading = false },
  },
}
</script>

<style lang="sass">
.l
  &-enter
    opacity: 0
    &-active
      transition: all .5s ease-out
    &-to
      opacity: 1
  &-leave
    opacity: 1
    &-active
      transition: all .5s ease-out
    &-to
      opacity: 0
</style>