//import { defineNuxtConfig } from "nuxt";
import transformerDirective from '@unocss/transformer-directives'
//import presetWebFonts from '@unocss/preset-web-fonts'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
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
    
    transformers: [
        transformerDirective(),
      ],
},
content: { 
    documentDriven: true
},

})


