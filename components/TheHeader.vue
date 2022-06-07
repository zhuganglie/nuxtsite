<!--<template>
<header class="flex items-center justify-center mb-16 bg-purple-100 px-6 sticky top-0 ">
    <span class="text-xl font-bold w-1/2 uppercase">ST</span>

    <nav class="hiden md:flex gap-8 w-1/2">
        <NuxtLink to="/" class="font-semibold no-underline" exactActiveClass="text-red-700">Home</NuxtLink>
        <NuxtLink to="/about" class="font-semibold no-underline" exactActiveClass="text-red-700">About</NuxtLink>
        <NuxtLink to="/articles" class="font-semibold no-underline" exactActiveClass="text-red-700">Blog</NuxtLink>
    </nav>
</header>

</template>-->

<template>
  <div class="bg-indigo-100">
    <nav
      class="
        container
        px-6
        py-8
        mx-auto
        md:flex md:justify-between md:items-center
      "
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold md:text-2xl"
          >ST
        </router-link>
        <!-- Mobile menu button -->
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <ul :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <li class=""><NuxtLink to="/" exactActiveClass="text-red-700">Home</NuxtLink></li>
        <li class=""><NuxtLink to="/about" exactActiveClass="text-red-700">About</NuxtLink></li>
        <li class=""><NuxtLink to="/articles" exactActiveClass="text-red-700">Blog</NuxtLink></li>
      </ul>
    </nav>
  </div>
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
      toggleNav: function () {
        this.showMenu = !this.showMenu;
      },
    },
  };
</script>
