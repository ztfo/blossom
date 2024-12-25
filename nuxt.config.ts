import { existsSync, writeFileSync, cpSync } from 'fs'
import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  target: 'static',
  generate: {
    fallback: true
  },
  css: [
    '~/assets/global.css',
  ],  
  build: {
    loaders: {
      pugPlain: 'pug-plain-loader',
    },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  app: {
    baseURL: '/blossom/',
  },
})