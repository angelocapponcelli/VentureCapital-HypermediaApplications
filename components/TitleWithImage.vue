<template>
    <div class="relative text-center w-full h-[200px]">
        <!-- Uncomment this line to substitute the the background color with an image -->
        <!-- <img src='~/assets/img/home-image.jpg' /> -->
        <div class="flex flex-col space-y-20">
            <span class="page-title">{{ title }}</span>
            <span class="page-subtitle">{{ subtitle }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            subtitle: String,
        }
    }
</script>

<style>
    /* Heading */
    .page-title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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