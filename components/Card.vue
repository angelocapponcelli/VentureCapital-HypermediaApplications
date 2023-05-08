<!--
    Card to display information in the list page.
    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->
<template>
    <div class="card">
        <div class="image-container">
            <img class="img" src='~/assets/img/home-image.jpg' />
        </div>
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
        <NuxtLink :to = "link" ><button>Open description</button></NuxtLink>
    </div>
</template>

<script setup>
    const props = defineProps(['title', 'subtitle', 'link'])
</script>

<style>
    .image-container
    {
        display: flex;
        justify-content: center;
        border: 2px dashed red;
        border-radius: 10px;
        padding: 2px;
        width: 250px;
        height: 250px;
    }

    .img
    {
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        height: auto;
        width: auto;
        margin: auto;
    }

    .card
    {
        display: flex;
        flex-flow: column;
        padding: 20px;
        border: 2px solid black;
        border-radius: 20px;
        width: fit-content;
        height: fit-content;
    }

    .title
    {
        font-size: 2em;
        font-weight: bold;
    }
</style>