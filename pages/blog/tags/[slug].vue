<script setup>
// get current route slug
const {
  params: { slug },
} = useRoute();
// get array of filters by generating array from separating slug`,`
const filter = slug.split(",");
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
          <ul class="">
            <li v-for="post in list" :key="post._path" class="">
              <NuxtLink :to="post._path" class="no-underline">
                                    <h1 class="text-2xl font-semibold">
                                        {{ post.title }}
                                        </h1> 
              </NuxtLink>
            </li>
          </ul>
        </template>
        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No post found.</p>
        </template>
      </ContentList>
</main>
      </template>