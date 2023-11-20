// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [    '@nuxtjs/tailwindcss'  ],
  css: [
    '~/assets/styles.css',
  ],
  devtools: { enabled: true }
})
