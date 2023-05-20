<template>
  <main>
    <Breadcrumb v-if="pageTypeProject && area" :crumbs="[
      { label: 'Portfolio', link: '/portfolio' },
      { label: areaLabel, link: '/portfolio/' + area },
      { label: project.title }]" />
    <Breadcrumb v-else-if="pageTypeProject" :crumbs="[
      { label: 'Portfolio', link: '/portfolio' },
      { label: project.title }]" />
    <Breadcrumb v-else :crumbs="[
      { label: 'Portfolio', link: '/portfolio' },
      { label: areaLabel }]" />

    <!-- Page of a single project -->
    <div v-if="pageTypeProject"
      class="flex flex-col w-full md:px-x_padding_page md:py-y_padding_page md:space-y-16 px-x_padding_page_mobile py-y_padding_page_mobile space-y-4">
      <div class="flex md:flex-row md:justify-between md:space-y-0 md:space-x-12 flex-col space-y-4">
        <div class="flex flex-col space-y-4 md:space-y-6 justify-between">
          <div class="space-y-4">
            <!-- title -->
            <h1 class="text-3xl md:text-5xl font-extrabold">
              {{ project.title }}
            </h1>
            <p class="text-xl">
              {{ project.overview }}
            </p>
          </div>
          <div class="flex justify-between">
            <NuxtLink v-if="previousProject" :to="'/portfolio/' + linkPrevious"
              class="text-color-1000 md:text-lg text-sm font-bold flex md:space-x-2 items-center hover:text-color-700 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="md:w-6 md:h-6 w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <span>Previous project</span>
            </NuxtLink>
            <div v-else />
            <NuxtLink v-if="nextProject" :to="'/portfolio/' + linkNext"
              class="justify-end text-primary-color md:text-lg text-sm font-bold flex space-x-2 items-center hover:text-color-700 transition duration-200">
              <span>Next project</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="md:w-6 md:h-6 w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </NuxtLink>
            <div v-else />
          </div>
        </div>
        <!-- cover image -->
        <img class="h-64 max-w-min rounded-xl object-cover aspect-video" :src="coverImage"
          :alt="'Cover image project ' + project.id" />
      </div>

      <div class="flex md:flex-row md:space-x-4 md:space-y-0 flex-col space-y-4">
        <ProjectTab class="basis-2/5" :tabType="0" :title="project.startup.name" :titleLabel="'Company'"
          :subtitle="project.startup.headquarter" :subtitleLabel="'Headquarter'" :image="'startup/' + project.startup.id"
          :links="{ url: project.startup.website, label: 'Visit website' }" />

        <ProjectTab class="basis-2/5" :tabType="0" :title="project.supervisor.full_name" :titleLabel="'Supervisor'"
          :subtitle="project.supervisor.position" :subtitleLabel="'Role'" :image="'startup/' + project.startup.id"
          :links="{ url: '/team/' + project.supervisor.id, label: 'Visit profile' }" />

        <ProjectTab class="basis-1/5" :tabType="1" :title="'Areas'" :titleLabel="'Related to this project'"
          :links="project.area" />
      </div>

      <div class="flex flex-col space-y-5">
        <h1 class="text-3xl md:text-4xl font-extrabold">
          Product
        </h1>
        <p class="text-lg md:text-xl">
          {{ project.product }}
        </p>
        <h1 class="text-3xl md:text-4xl font-extrabold">
          Team
        </h1>
        <p class="text-lg md:text-xl">
          {{ project.team }}
        </p>
        <h1 v-if="project.gallery" class="text-3xl md:text-4xl font-extrabold">
          Gallery
        </h1>
        <!--div class="grid grid-cols-3 grid-flow-row gap-4">
          <img class="rounded-xl row-start-1 mt-8 row-span-2" src="~/assets/img/home-image.jpg" />
          <img class="rounded-xl row-end-3 row-span-2" src="~/assets/img/home-image.jpg" />
          <img class="rounded-xl row-start-1 mt-8 row-span-2" src="~/assets/img/home-image.jpg" />
          <img class="rounded-xl row-span-2" src="~/assets/img/home-image.jpg" />
          <img class="rounded-xl row-span-2 -mt-8" src="~/assets/img/home-image.jpg" />
          <img class="rounded-xl row-span-2" src="~/assets/img/home-image.jpg" />
        </div-->
        <div v-if="project.gallery" class="grid md:grid-cols-3 gap-4 grid-cols-1">
          <img v-for="img of project.gallery" class="rounded-xl" :src="imageUrl(img)" />
        </div>
      </div>

      <div class="flex md:flex-row flex-col md:space-y-0 space-y-4">
        <NuxtLink v-if="previousProject" :to="'/portfolio/' + previousProject.id"
          class="md:order-none order-1 py-4 md:py-0 flex-1 text-color-1000 text-lg font-bold flex md:space-x-2 items-center hover:text-color-700 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor"
            class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <div>
            <p class="text-color-700">Previous project</p>
            <h3 class="font-extrabold text-xl">{{ previousProject.title }}</h3>
          </div>
        </NuxtLink>
        <div v-else class="flex-1" />

        <NuxtLink :to="linkBack"
          class="md:order-none order-last flex-none py-2 px-4 mx-auto items-center justify-center flex space-x-2 bg-white text-primary-color hover:text-white hover:bg-primary-color text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
          <span>Return to portfolio</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
        </NuxtLink>

        <NuxtLink v-if="nextProject" :to="'/portfolio/' + nextProject.id"
          class="md:order-none order-0 flex-1 justify-end text-primary-color text-lg font-bold flex space-x-2 items-center hover:text-color-700 transition duration-200">
          <div class="text-right">
            <p class="text-color-700">Next project</p>
            <h3 class="font-extrabold text-xl">{{ nextProject.title }}</h3>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor"
            class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </NuxtLink>
        <div v-else class="flex-1" />
      </div>


    </div>

    <!-- Page of portfolio related to a specific area -->
    <div v-else
      class="flex flex-col space-y-2 md:space-y-16 md:px-x_padding_page md:py-y_padding_page px-x_padding_page_mobile py-y_padding_page_mobile  w-full">

      <div class="flex justify-between">
        <!-- title -->
        <h1 class="text-5xl font-extrabold">
          Portfolio
        </h1>
        <!-- searchBar -->
        <SearchBar class="invisible md:visible" @search-filter="receiveEmit" />
      </div>

      <div class="flex space-y-4 md:space-x-5 flex-col md:flex-row">
        <!-- side drawer section -->
        <SideDrawer class="basis-1/5" :pageIndex="indexDrawer" />

        <!-- cards projects section -->
        <div v-if="projectExist" class="basis-4/5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- single card project -->
          <SmallProjectCard v-for="project of projectList" :title="project.title" :overview="project.overview"
            :startupId="project.startup.id" :link="'/portfolio/' + area + '/' + project.id" :id="project.id" />
          <div id="no-projects"
            class="w-[50rem] absolute m-auto text-2xl flex flex-row space-x-5 items-center text-color-1000"
            style="display: none;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-14 h-full">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              Sorry, but there are <b>no {{ areaLabel.toLowerCase() }} projects</b> matching your search criteria. Please
              try
              again with different keywords.
            </span>
          </div>
        </div>

        <div v-else class="basis-4/5">
          No projects
        </div>

      </div>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
