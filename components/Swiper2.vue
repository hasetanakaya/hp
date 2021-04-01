<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-if="$i18n.locale === 'ja'" class="swiper-slide swiper-slide_2_1"></div>
      <div v-if="$i18n.locale === 'ja'" class="swiper-slide swiper-slide_2_2"></div>
      <div v-if="$i18n.locale === 'ja'" class="swiper-slide swiper-slide_2_3"></div>
      <div v-if="$i18n.locale === 'ja'" class="swiper-slide swiper-slide_2_4"></div>
      <div v-if="$i18n.locale === 'ja'" class="swiper-slide swiper-slide_2_5"></div>
      <div v-if="$i18n.locale === 'ja'" class="swiper-slide swiper-slide_2_6"></div>
      <div v-if="$i18n.locale === 'ja'" class="swiper-slide swiper-slide_2_7"></div>
      
      <div v-if="$i18n.locale === 'en'" class="swiper-slide swiper-slide_2_1en"></div>
      <div v-if="$i18n.locale === 'en'" class="swiper-slide swiper-slide_2_2en"></div>
      <div v-if="$i18n.locale === 'en'" class="swiper-slide swiper-slide_2_3en"></div>
      <div v-if="$i18n.locale === 'en'" class="swiper-slide swiper-slide_2_4en"></div>
      <div v-if="$i18n.locale === 'en'" class="swiper-slide swiper-slide_2_5en"></div>
      <div v-if="$i18n.locale === 'en'" class="swiper-slide swiper-slide_2_6en"></div>
      <div v-if="$i18n.locale === 'en'" class="swiper-slide swiper-slide_2_7en"></div>
      
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOption: {
        width: 303,
        speed: 1000,
        loop: true,
        effect: 'slide',
        spaceBetween: 10,
        breakpoints: {
          768: {
            width: 500,
            spaceBetween: 70
          }
        }
      }
    }
  }
}
</script>

<style　lang="sass">
@import '~assets/scss/_mixin.scss';
.swiper
  &-container
    height: 100%
    // height: 450px
  &-slide
    background-size: cover
    background-position: center
    &_2
      &_1
        background-image: url('~@/assets/img/ss21.png')
        @include retina
          background-image: url('~@/assets/img/ss21@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss21sm.png')
          @include retina
            background-image: url('~@/assets/img/ss21sm@2x.png')
      &_2
        background-image: url('~@/assets/img/ss22.png')
        @include retina
          background-image: url('~@/assets/img/ss22@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss22sm.png')
          @include retina
            background-image: url('~@/assets/img/ss22sm@2x.png')
      &_3
        background-image: url('~@/assets/img/ss23.png')
        @include retina
          background-image: url('~@/assets/img/ss23@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss23sm.png')
          @include retina
            background-image: url('~@/assets/img/ss23sm@2x.png')
      &_4
        background-image: url('~@/assets/img/ss24.png')
        @include retina
          background-image: url('~@/assets/img/ss24@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss24sm.png')
          @include retina
            background-image: url('~@/assets/img/ss24sm@2x.png')
      &_5
        background-image: url('~@/assets/img/ss25.png')
        @include retina
          background-image: url('~@/assets/img/ss25@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss25sm.png')
          @include retina
            background-image: url('~@/assets/img/ss25sm@2x.png')
      &_6
        background-image: url('~@/assets/img/ss26.png')
        @include retina
          background-image: url('~@/assets/img/ss26@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss26sm.png')
          @include retina
            background-image: url('~@/assets/img/ss26sm@2x.png')
      &_7
        background-image: url('~@/assets/img/ss27.png')
        @include retina
          background-image: url('~@/assets/img/ss27@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss27sm.png')
          @include retina
            background-image: url('~@/assets/img/ss27sm@2x.png')


      &_1en
        background-image: url('~@/assets/img/ss21en.png')
        @include retina
          background-image: url('~@/assets/img/ss21en@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss21ensm.png')
          @include retina
            background-image: url('~@/assets/img/ss21ensm@2x.png')  
      &_2en
        background-image: url('~@/assets/img/ss22en.png')
        @include retina
          background-image: url('~@/assets/img/ss22en@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss22ensm.png')
          @include retina
            background-image: url('~@/assets/img/ss22ensm@2x.png')
      &_3en
        background-image: url('~@/assets/img/ss23en.png')
        @include retina
          background-image: url('~@/assets/img/ss23en@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss23ensm.png')
          @include retina
            background-image: url('~@/assets/img/ss23ensm@2x.png')
      &_4en
        background-image: url('~@/assets/img/ss24en.png')
        @include retina
          background-image: url('~@/assets/img/ss24en@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss24ensm.png')
          @include retina
            background-image: url('~@/assets/img/ss24ensm@2x.png')
      &_5en
        background-image: url('~@/assets/img/ss25en.png')
        @include retina
          background-image: url('~@/assets/img/ss25en@2x.png')
        @include mediaQuery-down(sm)
          height: 297px
          background-image: url('~@/assets/img/ss25ensm.png')
          @include retina
            background-image: url('~@/assets/img/ss25ensm@2x.png')
      &_6en
        background-image: url('~@/assets/img/ss26en.png')
        @include retina
          background-image: url('~@/assets/img/ss26en@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss26ensm.png')
          @include retina
            background-image: url('~@/assets/img/ss26ensm@2x.png')
      &_7en
        background-image: url('~@/assets/img/ss27en.png')
        @include retina
          background-image: url('~@/assets/img/ss27en@2x.png')
        @include mediaQuery-down(sm)
          height: 277px
          background-image: url('~@/assets/img/ss27ensm.png')
          @include retina
            background-image: url('~@/assets/img/ss27ensm@2x.png')


</style>
