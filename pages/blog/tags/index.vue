<script setup>   
    const data = await queryContent('/blog').only(['tags']).find()  
    const tagList = data.map(a => a.tags).flat(1)
    const uniqueTagList = [...new Set(tagList)]
</script>

<template >
    <main>
        <h1>Tags</h1>
        <hr />
        <div class="grid">
        <span v-for="tag in uniqueTagList" v-bind:key="tag" class="bg-zinc-100 px-3 py-1 min-w-max">
            <nuxt-link :to="`/blog/tags/${tag}`" class="no-underline"> # {{ tag }} </nuxt-link>
        </span>
        </div>
    </main>
</template>
