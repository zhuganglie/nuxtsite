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
  meta: [{ name: "description", content: "Here's a list of all my great posts" }],
});
</script>

<template>
<main>
 <ContentList
        path="/blog"
        :query="{
          only: ['title', 'tags', '_path'],
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
      <p class="flex items-center">Here is the list of {{list.length}} post(s) with tag: &nbsp; &nbsp;<span class="bg-zinc-100 px-4 py-0.5"># {{filter}}</span></p>
          <ol class="font-semibold">
            <li v-for="post in list" :key="post._path" class="">
              <NuxtLink :to="post._path" class="no-underline">    
                                        {{ post.title }}                      
              </NuxtLink>
            </li>
          </ol>
        </template>
        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No post found.</p>
        </template>
      </ContentList>
</main>
      </template>