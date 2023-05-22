<template>
    <!-- <NuxtLink :to ="'/team/' + id"
    class="p-6 flex flex-col space-y-2 rounded-2xl bg-[#F2F1FA] hover:shadow-md hover:transform hover:scale-101 transition duration-500"> -->
    <NuxtLink :to ="'/team/' + id"
    class="p-6 space-y-2 flex flex-col rounded-2xl bg-white border-2 border-color-700 hover:shadow-md hover:transform hover:scale-101 transition duration-500">
    <!-- TODO add dynamic person image -->
        <img class="object-center object-cover h-80 w-full rounded-2xl" :src="imageUrl" alt="person image"/>

        <!-- person name and position -->
        <div class="name">{{ name }}</div>
        <div class="position">{{ position }}</div>
    </NuxtLink>
</template>

<script>
export default {
    props: ['name', 'position', 'id', 'image'],
    
    computed: {
        imageUrl() {
            const config = useRuntimeConfig();
            return config.SUPABASE_ASSETS_URL + "/people/" + this.image + ".png"
        }
    }
}
</script>

<style>
    .person-image-container
    {
        display: flex;
        justify-content: center;
    }

    .person-img
    {
        vertical-align: middle;
        border-radius: 20px;
    }

    .person-card
    {
        display: flex;
        flex-flow: column;
        text-align: center;
        padding: 20px;
        border-radius: 20px;

        /* Container */

        /* position: absolute; */
        width: 380px;
        height: 500px;
        left: 110px;
        top: 558px;

        /* Neutral Colors/Color 400 */
        background: #F2F1FA;
    }

    .name
    {
        /* Member Name */
        width: -moz-available;
        height: 38px;
        /* Special headings/Display 4 */
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        /* Neutral Colors/Headings Black */
        color: #494850;
    }

    .position
    {
        /* Member Title */
        width: -moz-available;
        height: 20px;
        /* Text Single Uppercase/200/Medium */
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        /* identical to box height, or 111% */
        letter-spacing: 0.1em;
        text-transform: uppercase;
        /* Neutral Colors/Headings Black */
        color: #494850;
    }
</style>