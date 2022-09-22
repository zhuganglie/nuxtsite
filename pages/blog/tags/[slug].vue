<script setup>
// get current route slug
const {
  params: { slug},
} = useRoute();
// get array of filters by generating array from separating slug`,`
//const filter = slug.split(",");
// get string of filter
const filter = slug
// set meta for page
useHead({
  title: `All posts with ${slug}`,
  meta: [{ name: "description", content: "List of all my great posts" }],
});
</script>

<template>
<main>
 <ContentList
        path="/blog"
        :query="{
          only: ['title', 'tags', 'date', '_path'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
        }"
      >
      <template v-slot="{ list }">
      <h1 class="flex items-center">Posts with Tag </h1>
      <hr />
      <p class="flex items-center">List of {{list.length}} post(s) with <span class="bg-zinc-100 px-2.5 py-0.5 mx-1 min-w-max"># {{filter}}</span> tag:</p>
      
      <div class="grid gap-2">
      <div v-for="post in list" :key="post._path" class="bg-zinc-100 p-2 rounded">
                        <p class="underline">{{ post.date.slice(0, 10) }}</p>
						<p class="text-xl md:text-2xl font-semibold text-center">
							<nuxt-link :to="post._path" class="no-underline \">{{ post.title }}</nuxt-link>
                        </p>
                         <p class="flex gap-3">
              <span class="bg-zinc-200 px-2 py-0.5 rounded-full min-w-max" v-bind:key="tag" v-for="tag in post.tags">
              <nuxt-link :to="`/blog/tags/${tag}`" class="no-underline"> {{ tag }} </nuxt-link>
              </span>
                        </p>

				</div>
          </div>
        </template>
        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No post found.</p>
        </template>
      </ContentList>
</main>
      </template>