export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      // TODO: find how to do this better
      {
        hid: 'author',
        name: 'keywords',
        content: 'investment, investments, ziel, ziel fresh, jaza tanki',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Upscale Technologies',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/materialdesignicons.min.css',
    '~/assets/css/magnific-popup.css',
    '~/assets/css/animate.css',
    '~/assets/css/pe-icon-7.css',
    '~/assets/css/owl.carousel.css',
    '~/assets/css/owl.theme.css',
    '~/assets/css/owl.transitions.css',
    '~/assets/css/style.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '~/assets/js/jquery.min.js',
    // '~/assets/js/popper.min.js',
    // '~/assets/js/bootstrap.min.js',
    // '~/assets/js/jquery.easing.min.js',
    // '~/assets/js/isotope.js',
    // '~/assets/js/funfacts.js',
    // '~/assets/js/owl.carousel.min.js',
    // '~/assets/js/jquery.magnific-popup.min.js',
    // '~/assets/js/custom.js',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
