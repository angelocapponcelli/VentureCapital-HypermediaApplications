<!--
    Page description for a single person.
-->
<template>
    <main>
        <Breadcrumb :crumbs="[{ label: 'Our team', link: '/team' }, { label: person.full_name, link: '/team/' + id }]"/>

        <div class="px-x_padding_page_mobile lg:px-x_padding_page py-5">
            <TeamBigCard :name="person.full_name" :position="person.position" :description="person.description" 
            :image="person.image" cvLink="#" :id="person.id" :next="nextPerson" />
        </div>

        <div class="px-x_padding_page_mobile py-y_padding_page_mobile lg:px-x_padding_page w-full h-auto bg-color-300">
            <div v-if="relatedProjects.length > 0" class="flex flex-col space-y-8">
                <h1 class="font-['DM Sans'] not-italic font-bold text-3xl md:text-[44px] leading-[50px] text-[494850]">
                    Related projects
                </h1>
                <div class="flex flex-row justify-center space-x-10">
                    <!-- related projects cards -->
                    <ProjectSmallCard class="w-96 h-[500px]" v-for="project of relatedProjects" :title="project.title"
            :overview="project.overview" :startupId="project.startup.id" :link="'/portfolio/' + project.id" :id="project.id" />
                </div>
            </div>
            <div v-else class="text-xl text-color-1000 lg:text-left text-center">
                <span>
                    There are <b>no related projects.</b>
                </span>
            </div>
        </div>
        
    </main>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id

    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: dataPerson } = await useFetch('/api/team/' + id)
    const person = dataPerson.value.person
    const nextPerson = dataPerson.value.nextPerson

    const { data: dataProjects } = await useFetch('/api/portfolio/person/' + id)
    const relatedProjects = dataProjects.value.projects
</script>

<style>
    .related-projects-container {
        /* box-sizing: border-box; */
        width: 100%;
        height: auto;
        /* Neutral Colors/Color 500 */
        background: #E7E6F2;
        /* Neutral Colors/Color 300 */
        border: 1px solid #F9F9FF;
        /* margin: 25px;
        margin-bottom: 30px; */
    }
</style>