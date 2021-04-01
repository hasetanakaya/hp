<template>
  <div class="ab">
    <Mnu />
    <div class="ab_kv"></div>
    <Clm>
      <div class="ab_ld">
        <div class="ab_ld_wp">
          <img src="~/assets/img/ttl6.svg" alt="ttl6">
          <p>
            {{ $t('about.ab_ld_wp[0]') }}<br>
            {{ $t('about.ab_ld_wp[1]') }}<br>
            {{ $t('about.ab_ld_wp[2]') }}
          </p>
        </div>
      </div>
    </Clm>
    <div class="ab_his_imgs">
      <img src="~/assets/img/subttl1.svg" alt="subttl1" class="ab_his_imgs_sttl">
      <div class="ab_his_imgs_img"></div>
    </div>
    <div class="ab_his">
      <div class="ab_his_wp">
      </div>
      <!-- <Clm> -->
        <div class="ab_his_txt">
          <img src="~/assets/img/ttl7.svg" alt="ttl7">
          <p>
            {{ $t('about.ab_his_txt[0]') }}<br>
            {{ $t('about.ab_his_txt[1]') }}<br>
            {{ $t('about.ab_his_txt[2]') }}
          </p>
        </div>
      <!-- </Clm> -->
    </div>
    <Clm>
      <div class="ab_twn">
        <img class="ab_twn_ttl8" src="~/assets/img/ttl8.svg" alt="ttl8">
        <div class="ab_twn_wp">
          <div class="ab_twn_l">
            <p>
              {{ $t('about.ab_twn_l[0]') }}<br>
              {{ $t('about.ab_twn_l[1]') }}<br>
              {{ $t('about.ab_twn_l[2]') }}<br>
              {{ $t('about.ab_twn_l[3]') }}<br>
              {{ $t('about.ab_twn_l[4]') }}
            </p>
          </div>
          <div class="ab_twn_r">
            <img
              src="~/assets/img/twnimg1.jpg"
              srcset="~/assets/img/twnimg1.jpg 1x,~/assets/img/twnimg1@2x.jpg 2x"
              alt="ttl2"
            >
            <img
              src="~/assets/img/twnimg2.jpg"
              srcset="~/assets/img/twnimg2.jpg 1x,~/assets/img/twnimg2@2x.jpg 2x"
              alt="ttl2"
            >
            <img
              src="~/assets/img/twnimg3.jpg"
              srcset="~/assets/img/twnimg3.jpg 1x,~/assets/img/twnimg3@2x.jpg 2x"
              alt="ttl2"
            >
          </div>
        </div>
      </div>
    </Clm>
    <div class="ab_kn">
      <Clm>
        <div class="ab_kn_wp">
          <img class="ab_kn_ttl9" src="~/assets/img/ttl9.svg" alt="ttl9">
          <div class="ab_kn_r">
            <img
              src="~/assets/img/knimg.jpg"
              srcset="~/assets/img/knimg.jpg 1x,~/assets/img/knimg@2x.jpg 2x"
              alt="ttl2"
              class="ab_kn_l"
            >
            <p>
              {{ $t('about.ab_kn_r[0]') }}<br>
              {{ $t('about.ab_kn_r[1]') }}<br>
              {{ $t('about.ab_kn_r[2]') }}
            </p>
          </div>
        </div>
      </Clm>
    </div>
    <Footer />
  </div>
</template>


<style lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';

