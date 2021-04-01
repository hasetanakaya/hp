<template>
  <div class="top">
    <Mnu />
    <!-- <div :style="styleObject" class="top_kv"> -->
      <div class="top_kv">
      <p class="top_kv_msg">
        {{ $t('index.top_kv_msg[0]') }} <br>
        {{ $t('index.top_kv_msg[1]') }} 
      </p>
    </div>
    <Clm>
      <div class="top_ab">
        <div class="top_ab_ld">
          <img class="top_ab_ttl1" v-if="lang === 'ja'" src="~/assets/img/ttl1.svg" alt="ttl1">
          <img class="top_ab_ttl1" v-if="lang === 'en'" src="~/assets/img/ttl1en.svg" alt="ttl1">
          <p>
            {{ $t('index.top_ab_ld[0]') }}<br>
            {{ $t('index.top_ab_ld[1]') }}<br>
            {{ $t('index.top_ab_ld[2]') }}
          </p>
        </div>
        <Btn class="top_ab_btn">
          <nuxt-link :to="localePath('about')">{{ $t('index.top_ab_btn') }}</nuxt-link>
        </Btn>
      </div>
    </Clm>
    <div class="top_fdimg"></div>
    <Clm>
      <div class="top_fd">
        <div class="top_fd_wp">
          <img
            src="~/assets/img/tohu.jpg"
            srcset="~/assets/img/tohu.jpg 1x,~/assets/img/tohu@2x.jpg 2x"
            alt="ttl2"
            class="top_fd_tofu"
          >
          <div class="top_fd_ld">
            <div class="top_fd_ttl2">
              <img v-if="lang === 'ja'" src="~/assets/img/ttl2.svg" alt="ttl2">
              <img v-if="lang === 'en'" src="~/assets/img/ttl2en.svg" alt="ttl2">
            </div>
            <p>
              {{ $t('index.top_fd_ld[0]') }}<br>
              {{ $t('index.top_fd_ld[1]') }}
            </p>
          </div>
        </div>
        <Btn class="top_fd_btn">
            <nuxt-link :to="localePath('food')">{{ $t('index.top_ab_btn') }}</nuxt-link>
        </Btn>
      </div>
    </Clm>
    <div class="top_rmimg"></div>
    <div class="top_rm">
      <div class="top_rm_wp" :class="{ top_rm_wp_ensm: viewMode === 'en_sm'}">
        <img v-if="lang === 'ja'" src="~/assets/img/ttl3.svg" alt="ttl3">
        <img v-if="viewMode === 'en_pc'" src="~/assets/img/ttl3en.svg" alt="ttl3">
        <img v-if="viewMode === 'en_sm'" src="~/assets/img/ttl3ensm.svg" alt="ttl4">
        <div class="top_rm_wp_ss" :class="{ top_rm_wp_ss_ensm: viewMode === 'en_sm'}">
          <Swiper1 />
        </div>
      </div>
      <div class="top_rm_btn_wp" :class="{ top_rm_btn_wp_jasm: viewMode === 'ja_sm'}">
        <Btn class="top_rm_btn">
          <nuxt-link :to="localePath('room')">{{ $t('index.top_ab_btn') }}</nuxt-link>
        </Btn>
      </div>
      
    </div>
    <h2 class="top_map">{{ $t('index.top_map') }}</h2>
    <Gmap />
    <Clm>
      <div class="top_map_ad" :class="{ top_map_ad_en: lang === 'en'}">
        <div class="top_map_det" >
          <p><img src="~/assets/img/pin.svg" alt="pin"></p>
          <p v-if="viewMode === 'ja_sm'" class="top_map_det_lt">{{ $t('index.top_map_ad[3]') }}</p>
          <p v-else class="top_map_det_lt">{{ $t('index.top_map_ad[0]') }}</p>
        </div>
        <div class="top_map_det">
          <p><img src="~/assets/img/tel.svg" alt="tel"></p>
          <p class="top_map_det_lt">{{ $t('index.top_map_ad[1]') }}</p>
        </div>
        <div class="top_map_det">
          <p><img src="~/assets/img/clk.svg" alt="clk"></p>
          <p class="top_map_det_lt">{{ $t('index.top_map_ad[2]') }}</p>
        </div>
      </div>
      <div class="top_map_msg">
        <div class="top_map_msg_wp" :class="{ top_map_msg_wp_en: viewMode === 'en_pc'}">
          <h3>{{ $t('index.top_map_msg[0]') }}</h3>
          <p>{{ $t('index.top_map_msg[1]') }}</p>
        </div>
        <div class="top_map_msg_wp">
          <h3>{{ $t('index.top_map_msg[2]') }}</h3>
          <p>{{ $t('index.top_map_msg[3]') }}</p>
        </div>
      </div>
    </Clm>
    <div class="top_ts">
      <div class="top_ts_wp" :class="{ top_ts_wp_ensm: viewMode === 'en_sm'}">
        <img v-if="lang === 'ja'" src="~/assets/img/ttl4.svg" alt="ttl4">
        <img v-if="viewMode === 'en_pc'" src="~/assets/img/ttl4en.svg" alt="ttl4">
        <img v-if="viewMode === 'en_sm'" src="~/assets/img/ttl4ensm.svg" alt="ttl4">
        <div class="top_ts_wp_ss" :class="{ top_ts_wp_ss_ensm: viewMode === 'en_sm'}">
          <Swiper2 />
        </div>
      </div>
    </div>
    <Clm>
      <IgFeed />
    </Clm>
    <Footer />
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      lang: 'ja',
      viewMode: 'ja_pc',
      mediaSize: 'pc'
    }
  }, 
  mounted() {
    this.$nextTick(() => {
      const windowSize = window.matchMedia('(max-width: 1024px)');
      this.setViewMode(windowSize);
      windowSize.addListener(this.setViewMode)
    })
  },
  methods: {
    setViewMode (windowSize) {
      this.lang = this.$i18n.locale
      this.viewMode = this.$checkViewMode(this.lang, windowSize)
      if (this.viewMode === 'ja_pc' || this.viewMode === 'en_pc') {
        this.mediaSize = 'pc'
      } else {
        this.mediaSize = 'sm'
      }
    }
  }
}
  // data: function() {
    
    // let innerHeight = 0
    // if(process.browser) {
    //   innerHeight = window.innerHeight
    // }
    // return {
    //   styleObject: {
    //     minHeight: innerHeight + 'px'
    //   }
    // }
  // },
  // methods: {
  //   // handleResize: function() {
  //   //   this.styleObject.minHeight = window.innerHeight + 'px'
  //   // }
  //   mediaQueryDownMd() {
  //     if(window.matchMedia('(max-width: 1000px)').matches) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
    
  // },
  // mounted() {
  //   window.addEventListener('resize', this.handleResize)

  // },
  // beforeDestroy() {
  //   window.removeEventListener('resize', this.handleResize)
  // },

