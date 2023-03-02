<script setup>
const tags = ref([])
const fetchTags = async () => {
  const posts = await queryContent('/blog').only(['tags']).find()
  const tagList = posts.flatMap(post => post.tags)
  tags.value = [...new Set(tagList)]
}
fetchTags()

const countByTag = computed(() => {
  const count = {}
  tags.value.forEach(tag => {
    count[tag] = 0
  })
  queryContent('/blog').only(['tags']).find().then(posts => {
    posts.forEach(post => {
      post.tags.forEach(tag => {
        count[tag]++
      })
    })
  })
  return count
})
</script>

<template>
  <NuxtLayout>
    <main>
      <h1>Tags</h1>
      <hr />
      <div class="mt-8 grid place-items-center place-content-center grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2">
        <span v-for="tag in tags" v-bind:key="tag" class="bg-zinc-100 px-3 py-1 min-w-max">
          <NuxtLink :to="`/tags/${tag}`" class="no-underline flex items-center space-x-1">
            <div class="i-tabler-tag" />
            <span>{{ tag }} ({{ countByTag[tag] }})</span>
          </NuxtLink>
        </span>
      </div>
    </main>
  </NuxtLayout>
</template>