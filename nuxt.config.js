export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // if you hosted your repository not as a base / main repository, else comment it
  router: {
    base: '/pyconid2021/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Python Conference Indonesia 2021',
    description: 'PyCon Indonesia is a conference where Python users, or people interested in Python, gather to learn from each other and meet other members of the community.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // Facebook & OG
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://your-hp.github.io/pyconid2021/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Python Conference Indonesia 2021'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'PyCon Indonesia is a conference where Python users, or people interested in Python, gather to learn from each other and meet other members of the community.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://raw.githubusercontent.com/pyconid/pyconid2021/gh-pages/_nuxt/img/logo.6509b7d.png'
      },
      // Twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://your-hp.github.io/pyconid2021/'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Python Conference Indonesia 2021'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'PyCon Indonesia is a conference where Python users, or people interested in Python, gather to learn from each other and meet other members of the community.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://raw.githubusercontent.com/pyconid/pyconid2021/gh-pages/_nuxt/img/logo.6509b7d.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://raw.githubusercontent.com/pyconid/pyconid2021/gh-pages/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  eslint: {
    fix: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
