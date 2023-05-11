<!--
    Header of the page
-->
<template>
    <nav class="sticky top-0">
        <!-- desktop Menu -->
        <div class="bg-white drop-shadow-md">
            <div class="mx-36">
                <div class="flex justify-between">
                    <!-- logo -->
                    <NuxtLink to="/" class="flex items-center space-x-3 my-7">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                        </svg>
                        <span class="text-4xl font-extrabold">venture</span>
                        <span class="text-4xl font-extrabold text-primary-color">capital</span>
                    </NuxtLink>
                    <!-- menu -->
                    <div class="flex items-center space-x-1">
                        <div class="space-x-1 mr-8 h-full flex items-center">
                            <NuxtLink to="/dogs"
                                class="h-full px-2 hover:text-color-900 border-b-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                <div class="h-full flex items-center">Portfolio</div>
                            </NuxtLink>
                            <NuxtLink to="/locations"
                                class="h-full px-2 hover:text-color-900 border-b-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                <div class="h-full flex items-center">Areas</div>
                            </NuxtLink>
                            <NuxtLink to="/about"
                                class="h-full px-2 hover:text-color-900 border-b-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                <div class="h-full flex items-center">Our team</div>
                            </NuxtLink>
                            <NuxtLink to="/about"
                                class="h-full px-2 hover:text-color-900 border-b-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                <div class="h-full flex items-center">About us</div>
                            </NuxtLink>
                        </div>
                        <NuxtLink to="/contact"
                            class="py-3 px-10 bg-primary-color text-white hover:text-headings-black hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                            Contacts
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<!--style>
header {
    background-color: rgb(254, 206, 117);
}

header {
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
</style-->