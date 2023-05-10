<!--
    Header of the page
-->
<template>
    <nav>
        <!-- desktop Menu -->
        <div class="bg-white drop-shadow-md">
            <div class="max-w-7xl mx-auto">
                <div class="flex justify-between">
                    <!-- menu -->
                    <div>
                        <!-- logo -->
                        <div class="flex items-center py-5 px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                            </svg>
                            <span class="font-extrabold text-white">venture capital</span>
                        </div>
                    </div>
                    <!-- button show menu -->
                    <div></div>
                </div>
            </div>
        </div>
        <NuxtLink to="/">HOME</NuxtLink>
        <NuxtLink to="/dogs">DOGS</NuxtLink>
        <NuxtLink to="/locations">LOCATIONS</NuxtLink>
        <NuxtLink to="/about">ABOUT US</NuxtLink>
        <NuxtLink to="/contact">CONTACT US</NuxtLink>
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