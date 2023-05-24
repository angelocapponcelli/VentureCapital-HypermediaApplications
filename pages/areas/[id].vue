<template>
    <div class="flex flex-col">
        <Breadcrumb :crumbs="[
            { label: 'Areas', link: '/areas' },
            { label: area.name }]" />
        <div class=bg-white>

            <div
                class="flex flex-col lg:py-y_padding_page py-y_padding_page_mobile lg:px-x_padding_page px-x_padding_page_mobile">

                <div class="flex items-center lg:flex-row flex-col">

                    <div class="flex flex-col lg:pr-24">
                        <h1 class="lg:text-5xl text-4xl text-left font-bold lg:text-left text-center">
                            {{ area.name }}
                        </h1>
                        <h2 class="text-left text-color-900 lg:pt-8 py-y_padding_title_text lg:text-left text-center">
                            {{ area.description }}
                        </h2>
                    </div>

                    <img class="w-96 h-auto rounded-xl mx-auto pl-70"
                        :src="config.SUPABASE_ASSETS_URL + '/areas/' + area.id + '.png'" :alt="area.name + ' image'" />
                </div>
            </div>

            <div class="box-border w-screen h-auto bg-color-300">
                <div class="lg:px-x_padding_page px-x_padding_page_mobile py-10">
                    <div v-if="area.project.length == 0" class="m-auto text-xl text-color-1000 lg:text-left text-center">
                        <span>
                            There are <b>no related projects.</b>
                        </span>
                    </div>
                    <div v-else class="flex flex-col space-y-8">
                        <div class="flex flex-row justify-between">
                            <h1 class="lg:text-4xl text-2xl font-bold">
                                Related projects
                            </h1>
                            <div
                                class="text-primary-color lg:text-lg font-bold flex space-x-2 items-center hover:text-color-700 transition duration-200">
                                <span>Learn more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                    stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>

                        <div class="basis-4/5 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <!-- single card project -->
                            <ProjectSmallCard v-for="(project, index) of projects" :key="index" :title="project.title"
                                :overview="project.overview" :startupId="project.startup" :index="index"
                                :link="'/portfolio/' + project.id" :id="project.id" />
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="lg:py-y_padding_page py-y_padding_page_mobile lg:px-x_padding_page px-x_padding_page_mobile">
            <div class="flex md:flex-row flex-col justify-between md:space-y-0 space-y-4">
                <div v-if="previousArea" class="flex flex-row justify-start md:w-1/3">
                    <NuxtLink :to="'/areas/' + previousArea.id"
                        class="w-fit md:order-none order-1 flex justify-start text-color-1000 text-lg font-bold space-x-2 items-center 
                            hover:transform hover:scale-101 hover:text-color-700 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                        <div class="text-left">
                            <p class="text-color-700">Previous area</p>
                            <h3 class="font-extrabold text-xl">{{ previousArea.name }}</h3>
                        </div>
                    </NuxtLink>
                </div>
                <div v-else class="md:w-1/3" />

                <NuxtLink to="/areas"
                class="max-h-14 md:order-none order-last flex-none py-2 px-4 mx-auto justify-center items-center flex space-x-2 bg-white text-primary-color 
                    hover:text-white hover:bg-primary-color text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                    <span>Return to Areas</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                </NuxtLink>

                <div v-if="nextArea" class="flex flex-row justify-end md:w-1/3">
                    <NuxtLink :to="'/areas/' + nextArea.id"
                        class="w-fit md:order-none order-0 flex justify-end text-primary-color text-lg font-bold space-x-2 items-center 
                            hover:transform hover:scale-101 hover:text-color-700 transition duration-200">
                        <div class="text-right">
                            <p class="text-color-700">Next area</p>
                            <h3 class="font-extrabold text-xl">{{ nextArea.name }}</h3>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </NuxtLink>
                </div>
                <div v-else class="md:w-1/3" />
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
const area = await $fetch('/api/areas/' + id);
const config = useRuntimeConfig();
const areas = await $fetch('/api/areas');
const projects = area.project.slice(0, 3);
let indexAreaInAreas = areas.findIndex(area => parseInt(area.id) === parseInt(id));
let previousArea, nextArea;

if (areas.length > 1) {
    if (indexAreaInAreas === areas.length - 1) {
        previousArea = areas[indexAreaInAreas - 1];
    } else if (indexAreaInAreas === 0) {
        nextArea = areas[indexAreaInAreas + 1];
    } else {
        previousArea = areas[indexAreaInAreas - 1];
        nextArea = areas[indexAreaInAreas + 1];
    }
}
</script>