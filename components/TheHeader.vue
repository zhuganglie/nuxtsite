
<template>
  <header class="z-999 bg-zinc-100 top-0 sticky w-full">
    <nav class="container px-8 py-6 mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <router-link to="/" class="text-xl font-bold md:text-2xl no-underline">ST</router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="focus:outline-none">
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'" class="list-none flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:m-0">
        <li class=""><NuxtLink to="/" class="no-underline font-semibold hover:bg-zinc-200 px-2 py-1 uppercase" activeClass="text-red-700">Home</NuxtLink></li>
        <li class=""><NuxtLink to="/about" class="no-underline font-semibold hover:bg-zinc-200 px-2 py-1 uppercase" activeClass="text-red-700">About</NuxtLink></li>
        <li class=""><NuxtLink to="/articles" class="no-underline font-semibold hover:bg-zinc-200 px-2 py-1 uppercase" activeClass="text-red-700">Blog</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
/*import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};*/

export default {
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
  mounted () {
    document.addEventListener('click', this.close)
  },
  beforeDestroy () {
    document.removeEventListener('click',this.close)
  }
}
</script>
