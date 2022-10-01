

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/vue-splide/css';

export default defineComponent( {
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const options = {
      rewind: true,
      gap   : '1rem',
      height:'24em',
    };
    return { options };
  },
} );
</script>

<template>
<NuxtLayout>
<main>
    
    <h1>About</h1>
    <hr />
<article class="mt-8">
   <p>This is how I deal with life issues.</p> 
    <img src="/img/phil.jpeg" loading="lazy" width="550" class="max-w-[550px] w-full h-auto my-20 mx-auto block" />
    <div>
    <p>Here is what I like to do.</p>
    <Splide :options="options" aria-label="My Favorite Images" class="w-full md:w-2/3 mx-auto">
    <SplideSlide class="grid place-items-center place-content-center">
      <div class="grid place-items-center place-content-center">Cooking</div>
    </SplideSlide>
    <SplideSlide class="grid place-items-center place-content-center">
      <div class="grid place-items-center place-content-center">Reading</div>
    </SplideSlide>
    <SplideSlide class="grid place-items-center place-content-center">
      <div class="grid place-items-center place-content-center">Coding</div>
    </SplideSlide>
  </Splide>
  </div>
    </article>
<section>
    <p>If you also like this way of thinking, drop me a line below.</p>
 <ContactForm />
 </section>
</main>
</NuxtLayout>
</template>


