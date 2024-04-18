// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', 'dayjs-nuxt', '@pinia/nuxt', '@nuxtjs/i18n'],
  devtools: { enabled: true, disableAuthorization: true },
  css: ['~/assets/css/main.css'],
  typescript: {
    typeCheck: true
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  eslint: {
    config: {
      stylistic: true, // <---
    },
  },
  dayjs: {
    locales: ['it'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'it',
    defaultTimezone: 'Europe/Rome',
  },
  i18n: {
    locales: [
      {
        code: 'it',
        file: 'it-IT.json',
        iso: 'it-IT',
      },
      {
        code: 'en',
        file: 'en-EN.json',
        iso: 'en-EN',
      },
    ],
    langDir: 'lang',
    defaultLocale: 'it',
  },
})
