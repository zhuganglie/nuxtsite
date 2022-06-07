<script setup lang="ts">
const props = defineProps <{
  title: string,
  date: string,
  tags: []
}>()

</script>

<template>
  <header>
    <h2 class="mb-1 leading-tight">
      {{ props.title }}
    </h2>
    <time class="text-xs">{{ date.slice(0, 10) }}</time>
    <div class="flex gap-4">
    <span class="bg-zinc-200 px-2 py-0.5 rounded-full" v-for="tag in $props.tags">{{tag}}</span>
</div>
  </header>
</template>
