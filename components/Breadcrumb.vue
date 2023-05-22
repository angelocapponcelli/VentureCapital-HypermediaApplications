<template>
  <nav class="flex bg-color-400 text-color-900 py-1 lg:px-x_padding_page px-x_padding_page_mobile w-full">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <!--li class="inline-flex items-center">                            // home redudant
        <NuxtLink to="/" class="text-sm text-color-1000 hover:text-color-700 inline-flex items-center">
          <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
            </path>
          </svg>
          Home
        </NuxtLink>
      </li-->

      <li v-for="(crumb, index) in crumbs">
        <div class="flex items-center">
          <svg class="w-4 h-4 md:w-6 md:h-6 text-color-1000" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"></path>
          </svg>
          <NuxtLink v-if="index < crumbs.length - 1" v-bind:to=crumb.link
            class="text-[10px] md:text-sm text-color-1000 hover:text-color-700 ml-1">{{ crumb.label }}
          </NuxtLink>
          <span v-else class="text-[10px] md:text-sm text-color-1000 ml-1 font-medium">{{ crumb.label }}</span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: ['crumbs'],
};
</script>