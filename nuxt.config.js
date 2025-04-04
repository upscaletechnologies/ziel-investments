export default {
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/bootstrap.min.css',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/assets/css/magnific-popup.css',
    '~/assets/css/animate.css',
    '~/assets/css/pe-icon-7.css',
    '~/assets/css/owl.carousel.css',
    '~/assets/css/owl.theme.css',
    '~/assets/css/owl.transitions.css',
    '~/assets/css/style.css',
    '~/assets/css/custom.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ mode: 'client', src: '~/assets/js/owl.carousel.min.js' }],
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
    '@nuxtjs/sitemap',
    '@nuxtjs/apollo',
  ],
  apollo: {
    // Sets up the apollo client endpoints
    clientConfigs: {
      // recommended: use a file to declare the client configuration.
      default: '~/apollo/config.js',
    },
  },
  sitemap: {
    hostname: 'https://zielinvestments.com',
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    gzip: true,
    defaults: {
      changefreq: 'weekly',
      priority: 1,
    },
  },
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
    plugins: [],
  },
  /*
   ** Headers of the page
   */
  head: {
    title: `ziel investments - zielinvestments.com`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Ziel Investment, Real Estate,Water  Solutions, Ziel-Fresh Bottled water, Water Dispensing Automation, Software Solutions, Mobile Banking, Field Power, Robotic Process Automation, Fleet Management',
      },
      // TODO: find how to do this better
      { hid: 'author', name: 'keywords', content: 'investment, investments, ziel, ziel fresh, jaza tanki' },
      { hid: 'author', name: 'author', content: 'Upscale Technologies' },
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js' },
      { src: 'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192"', href: '/favicon/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
    ],
  },
};
