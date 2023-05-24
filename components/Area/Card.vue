<template>
    <div class="flex lg:flex-row flex-col lg:py-y_padding_page lg:px-x_padding_page px-x_padding_page_mobile py-y_padding_page_mobile"
        :style="{ backgroundColor: getBackgroundColor(index, areOdd) }">

        <div class="flex flex-col pr-y_padding_title_text justify-between">
            <div>
                <h1 class="lg:text-5xl text-4xl font-bold lg:text-left text-center">
                    {{ name }}
                </h1>
                <h2 class="text-color-900 pt-y_padding_title_text lg:text-left text-center">
                    {{ truncate(description) }}
                </h2>
            </div>
            <NuxtLink :to="'/areas/' + areaId"
                class="lg:pt-y_padding_title_text py-y_padding_title_text flex lg:justify-start justify-center">
                <span>Learn More</span>
            </NuxtLink>
        </div>
        <div class="flex justify-center w-full lg:max-w-xs">
            <img class="rounded-xl object-center object-cover h-52 pl-70 w-full max-w-xs"
                :src="config.SUPABASE_ASSETS_URL + '/areas/' + areaId + '.png'" :alt="name + ' image'" />
        </div>
    </div>
</template>

<script>

export default {
    props: ["areaId", "name", "description", "index", "areOdd",],
    methods: {
        getBackgroundColor(index, areOdd) {
            if (areOdd) {
                return index % 2 === 0 ? 'white' : '#F9F9FF';
            } else {
                return index % 2 === 0 ? '#F9F9FF' : 'white';
            }
        },
        truncate(input) {
            if (input.length > 200) {
                return input.substring(0, 200) + '...';
            }
            return input;
        }
    },
};
</script>

<script setup>
const config = useRuntimeConfig();
</script>