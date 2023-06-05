<!--
    About us page
-->
<template>
    <main>
        <Breadcrumb :crumbs="[{ label: 'About us', link: '/about' }]" />
        <div class="bg-no-repeat bg-top bg-cover w-full h-[45rem]" :style="'background-image: url(' + config.SUPABASE_ASSETS_URL + '/about/nasa.webp)'">
            <div class="flex flex-col justify-center px-x_padding_page_mobile lg:px-x_padding_page">
                <h1 class="text-4xl text-center text-white py-8 md:py-32 md:text-5xl">Connections that Drive Innovation:<br>Empowering Entrepreneurs and Investors</h1> 
                <div class="p-3 md:p-5 m-5 md:m-7 justify-center text-lg md:text-xl text-center bg-color-200 md:max-w-xl rounded-3xl">
                    <div class="">At Venture Capital, we are a leading Italian investment firm dedicated to empowering visionary entrepreneurs and driving innovation. With a strong track record of success since our establishment in 1990, we have built a reputation for identifying and supporting promising startups across various industries.
    What sets us apart is our deep-rooted belief in the potential of Italian talent.</div>
                </div>
            </div>
        </div>
        <div class="bg-no-repeat bg-top bg-cover w-full bg-color-white px-x_padding_page_mobile lg:px-x_padding_page">
            <h1 class="hiddenItem text-4xl py-8 md:py-20 md:text-5xl font-bold text-center"> Our values</h1>
            <div class="hiddenItem flex flex-col pb-10 md:pb-20 md:flex-row">
                <ContactsCard title="Innovation" content="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."></ContactsCard>
                <ContactsCard title="Collaboration" content="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."></ContactsCard>
                <ContactsCard title="Impact" content="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."></ContactsCard>
            </div>      
        </div>

        <div class="bg-no-repeat bg-top bg-cover w-full bg-color-500 px-x_padding_page_mobile lg:px-x_padding_page">
            <div class="hiddenItem p-6 md:pt-20 md:px-60">
                <img class="rounded-3xl" :data-lazy="config.SUPABASE_ASSETS_URL + '/about/people.webp'" alt="Immagine" />
            </div>
            <h1 class="hiddenItem text-3xl py-8 md:py-20 md:text-5xl font-bold text-center"> Our Expert Team: Guiding Investments with Unparalleled Expertise</h1>
            <div class="hiddenItem flex flex-col text-xl text-center pb-10 md:pb-20 md:flex-row">
                Our team comprises industry experts with diverse backgrounds in finance, entrepreneurship, and strategic advisory. With their wealth of knowledge and experience, they provide invaluable insights, due diligence, and guidance to identify and support promising investment opportunities. Our team's expertise enables us to make informed decisions, maximize value for our portfolio companies, and drive sustainable growth in the dynamic landscape of venture capital.
            </div>      
        </div>

        <div class="bg-no-repeat md:flex bg-top bg-cover w-full bg-color-white px-x_padding_page_mobile lg:px-x_padding_page">
            <div>
                <h1 class="hiddenItem text-3xl py-8 md:pt-20 md:text-5xl md:flex text-center font-bold "> Partners</h1>
                <div class="hiddenItem flex text-xl text-center md:text-left md:pr-20 pb-10 md:pb-20 md:flex-row">
                    At Venture Capital, we are a leading Italian investment firm dedicated to empowering visionary entrepreneurs and driving innovation. <br><br>With a strong track record of success since our establishment in 1990, we have built a reputation for identifying and supporting promising startups across various industries.
                </div>
            </div>
            <div class="hiddenItem pt-4 pb-10 px-5 md:p-20">
                <img class="rounded-3xl" :data-lazy="config.SUPABASE_ASSETS_URL + '/about/logos.webp'" alt="Immagine" />
            </div>

        </div>
        
    </main>
</template>

<style>
.hiddenItem {
    opacity: 0;
    @apply transition ease-in-out duration-500;
    filter: blur(5px);
}

.show {
    opacity: 1;
    @apply transition ease-in-out duration-1000;
    filter: blur(0px);
}

</style>


<script>
export default{
    data(){
        return{
            config : useRuntimeConfig()
        }
    }, 
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
}
</script>
