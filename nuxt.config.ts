import { existsSync, writeFileSync, cpSync } from 'fs'
import { resolve } from 'path'

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
  css: [
    '~/assets/global.css',
  ],
  hooks: {
    'generate:done': () => {
      const sourceDir = resolve(__dirname, '.output/public')
      const distDir = resolve(__dirname, 'dist')

      cpSync(sourceDir, distDir, { recursive: true })

      const nojekyllPath = resolve(distDir, '.nojekyll')
      if (!existsSync(nojekyllPath)) {
        writeFileSync(nojekyllPath, '')
      }
    }
  }
})