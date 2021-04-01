<template>
  <footer class="ft">
    <div class="ft_wp">
      <div class="ft_l">
        <Logo />
      </div>
      <!-- <div class="ft_r"> -->
        <address class="ft_ad">
          <p v-if="viewMode === 'en_sm'">{{ $t('footer.ft_ad[5]') }}</p>
          <p v-else >{{ $t('footer.ft_ad[0]') }}</p>
          <p v-if="viewMode !== 'en_sm'">{{ $t('footer.ft_ad[1]') }}</p>
          <p>{{ $t('footer.ft_ad[2]') }}</p>
          <p v-if="viewMode === 'en_sm'">{{ $t('footer.ft_ad[4]') }}</p>
          <p>{{ $t('footer.ft_ad[3]') }}</p>
        </address>
        <ul class="ft_lnks">
          <li><a href="https://www.facebook.com/hasetanakaya" target="_blank" rel="noopener noreferrer"><img src="~/assets/img/fb.svg" alt="fb">Facebook</a></li>
          <li><a href="https://www.instagram.com/hasetanakaya" target="_blank" rel="noopener noreferrer"><img src="~/assets/img/ig.svg" alt="ig">Instagram</a></li>
          <!-- <li ><a href="/"><img src="~/assets/img/en.svg" alt="en">English</a></li> -->
          <li v-if="lang === 'ja'">
            <nuxt-link :to="switchLocalePath('en')" :class="{ 'mnu-gray': gray }"><img src="~/assets/img/en.svg" alt="en">English</nuxt-link>
          </li>
          <li v-if="lang === 'en'">
            <nuxt-link :to="switchLocalePath('ja')" :class="{ 'mnu-gray': gray }"><img src="~/assets/img/en.svg" alt="la">日本語</nuxt-link>
          </li>  
        </ul>
      <!-- </div> -->
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    gray: { type: Boolean, default: false },
  },
  data: () => {
    return {
      lang: 'ja_pc',
      viewMode: 'ja'
    }
  }, 
  mounted() {
    this.$nextTick(() => {
      const windowSize = window.matchMedia('(max-width: 520px)');
      this.setViewMode(windowSize);
      windowSize.addListener(this.setViewMode)
    })
  },
  methods: {
    setViewMode (windowSize) {
      this.lang = this.$i18n.locale
      this.viewMode = this.$checkViewMode(this.lang, windowSize)
    }
  }
}
</script>

<style lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';
.ft
  @include wf-gen()
  background-color: $key
  padding: 48px 36px
  &_wp
    max-width: 983px
    margin-right: auto
    margin-left: auto
    display: flex
    justify-content: space-between
    @include mediaQuery-down(md)
      flex-direction: column
  // &_r
  //   display: flex
  //   // margin-left: 110px
  //   @include mediaQuery-down(sm)
  //     flex-direction: column
  //   @include mediaQuery-down(sm)
  //     margin-left: 0
  //     margin-top: 32px
  &_ad
    min-width: 95px
    font-size: 16px
    line-height: 1.6875
    color: $white
    font-style: normal
    @include mediaQuery-down(md)
      margin-top: 32px
  &_lnks
    // margin-left: 82px
    padding: 0
    list-style: none
    min-width: 95px
    @include mediaQuery-down(md)
      // margin-left: 0
      margin-top: 32px
    & a
      font-size: 16px
      color: $white
      text-decoration: none
    & img
      margin-right: 5px
</style>