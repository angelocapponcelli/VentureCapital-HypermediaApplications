<!--
    Gives an overview of the projects in the introduction pages to them ('All project' page and specific area projects page). 
    Compact version of ProjectBigCard. It has the link connecting it to a specific project, the id useful
    for filtering projects, an image of the project startup, the title, and a short introductory text.

    PROPS:
    - title: main information to display
    - overview: short introductory text for the specific project
    - startupId: to get the image of the startup logo
    - link: link to the single project
    - id: each card has a different id, that is used for filtering projects function (see SearchBar component)
-->

<template>
  <!-- link on card hover -->
  <NuxtLink :to="link" :id="id"
    class="p-5 space-y-2 flex flex-col rounded-2xl bg-white justify-between border-2 border-color-700 hover:shadow-md hover:transform hover:scale-101 transition duration-500">

    <!-- cover image -->
    <img class="object-center object-cover aspect-square w-full rounded-xl"
      :src="config.SUPABASE_ASSETS_URL + '/startups/' + startupId + '.webp'" :alt="'Thumbnail ' + title + ' project'" />

    <!-- project overview -->
    <h2 class="text-2xl font-extrabold">
      {{ title }}
    </h2>
    <p class="text-sm text-color-900 text-ellipsis">
      {{ truncate(overview, 125) }}
    </p>
    <div class="flex flex-row justify-start w-full">
      <div
        class="w-fit text-primary-color text-lg font-bold flex space-x-2 items-center hover:text-color-700 transition duration-200">
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
  props: ['title', 'overview', 'startupId', 'link', 'id']
};
</script>

<script setup>
// To get variable SUPABASE_ASSETS_URL useful for link image
const config = useRuntimeConfig();
</script>