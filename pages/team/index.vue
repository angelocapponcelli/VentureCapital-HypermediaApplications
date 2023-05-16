<template>
    <main>
        <Breadcrumb :crumbs="[{ label: 'Our team', link: '/team' }]"/>
        <!-- content -->
        <TitleWithImage title="Meet our team" subtitle="Lorem ipsum dolor sit amet consectetur 
        adipiscing elit volutpat gravida malesuada quam commodo id integer nam."/>
        
        <div class="flex flex-col space-y-16 px-36 py-20 w-full">

            <!-- title -->
            <!-- <h1 class="text-5xl font-extrabold text-center">
            Our Team
            </h1> -->

            <div class="basis-4/5 grid grid-cols-3 gap-4">
                <!-- single card -->
                <!-- <PersonCard title="John Carter" position="Ceo & Co-founder" />
                <PersonCard title="Sophie Moore" position="Cto & Co-founder" />
                <PersonCard title="Matt Cannon" position="vp of marketing" />
                <PersonCard title="Andy Smith" position="vp of design" />
                <PersonCard title="Lily Woods" position="vp of product" />
                <PersonCard title="Patrick Meyers" position="vp of sales" /> -->
                <PersonCard v-for="person of people" :name="person.full_name" :position="person.position" 
                    :link="'/team/' + person.id" />
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
    const people = await $fetch('/api/team')

    return {
        people
    }
  }
})
</script>

<!-- <script setup>
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: people } = await useFetch('/api/team')
    /*
        In order to implement a filter, we use the computed property.
        This allows to have a cached value that contains the filtered list.
        Instead of using the normal list for the cards, we used the computed property directly.
    */
    function compareFn(a, b) {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        // a must be equal to b
        return 0;
    }

    const ordered = computed(() => {
        // Checking for values where the full list is provided

        const arr = []

        people.sort()

        for (let i = 0; i < people.length; i++) {
            arr.push(people[i])
        }

        // Returning the ordered list
        return arr
    })
</script> -->