
import transformerDirective from '@unocss/transformer-directives'// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  
css: ["@/assets/styles/global.css"],
modules:[
    '@unocss/nuxt',
    '@nuxt/content',
  //  '@formkit/nuxt',
],
unocss: {
    uno: true,
    icons: true,
    attributify:true,
    shortcuts: {},
    rules: [],
    webFonts: {
      provider: 'google',
      fonts: {
        sans: 'Noto Sans',
        serif: 'Noto Serif',
        mono: 'Noto Sans Mono',
        cao: 'Liu Jian Mao Cao',
      }
    },
    transformers: [
        transformerDirective(),
      ],
},
/*content: { 
    documentDriven: true
},*/


})


