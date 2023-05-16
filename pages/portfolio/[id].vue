<template>
  <main>
    <Breadcrumb :crumbs="[
      { label: 'Portfolio', link: '/portfolio' },
      { label: project.title }]" />

    <div class="flex flex-col w-full px-x_padding_page py-y_padding_page space-y-16">
      <div class="flex justify-between space-x-12">
        <div class="flex flex-col justify-between">
          <!-- title -->
          <h1 class="text-5xl font-extrabold">
            {{ project.title }}
          </h1>
          <p class="text-xl">
            {{ project.overview }} + RoboAssist AI is an ambitious startup venture that aims to transform the way people
            interact with personal assistants through the power of artificial intelligence (AI), machine learning, and
            robotics.
          </p>
          <div class="flex justify-between">
            <NuxtLink to="#"
              class="text-color-1000 text-lg font-bold flex space-x-2 items-center hover:text-color-700 transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <span>Previous project</span>
            </NuxtLink>
            <NuxtLink to="#"
              class="text-primary-color text-lg font-bold flex space-x-2 items-center hover:text-color-700 transition duration-200">
              <span>Next project</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </NuxtLink>
          </div>
        </div>
        <!-- cover image -->
        <img class="max-h-56 rounded-xl" src="~/assets/img/home-image.jpg" />
      </div>

      <div class="flex flex-row space-x-4">
        <ProjectTab class="basis-2/5" :tabType="0" :title="project.startup.name" :titleLabel="'Company'"
          :subtitle="project.startup.headquarter" :subtitleLabel="'Headquarter'" :image="'startup/' + project.startup.id"
          :links="{ url: 'www.example00.it', label: 'Visit website' }" />

        <ProjectTab class="basis-2/5" :tabType="0" :title="'Harper Lawson'" :titleLabel="'Supervisor'"
          :subtitle="'Developer'" :subtitleLabel="'Role'" :image="'startup/' + project.startup.id"
          :links="{ url: 'www.example01.it', label: 'Visit profile' }" />

        <ProjectTab class="basis-1/5" :tabType="1" :title="'Areas'" :titleLabel="'Related to this project'" :links="[
          { url: 'www.example0.it', label: 'Machine learning' },
          { url: 'www.example1.it', label: 'Neural network' },
          { url: 'www.example2.it', label: 'Artificial intelligence' }]" />
      </div>

      <div class="flex flex-col space-y-5">
        <h1 class="text-4xl font-extrabold">
          Product
        </h1>
        <p class="text-xl">
          RoboAssist AI is building a next-generation personal assistant that goes beyond voice commands and basic tasks.
          Our intelligent robotic assistant utilizes advanced AI algorithms and machine learning models to understand user
          behavior, adapt to their preferences, and proactively assist with a wide range of tasks. Whether it's managing
          schedules, providing recommendations, answering queries, or performing physical tasks, RoboAssist AI aims to
          seamlessly integrate into users' lives, offering an intuitive and personalized experience.
        </p>
        <h1 class="text-4xl font-extrabold">
          Team
        </h1>
        <p class="text-xl">
          The RoboAssist AI team is a diverse group of talented individuals with a shared passion for AI, machine
          learning, and robotics. Led by visionary founder Avery Sullivan, our team consists of experienced engineers,
          data scientists, robotics specialists, and UX/UI designers. Together, we bring a wealth of expertise in
          developing cutting-edge technologies and a deep understanding of the potential of AI in transforming
          human-machine interactions.
        </p>
        <h1 class="text-4xl font-extrabold">
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
        <div class="grid grid-cols-3 gap-4">
          <img class="rounded-xl" src="~/assets/img/home-image.jpg" />
          <img class="rounded-xl" src="~/assets/img/home-image.jpg" />
          <img class="rounded-xl" src="~/assets/img/home-image.jpg" />
        </div>
      </div>

      <div class="flex justify-between">
        <NuxtLink to="#"
          class="text-color-1000 text-lg font-bold flex space-x-2 items-center hover:text-color-700 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor"
            class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <div>
            <p class="text-color-700">Previous project</p>
            <h3 class="font-extrabold text-xl">Nome del progetto</h3>
          </div>
        </NuxtLink>
        <NuxtLink to="/portfolio"
          class="py-2 px-4 my-auto items-center flex space-x-2 bg-white text-primary-color hover:text-white hover:bg-primary-color text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
          <span>Return to portfolio</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
        </NuxtLink>


        <NuxtLink to="#"
          class="text-primary-color text-lg font-bold flex space-x-2 items-center hover:text-color-700 transition duration-200">
          <div class="text-right">
            <p class="text-color-700">Next project</p>
            <h3 class="font-extrabold text-xl">Nome del progetto</h3>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor"
            class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: project } = await useFetch('/api/portfolio/' + id)
//return id, title, overview, startup (id, name, headquarter)

//const description = ref(newLineOnFullStop(dog.value.description))

</script>