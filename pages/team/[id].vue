<!--
    Page description for a single person.
-->
<template>
    <main>
        <Breadcrumb :crumbs="[{ label: 'Our team', link: '/team' }, { label: person.full_name, link: '/team/' + id }]"/>

        <div class="flex flex-row justify-center px-x_padding_page_mobile lg:px-x_padding_page py-5">
            <TeamBigCard :name="person.full_name" :position="person.position" :description="person.description" 
            :image="person.image" cvLink="#" :id="person.id" :next="nextPerson" />
        </div>

        <div class="px-x_padding_page_mobile py-y_padding_page_mobile lg:px-x_padding_page w-full h-auto bg-color-300">
            <div v-if="relatedProjects.length > 0" class="flex flex-col space-y-8">
                <h1 class="font-['DM Sans'] not-italic font-bold text-3xl md:text-[44px] leading-[50px] text-[494850]">
                    Related projects
                </h1>
                <!-- <div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-10"> -->
                <div class="basis-4/5 grid gap-4 justify-center m-auto" 
                :class="{ 'grid-cols-1 md:w-[350px]': small, 'md:grid-cols-2 md:w-[700px]': medium, 'md:grid-cols-3 w-full': large }">
                    <!-- related projects cards class="md:w-96 md:h-[500px]" -->
                    <ProjectSmallCard v-for="project of relatedProjects" :title="project.title"
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

    let small=false,medium=false, large=false;
    if (relatedProjects.length == 1) {
        small = true;
    } else if (relatedProjects.length == 2) {
        medium = true;
    } else if (relatedProjects.length >= 3) {
        large = true;
    }

    const title = ref('Venture Capital - ' + person.full_name)
    useHead({
        title,
        meta: [{
            name: 'description',
            content: 'A collective of passionate and experienced professionals driving visionary investments and empowering startups to thrive in the world of venture capital.'
        }]
    })
</script>