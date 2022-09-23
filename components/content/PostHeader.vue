<script setup>
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({ _path: path }).findOne(),  { initialCache: false } )
</script>

<template>
<header class="flex flex-col items-center">
    <h2 class="mb-4 leading-tight">
      {{ data.title }}
    </h2>
    <time class="flex items-start mb-4 gap-x-2"><div class="i-tabler-calendar"/><span>{{ data.date.slice(0, 10) }}</span></time>
    <div class="flex gap-4">
    <span class="bg-zinc-200 px-2 py-0.5 rounded-full" v-bind:key="tag" v-for="tag in data.tags">
    <nuxt-link :to="`/blog/tags/${tag}`" class="no-underline"> {{ tag }} </nuxt-link>
    </span>
</div>
  </header>
  </template>