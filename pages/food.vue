<template>
  <div class="fd">
    <Mnu :gray="true" />
    <Clm>
      <img v-if="mediaSize === 'pc'" src="~/assets/img/ttl10.svg" alt="ttl10" class="fd_ttl">
      <img v-if="mediaSize === 'sm'" src="~/assets/img/ttl10sm.svg" alt="ttl10" class="fd_ttl">
      <div class="fd_ld">
        <p>
          {{ $t('food.fd_ld[0]') }}<br>
          {{ $t('food.fd_ld[1]') }}
        </p>
      </div>

    </Clm>
    <div class="fd_img"></div>
    <Clm>
      <div class="fd_goma_wp">
        <div class="fd_goma_ttlwp">
          <img v-if="viewMode === 'ja_pc'" src="~/assets/img/ttl11.svg" alt="ttl11" class="fd_goma_ttl11">
          <img v-if="viewMode === 'ja_sm'" src="~/assets/img/ttl11sm.svg" alt="ttl11" class="fd_goma_ttl11">
          <img v-if="viewMode === 'en_pc'" src="~/assets/img/ttl11en.svg" alt="ttl11" class="fd_goma_ttl11">
          <img v-if="viewMode === 'en_sm'" src="~/assets/img/ttl11ensm.svg" alt="ttl11" class="fd_goma_ttl11">
        <!-- <div class="fd_goma"> -->
        </div>
        <div class="fd_goma_r" >
          <img
            src="~/assets/img/gomaimg.jpg"
            srcset="~/assets/img/gomaimg.jpg 1x,~/assets/img/gomaimg@2x.jpg 2x"
            alt="ttl2"
            class="fd_goma_l" :class="{fd_goma_l_ensm: viewMode === 'en_sm'}"
          >
          <p>
            {{ $t('food.fd_goma_r.p[0]') }}<br>
            {{ $t('food.fd_goma_r.p[1]') }}
          </p>
        </div>
        <!-- </div> -->
      </div>
    </Clm>
    <div class="fd_bordar"></div>
    <!-- <div v-if="mediaSize === 'sm'" class="fd_bordar"></div> -->
    <div class="fd_siki">
      <div class="fd_siki_bg">
        <div class="fd_siki_l" :class="{fd_siki_l_enpc: viewMode === 'en_pc'}">
          <!-- <h1 class="fd_subject">{{ $t('food.fd_siki_l.h1') }}</h1> -->
          <img v-if="$i18n.locale === 'ja'" src="~/assets/img/ttl12.svg" alt="ttl12">
          <img v-if="$i18n.locale === 'en'" src="~/assets/img/ttl12en.svg" alt="ttl12">
          <p>{{ $t('food.fd_siki_l.p') }}</p>
        </div>
      </div>
      
      <!-- <div class="fd_siki_wp"> -->
      <img
        src="~/assets/img/sikiimg.jpg"
        srcset="~/assets/img/sikiimg.jpg 1x,~/assets/img/sikiimg@2x.jpg 2x"
        alt="ttl2"
        class="fd_siki_r"
      >
    </div>
    <!-- </div> -->
    <div class="fd_bordar"></div>
    <Clm>
      <div class="fd_rcm">
        <!-- <h1 class="fd_subject">{{ $t('food.fd_rcm_mnus.h1') }}</h1> -->
        <img v-if="$i18n.locale === 'ja'" src="~/assets/img/ttl13.svg" alt="ttl13">
        <img v-if="$i18n.locale === 'en'" src="~/assets/img/ttl13en.svg" alt="ttl13">
        <div class="fd_rcm_mnus">
          <div class="fd_rcm_mnus_wp">
            <img
              src="~/assets/img/fdimg3.jpg"
              srcset="~/assets/img/fdimg3.jpg 1x,~/assets/img/fdimg3@2x.jpg 2x"
              alt="fdimg3"
            >
            <h3>{{ $t('food.fd_rcm_mnus.h3[0]') }}</h3>
            <p>{{ $t('food.fd_rcm_mnus.p[0]') }}</p>
          </div>
          <div class="fd_rcm_mnus_wp">
            <img
              src="~/assets/img/fdimg4.jpg"
              srcset="~/assets/img/fdimg4.jpg 1x,~/assets/img/fdimg4@2x.jpg 2x"
              alt="fdimg4"
            >
            <h3>{{ $t('food.fd_rcm_mnus.h3[1]') }}</h3>
            <p>{{ $t('food.fd_rcm_mnus.p[1]') }}</p>
          </div>
          <div class="fd_rcm_mnus_wp">
            <img
              src="~/assets/img/fdimg5.jpg"
              srcset="~/assets/img/fdimg5.jpg 1x,~/assets/img/fdimg5@2x.jpg 2x"
              alt="fdimg5"
            >
            <h3>{{ $t('food.fd_rcm_mnus.h3[2]') }}</h3>
            <p>{{ $t('food.fd_rcm_mnus.p[2]') }}</p>
          </div>
        </div>
      </div>
    </Clm>
    <div class="fd_htl">
      <div class="fd_htl_wp">
        <div class="fd_htl_img"></div>
        <!-- <h1 class="fd_subject">{{ $t('food.fd_htl.h1') }}</h1> -->
        <img v-if="viewMode === 'ja_pc'" src="~/assets/img/ttl14.svg" alt="ttl14" class="fd_htl_ttl14">
        <img v-if="viewMode === 'ja_sm'" src="~/assets/img/ttl14sm.svg" alt="ttl14" class="fd_htl_ttl14">
        <img v-if="viewMode === 'en_pc'" src="~/assets/img/ttl14en.svg" alt="ttl14" class="fd_htl_ttl14">
        <img v-if="viewMode === 'en_sm'" src="~/assets/img/ttl14ensm.svg" alt="ttl14" class="fd_htl_ttl14">
      </div>
      <p>{{ $t('food.fd_htl.p') }}</p>
    </div>
    <!-- <Clm> -->
      <div class="fd_grp">
        <div class="fd_grp_wp">
          <!-- <h1 class="fd_subject">{{ $t('food.fd_grp.h1') }}</h1> -->
          <img v-if="viewMode === 'ja_pc'" src="~/assets/img/ttl15.svg" alt="ttl15" class="fd_grp_l">
          <img v-if="viewMode === 'ja_sm'" src="~/assets/img/ttl15sm.svg" alt="ttl15" class="fd_grp_l">
          <img v-if="viewMode === 'en_pc'" src="~/assets/img/ttl15en.svg" alt="ttl15" class="fd_grp_l">
          <img v-if="viewMode === 'en_sm'" src="~/assets/img/ttl15ensm.svg" alt="ttl15" class="fd_grp_l">
          <div class="fd_grp_img"></div>
        </div>
        <div class="fd_grp_wp2">
          <p>{{ $t('food.fd_grp.p[0]') }}</p>
          <div class="fd_grp_bt">
            <a href="/Pamphlet.pdf" download="Pamphlet.pdf">{{ $t('food.fd_grp.p[1]') }}</a>
          </div>
        </div>
      </div>
    <!-- </Clm> -->
    
    <div class="fd_rsv">
      <div class="fd_rsv_txt">
        <p :class="{fd_rsv_txt_ensm: viewMode === 'en_sm'}">{{ $t('food.fd_rsv[0]') }}<br>{{ $t('food.fd_rsv[1]') }}</p>
      </div>
    </div>
   
    <Footer />
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      lang: 'ja_pc',
      viewMode: 'ja',
      mediaSize: 'pc'
    }
  }, 
  mounted() {
    this.$nextTick(() => {
      const windowSize = window.matchMedia('(max-width: 768px)');
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
</script>

<style lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';

.fd
  &_bordar
    width: 203px
    border-bottom: 1px solid #000000
    margin: 0 auto 88.5px auto
    padding-top: 100px
    @include mediaQuery-down(md)
      margin: 0 auto 40px auto
      padding-top: 40px
  // &_subject
  //   font-size: 30px
  //   @include wf-ten()
  &_ttl
    // margin-top: 185px
    // margin-left: 71px
    margin: 185px auto 88px 71px
    @include mediaQuery-down(sm)
      display: block
      margin: 131px auto 36px auto
  &_ld
    @include wf-ten()
    // margin-top: 88px
    margin-bottom: 124px
    display: flex
    justify-content: flex-end
    @include mediaQuery-down(md)
      justify-content: center
      margin-bottom: 80px
    & p
      width: 710px
      font-size: 14px
      line-height: 2.5
      letter-spacing: 2px
      @include mediaQuery-down(md)
        width: 70%
        max-width: 530px
      @include mediaQuery-down(sm)
        width: 100%
        
  &_img
    height: 515px
    // width: 80%
    margin-left: auto
    width: 89%
    background-image: url('~@/assets/img/fdimg6.jpg')
    @include retina
      background-image: url('~@/assets/img/fdimg6@2x.jpg')
    background-size: cover
    background-position: center
    @include mediaQuery-down(md)
      width: 100%
      margin: auto
    @include mediaQuery-down(sm)
      height: 306px
    
  &_goma
    width: 90%
    &_wp
      max-width: 1028px
      width: 95%
      margin: 172px auto 0 auto
      @include mediaQuery-down(md)
        margin: 56px auto 0 auto
    &_ttlwp
      margin-bottom: -50px
      margin-left: 350px
      @include mediaQuery-down(md)
        text-align: center
        margin: auto

    &_l
      max-width: 100%
      max-height: 237px
      @include mediaQuery-down(md)
        margin-top: 200px
        display: block
        margin: auto
      // &_ensm
      //   margin-top: 240px  
    &_r
      display: flex
      justify-content: space-between
      @include mediaQuery-down(md)
        flex-direction: column
        // margin: 56px auto 55.5px auto
        margin: 36px auto 0 auto
      & p
        margin-top: 88px
        font-size: 14px
        line-height: 2.5
        color: $key-txt
        max-width: 659px
        @include mediaQuery-down(md)
          margin: 36px auto 0 auto
    // &_wp:after
    //   content: ''
    //   display: block
    //   height: 1px
    //   width: 203px
    //   margin-left: auto
    //   margin-right: auto
    //   margin-bottom: 71.5px
    //   background-color: black
  &_siki
    // position: relative
    height: 500px
    margin: 100px auto 0 auto
    max-width: 1100px
    // width: 90%
    position: relative
    @include mediaQuery-down(md)
      display: flex
      flex-direction: column
      margin: 150px auto 0 auto
      height: 90%
    // &_jasm
    //   height: 420px
    // &_ensm
    //   height: 515px
    &_bg
      // position: absolute
      max-width: 808px
      // height: 438px
      background-color: $sub-bg
      padding-top: 101px
      padding-left: 78px
      padding-bottom: 74px
      @include mediaQuery-down(md)
        order: 2
        padding-left: 0
        padding-top: 93px
        padding-bottom: 64px
        // padding-top: 230px
        max-width: 100%

        // left: -15%
        // width: 130%

      //   height: 400px
      // &_ensm
      //   height: 500px
    &_l
      max-width: 367px
      // margin-bottom: 13%
      @include mediaQuery-down(md)
        // order: 2
        // top: 115px
        // padding: 40px 0 64px 0
        margin: auto
        width: 85%
      // &_enpc
        // margin-bottom: 8%
      & img
        width: 100%
        margin-bottom: 55px
        @include mediaQuery-down(md)
          margin: 20px auto
      & p
        // margin-top: 60px
        font-size: 14px
        line-height: 2.5
        color: $key-txt
        // @include mediaQuery-down(md)
        //   margin-top: 30px
    
    &_r
      max-width: 577px
      margin-top: -300px
      margin-left: 500px
      position: absolute
      right: 0
      bottom: 0
      @include mediaQuery-down(md)
        width: 302px
        margin: 0 auto -150px auto
        // z-index: 1
        left: 0
        order: 1
        top: -100px
      @include mediaQuery-down(sm)
        display: block
        margin: 0 auto -100px auto
        // z-index: 1
        
    // &:after
    //   content: ''
    //   display: block
    //   height: 1px
    //   width: 203px
    //   margin: 175.5px auto 101.5px auto
    //   background-color: black
  
  &_rcm
    // margin-left: 71px
    margin: 0 auto 123px auto
    // margin-bottom: 123px
    width: 95%
    // max-width: 1100px
    @include mediaQuery-down(md)
      margin-bottom: 30px
    & img
      @include mediaQuery-down(md)
        display: block
        margin-left: auto
        margin-right: auto
    &_mnus
      margin-top: 52px
      display: flex
      // align-items: flex-start
      // flex-wrap: wrap
      justify-content: space-between
      @include mediaQuery-down(md)
        flex-direction: column
        margin-top: 32px
      &_wp
        max-width: 315px
        width: 100%
        margin: 0 auto 35px auto
        & h3
          @include wf-ten()
          margin-top: 29px
          font-size: 24px
          line-height: 1.875
          color: $key
          @include mediaQuery-down(md)
            margin-top: 19px
        & img
          width: 100%
          @include mediaQuery-down(md)
            display: block
            margin-left: auto
            margin-right: auto
        & p
          @include wf-gen()
          margin-top: 16px
          font-size: 14px
          line-height: 1.5
          color: $key-txt
          @include mediaQuery-down(md)
            margin-top: 6px
  &_htl
    background-color: $sub-bg
    padding-top: 124px
    padding-bottom: 130px
    @include mediaQuery-down(sm)
      padding-top: 48px
      padding-bottom: 40px
    // position: relative
    
    // & h1
    //   -webkit-writing-mode: vertical-rl
    //   -ms-writing-mode: tb-rl
    //   writing-mode: vertical-rl
    //   // position: absolute
    //   top: 124px
    //   right: 14%
    //   letter-spacing: 10px
    &_wp
      display: flex
      align-items: flex-start
      // flex-wrap: wrap-reverse
      @include mediaQuery-down(sm)
        flex-direction: column
    &_img
      width: 77%
      height: 486px
      margin-right: 100px
      background-image: url('~@/assets/img/fdimg7.jpg')
      @include retina
        background-image: url('~@/assets/img/fdimg7@2x.jpg')
      @include mediaQuery-down(md)
        margin-right: 50px
      @include mediaQuery-down(sm)
        order: 2
        margin: 0
        height: 295px
        width: 100%
      background-size: cover
      background-position: 50%
    &_ttl14
      @include mediaQuery-down(sm)
        order: 1
        disply: block
        margin: auto
    & img
      margin-bottom: 180px
      @include mediaQuery-down(sm)
        margin: 40px auto
      // margin-bottom: 369px
      // position: absolute
      // top: 124px
      // right: 15%
    & p
      // position: absolute
      margin-left: 11%
      margin-top: 54px
      line-height: 2.5
      max-width: 600px
      @include wf-gen()
      font-size: 14px
      color: $key-txt
      @include mediaQuery-down(sm)
        margin: 40px auto 0 auto
        width: 80%
  &_grp
    // padding-bottom: 284px
    // position: relative
    // width: 87%
    margin-top: 124px
    // margin-left: 104px
    // display: flex
    // align-items: flex-start
    @include mediaQuery-down(sm)
      margin-top: 44px
    &_wp
      // position: absolute
      display: flex
      align-items: flex-start
      // flex-wrap: wrap
      justify-content: space-evenly
      max-width: 1126px
      margin-right: auto
      margin-left: auto
      @include mediaQuery-down(sm)
        flex-direction: column
    &_wp2
      max-width: 1126px
      margin-right: auto
      margin-left: auto
      & p
        max-width: 510px
    // & h1
    //   -webkit-writing-mode: vertical-rl
    //   -ms-writing-mode: tb-rl
    //   writing-mode: vertical-rl
    //   letter-spacing: 10px
    //   margin-right: 95px
      & p
        max-width: 600px
          
    &_img
      width: 100%
      max-width: 845px
      height: 486px
      background-image: url('~@/assets/img/fdimg8.jpg')
      background-size: cover
      background-position: center
      @include retina
        background-image: url('~@/assets/img/fdimg8@2x.jpg')
      @include mediaQuery-down(md)
        width: 80%
      @include mediaQuery-down(sm)
        margin: 0
        height: 295px
        width: 100%

      
    &_l
      // margin-right: 95px
      margin-bottom: 40px
      @include mediaQuery-down(md)
        margin: 0px auto 50px auto
      @include mediaQuery-down(sm)
        display: block
        margin: 0 auto 40px auto
    &_bt
      // position: absolute
      // left: 13%
      // bottom: 124px
      margin: 40px auto 124px 200px
      
      @include mediaQuery-down(md)
        text-align: center
        margin: 0px auto 50px auto
      &_bt:hover
        opacity: 0.8
    & a
      text-decoration: none
      color: #FFFFFF
      display: inline-block
      font-family: source-han-sans-japanese
      background: #8D857B
      padding: 10px 20px
      font-size: 24px
      border-radius: 20px
      
        
    & p
      // position: absolute
      // left: 13%
      // bottom: 220px
      // margin: 50px auto
      @include wf-gen()
      
      font-size: 14px
      line-height: 2.5
      color: $key-txt  
      width: 80%
      margin: 40px auto 20px 200px        
      @include mediaQuery-down(md)
        margin: 40px auto
  &_rsv
    background-color: $sub-bg
    width: 100%
    // height: 355px
    overflow: hidden
    &_txt
      margin: 124px auto
      // width: 324px
      // height: 100px  
      // display: flex
      // justify-content: center  
      text-align: center
      text-al  
      @include mediaQuery-down(md)
        margin: 48px auto
        width: 85%
      & p
        // position: absolute
        text-align: center
        display: inline-block
        box-sizing: border-box
        font-family: source-han-sans-japanese
        font-size: 24px
        padding: 20px 20px
        border-radius: 20px
        color: #FFFFFF
        background: #C48585
        // white-space: nowrap

</style>