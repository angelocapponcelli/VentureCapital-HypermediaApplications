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
          <BigProjectCard v-for="n in 5" :title="'Project title ' + n" :overview="'Project overview...'" :startupId="1" />

        </div>

      </div>
    </div>
  </main>
</template>