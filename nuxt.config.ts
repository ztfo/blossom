// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  target: 'static',
  generate: {
    fallback: true 
  },
  build: {
    loaders: {
      pugPlain: 'pug-plain-loader', 
    },
  },
  app: {
    baseURL: '/', 
  },
})