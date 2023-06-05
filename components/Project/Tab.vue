<template>
  <NuxtLink v-if="!tabType" :to="links.url"
    class="p-6 flex md:flex-row flex-col md:space-x-5 space-x-0 rounded-2xl bg-white border-2 border-color-700 hover:shadow-md hover:transform hover:scale-101 transition duration-500">

    <!-- cover image TODO: :src="pathImage" -->
    <img class="object-center object-cover  md:w-40 w-full aspect-square rounded-xl"
      :src="config.SUPABASE_ASSETS_URL + image + '.webp'" alt="Image">

    <!-- startup overview -->
    <div class="flex-auto content-center flex-col space-y-3 align-middle m-auto md:pt-0 pt-4">

      <div>
        <h2 class="text-2xl font-extrabold">
          {{ title }}
        </h2>
        <p v-if="titleLabel" class="text-lg text-color-900 -mt-1">
          {{ titleLabel }}
        </p>
      </div>
      <div>
        <p class="text-lg font-extrabold">
          {{ subtitle }}
        </p>
        <p class="text-lg text-color-900 -mt-1">
          {{ subtitleLabel }}
        </p>
      </div>

      <div class="flex flex-row justify-start w-full">
        <div
          class="w-fit text-primary-color text-lg font-bold flex space-x-2 items-center hover:text-color-700 transition duration-200">
          <span>{{ links.label }}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"
            class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </div>
  </NuxtLink>

  <div v-else class="p-6 rounded-2xl bg-white border-2 border-color-700 flex flex-col space-y-2">
    <div>
      <h2 class="text-2xl font-extrabold">
        {{ title }}
      </h2>
      <p v-if="titleLabel" class="text-lg text-color-900 -mt-1">
        {{ titleLabel }}
      </p>
    </div>
    <div class="flex flex-col space-y-2 justify-start w-full">
      <NuxtLink v-for="area of links" :to="'/areas/' + area.id"
        class="w-fit text-primary-color text-lg font-bold hover:text-color-700 transition duration-200">
        {{ area.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
let name
export default {
  props: ["tabType" /* tabType = 0 for startup/supervisor, tabType = 1 for areas */,
    "title", "titleLabel", "subtitle", "subtitleLabel", "image", "links"],
};
</script>

<script setup>
const config = useRuntimeConfig();
</script>