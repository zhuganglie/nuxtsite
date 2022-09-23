
<template>
  <div class="z-999 bg-zinc-100 top-0 sticky w-full mx-0">
     <nav class=" px-8 py-6 flex justify-between md:justify-around">

    <router-link to="/" class=" text-2xl font-bold md:text-2xl no-underline"><span class="">ST</span></router-link>
   
      <div :class="showMenu ? 'flex flex-col' : 'hidden'" class=" list-none mt-18 space-y-4  md:space-y-0 md:flex md:flex-row md:items-center md:space-x-10 md:m-0">
        <NuxtLink to="/" class="no-underline hover:bg-zinc-200 px-2 py-1 " activeClass="bg-zinc-200 font-bold">Home</NuxtLink>
        <NuxtLink to="/blog" class="no-underline hover:bg-zinc-200 px-2 py-1 " activeClass="bg-zinc-200 font-bold">Blog</NuxtLink>
        <NuxtLink to="/blog/tags" class="no-underline hover:bg-zinc-200 px-2 py-1 " activeClass="bg-zinc-200 font-bold">Tags</NuxtLink>
        <NuxtLink to="/about" class="no-underline hover:bg-zinc-200 px-2 py-1 " activeClass="bg-zinc-200 font-bold">About</NuxtLink>
      </div> 

 <div @click="toggleNav" type="button" class="md:hidden" >        
 <div :class="showMenu ? 'i-tabler-align-left': 'i-tabler-align-right'" class="i-tabler-align-left text-yellow-900 text-3xl"  />
  </div>   
    </nav>
  </div>
</template>


<script>
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