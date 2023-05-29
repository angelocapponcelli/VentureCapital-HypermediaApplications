<template>
    <div class="relative text-center md:p-0 px-x_padding_page_mobile py-y_padding_page_mobile w-full h-auto">
        <!-- Uncomment this line to substitute the the background color with an image -->
        <!-- <img src='~/assets/img/home-image.jpg' /> -->
        <div class="grid grid-col-1 space-y-2 md:p-10">
            <span class="font-sans font-extrabold no-italic text-[40px] md:text-[56px] md:leading-[66px] text-center">{{ title }}</span>
            <span class="font-sans text-lg leading-[30px] text-center text-color-1000 lg:px-40 xl:px-64">{{ subtitle }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'title', 'subtitle' ],
    }
</script>