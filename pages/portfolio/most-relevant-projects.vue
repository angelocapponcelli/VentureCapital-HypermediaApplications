<template>
  <main>
    <!-- breadcrumb-->
    <Breadcrumb :crumbs="[
      { label: 'Portfolio', link: '/portfolio' },
      { label: 'Most relevant projects', link: '/most-relevant-projects' }]" />

    <!-- content -->
    <div class="flex flex-col space-y-16 px-36 py-20 w-full">

      <!-- title -->
      <h1 class="text-5xl font-extrabold">
        Portfolio
      </h1>

      <div class="flex space-x-5">
        <!-- side drawer section -->
        <SideDrawer class="basis-1/5 sticky" :pageIndex=1 />

        <!-- cards projects section -->
        <div class="flex flex-col space-y-5 basis-4/5">

          <!-- single card project -->
          <NuxtLink to="#" v-for="n in 5"
            class="p-6 flex space-x-12 rounded-2xl bg-white border-2 border-color-700 hover:shadow-md hover:transform hover:scale-101 transition duration-500">

            <!-- cover image -->
            <img class="object-center object-cover h-56 w-56 rounded-xl" src="~/assets/img/home-image.jpg"
              alt="cover image">

            <!-- project overview -->
            <div class="flex-auto content-center flex-col space-y-5 align-middle m-auto">
              <h2 class="text-4xl font-extrabold">
                Robot Assist AI
              </h2>
              <p class="text-lg text-color-900">
                Ambitious startup venture that aims to transform the way people interact with personal assistants.
              </p>
              <div
                class="text-primary-color text-lg font-bold flex space-x-2 items-center hover:text-color-700 transition duration-200">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>

          </NuxtLink>

        </div>

      </div>
    </div>
  </main>
</template>