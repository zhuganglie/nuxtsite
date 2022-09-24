<template>
<div class="flex flex-col h-screen justify-between ">
    <TheHeader />
    <main class="p-4 md:w-2/3 mx-auto mt-8 mb-auto">
    <slot />
  </main>
    <TheFooter />
</div>
</template>
