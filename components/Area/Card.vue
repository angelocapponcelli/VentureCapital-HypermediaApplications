<template>
    <div class="flex flex-row py-y_padding_page px-x_padding_page" :style="{ backgroundColor: getBackgroundColor(index) }">

        <div class="flex flex-col pr-y_padding_title_text">
            <h1 class="text-5xl font-bold">
                {{ name }}
            </h1>
            <h2 class="text-color-900 pt-y_padding_title_text">
                {{ truncate(description) }}
            </h2>
            <span class="pt-y_padding_title_text">Learn More</span>
        </div>
        <img class="object-center object-cover h-52 w-full max-w-xs rounded-xl pl-70" :src=imageUrl alt="cover image" />
    </div>
</template>

<script>

export default {
    props: ["areaId", "name", "description", "index"],
    computed: {
        imageUrl() {
            return "/_nuxt/assets/img/areas/" + this.areaId + '.png';
        }
    },
    methods: {
        getBackgroundColor(index) {
            return index % 2 === 0 ? '#F9F9FF' : 'white';
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