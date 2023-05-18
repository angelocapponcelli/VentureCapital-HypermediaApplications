<!--
    Header of the page
-->
<template>
    <nav class="sticky top-0 z-50">
        <!-- desktop Menu -->
        <div class="bg-white drop-shadow-md px-x_padding_page flex justify-between">
            <!-- logo -->
            <Logo />
            <!-- menu -->
            <div class="flex items-center space-x-1">
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
                                    <NuxtLink to="/portfolio/most-relevant-projects"
                                        class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                        Machine learning projects</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/portfolio/most-relevant-projects"
                                        class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                        Artificial intelligence projects</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/portfolio/most-relevant-projects"
                                        class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                        Neural Network projects</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/portfolio/most-relevant-projects"
                                        class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                        Blockchains projects</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Areas -->
                    <div @mouseover="setAreasDropdownVisible" @mouseleave="setAreasDropdownHidden" class="h-full">
                        <NuxtLink to="/locations"
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
                                    <NuxtLink to="/dogs"
                                        class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                        Machine learning</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/dogs"
                                        class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                        Artificial intelligence</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/dogs"
                                        class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                        Neural Network</NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink to="/dogs"
                                        class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                        Blockchains</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Our team -->
                    <NuxtLink to="/team"
                        class="flex items-center h-full px-2 hover:text-color-900 border-b-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                        Our team
                    </NuxtLink>
                    <!-- About us -->
                    <NuxtLink to="/about"
                        class="flex items-center h-full px-2 hover:text-color-900 border-b-4 border-transparent hover:border-primary-color transition ease-in-out duration-200">
                        About us
                    </NuxtLink>
                </div>
                <NuxtLink to="/contact"
                    class="py-3 px-10 bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                    Contacts
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isPortfolioDropdownVisible: false,
            isAreasDropdownVisible: false,
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
    },
};
</script>

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