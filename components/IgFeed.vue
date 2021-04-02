<template>
  <div class="ig">
    <img src="~/assets/img/ttl5.svg" alt="ttl5">
    <ul class="ig_fd">
      <li v-for="feed in igFeed" :key="feed.id"><img :src="feed.media_url"></li>
    </ul>
    <Btn :ig="true" class="ig_btn">
      <a href="https://www.instagram.com/hasetanakaya" target="_blank" rel="noopener noreferrer"><img src="~/assets/img/ig.svg" alt="ig">Instagram</a>
    </Btn>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      igFeed: null,
    }
  },
  methods: {
    async getIgFeed() {
      try {
        // const page_token = process.env.PAGE_TOKEN;
        // const IG_biz_account = process.env.IG_BIZ_ACCOUNT;
        // const get_info_url = "name%2Cmedia.limit(9)%7Bmedia_url%2Cthumbnail_url%2Cpermalink%7D";
        // console.log('IG_biz_account: ' + IG_biz_account);
        // console.log('PAGE_TOKEN: ' + page_token);
        // const target_url = "https://graph.facebook.com/v9.0/" + IG_biz_account + "?fields=" + get_info_url + "&access_token=" + page_token;
        // let TARGET_URL = "https://graph.facebook.com/v9.0/17841442879731703?fields=name%2Cmedia.limit(9)%7Bmedia_url%2Cthumbnail_url%2Cpermalink%7D&access_token=EAABuWjrSs0MBAC48vPjJbx1FXBPMZCoTxAUThfzHeSoDMiUJTgFwdRwPH4Lp2Dm75e29hvwNLCHZBQP1t5N1s8sK9fbVj9OhThD1z4lDjSGDJiL1uFk7zawt3mE0Rq7RkwvXh1BAWSgfBTeBpxxZA6jTs5V206FU3wYdFXsfRUHGP61n97j"
        // console.log('URL: ' + this.$config.TARGET_URL) //undefind
        //undefind
        // const feed = await this.$axios.$get(this.$config.TARGET_URL)
        // const IG_biz_account = process.env.IG_BIZ_ACCOUNT
        // const page_token = process.env.PAGE_TOKEN
        const get_info_url= "name%2Cmedia.limit(9)%7Bmedia_url%2Cthumbnail_url%2Cpermalink%7D"
        // const TARGET_URL = "https://graph.facebook.com/v9.0/" + IG_biz_account + "?fields=" + get_info_url + "&access_token=" + page_token
        console.log('URL: ' + process.env.IG_BIZ_ACCOUNT) 
        const feed = await this.$axios.$get("https://graph.facebook.com/v9.0/" + this.$config.IG_BIZ_ACCOUNT + "?fields=" + get_info_url + "&access_token=" + thes.$config.PAGE_TOKEN)
        // const feed = await this.$axios.$get(TARGET_URL)
        console.log(feed.media.data)

        this.igFeed = feed.media.data

        // mediaによって使う画像枚数を指定
        if(window.matchMedia('(max-width: 1024px)').matches) {
  　　　　　this.igFeed = feed.media.data.slice(0, 3)
  　　　　} else {
  　　　　　this.igFeed = feed.media.data
  　　　　}
        
      } catch (err) {
        console.log(err)
        console.log('statusCode:' +  JSON.stringify(err.response))
      }
    }
  },
  // created() {
  //   this.getIgFeed()
  // },
  mounted() {
    this.$nextTick(() => {
      const windowSize = window.matchMedia('(max-width: 1024px)');
      this.getIgFeed()
      windowSize.addListener(this.getIgFeed)
    })
  },
}
</script>

<style lang="sass">
@import '~assets/scss/_variable.scss';
@import '~assets/scss/_mixin.scss';

.ig
  text-align: center
  margin-top: 104px
  max-width: 950px
  margin-left: auto
  margin-right: auto
  @include mediaQuery-down(md)
    max-width: 620px
  &_fd
    margin-top: 62.5px
    padding-left: 0
    list-style: none
    display: flex
    justify-content: space-evenly
    flex-wrap: wrap
    @include mediaQuery-down(md)
      flex-direction: column
    & li
      width: 280px
      // margin-right: 52px
      margin-bottom: 51px
      margin-left: auto 
      margin-right: auto
      // &:nth-of-type(3n)
      //   margin-right: 0
      //   // @include mediaQuery-down(md)
      //   //   margin-right: 52px
      // &:nth-of-type(2n)        
      //   @include mediaQuery-down(md)
      //     margin-right: 0
      & img
        width: 100%
  &_btn
    margin-left: auto
    margin-right: auto
    margin-top: 49px
    margin-bottom: 138px
    & img
      width: 27px
      margin-right: 12px
</style>