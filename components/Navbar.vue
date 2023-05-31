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
                        <!-- relative h-full px-2 flex items-center hover:text-color-900 -->
                        <NuxtLink to="/portfolio" class="btn">
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
                                        class="px-3 py-3 flex items-center border-l-4 border-transparent 
                                            hover:text-color-900 hover:border-primary-color transition ease-in-out duration-200">
                                        Most relevant projects
                                    </NuxtLink>
                                </li>
                                <li>
                                    <NuxtLink v-for="area in areas"
                                        :to="'/portfolio/' + area.name.toLowerCase().replaceAll(' ', '-')"
                                        class="px-3 py-3 flex items-center border-l-4 border-transparent 
                                            hover:text-color-900 hover:border-primary-color transition ease-in-out duration-200">
                                        {{ area.name }} projects
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Areas -->
                    <div @mouseover="setAreasDropdownVisible" @mouseleave="setAreasDropdownHidden" class="h-full">
                        <!-- border-b-4 border-b-transparent hover:border-primary-color transition ease-in-out duration-200 -->
                        <NuxtLink to="/areas" class="btn">
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
                                        class="px-3 py-3 flex items-center border-l-4 border-transparent 
                                            hover:text-color-900 hover:border-primary-color transition ease-in-out duration-200">
                                        {{ area.name }}
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Our team -->
                    <NuxtLink to="/team" class="btn">
                        Our Team
                    </NuxtLink>
                    <!-- About us -->
                    <NuxtLink to="/about" class="btn">
                        About Us
                    </NuxtLink>
                </div>
                <NuxtLink to="/contact"
                    class="py-3 px-10 bg-primary-color text-white text-sm border-2 border-primary-color rounded-full 
                        hover:text-primary-color hover:bg-white transition ease-in-out duration-200">
                    Contact Us
                </NuxtLink>
            </div>
            <div class="md:hidden flex items-center">
                <div @click="toggleMobileMenu" class="icon" :class="{'icon-active': isMobileVisible}">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <!-- <transition name="mobile" mode="out-in">
                    <ul v-show="isMobileVisible"
                    class="w-full overflow-hidden bg-white rounded-b-lg shadow absolute top-16 left-0 z-20">
                        <li>
                            <NuxtLink to="/portfolio"
                                class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 text-2xl
                                    border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                <span class="text-primary-color">P</span>ortfolio
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/areas"
                                class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 text-2xl
                                    border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                    <span class="text-primary-color">A</span>reas
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/team"
                                class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 text-2xl
                                    border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                    <span class="text-primary-color">O</span>ur&NonBreakingSpace;<span class="text-primary-color">T</span>eam
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about"
                                class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 text-2xl
                                    border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                    <span class="text-primary-color">A</span>bout&NonBreakingSpace;<span class="text-primary-color">U</span>s
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact"
                                class="px-3 py-3 flex items-center hover:text-color-900 border-l-4 text-2xl
                                    border-transparent hover:border-primary-color transition ease-in-out duration-200">
                                    <span class="text-primary-color">C</span>ontact&NonBreakingSpace;<span class="text-primary-color">U</span>s
                            </NuxtLink>
                        </li>
                    </ul>
                </transition> -->
                <!-- <MobileNavBar v-show="isMobileVisible" /> -->
                <LazyMobileNavBar v-show="isMobileVisible" />
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

//const MobileNavBar = defineAsyncComponent(() => import('../components/MobileNavBar.vue'));
</script>

<style scoped>
    .icon {
        cursor: pointer;
        transition: all 0.8s ease;
    }

    .icon-active {
        transform: rotate(180deg);
    }

    .btn {
        position: relative;
        height: 100%;
        padding: 0 0.5rem;
        display: flex;
        align-items: center;
    }

    .btn:hover {
        color: #8D8BA7;
    }

    .btn::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 0.25rem;
        left: 0;
        bottom: 0;
        background-color: #5B45F8;
    }

    .btn::after {
        transform: scale(0, 1);
        transition: transform 0.3s ease;
    }

    .btn:hover::after {
        transform: scale(1, 1);
    }

    @keyframes open {
        from {
            opacity: 0;
            transform: scaleY(0);
        }

        to {
            opacity: 1;
        }
    }

    .mobile-enter-active {
        animation: open 0.5s;
        transform-origin: top;
    }

    .mobile-leave-active {
        animation: open 0.5s reverse;
        transform-origin: top;
    }
</style>
