<!--
    About us page
-->
<template>
    <main>
        <Breadcrumb :crumbs="[{ label: 'About Us', link: '/about' }]" />
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
            <h1 class="text-4xl py-8 md:py-20 md:text-5xl font-bold text-center"> Our values</h1>
            <div class="flex flex-col pb-10 md:pb-20 md:flex-row">
                <ContactsCard title="Innovation" content="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."></ContactsCard>
                <ContactsCard title="Collaboration" content="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."></ContactsCard>
                <ContactsCard title="Impact" content="Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm."></ContactsCard>
            </div>      
        </div>

        <div class="bg-no-repeat bg-top bg-cover w-full bg-color-500 px-x_padding_page_mobile lg:px-x_padding_page">
            <div class="p-6 md:pt-20 md:px-60">
                <img class="rounded-3xl" src="@/assets/img/about/people.webp" alt="Immagine" />
            </div>
            <h1 class="text-3xl py-8 md:py-20 md:text-5xl md:px-60 font-bold text-center"> Our Expert Team: Guiding Investments with Unparalleled Expertise</h1>
            <div class="flex flex-col text-xl text-center pb-10 md:pb-20 md:flex-row">
                Our team comprises industry experts with diverse backgrounds in finance, entrepreneurship, and strategic advisory. With their wealth of knowledge and experience, they provide invaluable insights, due diligence, and guidance to identify and support promising investment opportunities. Our team's expertise enables us to make informed decisions, maximize value for our portfolio companies, and drive sustainable growth in the dynamic landscape of venture capital.
            </div>      
        </div>

        <div class="bg-no-repeat md:flex bg-top bg-cover w-full bg-color-white px-x_padding_page_mobile lg:px-x_padding_page">
            <div>
                <h1 class="text-3xl py-8 md:pt-20 md:text-5xl md:flex text-center font-bold "> Partners</h1>
                <div class="flex text-xl text-center md:text-left md:pr-20 pb-10 md:pb-20 md:flex-row">
                    At Venture Capital, we are a leading Italian investment firm dedicated to empowering visionary entrepreneurs and driving innovation. <br><br>With a strong track record of success since our establishment in 1990, we have built a reputation for identifying and supporting promising startups across various industries.
                </div>
            </div>
            <div class="pt-4 pb-10 px-5 md:p-20">
                <img class="rounded-3xl" src="@/assets/img/about/logos.webp" alt="Immagine" />
            </div>

        </div>
        
    </main>
</template>

<script setup>
const config = useRuntimeConfig();
</script>
