<script setup>

	const slug = useRoute().params.slug.toString().replace(/,/g, "/");
	const { data: articles } = await useAsyncData(slug, () => {
		return queryContent(slug).findOne();
	});

	useHead({
		title: `${articles.value.title}`,
	});
</script>

<template>
<div>
					<ContentRenderer
						class="prose lg:prose-base prose-sm prose-slate blog-link pr-7 max-w-none"
						:value="articles"
					>
					</ContentRenderer>
</div>
</template>
