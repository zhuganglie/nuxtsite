<script setup>
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
<NuxtLayout>
<main >
    <h1>Blog</h1>
    <hr />

<div class="mt-8 grid gap-2">
		<ContentList path="/blog" :query="{only:[], sort:{date: -1}, where:{draft: !true}}" v-slot="{ list }" >
				<div v-for="post in list" :key="post._path" class="bg-zinc-100 p-2 rounded shadow-lg">
                        <p class="underline">{{ post.date.slice(0, 10) }}</p>
						<p class="text-xl md:text-2xl font-semibold text-center">
							<nuxt-link :to="post._path" class="no-underline \">{{ post.title }}</nuxt-link>
                        </p>
                         <p class="flex gap-3">
              <span class="bg-zinc-200 px-2 py-0.5 rounded-full min-w-max" v-bind:key="tag" v-for="tag in post.tags">
              <nuxt-link :to="`/tags/${tag}`" class="no-underline"> {{ tag }} </nuxt-link>
              </span>
                        </p>

				</div>
		</ContentList>
  </div>
</main>
</NuxtLayout>
</template>
