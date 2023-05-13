<template>
  <main>
    <Breadcrumb :crumbs="[
      { label: 'Portfolio', link: '/portfolio' },
      { label: 'Most relevant projects', link: '/most-relevant-projects' }]" />
    <h1 class="text-4xl font-extrabold">
      Most relevant projects page
    </h1>
    <img id="main-img" src="~/assets/img/home-image.jpg" />
    <img id="main-img" src="~/assets/img/home-image.jpg" />
    <img id="main-img" src="~/assets/img/home-image.jpg" />
    <h2>
      This is a description for the Dog's Hotel. The best place where dogs can rest.
    </h2>
  </main>
</template>