<template>
    <NuxtLink :to ="'/team/' + id"
    class="p-6 space-y-2 rounded-2xl bg-white border-2 border-color-700 hover:shadow-md hover:transform hover:scale-[103%] transition duration-200">
        <div class="flex flex-col justify-between h-full">
            <img class="2xl:h-[85%] object-top object-cover 2xl:object-top h-80 w-full mb-2 rounded-2xl" :data-lazy="imageUrl" alt="person image"
            format="webp"/>
            <!-- person name and position -->
            <div class="w-fit h-[38px] font-sans not-italic font-bold text-2xl md:text-xl leading-[38px] text-[494850] lg:text-[28px]">
                {{ name }}
            </div>
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