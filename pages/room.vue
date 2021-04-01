<template>
  <div class="rm">
    <Mnu :gray="true" />
    <Clm>
      <img v-if="mediaSize === 'pc'" src="~/assets/img/ttl16.svg" alt="ttl16" class="rm_ttl">
      <img v-if="mediaSize === 'sm'" src="~/assets/img/ttl16sm.svg" alt="ttl16" class="rm_ttl">
      <div class="rm_ld">
        <p>
          {{ $t('room.rm_ld[0]') }}<br>
          {{ $t('room.rm_ld[1]') }}
        </p>
      </div>
    </Clm>
    <div class=rm_img>
      <div v-if="mediaSize === 'pc'" class="rm_img_wp">
        <div id="rm_img_main" class="rm_img_main2">
          <!-- <img v-bind:src="mainImg[0]" v-bind:srcset="mainImg[1]">
          <img src="~/assets/img/rmimg2.jpg" srcset="~/assets/img/rmimg2.jpg 1x, ~/assets/img/rmimg2@2x.jpg 2x" class="rm_img" onclick="changeImg2" /> -->
        </div>
        <ul>
          <li><button @click="changeImg2"><img src="~/assets/img/ss11.jpg" srcset="~/assets/img/ss11.jpg 1x, ~/assets/img/ss11@2x.jpg 2x" class="rm_img_tmb" /></button></li>
          <li><button @click="changeImg3"><img src="~/assets/img/ss12.jpg" srcset="~/assets/img/ss12.jpg 1x, ~/assets/img/ss12@2x.jpg 2x" class="rm_img_tmb" /></button></li>
          <li><button @click="changeImg4"><img src="~/assets/img/ss13.jpg" srcset="~/assets/img/ss13.jpg 1x, ~/assets/img/ss13@2x.jpg 2x" class="rm_img_tmb" /></button></li>
          <li><button @click="changeImg5"><img src="~/assets/img/ss14.jpg" srcset="~/assets/img/ss14.jpg 1x, ~/assets/img/ss14@2x.jpg 2x" class="rm_img_tmb" /></button></li>
          <li><button @click="changeImg6"><img src="~/assets/img/ss15.jpg" srcset="~/assets/img/ss15.jpg 1x, ~/assets/img/ss15@2x.jpg 2x" class="rm_img_tmb" /></button></li>
        </ul>
      </div>
      <div v-if="mediaSize === 'sm'" class="rm_ss">
        <Swiper1 />
      </div>
      <div v-if="mediaSize === 'pc'" class="rm_bordar"></div>
      <div class="rm_det">
        <div class="rm_det_contents rm_det_contents_img">
          <div class="rm_det_img" :class="{rm_det_img_enpc: viewMode === 'en_pc'}"></div>
        </div>
        <div class="rm_det_contents rm_det_contents_table">
          <img v-if="viewMode === 'ja_pc'" src="~/assets/img/rmimg8.svg" alt="ttl14">
          <img v-if="viewMode === 'ja_sm'" src="~/assets/img/rmimg8sm.svg" alt="ttl14">
          <img v-if="viewMode === 'en_pc'" src="~/assets/img/rmimg8en.svg" alt="ttl14">
          <img v-if="viewMode === 'en_sm'" src="~/assets/img/rmimg8ensm.svg" alt="ttl14">

          <!-- <table class="rm_det_table">
            <tr><th>{{ $t('room.rm_det_table[0]') }}</th><td>{{ $t('room.rm_det_table[1]') }}</td></tr>
            <tr><th>{{ $t('room.rm_det_table[2]') }}</th><td>{{ $t('room.rm_det_table[3]') }}</td></tr>
            <tr><th>{{ $t('room.rm_det_table[4]') }}</th><td>{{ $t('room.rm_det_table[5]') }}</td></tr>
            <tr><th>{{ $t('room.rm_det_table[6]') }}</th><td>{{ $t('room.rm_det_table[7]') }}</td></tr>
            <tr><th>{{ $t('room.rm_det_table[8]') }}</th><td>{{ $t('room.rm_det_table[9]') }}</td></tr>
            <tr><th>{{ $t('room.rm_det_table[10]') }}</th><td>{{ $t('room.rm_det_table[11]') }}</td></tr>
            <tr><th>{{ $t('room.rm_det_table[12]') }}</th><td>{{ $t('room.rm_det_table[13]') }}</td></tr>
            <tr><th>{{ $t('room.rm_det_table[14]') }}</th><td>{{ $t('room.rm_det_table[15]') }}</td></tr>
          </table> -->
        </div>
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
      },
      changeImg2: function() {
        let mainImg = document.getElementById("rm_img_main");
        mainImg.className="rm_img_main2";
      },
      changeImg3: function() {
        let mainImg = document.getElementById("rm_img_main");
        mainImg.className="rm_img_main3";      
      },
      changeImg4: function() {
        let mainImg = document.getElementById("rm_img_main");
        mainImg.className="rm_img_main4";         },
      changeImg5: function() {
        let mainImg = document.getElementById("rm_img_main");
        mainImg.className="rm_img_main5";         },
      changeImg6: function() {
        let mainImg = document.getElementById("rm_img_main");
        mainImg.className="rm_img_main6";         
      }
    }
  }

