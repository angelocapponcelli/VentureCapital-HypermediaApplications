<template>
    <transition name="mobile-nav">
        <ul class="dropdown-nav">
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
    </transition>
</template>

<style scoped>
    .dropdown-nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        /* uncomment this line to make the dropdown mobile menu fit the entire screen */
        /* height: 100svh; */
        max-width: 200px;
        background-color: white;
        top: 48pt;
        right: 0;
        border-radius: 0% 0% 0% 5%;
        box-shadow: 5px;
    }

    .mobile-nav-enter-active, .mobile-nav-leave-active {
        transition: all 0.5s ease;
    }

    .mobile-nav-enter-from, .mobile-nav-leave-to {
        opacity: 0;
        /*transform: translateX(100%);*/
    }

    .mobile-nav-enter-to {
        opacity: 1;
        /*transform: translateX(0);*/
    }
</style>