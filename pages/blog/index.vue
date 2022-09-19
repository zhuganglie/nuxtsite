<script setup>
const route = useRoute()
const router = useRouter()

const { data } = await useAsyncData('blog', () => queryContent('/blog').find())

useHead({
    meta: [
        {
            name: 'description',
            content: 'A blog about strategy.'
        },
        {
            name: 'keywords',
            content: 'story, strategy'
        }
    ]
})
</script>

<template>
<main>
    <h1>Blog</h1>
    <hr />

<div class="mt-8 grid place-items-center place-content-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">

		<ContentList path="/blog" v-slot="{ list }" >
				<div v-for="post in list" :key="post._path" class="bg-zinc-100 p-2 w-5/6">
          <p class="underline">{{ post.date.slice(0, 10) }}</p>
						<p class="text-xl md:text-2xl font-semibold text-center">
								<NuxtLink :to="post._path" class="no-underline \">{{ post.title }}</NuxtLink>
              </p>
              <p class="flex gap-3">
              <span class="bg-zinc-200 px-2 py-0.5 rounded-full min-w-max" v-for="tag in post.tags">
              <NuxtLink :to="`/blog/tags/${tag}`" class="no-underline"> {{ tag }} </NuxtLink>
              </span>
          </p>

				</div>
		</ContentList>
  </div>
</main>
</template>
