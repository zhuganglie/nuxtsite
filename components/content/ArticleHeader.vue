<script setup lang="ts">
const props = defineProps <{
  title: string,
  date: string,
  tags: []
}>()

</script>

<template>
  <header class="flex flex-col items-center">
    <h2 class="mb-4 leading-tight">
      {{ props.title }}
    </h2>
    <time class="flex items-center mb-4 gap-x-2"><div class="i-mdi-calendar"/><span>{{ date.slice(0, 10) }}</span></time>
    <div class="flex gap-4">
    <span class="bg-zinc-200 px-2 py-0.5 rounded-full" v-for="tag in $props.tags">{{tag}}</span>
</div>
  </header>
</template>
