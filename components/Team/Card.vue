<!-- Card for the Our Team page. Contains the person's image, name and position at the company. -->

<template>
    <NuxtLink :to ="'/team/' + id"
    class="p-6 space-y-2 rounded-2xl bg-white border-2 border-color-700 hover:shadow-md hover:transform hover:scale-[103%] transition duration-200">
        <div class="flex flex-col justify-between h-full">
            <!-- The person image contains the link to the supabase bucket in the data-lazy attribute, this is then used to lazy load it -->
            <img class="2xl:h-[85%] object-top object-cover 2xl:object-top h-80 w-full mb-2 rounded-2xl" :data-lazy="imageUrl"
            :alt="'Thumbnail ' + name" format="webp"/>
            <!-- Person's name and position -->
            <div class="w-fit h-[38px] font-sans not-italic font-bold text-2xl md:text-xl leading-[38px] text-[494850] lg:text-[28px]">
                {{ name }}
            </div>
            <!-- If the position text is very long, the font is scaled down to fit in the card -->
            <div v-if="isTooLong(position)" class="w-fit h-[20px] font-sans not-italic font-medium 
            uppercase tracking-tight lg:tracking-normal text-[15px] leading-[20px] text-[494850] xl:text-[18px]">
                {{ position }}
            </div>
            <div v-else class="w-fit h-[20px] font-sans not-italic font-medium uppercase tracking-wider lg:tracking-widest 
            text-base leading-[20px] text-[494850] lg:text-[18px] 2xl:text-2xl">
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
            return config.SUPABASE_ASSETS_URL + "/people/" + this.image + ".webp"
        }
    }
}
</script>

<script setup>
/* Function to check if the length of a text is longer than a character limit */
function isTooLong(text) {
    if (text.length > 25) {
        return true;
    }
    return false;
}
</script>