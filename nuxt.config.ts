//import { defineNuxtConfig } from "nuxt";
import transformerDirective from '@unocss/transformer-directives'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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

