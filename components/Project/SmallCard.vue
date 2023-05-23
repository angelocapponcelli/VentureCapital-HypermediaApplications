<template>
  <NuxtLink :to="link" :id="id"
    class="p-5 space-y-2 flex flex-col rounded-2xl bg-white border-2 border-color-700 hover:shadow-md hover:transform hover:scale-101 transition duration-500">

    <!-- cover image -->
    <img class="object-center object-cover aspect-square w-full rounded-xl"
      :src="config.SUPABASE_ASSETS_URL + '/startups/' + startupId + '.png'" />

    <!-- project overview -->
    <h2 class="text-2xl font-extrabold">
      {{ title }}
    </h2>
    <p class="text-sm text-color-900 text-ellipsis">
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
const supabaseUrl = import.meta.env.SUPABASE_URL

export default {
  props: ['title', 'overview', 'startupId', 'link', 'id']
};
</script>

<script setup>
const config = useRuntimeConfig();
</script>