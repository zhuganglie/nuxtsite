<template>
<header class="flex items-center justify-center mb-16 bg-purple-100 px-6 sticky top-0 ">
    <span class="text-xl font-bold w-1/2 uppercase">ST</span>

    <nav class="hiden md:flex gap-6 w-1/2">
        <NuxtLink to="/" class="font-semibold no-underline" exactActiveClass="text-red-700">Home</NuxtLink>
        <NuxtLink to="/about" class="font-semibold no-underline" exactActiveClass="text-red-700">About</NuxtLink>
        <NuxtLink to="/articles" class="font-semibold no-underline" exactActiveClass="text-red-700">Blog</NuxtLink>
    </nav>
</header>

</template>
