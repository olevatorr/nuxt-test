export default defineNuxtConfig({
  app: {
    head: {
      title: 'Olevatorr',
      titleTemplate: '%s | Olevatorr'
    },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  $development: {
    app: {
      head: {
        title: 'DEV'
      },
      layoutTransition: { name: 'layout', mode: 'out-in' }
    },
  },
  $production: {
    app: {
      head: {
        title: 'Prod'
      },
      layoutTransition: { name: 'layout', mode: 'out-in' }
    }
  },
  // devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
