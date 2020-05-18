import pkg from './package'
const webpack = require('webpack')
require("dotenv").config();

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'stoopa_cms',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {property:"og:site_name",content:'stoopa_cms'},
//      {property:"og:image",content:'http://www.deziro.co.jp/img/cmn/share.jpg'},
      {property:"og:type",content:"website"},
      {property:"og:locale",content:"ja_Jp"},
      { property: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [
      {rel:'shortcut icon', href:'/favicon.ico'},
    ],
  },
  env: {
    API_KEY:process.env.API_KEY
  },
  css: [
    '~assets/css/style.scss'
  ],
  plugins: [
    { src: '~plugins/lazysizes.js',ssr: false },
    { src: '~plugins/vue-observe-visibility.js'},
    { src: '~plugins/vue-scrollto.js',ssr: false },
    { src: '~plugins/vue-awesome-swiper.js',ssr: false}
  ],
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    'nuxt-device-detect',
    'nuxt-user-agent',
    '@nuxtjs/svg',
  ],
  axios: {
    baseURL:"https://stoopa.microcms.io/api/v1",
    headers:{
      "X-API-KEY":"e8e956a4-4a09-4c71-ac0c-60b577553a3b"
    }
  },
  router: {
    linkActiveClass: 'active-link',
    //base: '/stoopa_cms/'
  },
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery/dist/jquery.slim',
        jQuery: 'jquery/dist/jquery.slim',
      })
    ],
    postcss: {
      plugins: {
      'cssnano': {}
      }
    },
    vendor: ['vue-observe-visibility','lazysizes','vue-scrollto','vue-awesome-swiper'],
    extend(config, ctx) {
    }
  }
}
