<template>
  <!-- TODO: add to link -->
  <NuxtLink to="#"
    class="p-5 space-y-2 flex flex-col rounded-2xl bg-white border-2 border-color-700 hover:shadow-md hover:transform hover:scale-101 transition duration-500">

    <!-- cover image TODO: :src="pathImage" -->
    <img class="object-center object-cover h-56 w-full rounded-xl"
      :src="require(`~/assets/img/startup/${this.startupId}.png`)" alt="cover image">
    <!-- project overview -->
    <h2 class="text-2xl font-extrabold">
      {{ title }}
    </h2>
    <p class="text-sm text-color-900">
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
  </NuxtLink>
</template>

<script>
export default {
  props: ['title', 'overview', 'startupId'],

  computed: {
    pathImage() {
      // Request the image as a webpack module by using `require`
      return require(`~/assets/img/startup/${this.startupId}.png`);
    }
  },
};
</script>