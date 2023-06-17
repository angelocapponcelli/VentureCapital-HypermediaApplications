<template>
  <main>
    <!-- breadcrumb-->
    <Breadcrumb :crumbs="[
      { label: 'Portfolio', link: '/portfolio' },
      { label: 'Most relevant projects', link: '/most-relevant-projects' }]" />

    <!-- content -->
    <div
      class="flex flex-col space-y-4 md:space-y-16 lg:px-x_padding_page lg:py-y_padding_page px-x_padding_page_mobile py-y_padding_page_mobile  w-full">

      <div class="flex md:space-x-6 justify-between">
        <!-- title -->
        <h1 class="text-5xl font-extrabold">
          Portfolio
        </h1>
        <!-- searchBar -->
        <SearchBar class="hidden md:flex" :id="'searchBar'" @search-filter="receiveEmit" />
      </div>

      <div class="flex space-y-4 md:space-x-5 flex-col md:flex-row">
        <!-- side drawer section -->
        <ProjectSideDrawer class="basis-1/5" :pageIndex=1 />

        <!-- searchBar for mobile -->
        <SearchBar class="md:hidden" :id="'mobileSearchBar'" @search-filter="receiveEmit" />

        <!-- cards projects section -->
        <div class="flex flex-col space-y-5 basis-4/5">

          <!-- single card project -->
          <ProjectBigCard v-if="filteredProjects.length > 0" v-for="project of filteredProjects" :title="project.title"
            :overview="project.overview" :startupId="project.startup.id"
            :link="'/portfolio/most-relevant-projects/' + project.id" :id="project.id" />

          <div v-else
            class="lg:w-[40rem] md:w-[30rem] w-fit mx-0 m-auto text-2xl flex md:flex-row flex-col md:space-x-5 space-x-0 text-color-1000 h-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="md:w-24 h-full max-h-10">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              Sorry, but there are <b>no projects</b> in <b>most relevant section</b> matching your search criteria.<br>
              Please try again with different keywords.
            </span>
          </div>

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
  data() {
    return {
      search: ""
    };
  },
  async asyncData() {
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const projects = await $fetch('/api/portfolio/most-relevant-projects')

    return {
      projects
    }
  },
  computed: {
    filteredProjects() {
      return this.projects.filter(p => {
        // return true if the product should be visible

        // in this example we just check if the search string
        // is a substring of the product name (case insensitive)
        return p.title.toUpperCase().indexOf(this.search) != -1;
      });
    }
  },
  methods: {
    receiveEmit(value) {
      this.search = value
    }
  },
  head(nuxtApp) {
    return {
      title: 'Venture Capital - Most relevant projects',
      meta: [{
        name: 'description',
        content: 'Discover our diverse venture capital portfolio featuring innovative startups from various industries. Explore our successful investments, disruptive technologies, and transformative solutions. Join us on the journey of supporting and nurturing exceptional entrepreneurs as they redefine the future of business.'
      }]
    }
  }
})
</script>

