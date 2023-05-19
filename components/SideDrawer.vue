<template>
  <aside class="h-full sticky top-36 w-full">
    <ul>
      <li>
        <NuxtLink to="/portfolio"
          v-bind:class="(pageIndex == 0) ? 'font-bold border-primary-color' : 'border-transparent'"
          class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 hover:border-primary-color transition ease-in-out duration-200">
          All projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/portfolio/most-relevant-projects"
          v-bind:class="(pageIndex == 1) ? 'font-bold border-primary-color' : 'border-transparent'"
          class="border-primary-color px-3 py-3 flex items-center hover:text-color-900 border-l-4 hover:border-primary-color transition ease-in-out duration-200">
          Most relevant projects</NuxtLink>
      </li>

      <li>
        <NuxtLink v-for="(area, index) in areas" :to="'/portfolio/' + areaLinks[index]"
          v-bind:class="(pageIndex == index + 2) ? 'font-bold border-primary-color' : 'border-transparent'"
          class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 hover:border-primary-color transition ease-in-out duration-200">
          {{ area.name }} projects</NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<!--script>
export default {
  props: ['pageIndex'],
};
</script-->

<script setup>
const props = defineProps(['pageIndex'])
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: areas } = await useFetch('/api/areas')

let areaLinks = []
for (let i = 0; i < areas.value.length; i++) {
  areaLinks[i] = areas.value[i].name.toLowerCase().replaceAll(' ', '-')
}
</script>