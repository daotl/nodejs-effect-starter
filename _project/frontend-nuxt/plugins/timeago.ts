import timeago from 'vue-timeago3'

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
export default defineNuxtPlugin((nuxtApp) => nuxtApp.vueApp.use(timeago))
