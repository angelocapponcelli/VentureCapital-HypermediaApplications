<template>
    <main>
        <Breadcrumb :crumbs="[{ label: 'Our team', link: '/team' }]"/>
        <!-- content -->
        <div class="w-full" >
            <TitleWithImage title="Meet our team" subtitle="A collective of passionate and experienced professionals driving 
            visionary investments and empowering startups to thrive in the world of venture capital."/>
            
            <div class="flex flex-col space-y-16 px-36 py-20 w-full">
                <div class="basis-4/5 grid grid-cols-3 gap-4">
                    <!-- single person card -->
                    <PersonCard v-for="person of people" :name="person.full_name" :position="person.position" 
                        :id="person.id" :image="person.image" />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
/*
    The defineNuxtComponent gets us access to the asyncData property.
    This is the first function that is called by nuxt when the page is called.
    We can use this to pre-load the data to make it available to the user.
*/
export default defineNuxtComponent({
    async asyncData() {
        // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
        const people = (await $fetch('/api/team'))

        return {
            people
        }
    }
})
</script>