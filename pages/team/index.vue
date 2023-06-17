<!-- 
    Contains breadcrumbs, a title and a section with all the cards of the people working at the company. 
    Card images are lazy loaded when the user scrolls on them. Lazy loading is implemented using the IntersectionObserver API.
 -->

<template>
    <main>
        <Breadcrumb :crumbs="[{ label: 'Our team', link: '/team' }]"/>
        <!-- content -->
        <div class="w-full" >
            <TitleWithImage title="Meet our team" subtitle="A collective of passionate and experienced professionals driving 
            visionary investments and empowering startups to thrive in the world of venture capital."/>
            <!-- md:px-36 md:py-10  -->
            <div class="flex flex-col space-y-16 lg:px-16 xl:px-32 xl:mx-auto lg:py-10 px-x_padding_page_mobile py-y_padding_page_mobile 
            w-full h-auto 2xl:max-w-[2160px]">
                <div class="basis-4/5 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- single person card -->
                    <TeamCard class="hiddenCard" v-for="person of people" :name="person.full_name" :position="person.position" 
                        :id="person.id" :image="person.image" />
                    <!-- <Suspense>
                        <template #fallback>
                            <TeamCardSkeleton v-for="n in 3" :key="n" />
                        </template>
                    </Suspense> -->
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default defineNuxtComponent({
    async asyncData() {
        // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
        const people = (await $fetch("/api/team"));
        return {
            people
        };
    },
    mounted() {
        // IntersectionObserver is a browser API that allows us to detect when an element is visible in the viewport
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // if the element is visible, we add the show class to it and remove the hiddenCard class
                    entry.target.classList.add('show');
                    entry.target.classList.remove('hiddenCard');
                } 
                // uncomment this else to make the cards disappear when they scroll out of view of the viewport
                /* else {
                    // if the element is not visible, we add the hiddenCard class to it and remove the show class
                    entry.target.classList.add('hiddenCard');
                    entry.target.classList.remove('show');
                } */
            });
        }, {
            rootMargin: '-20% 0px -20% 0px' // defines the area in which the observer will trigger
            /* 
            The area is defined a bit smaller in height with respect to the other observer in order to let the images load
            before actually triggering the fading in animation of the card.
            */
        });

        // we select all the elements with the hiddenCard class and add them to the observer
        setTimeout(() => {
            const hiddenElements = document.querySelectorAll('.hiddenCard')
            hiddenElements.forEach(element => {
                observer.observe(element);
            });

            const targets = document.querySelectorAll('img');
            // we use the lazyLoad function to load the images only when they are visible in the viewport and, optionally, unload them when they are not
            const lazyLoad = target => {
                const io = new IntersectionObserver((entries, imgObserver) => {
                    /* console.log(entries) */
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // we get the image element and set the src attribute to the image url
                            const img = entry.target;
                            const src = img.getAttribute('data-lazy');
                            img.setAttribute('src', src);
    
                            // comment/uncomment this line to enable/disable lazy unloading
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

    },
    // Title and meta description are set for accessibility and SEO
    head(nuxtApp) {
        return {
            title: 'Venture Capital - Our Team',
            meta: [{
                name: 'description',
                content: 'A collective of passionate and experienced professionals driving visionary investments and empowering startups to thrive in the world of venture capital.'
            }]
        }
    }
    /* beforeUnmount() {
        observer.disconnect();
    } */
})
</script>

<style>
    .hiddenCard {
        opacity: 0;
        transition: 0;
        filter: blur(5px);
    }

    @media (prefers-reduced-motion: no-preference) {
        .hiddenCard {
            transition: all 1s ease-in-out;
        }
    }
    
    .show {
        opacity: 1;
        filter: blur(0px);
    }
</style>