import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import { defineNuxtPlugin } from '#imports'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    display: {
      thresholds: {
        xs: 340,
        sm: 540,
        md: 800,
        lg: 1280,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
