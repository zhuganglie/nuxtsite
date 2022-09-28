//import { defineNuxtConfig } from "nuxt";
import transformerDirective from '@unocss/transformer-directives'
//import presetWebFonts from '@unocss/preset-web-fonts'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr:false,
css: ["@/assets/styles/global.css"],
buildModules:[
    '@unocss/nuxt',
    '@nuxt/content',
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