.ab
  @include wf-gen()    
  &_kv
    height: 594px
    color: $white
    background-image: url('~@/assets/img/kv2.jpg')
    @include retina
      background-image: url('~@/assets/img/kv2@2x.jpg')
    background-size: cover
    background-position: center
    @include mediaQuery-down(sm)
      height: 490px
      background-image: url('~@/assets/img/kv2sm.jpg')
      @include retina
        background-image: url('~@/assets/img/kv2sm@2x.jpg')
  &_ld
    margin: 121px auto 100px auto
    // width: 98%
    // width: 64%
    @include mediaQuery-down(sm)
      margin: 88px auto 0 auto
    &_wp
      display: flex
      align-items: flex-start
      // flex-wrap: wrap
      justify-content: space-evenly
      margin-left: auto
      margin-right: auto
      @include mediaQuery-down(md)
        flex-direction: column
      & img
        @include mediaQuery-down(md)
          display: block
          margin: 0 auto 72px auto
      & p
        font-size: 14px
        line-height: 2.5
        color: $key-txt
        max-width: 408px
        @include mediaQuery-down(md)
          margin: 0 auto 72px auto
          max-width: 636px
  &_his
    background-color: $sub-bg
    // max-height: 900px
    margin-top: -218px
    padding-top: 299px
    padding-bottom: 134px
    @include mediaQuery-down(sm)
      margin-top: -345px
      padding-top: 155px
      padding-bottom: 64px
    // position: relative
    &_wp
      width: 100%
      // position: absolute
      // top: -218.5px
      position: relative
      top: -218px
      @include mediaQuery-down(sm)
       top: -114px
    &_imgs
      position: relative
      justify-content: center
      display: flex
      // flex-wrap: wrap
      align-items: flex-start
      max-width: 1168px
      margin-left: auto
      margin-right: auto      
      &_sttl
        // position: absolute
        // left: 0
        // flex-basis: 20%
        position: relative
        @include mediaQuery-down(sm)
          // left: -6%
          margin-top: 40px
          left: -23px
      &_img
        // flex-basis: 80%
        // width: 100%
        position: relative
        width: 80%
        height: 437px
        background-image: url('~@/assets/img/hisimg.jpg')
        background-size: cover
        background-position: center
        @include retina
          background-image: url('~@/assets/img/hisimg@2x.jpg')
        @include mediaQuery-down(sm)
          width: 80%
          left: -30px
          height: 229px
          flex-basis: content
          background-image: url('~@/assets/img/hisimgsm@2x.jpg')
          @include retina
            background-image: url('~@/assets/img/hisimgsm@2x.jpg')
        // &_sm
        //   display: none
        //   @include mediaQuery-down(sm)
        //     display: block
        //     margin-left: 12% 
        // &_pc
        //   @include mediaQuery-down(sm)
        //     display: none
    &_txt
      // position: relative
      // top: -134px
      width: 56%
      margin-left: auto
      margin-right: auto
      max-width: 636px
      // padding-top: 300px
      // padding-bottom: 132px
      @include mediaQuery-down(sm)
        // top: -434px
        // padding-top: 155px
        // padding-bottom: 64px
        width: 80%
    
      & img
        @include mediaQuery-down(sm)
          display: block
          margin: auto
      & p
        margin-top: 50.5px
        font-size: 14px
        line-height: 2.5
        color: $key-txt
  &_twn
    // height: 640px
    // position: relative
    width: 90%
    margin: 198px auto 80px auto
    @include mediaQuery-down(md)
      // height: 1420px
      margin: 88px auto 80px auto
      width: 100%
    // &_en
    //   // height: 700px
    // &_ensm
    //   // height: 1730px
    &_ttl8
      // position: absolute
      // left: 6%
      margin-bottom: -88px
      @include mediaQuery-down(md)
        display: block
        margin: 0 auto 0 auto
        // left: 0
        // right: 0
        // margin: auto
    &_wp
      // top: 0
      width: 100%
      // position: absolute
      display: flex
      // align-items: flex-start
      // flex-wrap: wrap-reverse
      justify-content: space-between
      @include mediaQuery-down(md)
        flex-direction: column
        margin: 56px auto
    &_l
      margin-top: 180px
      max-width: 545px
      @include mediaQuery-down(md)
        margin: 0 auto 24px auto
        order: 2
      &_en
        // margin-bottom: 10px
      
      & p
        // margin-top: 174px
        font-size: 14px
        line-height: 2.5
        color: $key-txt
        @include mediaQuery-down(sm)
          // text-align: justify
    &_r
      max-width: 326px
      @include mediaQuery-down(md)
        order: 1
        margin: 0 auto
      & img
        margin-bottom: 46px
        width: 100%
  &_kn
    width: 100%
    background-color: $sub-bg
    &_wp
      // position: relative
      // width: 81%
      margin-left: auto
      margin-right: auto
      padding-top: 110px
      padding-bottom: 124px
      @include mediaQuery-down(md)
        padding-bottom: 48px
        padding-top: 46px
    &_ttl9
      // position: absolute
      // right: 10%
      // top: 30%
      margin-left: 61%
      margin-bottom: -200px 
      @include mediaQuery-down(md)
        display: block
        margin: auto

    &_l
      max-width: 474px
      @include mediaQuery-down(md)
        margin: 0 auto
        width: 100%
    &_r
      display: flex
      // align-items: flex-start
      // flex-wrap: wrap
      justify-content: space-evenly
      @include mediaQuery-down(md)
        flex-direction: column
        margin-top: 56px
      & p
        max-width: 338px
        margin-top: 286px
        font-size: 14px
        line-height: 2.5
        color: $key-txt
        @include mediaQuery-down(md)
          margin: 55px auto 0 auto
          max-width: 474px
</style>