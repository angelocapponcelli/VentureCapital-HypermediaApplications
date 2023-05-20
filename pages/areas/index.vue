<template>
    <main>
        <div class="flex flex-col">
            <Breadcrumb :crumbs="[
                { label: 'Areas', link: '/areas' }]" />

            <div class="flex flex-col bg-color-1000 py-y_padding_page">
                <!-- Title -->
                <div class="px-72">
                    <h1 class="text-5xl text-white text-center font-bold flex justify-center">
                        Our areas of interests
                    </h1>
                    <div class="flex justify-center">
                        <h2 class="font-regular text-white text-center pt-y_padding_title_text">
                            We discover and invest in game-changing startups,
                            we fuel innovation and empower visionary entrepreneurs,
                            unleashing potential across industries.<br>
                            Explore our diverse investment interests.
                        </h2>
                    </div>
                </div>
                <div class="pt-y_padding_title_text flex flex-row">
                    <div class="grow"></div>
                    <div class="max-w-xs">
                        <SearchBar />
                    </div>
                    <div class="grow"></div>
                </div>
            </div>
            <AreaCard v-for="(area, index) of areas" :key="index" :name="area.name" :description="area.description"
                :areaId="area.id" :index="index" />
        </div>

    </main>
</template>

<script>

export default defineNuxtComponent({
    async asyncData() {
        const areas = await $fetch('/api/areas')
        return {
            areas
        }
    },
    computed: {
        getId(area) {
            // Request the image as a webpack module by using `require`
            return areas.findIndex(area);
        }
    },
})
</script>