<!--
    Home page
-->
<template>
    <main>
        <div class="bg-no-repeat bg-top bg-cover w-full h-[40rem]"
            style="background-image: url('https://images.unsplash.com/photo-1639174326326-6e2ef8d8ae39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')">
            <div
                class="justify-end py-16 bg-gradient-to-r from-black from-40% h-full flex flex-col space-y-10 px-x_padding_page_mobile lg:px-x_padding_page w-11/12 md:w-7/12">
                <h1 class="hiddenItem text-5xl md:text-7xl text-white">
                    Pioneering the Future, Today!
                </h1>
                <h2 class="hiddenItem text-2xl md:text-3xl text-white">
                Unlocking limitless possibilities with groundbreaking innovation and disruptive solutions.
            </h2>
            <!--a @click="scroll('getStarted')"
                    class="cursor-pointer py-3 px-5 flex space-x-2 items-center mx-auto bg-primary-color text-white hover:text-white hover:bg-transparent text-sm border-2 border-primary-color hover:border-white rounded-full transition ease-in-out duration-200">
                    <span>Get started</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="w-5 h-5">
                                                                                                                                                                                                                                                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                                                                                                                                                                                                                                                                    </svg>
                                                                                                                                                                                                                                                                                                </a-->
            </div>
        </div>

        <div id="getStarted" class="w-full">
            <!-- first section -->
            <div
                class="flex md:flex-row flex-col lg:px-x_padding_page md:py-y_padding_page px-x_padding_page_mobile py-y_padding_page_mobile space-y-10 md:space-y-0">
                <div class="basis-1/2 flex flex-col space-y-10 items-center my-auto">
                    <div class="hiddenItem w-9/12 lg:text-left text-center">
                        <h2 class="hiddenItemChild text-2xl lg:text-3xl font-semibold ">Discovering the Future: Introducing
                            Our Latest
                            Venture</h2>
                        <h3 class="hiddenItemChild text-lg lg:text-xl pt-4 ">We have found a remarkable company poised to
                            reshape industries
                            with
                            disruptive
                            innovation and unlimited potential.</h3>
                    </div>
                    <NuxtLink to="/portfolio"
                        class="hidden py-3 px-5 md:flex space-x-2 items-center mx-auto bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                        <span>See all projetcs</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </NuxtLink>
                </div>

                <div class="basis-1/2 grid grid-cols-3 lg:gap-4 gap-2 w-full">
                    <img v-for="i in Math.min(6, projects.length)"
                        :data-lazy="config.SUPABASE_ASSETS_URL + '/startups/' + projects[i - 1].startup.id + '.png'"
                        class="hiddenItem hiddenItemChild rounded-xl aspect-square object-cover" />
                </div>
                <NuxtLink to="/portfolio"
                    class="md:hidden py-3 px-5 flex space-x-2 items-center mx-auto bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                    <span>See all projetcs</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </NuxtLink>
            </div>

            <!-- second section -->
            <div
                class="flex flex-col bg-primary-color lg:px-x_padding_page lg:py-y_padding_page px-x_padding_page_mobile py-y_padding_page_mobile w-full space-y-10 ">
                <div class="hiddenItem">
                    <h2 class="hiddenItemChild text-2xl lg:text-3xl font-semibold text-white mx-auto text-center">Our
                        dynamic
                        team driving
                        venture capital
                        success</h2>
                    <h3 class="hiddenItemChild text-lg lg:text-xl lg:w-3/5 text-white mx-auto text-center pt-4">Meet the
                        passionate experts
                        fueling
                        innovation and making strategic investments for groundbreaking ventures.</h3>
                </div>
                <div
                    class="grid md:grid-cols-4 grid-cols-2 lg:gap-4 gap-2 w-auto md:mx-x_padding_page mx-x_padding_page_mobile bg-white lg:p-10 p-2 rounded-xl">
                    <img v-for="i in Math.min(8, people.length)"
                        :data-lazy="config.SUPABASE_ASSETS_URL + '/people/' + people[i - 1].image + '.png'"
                        class="hiddenItem hiddenItemChild rounded-xl aspect-square object-cover md:flex hidden" />
                    <!-- for mobile reduce card number-->
                    <img v-for="i in Math.min(4, people.length)"
                        :data-lazy="config.SUPABASE_ASSETS_URL + '/people/' + people[i - 1].image + '.png'"
                        class="rounded-xl aspect-square object-cover md:hidden" />

                </div>
                <NuxtLink to="/team"
                    class="py-3 px-5 flex space-x-2 items-center mx-auto bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-white rounded-full transition ease-in-out duration-200">
                    <span>Discover our team</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </NuxtLink>
            </div>

            <!-- third section -->
            <div
                class="flex flex-col lg:px-x_padding_page lg:py-y_padding_page px-x_padding_page_mobile py-y_padding_page_mobile w-full space-y-10">
                <h2 class="text-2xl lg:text-3xl font-semibold mx-auto text-center">Our results in numbers</h2>
                <div class="hiddenItem flex lg:flex-row flex-col pt-8 lg:space-x-20 space-x-0 space-y-10 lg:space-y-0">
                    <div class="hiddenItemChild basis-1/3 text-center space-y-2">
                        <h3 class="text-5xl font-bold">90<span class="text-color-700">%</span> </h3>
                        <h3 class="text-2xl font-semibold pt-4">Successful Investments</h3>
                        <p>Fueling growth and profitability for innovative startups.</p>
                    </div>
                    <div class="hiddenItemChild basis-1/3 text-center space-y-2">
                        <h3 class="text-5xl font-bold">500<span class="text-color-700">mln$</span> </h3>
                        <h3 class="text-2xl font-semibold pt-4">Capital Deployed</h3>
                        <p>Driving the growth of promising ventures through strategic investments.</p>
                    </div>
                    <div class="hiddenItemChild basis-1/3 text-center space-y-2">
                        <h3 class="text-5xl font-bold">20<span class="text-color-700">+</span> </h3>
                        <h3 class="text-2xl font-semibold pt-4">Portfolio Companies</h3>
                        <p>Partnering with diverse startups to build a thriving entrepreneurial ecosystem.</p>
                    </div>
                </div>
                <NuxtLink to="/about"
                    class="py-3 px-5 flex space-x-2 items-center mx-auto bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                    <span>See more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </NuxtLink>
            </div>
            <!-- fourth section -->
            <div
                class="flex flex-col bg-primary-color lg:px-x_padding_page lg:py-y_padding_page px-x_padding_page_mobile py-y_padding_page_mobile w-full space-y-10 ">
                <div class="hiddenItem">
                    <h2 class="hiddenItemChild text-2xl lg:text-3xl font-semibold text-white mx-auto text-center">Areas</h2>
                    <h3 class="hiddenItemChild text-lg lg:text-xl w-3/5 text-white mx-auto text-center pt-4">Harnessing
                        transformative
                        technologies
                        and disruptive innovations to drive exponential growth and global impact.</h3>
                </div>
                <div class="grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-4">

                    <NuxtLink v-for="j in Math.min(3, areas.length)" :to="'/areas/' + areas[j - 1].id"
                        class="hiddenItem hiddenItemChild bg-white lg:p-6 p-2 rounded-xl text-center hover:shadow-md hover:transform hover:scale-101 transition duration-500">
                        <img class="rounded-xl aspect-video object-cover"
                            :data-lazy="config.SUPABASE_ASSETS_URL + '/areas/' + areas[j - 1].id + '.png'" />
                        <h3 class="text-2xl font-semibold pt-4">{{ areas[j - 1].name }}</h3>
                        <p>{{ truncate(areas[j - 1].description) }}</p>
                    </NuxtLink>

                </div>
                <NuxtLink to="/areas"
                    class="py-3 px-5 flex space-x-2 items-center mx-auto bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-white rounded-full transition ease-in-out duration-200">
                    <span>See all areas</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </main>