</script>

<style lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';


.rm
  &_ttl
    margin-top: 185px
    margin-left: 71px
    @include mediaQuery-down(sm)
      display: block
      margin: 131px auto 36px auto
  &_ld
    @include wf-ten()
    margin-top: 88px
    margin-bottom: 124px
    display: flex
    justify-content: flex-end
    margin-right: 5%
    @include mediaQuery-down(md)
      justify-content: center
      margin-bottom: 80px
      margin-right: 0
    & p
      width: 670px
      font-size: 14px
      line-height: 2.5
      letter-spacing: 2px
      @include mediaQuery-down(md)
        width: 70%
        max-width: 600px
      @include mediaQuery-down(sm)
        width: 95%
  &_img
    max-width: 1029px
    width: 90%
    margin-right: auto
    margin-left: auto
    @include mediaQuery-down(sm)
      width: 100%
    @mixin rm_main_img($imgfile1, $imgfile2) 
      height: 495px
      -webkit-transition: all 1s
      -moz-transition: all 1s
      -ms-transition: all 1s
      -o-transition: all 1s
      transition: all 1s
      opacity: 1
      background-image: url($imgfile1)
      @include retina
        background-image: url($imgfile2)
      background-size: cover
      background-position: center
      @include mediaQuery-down(sm)
        padding-left: 36px
        padding-right: 36px


    &_main2
      @include rm_main_img('~@/assets/img/rmimg2.jpg', '~@/assets/img/rmimg2@2x.jpg')
    &_main3
      @include rm_main_img('~@/assets/img/rmimg3.jpg', '~@/assets/img/rmimg3@2x.jpg')
    &_main4
      @include rm_main_img('~@/assets/img/rmimg4.jpg', '~@/assets/img/rmimg4@2x.jpg')
    &_main5
      @include rm_main_img('~@/assets/img/rmimg5.jpg', '~@/assets/img/rmimg5@2x.jpg')
    &_main6
      @include rm_main_img('~@/assets/img/rmimg6.jpg', '~@/assets/img/rmimg6@2x.jpg')
    ul
      display: flex
      align-items: flex-start
      flex-wrap: wrap
      -webkit-justify-content: space-between
      justify-content: space-between
      padding: 0px
      margin-top: 39px
    li
      box-sizing: border-box
      list-style: none
      margin-bottom: 10px 
    &_tmb
      width: 170px
      max-width: 100%
      height: auto
    button
      background-color: transparent
      border: none
      cursor: pointer
      outline: none
      padding: 0
      appearance: none
  &_ss
    overflow: hidden
    width: 90%
    height: 252px
    margin-left: 10%

  &_bordar
    width: 203px
    height: 87.5px
    border-bottom: 1px solid #000000
    margin: 0 auto 
  &_det
    margin-bottom: 124px
    width: 100%
    text-align: center
    display: flex
    
    align-items: flex-start
    justify-content: space-evenly
    @include mediaQuery-down(md)
      flex-direction: column
      margin-bottom: 104px
    &_contents
      margin: 80px auto 0 auto
      @include mediaQuery-down(md)
        width: 85%
      &_img
        @include mediaQuery-down(md)
          order: 2
      &_table
        order: 1
    &_img
      margin: auto
      height: 415px
      width: 495px
      background-image: url('~@/assets/img/rmimg7.jpg')
      @include retina
        background-image: url('~@/assets/img/rmimg7@2x.jpg')
      background-size: cover
      background-position: center 
      @include mediaQuery-down(sm)
        width: 302px
        height: 253px
      // &_enpc
      //   margin-bottom: 56%
    // &_table
    //   font-size: 16px
    //   height: 387px
    //   width: 423.5px
    //   border-collapse: collapse
    //   tr
    //     border-color: #707070
    //     border-style: solid
    //     border-width: 1px 0
    //   tr:nth-child(even)
    //     background-color: #F4F4F4
    //   tr:last-child td,
    //   tr:last-child th
    //   th, td
    //     font-weight: normal
    //     color: #707070
    //     padding: 13px 0
    //   th
    //     text-align: right
    //   td
    //     padding-left: 20px
    　
</style>