const area = ((parseFloat(id) === id >>> 0) ? route.params.area : route.params.id)
const areaLabel = area.charAt(0).toUpperCase() + area.slice(1).replaceAll("-", " ")
const pageTypeProject = ((parseFloat(id) === id >>> 0) ? true : false)
let project, previousProject, nextProject, coverImage, linkPrevious, linkNext, linkBack
let projectList, indexDrawer = 0, projectExist = false;

// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file

if (pageTypeProject && !area) { //project from 'All projects' page
  const { data: dataProject } = await useFetch('/api/portfolio/all/' + id, { initialCache: false })

  project = dataProject.value.project
  //return id, title, overview, product, team, startup (id, name, headquarter, website), supervisor (id, full_name, position), area(id, name), gallery
  console.log(project.gallery)
  previousProject = dataProject.value.previousProject
  //return id, title
  linkPrevious = (previousProject) ? previousProject.id : undefined

  nextProject = dataProject.value.nextProject
  //return id, title
  linkNext = (nextProject) ? nextProject.id : undefined

  coverImage = "/_nuxt/assets/img/project/" + project.id + '.png'
  linkBack = '/portfolio'
} else if (pageTypeProject) { //project from an area page
  const { data: dataProject } = await useFetch('/api/portfolio/' + areaLabel + '/' + id)

  project = dataProject.value.project
  //return id, title, overview, product, team, startup (id, name, headquarter, website), supervisor (id, full_name, position), area(id, name), gallery

  previousProject = dataProject.value.previousProject
  //return id, title
  linkPrevious = (previousProject) ? (area + '/' + previousProject.id) : undefined

  nextProject = dataProject.value.nextProject
  //return id, title
  linkNext = (nextProject) ? (area + '/' + nextProject.id) : undefined

  coverImage = "/_nuxt/assets/img/project/" + project.id + '.png'
  linkBack = '/portfolio/' + area
} else { //area page
  const { data } = await useFetch('/api/portfolio/' + areaLabel + '/undefined')

  projectList = data.value
  if (projectList[0]) { //todo verifica che ci siano progetti
    projectExist = true
    indexDrawer = projectList[0].area[0].id + 1
  } else {
    projectExist = false
    indexDrawer = projectList.id + 1
  }
}

function imageUrl(id_image) {
  var url = new URL('../assets/gallery/' + id_image + '.png', import.meta.url).href
  url = '/_nuxt/assets/gallery/' + id_image + '.png'
  return url
}

function search(value) {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  if (value.toUpperCase().indexOf(filter) > -1) {
    return true
  } else {
    return false
  }
}
function receiveEmit(value) {
  var noProjects = true
  for (var i = 0; i < projectList.length; i++) {
    if (projectList[i].title.toUpperCase().indexOf(value) > -1) {
      document.getElementById(projectList[i].id).style.display = "";
      noProjects = false
    } else document.getElementById(projectList[i].id).style.display = "none";
  }
  if (noProjects) document.getElementById("no-projects").style.display = "";
  else document.getElementById("no-projects").style.display = "none";
}

/* To refresh the page todo remove not usefull
const refreshing = ref(false)
const refreshAll = async () => {
  refreshing.value = true
  try {
    await refreshNuxtData()
  } finally {
    refreshing.value = false
  }
}*/

//const description = ref(newLineOnFullStop(dog.value.description))
</script>