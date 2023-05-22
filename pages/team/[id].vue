<!--
    Page description for a single dog.
    As described in the SmallCard component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <Breadcrumb :crumbs="[{ label: 'Our team', link: '/team' }, { label: person.full_name, link: '/team/' + id }]"/>

        <BigPersonCard :name="person.full_name" :position="person.position" :description="person.description" :image="person.image" cvLink="#" :id="person.id" :next="nextPerson" />
        
        <div class="related-projects-container">
            <div class="flex flex-col space-y-8 px-32 pt-10 pb-16 w-full">
                <h1>
                    Related projects
                </h1>
                <div class="flex flex-row justify-center space-x-10">
                    <!-- single project card -->
                    <!-- TODO fetch related projects to person -->
                    <SmallProjectCard title="project.title" overview="Lorem ipsum dolor sit amet consecte tur adipiscing 
                    elit semper dalaracc lacus vel facilisis volutpat est velitolm." startupId="1" />
                    <SmallProjectCard title="project.title" overview="Lorem ipsum dolor sit amet consecte tur adipiscing 
                    elit semper dalaracc lacus vel facilisis volutpat est velitolm." startupId="1" />
                    <SmallProjectCard title="project.title" overview="Lorem ipsum dolor sit amet consecte tur adipiscing 
                    elit semper dalaracc lacus vel facilisis volutpat est velitolm." startupId="1" />
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