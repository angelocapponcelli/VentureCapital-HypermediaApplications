<!-- All areas page -->
<template>
    <main>
        <div class="flex flex-col w-full">
            <!-- Breadcrumbs -->
            <Breadcrumb :crumbs="[
                { label: 'Areas', link: '/areas' }]" />

            <div class="flex flex-col bg-primary-color lg:py-y_padding_page py-y_padding_page_mobile">
               
                <div class="lg:px-x_padding_page px-x_padding_page_mobile">
                    <!-- Title of the page-->
                    <h1 class="lg:text-5xl text-4xl text-white text-center font-bold flex justify-center">
                        Our areas of interests
                    </h1>
                    <!-- Description of the page -->
                    <div class="flex justify-center">
                        <h2 class="font-regular text-white text-center pt-y_padding_title_text">
                            We discover and invest in game-changing startups,
                            we fuel innovation and empower visionary entrepreneurs,
                            unleashing potential across industries.<br>
                            Explore our diverse investment interests.
                        </h2>
                    </div>
                </div>
                <!-- Search bar -->
                <div class="pt-y_padding_title_text flex flex-row">
                    <div class="grow"></div>
                    <div class="max-w-xs">
                        <SearchBar :id="'searchBar'" @search-filter="receiveEmit" />
                    </div>
                    <div class="grow"></div>
                </div>
            </div>
            <!-- List of Area cards if there is at least an area available-->
            <AreaCard v-if="searchedAreas.length > 0" v-for="(area, index) of searchedAreas" :key="index" :name="area.name"
                :description="area.description" :areaId="area.id" :index="index"
                :areOdd="!(searchedAreas.length % 2 === 0)" />
            <!-- There are no areas available -->
            <div v-else
                class="py-y_padding_page_mobile lg:py-y_padding_page lg:w-[40rem] md:w-[30rem] w-fit m-auto text-2xl flex md:flex-row flex-col md:space-x-5 space-x-0 text-color-1000 h-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="md:w-24 h-full max-h-10">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                    Sorry, but there are <b>no areas</b> matching your search criteria. Please
                    try again with different keywords.
                </span>
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
    head(nuxtApp) {
        return {
            title: 'Venture Capital - Areas',
            meta: [{
                name: 'description',
                content: 'We discover and invest in game-changing startups, we fuel innovation and empower visionary entrepreneurs, unleashing potential across industries. Explore our diverse investment interests.'
            }]
        }
    },
    async asyncData() {
        // Fetch the areas from the DB
        const areas = await $fetch('/api/areas')
        return {
            areas
        }
    },
    data() {
        return {
            search: ""
        };
    },
    computed: {
        searchedAreas() {
            return this.areas.filter(area => {
                return area.name.toUpperCase().indexOf(this.search) != -1;
            });
        }
    },
    methods: {
        receiveEmit(value) {
            this.search = value
        }
    }
})
</script>