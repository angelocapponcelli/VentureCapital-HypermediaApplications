<!--
    This is an error page.
    Whenever a route that doesn't exist is called, this page will be shown.
-->
<template>
    <NuxtLayout>
        <main id="main_error_page" class="place-items-center flex items-center justify-center">
            <div
                class="grid grid-col-1 space-y-8 text-center px-x_padding_page_mobile py-y_padding_page_mobile w-full h-auto">
                <h1 class="text-5xl font-bold">Error 404</h1>
                <div class="text-color-900">
                    <h2 class="text-4xl">Page does not exist</h2>
                    <p class="text-xl">The page you are looking for could not be found.</p>
                </div>
                <div class="flex flex-row justify-center">
                    <NuxtLink to="/"
                        class="items-center font-bold text-primary-color text-xl hover:transform hover:scale-105 hover:text-color-700 transition duration-200">
                        <b>RETURN TO HOME PAGE</b>
                    </NuxtLink>
                </div>
            </div>
            <!-- <h1>Oops, something went wrong with your request</h1> -->

        </main>
    </NuxtLayout>
</template>

<style>
/* specific style for this page only */
#main_error_page {
    height: 70vh;
}
</style>