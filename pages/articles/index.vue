<script setup>
const route = useRoute()
const router = useRouter()

const { data } = await useAsyncData('articles', () => queryContent('/articles').find())
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
    <h1>Articles</h1>
    <hr />

<div class="mt-8 grid place-items-center place-content-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">

		<ContentList path="/articles" v-slot="{ list }" >
				<div v-for="article in list" :key="article._path" class="bg-zinc-100 p-2 w-full lg:w-1/2 xl:w-1/3">
          <p class="">{{ article.date.slice(0, 10) }}</p>
						<p class="text-xl md:text-2xl font-semibold text-center">
								<NuxtLink :to="article._path" class="no-underline \">{{ article.title }}</NuxtLink>
              </p>
              <p class="flex gap-4">
              <span class="bg-zinc-200 px-2 py-0.5 rounded-full" v-for="tag in article.tags">{{tag}}</span>
          </p>
				</div>
		</ContentList>
  </div>
</main>
</template>
