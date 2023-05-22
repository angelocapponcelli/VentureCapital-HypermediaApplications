<!--
    Page description for a single person.
-->
<template>
    <main>
        <Breadcrumb :crumbs="[{ label: 'Our team', link: '/team' }, { label: person.full_name, link: '/team/' + id }]"/>

        <BigPersonCard :name="person.full_name" :position="person.position" :description="person.description" :image="person.image" cvLink="#" :id="person.id" :next="nextPerson" />
        
        <div v-if="relatedProjects.length > 0" class="related-projects-container">
            <div class="flex flex-col space-y-8 px-32 pt-10 pb-16 w-full">
                <h1>
                    Related projects
                </h1>
                <div class="flex flex-row justify-center space-x-10">
                    <!-- related projects cards -->
                    <SmallProjectCard class="w-96 h-[500px]" v-for="project of relatedProjects" :title="project.title"
            :overview="project.overview" :startupId="project.startup.id" :link="'/portfolio/' + project.id" :id="project.id" />
                </div>
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
        box-sizing: border-box;
        width: 100vw;
        height: auto;
        /* Neutral Colors/Color 500 */
        background: #E7E6F2;
        /* Neutral Colors/Color 300 */
        border: 1px solid #F9F9FF;
        margin: 25px;
        margin-bottom: 30px;
    }

    .related-projects-container h1 {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 50px;
        /* Neutral Colors/Headings Black */
        color: #494850;
    }
</style>