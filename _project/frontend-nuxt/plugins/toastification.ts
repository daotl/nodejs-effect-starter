// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

import Toast from 'vue-toastification'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use('default' in Toast ? Toast.default : Toast, {})
})
