<!--
    Side menu in the portfolio pages. It contains the labels and corresponding links of the page containing all projects,
    the most relevant projects, and pages containing projects from a specific area. The entries of the latter are dynamically 
    loaded from the database (being that the areas may change). Receives as props the index of the active menu item on that 
    page (it is highlighted to let the user know what page it is on).

    PROPS:
    - pageIndex: index of the active item, highlight the page in which the user is
-->

<template>
  <aside class="h-full md:sticky top-36 w-full">
    <ul>
      <!-- first static item: 'All projects' -->
      <li>
        <NuxtLink to="/portfolio"
          v-bind:class="(pageIndex == 0) ? 'font-bold border-primary-color' : 'border-transparent'"
          class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 hover:border-primary-color transition ease-in-out duration-200">
          All projects</NuxtLink>
      </li>
      <!-- second static item: 'Most relevant projects' -->
      <li>
        <NuxtLink to="/portfolio/most-relevant-projects"
          v-bind:class="(pageIndex == 1) ? 'font-bold border-primary-color' : 'border-transparent'"
          class="border-primary-color px-3 py-3 flex items-center hover:text-color-900 border-l-4 hover:border-primary-color transition ease-in-out duration-200">
          Most relevant projects</NuxtLink>
      </li>
      <!-- dynamic items for specific area projects -->
      <li>
        <NuxtLink v-for="(area, index) in areas" :to="'/portfolio/' + areaLinks[index]"
          v-bind:class="(pageIndex == index + 2) ? 'font-bold border-primary-color' : 'border-transparent'"
          class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 hover:border-primary-color transition ease-in-out duration-200">
          {{ area.name }} projects</NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
const props = defineProps(['pageIndex'])

// request to get dynamically the areas (names and ids)
const { data: areas } = await useFetch('/api/areas')

let areaLinks = []
for (let i = 0; i < areas.value.length; i++) {
  areaLinks[i] = areas.value[i].name
}
</script>