<!--
    Group of text and image side by side. When the screen becomes smaller, the text is moved below the image.

    PROPS:
    - isReverse: boolean value that determines whether the image comes before or after the text.
    - description: text displayed near the image.
-->
<template>
    <!--
        This is an example of class/style binding. It allows to change dynamically the style of an element based on the boolean value.
        There is also another way to achieve this by using the array notation. More here: https://vuejs.org/guide/essentials/class-and-style.html#class-and-style-bindings
    -->
    <div :class = "{'info-group': !isReverse, 'reverse-info-group': isReverse}">
        <img class = "main-img" src = "~/assets/img/home-image.jpg" />
        <p>
           {{ description }}
        </p>
    </div>
</template>

<script setup>
    /*
        Instead of defining the props as a simple list, an object was used.
        This allows to add properties to the props.
        In this example there are:
        - type: type of the prop
        - default: default value of the prop when it is not provided
    */
    defineProps({
        isReverse: {
            type: Boolean,
            default: false
        },
        description: {
            type: String
        }
    })
</script>

<style>
    .main-img {
        width: 30%;
        height: auto;
    }

    .info-group {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }
    
    .reverse-info-group {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 1200px) {
        #main-img {
            width: 50%;
            height: auto;
        }

        .info-group, .reverse-info-group{
            flex-direction: column;
            gap: 10px;
        }
    }
</style>