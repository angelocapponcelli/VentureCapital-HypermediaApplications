<!--
    Implements breadcrumbs within the pages of the website. It takes an array of elements as a parameter,
    characterized by a label and a link, representing the hierarchy to be displayed. Using this parameter,
    the breadcrumb is constructed, arranging the labels in an ordered manner and implementing links to the
    various pages (except for the last label, which is assumed to have no link since it represents the current page).

    PROPS:
    - crumbs[].label: text to be displayed in the hierarchy
    - crumbs[].link: link referred to
-->
<template>
  <nav class="hidden md:flex bg-color-400 text-color-900 py-1 lg:px-x_padding_page px-x_padding_page_mobile w-full">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li v-for="(crumb, index) in crumbs">
        <div class="flex items-center">
          <!-- arrow symbol -->
          <svg class="w-4 h-4 md:w-6 md:h-6 text-color-1000" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"></path>
          </svg>
          <!-- if it is not the last: display the link item -->
          <NuxtLink v-if="index < crumbs.length - 1" v-bind:to=crumb.link
            class="text-[10px] md:text-sm text-color-1000 hover:text-color-700 ml-1 underline">{{ crumb.label }}
          </NuxtLink>
          <!-- if it is the last: display the no-link item -->
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