<!-- Area Card -->
<template>
    <div class="flex lg:flex-row flex-col lg:py-y_padding_page lg:px-x_padding_page px-x_padding_page_mobile py-y_padding_page_mobile"
        :style="{ backgroundColor: getBackgroundColor(index, areOdd) }">

        <div class="flex flex-col pr-y_padding_title_text justify-between">
            <div>
                <!-- Area name -->
                <h1 class="lg:text-5xl text-4xl font-bold lg:text-left text-center">
                    {{ name }}
                </h1>
                <!-- Truncated Area description -->
                <h2 class="text-color-900 pt-y_padding_title_text lg:text-left text-center">
                    {{ truncate(description, 200) }}
                </h2>
            </div>
            <div class="flex flex-row justify-center lg:justify-start w-full">
                <NuxtLink :to="'/areas/' + areaId"
                    class="w-fit text-primary-color text-lg font-bold flex space-x-2 items-center 
                    hover:transform hover:scale-105 hover:text-color-700 transition duration-200 lg:pt-y_padding_title_text py-y_padding_title_text">
                    <span>Discover More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </NuxtLink>
            </div>
        </div>
        <div class="grow"></div>
        <div class="flex justify-center w-full lg:max-w-xs">
            <img class="rounded-xl object-center object-cover h-52 pl-70 w-full max-w-xs"
                :src="config.SUPABASE_ASSETS_URL + '/areas/' + areaId + '.webp'" :alt="'Thumbnail ' + name + ' area'" />
        </div>
    </div>
</template>

<script>
export default {
    props: ["areaId", "name", "description", "index", "areOdd",],
    methods: {
        
        /*
        This logic allows to have the cards of the Area of alternating color.
        In particular the last card is always white
        to ensure that it is not gray like the footer
        */
        getBackgroundColor(index, areOdd) {
            if (areOdd) {
                return index % 2 === 0 ? 'white' : '#F2F1FA';
            } else {
                return index % 2 === 0 ? '#F2F1FA' : 'white';
            }
        },
    },
};
</script>

<script setup>
const config = useRuntimeConfig();
</script>