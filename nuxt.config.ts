// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
css: ["@/assets/styles/global.css"],
buildModules:[
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/image-edge',
],
unocss: {
    uno: true,
    icons: true,
    attributify:true,
    shortcuts: {},
    rules: [],
},
content: { 
    documentDriven: true
},
image: {
    // Options
  }
})

