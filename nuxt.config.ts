// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["@/assets/css/fonts.css"],
  colorMode: {
    preference: "light",
  },
  modules: [
    (options, nuxt) => {
      if (!nuxt.options.dev) {
        nuxt.options.nitro.runtimeConfig ??= {};
        nuxt.options.nitro.runtimeConfig.app ??= {};
        nuxt.options.nitro.runtimeConfig.app.baseURL = "./";
      }
    },
    "@nuxt/ui",
    "nuxt-electron",
    "@sidebase/nuxt-auth",
  ],
  electron: {
    build: [
      {
        entry: "electron/main.ts",
      },
    ],
    disableDefaultOptions: true,
  },
  auth: {
    baseURL: '/api/auth',
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        signUp: { path: '/register', method: 'post' },
      },
      token: { signInResponseTokenPointer: '/token/accessToken' },
    }
  },
  ssr: false,
});
