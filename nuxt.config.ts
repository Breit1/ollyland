export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      titleTemplate: '%s | OllyLand',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet'
        }
      ]
    }
  }
})