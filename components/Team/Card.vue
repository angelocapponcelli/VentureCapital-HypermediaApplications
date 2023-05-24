<template>
    <NuxtLink :to ="'/team/' + id"
    class="p-6 space-y-2 rounded-2xl bg-white border-2 border-color-700 hover:shadow-md hover:transform hover:scale-101 transition duration-500">
        <div class="flex flex-col justify-between h-full">
            <img class="2xl:h-[85%] object-top object-cover 2xl:object-top h-80 w-full mb-2 rounded-2xl" :data-lazy="imageUrl" alt="person image"/>
            <!-- person name and position -->
            <div class="w-fit h-[38px] font-sans not-italic font-bold text-2xl md:text-xl leading-[38px] text-[494850] lg:text-[28px]">
                {{ name }}
            </div>
            <div v-if="isTooLong(position)" class="w-fit h-[20px] font-sans not-italic font-medium 
            uppercase tracking-tight lg:tracking-normal text-[15px] leading-[20px] text-[494850] xl:text-[18px]">
                {{ position }}
            </div>
            <div v-else class="w-fit h-[20px] font-sans not-italic font-medium uppercase tracking-wider lg:tracking-widest 
            text-base leading-[20px] text-[494850] lg:text-[18px]">
                {{ position }}
            </div>
        </div>
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

<script setup>
function isTooLong(text) {
    if (text.length > 25) {
        return true;
    }
    return false;
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

    .name-small
    {
        /* Member Name */
        width: -moz-available;
        height: 38px;
        /* Special headings/Display 4 */
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
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

    .position-small
    {
        /* Member Title */
        width: -moz-available;
        height: 20px;
        /* Text Single Uppercase/200/Medium */
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        /* identical to box height, or 111% */
        letter-spacing: 0.1em;
        text-transform: uppercase;
        /* Neutral Colors/Headings Black */
        color: #494850;
    }
</style>