<template>
  <!-- TODO: add to link -->
  <NuxtLink :to="link"
    class="md:p-6 p-5 flex md:flex-row flex-col md:space-x-12 md:space-y-0 space-y-2 rounded-2xl bg-white border-2 border-color-700 hover:shadow-md hover:transform hover:scale-101 transition duration-500">

    <!-- cover image -->
    <img class="object-center object-cover md:w-56 aspect-square w-full rounded-xl"
      :src="config.SUPABASE_ASSETS_URL + '/startups/' + startupId + '.webp'" :alt="'Thumbnail ' + title + ' project'">

    <!-- project overview -->
    <div class="flex content-center flex-col md:space-y-5 space-y-2 align-middle m-auto">
      <h2 class="flex-none md:text-4xl text-2xl font-extrabold">
        {{ title }}
      </h2>
      <p class="grow md:text-lg text-sm text-color-900">
        {{ truncate(overview, 330) }}
      </p>
      <div
        class="flex-none text-primary-color text-lg font-bold flex space-x-2 items-center hover:text-color-700 transition duration-200">
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
};
</script>

<script setup>
const config = useRuntimeConfig();
</script>