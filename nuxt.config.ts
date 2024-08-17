import { existsSync, writeFileSync } from 'fs'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  target: 'static',
  generate: {
    dir: 'dist',
    fallback: true 
  },
  build: {
    loaders: {
      pugPlain: 'pug-plain-loader',
    },
  },
  app: {
    baseURL: '/blossom/',
  },
  hooks: {
    'generate:done': () => {
      const nojekyllPath = 'dist/.nojekyll'
      if (!existsSync(nojekyllPath)) {
        writeFileSync(nojekyllPath, '')
      }
    }
  }
})