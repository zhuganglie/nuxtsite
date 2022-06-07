<script setup lang="ts">
const { path, fullPath } = useRoute()
const { data: article } = await useAsyncData<Article>(`article-${path}`, () => queryContent<Article>().where({ _path: path }).findOne())
</script>

<template>
<div>
    <main>
      <ArticleHeader v-if="article" :title="article.title" :date="article.date" :tags="article.tags" class="mb-10" />
      <hr />
        <ContentDoc />
    </main>
</div>
</template>
