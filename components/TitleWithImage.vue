<template>
    <div class="relative text-center md:p-0 px-x_padding_page_mobile py-y_padding_page_mobile w-full h-auto">
        <!-- Uncomment this line to substitute the the background color with an image -->
        <!-- <img src='~/assets/img/home-image.jpg' /> -->
        <div class="grid grid-col-1 space-y-2 md:p-10">
            <span class="page-title">{{ title }}</span>
            <span class="page-subtitle lg:px-40 xl:px-64">{{ subtitle }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'title', 'subtitle' ],
    }
</script>

<style>
    /* Heading */
    .page-title {
        /* position: absolute; */
        /* top: 50%;
        left: 50%; */
        /* transform: translate(-50%, -50%); */
        /* Headings/H1 */
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 66px;
        /* identical to box height, or 118% */
        text-align: center;
        /* Neutral Colors/Headings Black */
        color: #494850;
    }

    /* Paragraph */
    .page-subtitle {
        /* position: absolute; */
        /* top: 50%;
        left: 50%; */
        /* transform: translate(-50%, -50%); */
        /* Body/Default */
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        /* or 167% */
        text-align: center;
        /* Neutral Colors/Text Gray */
        color: #767494;
    }
</style>