</script>

<style lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';

.top
  @include wf-ten()
  &_kv
    height: 710px
    color: $white
    background-image: url('~@/assets/img/kv1.jpg')
    @include retina
      background-image: url('~@/assets/img/kv1@2x.jpg')
    background-size: cover
    background-position: center
    display: flex
    align-items: center
    @include mediaQuery-down(xs)
      height: 490px
      overflow: hidden
      background-position: left
      background-image: url('~@/assets/img/kv1sm.jpg')
      @include retina
        background-image: url('~@/assets/img/kv1sm@2x.jpg')
    &_msg
      width: 85%
      max-width: 788.2px
      margin-right: auto
      margin-left: auto
      font-size: 24px
      line-height: 1.875
      // text-shadow: 0 3px rgba(0, 0, 0, 16%)
      letter-spacing: 2px
      @include mediaQuery-down(xs)
        display: none
  &_ab
    margin: 192px auto 143px auto
    @include mediaQuery-down(md)
      margin: 88px auto 80px auto
    &_ttl1
      @include mediaQuery-down(md)
        display: block
        margin: 0 auto 72px auto
    & p
      max-width: 650px
      @include mediaQuery-down(md)
        margin: 0 auto 72px auto
        
    &_ld
      display: flex
      justify-content: space-evenly
      margin-left: auto
      margin-right: auto
      // max-width: 650px
      font-size: 14px
      line-height: 2.5
      color: $key-txt
      @include wf-gen()
      @include mediaQuery-down(md)
        flex-direction: column
    &_btn
      margin-top: 134px
      margin-left: auto
      margin-right: auto
      @include mediaQuery-down(md)
        margin-top: 0
  &_fdimg
    height: 450px
    background-size: cover
    background-position: center
    background-image: url('~@/assets/img/fdimg.jpg')
    @include retina
      background-image: url('~@/assets/img/fdimg@2x.jpg')
    @include mediaQuery-down(sm)
      height: 288px
      background-image: url('~@/assets/img/fdimgsm.jpg')
      @include retina
        background-image: url('~@/assets/img/fdimgsm@2x.jpg')
    
      
  &_fd
    &_wp
      display: flex
      justify-content: space-around
      margin: 240px auto 104px auto  
      @include mediaQuery-down(md)
        flex-direction: column
        margin: 66px auto 64px auto
        align-item: center
    &_tofu
      width: 419px
      @include mediaQuery-down(md)
        margin: 0 auto
        width: 302px
        order: 2
      @include mediaQuery-down(sm)
        margin: 0 auto
    &_ld
      max-width: 468px
      margin-bottom: 167px
      @include mediaQuery-down(md)
        margin: 0 auto 64px auto
        order: 1
      & p
        margin-top: 43px
        font-size: 14px
        line-height: 2.5
        color: $key-txt
        @include wf-gen()
    &_ttl2
      @include mediaQuery-down(md)
        text-align: center
    &_btn
      margin-top: -150px
      margin-left: 65%
      margin-bottom: 240px
      @include mediaQuery-down(md)
        margin: 0 auto 100px auto
  &_rmimg
    height: 450px
    background-size: cover
    background-position: center
    background-image: url('~@/assets/img/rmimg.jpg')
    @include retina
      background-image: url('~@/assets/img/rmimg@2x.jpg')
    @include mediaQuery-down(sm)
      height: 435px
      background-image: url('~@/assets/img/rmimgsm.jpg')
      @include retina
      background-image: url('~@/assets/img/rmimgsm@2x.jpg')
  &_rm
    &_wp
      width: 100%
      display: flex
      flex-wrap: wrap
      justify-content: flex-end
      align-items: flex-start
      margin: 240px auto 88px auto
      position: relative
      overflow: hidden
      @include mediaQuery-down(md)
        margin: 80px auto 64px auto
        flex-direction: column
      & img
        margin-right: 5%
        @include mediaQuery-down(md)
          margin: auto
      &_ss
        width: 75%
        height: 416px
        @include mediaQuery-down(md)
          margin-top: 40px
          width: 90%
          margin-left: 10%
        @include mediaQuery-down(sm)
          height: 252px
    &_btn
      margin-left: auto
      margin-right: auto
      &_wp
        width: 100%
        margin: 0 auto 124px auto
        @include mediaQuery-down(md)
          margin: 0 auto 64 auto
  &_map
    font-size: 30px
    letter-spacing: 0.1
    font-weight: normal
    text-align: center
    margin-bottom: 40px
    &_det 
      margin-bottom: 10px
      &_lt
        @include mediaQuery-down(sm)
          width: 250px
      & p
        display: inline-block
        vertical-align: text-top
        line-height: 1.5
    &_ad
      width: 70%
      margin-top: 44px
      margin-left: auto
      margin-right: auto
      display: flex
      justify-content: space-around
      align-items: flex-start
      flex-wrap: wrap
      height: 100%
      line-height: 3
      @include mediaQuery-down(md)
        max-width: 300px
        width: 100%
      &_en
        max-width: 450px
      & p
        @include wf-gen()
        align-items: center
        font-size: 14px
        color: $key-txt
        & img
          margin-right: 8px
    &_msg
      margin: 90px auto 98px auto
      display: flex
      align-items: flex-start
      flex-wrap: wrap
      justify-content: space-between
      width: 70%
      @include mediaQuery-down(md)
        margin: 63px auto 32px auto
        flex-direction: column
        width: 100%
      &_wp
        background-color: $sub-bg
        max-width: 336px
        padding: 21px 23px 23px 23px
        text-align: center
        border-radius: 15px
        @include mediaQuery-down(md)
          margin: 0 auto 56px auto
          width: 100%
        &_en
          height: 198px
        & h3
          font-size: 24px
          font-weight: normal
        & p
          @include wf-gen()
          color: $key-txt
          font-size: 14px
          margin-top: 23px
          line-height: 2.3
  &_ts
    background-color: $key-bg
    padding-top: 125px
    padding-bottom: 99px
    @include mediaQuery-down(md)
      padding-top: 64px
      padding-bottom: 72px
    &_wp
      width: 100%
      display: flex
      flex-wrap: wrap
      justify-content: flex-end
      align-items: flex-start
      position: relative
      overflow: hidden
      & img
        margin-right: 7%
        @include mediaQuery-down(md)
          margin: auto
      &_ss
        width: 75%
        height: 448px
        @include mediaQuery-down(md)
          margin-top: 64px
          width: 90%
          margin-left: 10%
        @include mediaQuery-down(sm)
          height: 297px

</style>   