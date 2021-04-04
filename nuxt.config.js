
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
//  ssr: false,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '料理旅館田中屋 | 長谷寺門前町にたたずむお食事処・観光旅館',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '西国三十三観音霊場第八番札所である長谷寺の門前町において、昭和の中頃より、料理旅館としての田中屋がスタートしました。自家製の胡麻豆腐など地元食材を使用したお料理を訪れる皆様に味わっていただいております。'},
      { hid: 'og:site_name', property: 'og:site_name', content: '料理旅館田中屋 | 長谷寺門前町にたたずむお食事処・観光旅館' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.hase-tanakaya.com' },
      { hid: 'og:title', property: 'og:title', content: '料理旅館田中屋 | 長谷寺門前町にたたずむお食事処・観光旅館' },
      { hid: 'og:description', property: 'og:description', content: '西国三十三観音霊場第八番札所である長谷寺の門前町において、昭和の中頃より、料理旅館としての田中屋がスタートしました。自家製の胡麻豆腐など地元食材を使用したお料理を訪れる皆様に味わっていただいております。' },
      { hid: 'og:image', property: 'og:image', content: 'https://hase-tanakaya.com/og.jpg'},
      { name: 'twitter:card', content: 'summary' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://use.typekit.net/ora6yfk.js'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/common.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/vue-awesome-swiper',
    '~/plugins/vue2-google-maps.js',
    { src: "~/plugins/google-maps-marker.js", mode: 'client' },
    '~/plugins/util.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-193738271-1' 
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],
  i18n: {
        // 使用する言語の設定
    locales: [
      { code: 'ja', name: 'Japanese', iso: 'ja_JP', file: 'ja.json' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' }
    ],
    defaultLocale: 'ja', // デフォルトの言語
    langDir: 'locales/', // 翻訳ファイルのディレクトリパス
    strategy: 'prefix_and_default', // URLに言語のプレフィックスを追加するかの指定
    vueI18n: {
      // 翻訳ファイルが見つからなかった場合の言語を指定
      fallbackLocale: 'ja',
      messages: {
        ja: require('./locales/ja.json'),
        en: require('./locales/en.json')
      }
    },
    vueI18nLoader: true,
    lazy: true // 遅延読み込みの有効化
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    transpile: [/^vue2-google-maps($|\/)/, /^vue2-gmap-custom-marker($|\/)/]
  },
  loading: '@/components/loading.vue',
  env: {
    TARGET_URL: process.env.IG_BIZ_ACCOUNT,
    PAGE_TOKEN: process.env.PAGE_TOKEN
  },
  axios: {
    baseURL: "https://graph.facebook.com/v9.0/" + process.env.IG_BIZ_ACCOUNT + "?fields=name%2Cmedia.limit(9)%7Bmedia_url%2Cthumbnail_url%2Cpermalink%7D&access_token=" + process.env.PAGE_TOKEN
  }
}
