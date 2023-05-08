<!--
    Header of the page
-->
<template>
    <header>
        <h1>The Dog Shelter</h1>
        <nav>
            <NuxtLink to = "/">HOME</NuxtLink>
            <NuxtLink to = "/dogs">DOGS</NuxtLink>
            <NuxtLink to = "/locations">LOCATIONS</NuxtLink>
            <NuxtLink to = "/about">ABOUT US</NuxtLink>
            <NuxtLink to = "/contact">CONTACT US</NuxtLink>
        </nav>
    </header>
</template>

<style>
    header
    {
        background-color: orange;
    }

    header
    {
        padding: 0px 20px 0px 20px;
        margin-bottom: 5px;
        border-bottom: 5px solid brown;
        
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    nav {
        display: flex;
        gap: 30px;
        font-size: 17pt;
        font-weight: bold;
    }
</style>