</template>


<script>
/*
    The defineNuxtComponent gets us access to the asyncData property.
    This is the first function that is called by nuxt when the page is called.
    We can use this to pre-load the data to make it available to the user.
*/
export default defineNuxtComponent({
    mounted() {
        // IntersectionObserver is a browser API that allows us to detect when an element is visible in the viewport
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // if the element is visible, we add the show class to it and remove the hiddenItem class
                    entry.target.classList.add('show');
                    entry.target.classList.remove('hiddenItem');
                } /* else {
                    // if the element is not visible, we add the hiddenItem class to it and remove the show class
                    entry.target.classList.add('hiddenItem');
                    entry.target.classList.remove('show');
                } */
            });
        }, {
            rootMargin: '-20% 0px -10% 0px' // defines the area in which the observer will trigger
        });

        setTimeout(() => {
            // we select all the elements with the hiddenItem class and add them to the observer
            const hiddenElements = document.querySelectorAll('.hiddenItem');
            hiddenElements.forEach(element => {
                observer.observe(element);
            });

            const targets = document.querySelectorAll('img');

            // we use the lazyLoad function to load the images only when they are visible in the viewport and unload them when they are not
            const lazyLoad = target => {
                const io = new IntersectionObserver((entries, imgObserver) => {
                    /* console.log(entries) */
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // we get the image element and set the src attribute to the image url
                            const img = entry.target;
                            const src = img.getAttribute('data-lazy');
                            img.setAttribute('src', src);

                            // uncomment this line if you want the images to be loaded only once and not unloaded when they are not visible
                            imgObserver.disconnect();
                        }/* 
                        else {
                            // we get the image element and set the src attribute to an empty string
                            const img = entry.target;
                            const src = "";
                            img.setAttribute('src', src);
                        } */
                    });
                });

                // we add the image element to the observer
                io.observe(target)
            };

            // we loop through all the images and add them to the lazyLoad function
            targets.forEach(lazyLoad);
        }, 500);
    }
})
</script>


<script setup>
const config = useRuntimeConfig();
const { data: projects } = await useFetch('/api/portfolio');
const { data: people } = await useFetch('/api/team');
const { data: areas } = await useFetch('/api/areas');

/* not used
function scroll(refName) {
    var element = document.getElementById(refName)
    const y = element.getBoundingClientRect().top + window.pageYOffset - 90;
    window.scrollTo({ top: y, behavior: 'smooth' });
}*/

function truncate(input) {
    if (input.length > 120) {
        return input.substring(0, 120) + '...';
    }
    return input;
}
</script>

<style>
.hiddenItem {
    opacity: 0;
    @apply transition ease-in-out duration-500;
    filter: blur(5px);
}

@media (prefers-reduced-motion) {
    .hiddenItem {
        transition: none;
    }
}

.show {
    opacity: 1;
    @apply transition ease-in-out duration-1000;
    filter: blur(0px);
}

.hiddenItemChild:nth-child(2) {
    transition-delay: 100ms;
}

.hiddenItemChild:nth-child(3) {
    transition-delay: 200ms;
}

.hiddenItemChild:nth-child(4) {
    transition-delay: 300ms;
}

.hiddenItemChild:nth-child(5) {
    transition-delay: 400ms;
}

.hiddenItemChild:nth-child(6) {
    transition-delay: 500ms;
}

.hiddenItemChild:nth-child(7) {
    transition-delay: 600ms;
}

.hiddenItemChild:nth-child(8) {
    transition-delay: 700ms;
}
</style>