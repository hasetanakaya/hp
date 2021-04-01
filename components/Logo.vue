<template>
  <div class="lg" :class="{ 'lg-gray': gray}">
    <div class="lg_w">
      <img v-if="$i18n.locale === 'ja'" src="~/assets/img/logo.svg" alt="logo">
      <img v-if="$i18n.locale === 'ja'" src="~/assets/img/logo-lead.svg" alt="logo-lead" class="lg_lead">
      <img v-if="$i18n.locale === 'en' && !mediaQueryDownMd" src="~/assets/img/logoen.svg" alt="logo">
      <img v-if="$i18n.locale === 'en' && mediaQueryDownMd" src="~/assets/img/logoensm.svg" alt="logo">
    </div>
    <div class="lg_g">
      <img v-if="$i18n.locale === 'ja'"  src="~/assets/img/logo-g.svg" alt="logo-g">
      <img v-if="$i18n.locale === 'ja'"  src="~/assets/img/logo-lead-g.svg" alt="logo-lead-g" class="lg_lead">
      <!-- ロゴの文字（黒）　確認 -->
      <img v-if="$i18n.locale === 'en' && !mediaQueryDownMd"  src="~/assets/img/logo-gen.svg" alt="logo-g">
      <img v-if="$i18n.locale === 'en' && mediaQueryDownMd"  src="~/assets/img/logo-gensm.svg" alt="logo-g">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gray: { type: Boolean, default: false },
  },
  methods: {
    mediaQueryDownMd() {
      if(window.matchMedia('(max-width: 1000px)').matches) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="sass">
@import '~assets/scss/_mixin.scss';

.lg
  display: flex
  align-items: flex-start
  flex-wrap: wrap
  justify-content: space-around
  @include mediaQuery-down(md)
    width: 200px
  &_g
    display: none
  &.lg-gray
    & .lg_w
      display: none
    & .lg_g
      display: block
  &_lead
    margin-left: 18.3px
</style>