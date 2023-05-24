<template>
    <div class="flex flex-row py-y_padding_page px-x_padding_page"
        :style="{ backgroundColor: getBackgroundColor(index, areOdd) }">

        <div class="flex flex-col pr-y_padding_title_text justify-between">
            <div>
                <h1 class="text-5xl font-bold">
                    {{ name }}
                </h1>
                <h2 class="text-color-900 pt-y_padding_title_text">
                    {{ truncate(description) }}
                </h2>
            </div>
            <NuxtLink :to="'/areas/' + areaId">
                <span class="pt-y_padding_title_text">Learn More</span>
            </NuxtLink>
        </div>
        <img class="object-center object-cover h-52 w-full max-w-xs rounded-xl pl-70"
            :src="config.SUPABASE_ASSETS_URL + '/areas/' + areaId + '.png'" :alt="name + ' image'" />
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