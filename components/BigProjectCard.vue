<template>
  <!-- TODO: add to link -->
  <NuxtLink :to="link"
    class="p-6 flex space-x-12 rounded-2xl bg-white border-2 border-color-700 hover:shadow-md hover:transform hover:scale-101 transition duration-500">

    <!-- cover image TODO: :src="pathImage" -->
    <img class="object-center object-cover h-56 w-56 rounded-xl" :src="imageUrl" alt="cover image">

    <!-- project overview -->
    <div class="flex-auto content-center flex-col space-y-5 align-middle m-auto">
      <h2 class="text-4xl font-extrabold">
        {{ title }}
      </h2>
      <p class="text-lg text-color-900">
        {{ overview }}
      </p>
      <div
        class="text-primary-color text-lg font-bold flex space-x-2 items-center hover:text-color-700 transition duration-200">
        <span>Learn more</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
          class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>

  </NuxtLink>
</template>

<script>
export default {
  props: ['title', 'overview', 'startupId', 'link'],
  computed: {
    imageUrl() {
      var url = new URL('../assets/img/startup/' + this.startupId + '.png', import.meta.url).href;
      //console.log(url.toString())
      return "/_nuxt/assets/img/startup/" + this.startupId + '.png'
    }
  },
};
</script>