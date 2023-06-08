<!--
    This is an error page.
    Whenever a route that doesn't exist is called, this page will be shown.
-->
<template>
    <NuxtLayout>
        <main>
            <div
                class="grid grid-col-1 space-y-2 text-center px-x_padding_page_mobile py-y_padding_page_mobile w-full h-auto">
                <h1 class="text-2xl">Error 404</h1>
                <h2 class="text-xl">Page not found</h2>
                <div class="flex flex-row justify-center">
                    <NuxtLink to="/" class="items-center font-bold text-primary-color text-xl
                                hover:transform hover:scale-105 hover:text-color-700 transition duration-200">
                        <b>RETURN TO HOME PAGE</b>
                    </NuxtLink>
                </div>
            </div>
            <!-- <h1>Oops, something went wrong with your request</h1> -->

        </main>
    </NuxtLayout>
</template>

<script setup>

</script>