<template>
  <main>
    <Breadcrumb :crumbs="[
      { label: 'Portfolio', link: '/portfolio' }]" />
    <!-- content -->
    <div class="flex flex-col space-y-16 px-x_padding_page py-y_padding_page w-full">

      <div class="flex justify-between">
        <!-- title -->
        <h1 class="text-5xl font-extrabold">
          Portfolio
        </h1>
        <!-- searchBar -->
        <SearchBar />
      </div>

      <div class="flex space-x-5">
        <!-- side drawer section -->
        <SideDrawer class="basis-1/5 sticky" :pageIndex=0 />

        <!-- cards projects section -->
        <div class="basis-4/5 grid grid-cols-3 gap-4">
          <!-- single card project -->
          <SmallProjectCard v-for="project of projects" :title="project.title" :overview="project.overview"
            :startupId="project.startup.id" :link="'/portfolio/' + project.id" />
        </div>

      </div>
    </div>

  </main>
</template>

<script>
/*
    The defineNuxtComponent gets us access to the asyncData property.
    This is the first function that is called by nuxt when the page is called.
    We can use this to pre-load the data to make it available to the user.
*/
export default defineNuxtComponent({
  async asyncData() {
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const projects = await $fetch('/api/portfolio')

    return {
      projects
    }
  }
})
</script>
