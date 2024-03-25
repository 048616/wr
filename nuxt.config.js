// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: ["dayjs-nuxt", "@pinia/nuxt", "@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  dayjs: {
    locales: ["it"],
    plugins: ["relativeTime", "utc", "timezone"],
    defaultLocale: "it",
    defaultTimezone: "Europe/Rome",
  },
  i18n: {
    locales: [
      {
        code: "it",
        file: "it-IT.json",
      },
    ],
    langDir: "lang",
    defaultLocale: "it",
  },
});
