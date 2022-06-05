<script setup>
	const { data: blogNav } = await useAsyncData("navigation", () => {
		return fetchContentNavigation(queryContent("articles"));
	});
	useHead({
		title: "Content Blog",
	});
</script>

<template>
<main>
    <h1>Articles</h1>
</main>
</template>
