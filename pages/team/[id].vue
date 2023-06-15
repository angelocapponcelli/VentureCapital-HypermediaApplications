<!--
    Page description for a single person. Contains the Big Person Card component to display the person's information
    and a section for their related projects. The content of the section is dynamically loaded from Supabase and will
    scale depending on how many projects are present. 
-->
<template>
    <main>
        <Breadcrumb :crumbs="[{ label: 'Our team', link: '/team' }, { label: person.full_name, link: '/team/' + id }]"/>

        <div class="flex flex-row justify-center px-x_padding_page_mobile lg:px-x_padding_page py-5">
            <TeamBigCard :name="person.full_name" :position="person.position" :logline="person.logline" 
            :image="person.image" :description="person.description" :id="person.id" :next="nextPerson" />
        </div>

        <div class="px-x_padding_page_mobile py-y_padding_page_mobile lg:px-x_padding_page w-full h-auto bg-color-300">
            <div v-if="relatedProjects.length > 0" class="flex flex-col space-y-8">
                <h1 class="font-['DM Sans'] not-italic font-bold text-center text-3xl md:text-[44px] leading-[50px] text-[494850]">
                    Related projects
                </h1>
                <div class="basis-4/5 grid gap-4 justify-center m-auto" 
                :class="{ 'grid-cols-1 md:w-[350px]': small, 'md:grid-cols-2 md:w-[700px]': medium, 'md:grid-cols-3 md:w-full 2xl:w-[1200px]': large }">
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
    // The id of the person is fetched from the route
    const route = useRoute()
    const id = route.params.id

    // Using the id, the data is fetched from Supabase
    const { data: dataPerson } = await useFetch('/api/team/' + id)
    const person = dataPerson.value.person
    const nextPerson = dataPerson.value.nextPerson

    // And his related projects
    const { data: dataProjects } = await useFetch('/api/portfolio/person/' + id)
    const relatedProjects = dataProjects.value.projects

    // Based on the number of related projects the size of the section is calculated
    let small=false,medium=false, large=false;
    if (relatedProjects.length == 1) {
        small = true;
    } else if (relatedProjects.length == 2) {
        medium = true;
    } else if (relatedProjects.length >= 3) {
        large = true;
    }

    // Title and meta description are set for accessibility and SEO
    const title = ref('Venture Capital - ' + person.full_name)
    useHead({
        title,
        meta: [{
            name: 'description',
            content: 'A collective of passionate and experienced professionals driving visionary investments and empowering startups to thrive in the world of venture capital.'
        }]
    })
</script>