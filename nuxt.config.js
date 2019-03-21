const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js'}
    ],
    scripts:[
      // {src: 'https://www.googletagmanager.com/gtag/js?id=UA-136314315-1', async: true},
      // {src: '/JS/google-analytics-init.js'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fbb217' },

  /*
  ** Global CSS
  */
  css: [
    'vue2-animate/dist/vue2-animate.min.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/iview', ssr: true},
    { src: '~/plugins/VueParticles', ssr: false},
    // { src: '~/plugins/Vue2Animate', ssr: false},
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // baseURL: 'http://localhost',
    retry: true
  },

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
