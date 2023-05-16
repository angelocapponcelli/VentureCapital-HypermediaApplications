<template>
  <main>
    <!-- breadcrumb-->
    <Breadcrumb :crumbs="[
      { label: 'Portfolio', link: '/portfolio' },
      { label: 'Most relevant projects', link: '/most-relevant-projects' }]" />

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
        <SideDrawer class="basis-1/5" :pageIndex=1 />

        <!-- cards projects section -->
        <div class="flex flex-col space-y-5 basis-4/5">

          <!-- single card project -->
          <BigProjectCard v-for="n in 5" :title="'Project title ' + n" :overview="'Project overview...'" :startupId="1" />

        </div>

      </div>
    </div>
  </main>
</template>