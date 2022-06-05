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

		<ContentList path="/articles" v-slot="{ list }">
				<div v-for="article in list" :key="article._path">
						<h2>
								<NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
						</h2>
						<p>{{ article.date }}</p>
				</div>
		</ContentList>
</main>
</template>
