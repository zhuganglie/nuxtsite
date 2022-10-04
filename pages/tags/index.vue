<script setup>   
    const data = await queryContent('/blog').only(['tags']).find()  
    const tagList = data.map(a => a.tags).flat(1)
    const uniqueTagList = [...new Set(tagList)]
</script>

<template >
<NuxtLayout>
    <main >
        <h1>Tags</h1>
        <hr />
        <div class="mt-8 grid place-items-center place-content-center grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2">
        <span v-for="tag in uniqueTagList" v-bind:key="tag" class="bg-zinc-100 px-3 py-1 min-w-max">
            <nuxt-link :to="`/tags/${tag}`" class="no-underline flex items-center space-x-1"> <div class="i-tabler-tag" /> <span>{{ tag }} </span></nuxt-link>
        </span>
        </div>
    </main>
    </NuxtLayout>
</template>
