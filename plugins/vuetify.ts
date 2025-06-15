import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
    defaultTheme: 'myTheme',
    themes: {
      myTheme: {
        dark: true,
        colors: {
          background: "#06162F",
          surface: '#041124',
          primary: '#061326',
        },
      },
    },
  }
  })

  app.vueApp.use(vuetify)
})
