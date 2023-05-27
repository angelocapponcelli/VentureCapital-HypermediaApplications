<!--
    Header of the page
-->
<template>
    <nav class="sticky top-0 z-50">
        <!-- desktop Menu -->
        <div class="w-full bg-white drop-shadow-md lg:px-x_padding_page px-x_padding_page_mobile flex justify-between">
            <!-- logo -->
            <Logo />
            <!-- menu -->
            <div class="hidden md:flex items-center space-x-1">
                <div class="mr-8 h-full flex items-center relative">
                    <!-- Portfolio -->
                    <div @mouseover="setPortfolioDropdownVisible" @mouseleave="setPortfolioDropdownHidden" class="h-full">
                        <NuxtLink to="/portfolio"
                            class="h-full px-2 flex items-center hover:text-color-900 border-b-4 border-b-transparent hover:border-primary-color transition ease-in-out duration-200">
                            <span>Portfolio</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4 ml-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </NuxtLink>
                        <!-- Portfolio dropdown -->
                        <div v-if="isPortfolioDropdownVisible"
                            class="w-64 overflow-hidden bg-white rounded-b-lg shadow absolute top-24 z-20">
                            <ul>
                                <li>
                                    <NuxtLink to="/portfolio/most-relevant-projects"
                                        class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                        Most relevant projects</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink v-for="area in areas"
                                        :to="'/portfolio/' + area.name.toLowerCase().replaceAll(' ', '-')"
                                        class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                        {{ area.name }} projects</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Areas -->
                    <div @mouseover="setAreasDropdownVisible" @mouseleave="setAreasDropdownHidden" class="h-full">
                        <NuxtLink to="/areas"
                            class="h-full px-2 flex items-center hover:text-color-900 border-b-4 border-b-transparent hover:border-primary-color transition ease-in-out duration-200">
                            <span>Areas</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-4 h-4 ml-1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </NuxtLink>
                        <!-- Areas dropdown -->
                        <div v-if="isAreasDropdownVisible"
                            class="w-52 overflow-hidden bg-white rounded-b-lg shadow absolute top-24 z-20">
                            <ul>
                                <li>
                                    <NuxtLink v-for="area in areas" :to="'/areas/' + area.id"
                                        class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                        {{ area.name }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Our team -->
                    <NuxtLink to="/team"
                        class="flex items-center h-full px-2 hover:text-color-900 border-b-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                        Our Team
                    </NuxtLink>
                    <!-- About us -->
                    <NuxtLink to="/about"
                        class="flex items-center h-full px-2 hover:text-color-900 border-b-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                        About Us
                    </NuxtLink>
                </div>
                <NuxtLink to="/contact"
                    class="py-3 px-10 bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                    Contacts
                </NuxtLink>
            </div>
            <div class="md:hidden flex items-center">
                <div @click="toggleMobileMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div>
                    <div v-if="isMobileVisible"
                        class="w-full overflow-hidden bg-white rounded-b-lg shadow absolute top-16 left-0 z-20">
                        <ul>
                            <li>
                                <NuxtLink to="/portfolio"
                                    class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                    Portfolio</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/areas"
                                    class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                    Areas</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/team"
                                    class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                    Our team</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about"
                                    class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                    About us</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/contact"
                                    class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                    Contacts</NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </nav>
</template>

<script>
export default {
    watch: {
        $route() {
            this.isMobileVisible = false;
        },
    },
    data() {
        return {
            isPortfolioDropdownVisible: false,
            isAreasDropdownVisible: false,
            isMobileVisible: false,
        };
    },
    methods: {
        setPortfolioDropdownVisible() {
            this.isPortfolioDropdownVisible = true;
        },
        setPortfolioDropdownHidden() {
            this.isPortfolioDropdownVisible = false;
        },
        setAreasDropdownVisible() {
            this.isAreasDropdownVisible = true;
        },
        setAreasDropdownHidden() {
            this.isAreasDropdownVisible = false;
        },
        toggleMobileMenu() {
            this.isMobileVisible = !this.isMobileVisible;
        },
    },
};
</script>

<script setup>
const { data: areas } = await useFetch('/api/areas');
</script>