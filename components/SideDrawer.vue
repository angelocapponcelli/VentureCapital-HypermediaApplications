<template>
  <aside class="sticky top-36 w-full">
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
        <NuxtLink to="/portfolio/most-relevant-projects"
          v-bind:class="(pageIndex == 2) ? 'font-bold border-primary-color' : 'border-transparent'"
          class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 hover:border-primary-color transition ease-in-out duration-200">
          Machine learning projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/portfolio/most-relevant-projects"
          v-bind:class="(pageIndex == 3) ? 'font-bold border-primary-color' : 'border-transparent'"
          class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 hover:border-primary-color transition ease-in-out duration-200">
          Artificial intelligence projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/portfolio/most-relevant-projects"
          v-bind:class="(pageIndex == 4) ? 'font-bold border-primary-color' : 'border-transparent'"
          class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 hover:border-primary-color transition ease-in-out duration-200">
          Neural Network projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/portfolio/most-relevant-projects"
          v-bind:class="(pageIndex == 5) ? 'font-bold border-primary-color' : 'border-transparent'"
          class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 hover:border-primary-color transition ease-in-out duration-200">
          Blockchains projects</NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: ['pageIndex'],
};
</script>