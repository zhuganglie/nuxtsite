
<template>
  <div class="z-999 bg-zinc-100 top-0 sticky w-full mx-0">
     <nav class=" px-8 py-6 flex justify-between md:justify-around">

    <router-link to="/" class=" text-xl font-bold md:text-2xl no-underline">ST</router-link>
   
      <div :class="showMenu ? 'flex flex-col' : 'hidden'" class=" list-none mt-18 space-y-4  md:space-y-0 md:flex md:flex-row md:items-center md:space-x-10 md:m-0">
        <NuxtLink to="/" class="no-underline font-semibold hover:bg-zinc-200 px-2 py-1 uppercase" activeClass="text-red-700">Home</NuxtLink>
        <NuxtLink to="/blog" class="no-underline font-semibold hover:bg-zinc-200 px-2 py-1 uppercase" activeClass="text-red-700">Blog</NuxtLink>
        <NuxtLink to="/blog/tags" class="no-underline font-semibold hover:bg-zinc-200 px-2 py-1 uppercase" activeClass="text-red-700">Tags</NuxtLink>
        <NuxtLink to="/about" class="no-underline font-semibold hover:bg-zinc-200 px-2 py-1 uppercase" activeClass="text-red-700">About</NuxtLink>
      </div> 
             
<button @click="toggleNav" type="button" class="w-8 h-8 md:hidden focus:outline-none">
<div class="i-mdi-menu" />
     </button>
    </nav>
  </div>
</template>

<script>
    /*let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);*/
export default {
  watch:{
    '$route'(){
      this.showMenu = false
    }
  },
  data() {
      return {
        showMenu: false,
      };
    },
  methods: {
      toggleNav: function (e) {
        this.showMenu = !this.showMenu;
      },
      close (e) {
      if (!this.$el.contains(e.target)) {
        this.showMenu = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.close)
  },
  beforeDestroy() {
    document.removeEventListener('click',this.close)
  }
}
</script>
