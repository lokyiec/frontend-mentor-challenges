// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', 'nuxt-svgo'],
  runtimeConfig: {
    TMDB_API_KEY: process.env.TMDB_API_KEY,
  },
})