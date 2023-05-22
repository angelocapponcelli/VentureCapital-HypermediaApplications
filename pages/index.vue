<!--
    Home page
-->
<template>
    <main>
        <div class="bg-no-repeat bg-top bg-cover w-full h-[40rem]"
            style="background-image: url('https://images.unsplash.com/photo-1639174326326-6e2ef8d8ae39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')">
            <div
                class="justify-end py-16 bg-gradient-to-r from-black from-40% h-full flex flex-col space-y-10 px-x_padding_page w-7/12">
                <h1 class="text-7xl text-white">
                    Pioneering the Future, Today!
                </h1>
                <h2 class="text-3xl text-white">
                    Unlocking limitless possibilities with groundbreaking innovation and disruptive solutions.
                </h2>
                <a href="#getStarted"
                    class="py-3 px-5 flex space-x-2 items-center mx-auto bg-primary-color text-white hover:text-white hover:bg-transparent text-sm border-2 border-primary-color hover:border-white rounded-full transition ease-in-out duration-200">
                    <span>Get started</span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </a>
            </div>
        </div>

        <div id="getStarted" class="w-full">
            <!-- first section -->
            <div class="flex flex-row px-x_padding_page py-y_padding_page">
                <div class="basis-1/2 flex flex-col space-y-10 items-center my-auto">
                    <div class="w-9/12">
                        <h2 class="text-3xl font-semibold ">Discovering the Future: Introducing Our Latest Venture</h2>
                        <h3 class="text-xl pt-4 ">We have found a remarkable company poised to reshape industries with
                            disruptive
                            innovation and unlimited potential.</h3>
                    </div>
                    <NuxtLink to="/portfolio"
                        class="py-3 px-5 flex space-x-2 items-center mx-auto bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                        <span>See all projetcs</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </NuxtLink>
                </div>

                <div class="basis-1/2 grid grid-cols-3 gap-4 w-full">
                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/startups/2.png" />
                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/startups/1.png" />
                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/startups/2.png" />

                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/startups/1.png" />
                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/startups/2.png" />
                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/startups/1.png" />
                </div>
            </div>

            <!-- second section -->
            <div class="flex flex-col bg-primary-color px-x_padding_page py-y_padding_page w-full space-y-10 ">
                <h2 class="text-3xl font-semibold text-white mx-auto text-center">Our dynamic team driving venture capital
                    success</h2>
                <h3 class="text-xl w-3/5 text-white mx-auto text-center">Meet the passionate experts fueling
                    innovation and making strategic investments for groundbreaking ventures.</h3>
                <div class="grid grid-cols-4 gap-4 w-auto mx-x_padding_page bg-white p-10 rounded-xl">
                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/people/94093701-69f7-4b77-8ea7-08450c7c468c.png" />
                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/people/1d533073-3eb9-4978-90c8-2c70b89b2b23.png" />
                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/people/0d7f2158-cff7-47f8-bde9-cb086994f1bc.png" />
                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/people/2660acac-0990-4f15-8fc2-7dcf337b177f.png" />

                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/people/0d7f2158-cff7-47f8-bde9-cb086994f1bc.png" />
                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/people/2660acac-0990-4f15-8fc2-7dcf337b177f.png" />
                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/people/94093701-69f7-4b77-8ea7-08450c7c468c.png" />
                    <img class="rounded-xl aspect-square object-cover"
                        src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/people/1d533073-3eb9-4978-90c8-2c70b89b2b23.png" />
                </div>
                <NuxtLink to="/portfolio"
                    class="py-3 px-5 flex space-x-2 items-center mx-auto bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-white rounded-full transition ease-in-out duration-200">
                    <span>Discover our team</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </NuxtLink>
            </div>

            <!-- third section -->
            <div class="flex flex-col px-x_padding_page py-y_padding_page w-full space-y-10">
                <h2 class="text-3xl font-semibold mx-auto text-center">Our results in numbers</h2>
                <div class="flex flex-row pt-8 space-x-20">
                    <div class="basis-1/3 text-center space-y-2">
                        <h3 class="text-5xl font-bold">99<span class="text-color-700">%</span> </h3>
                        <h3 class="text-2xl font-semibold pt-4">Costumer satisfaction</h3>
                        <p>Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.</p>
                    </div>
                    <div class="basis-1/3 text-center space-y-2">
                        <h3 class="text-5xl font-bold">32<span class="text-color-700">M</span> </h3>
                        <h3 class="text-2xl font-semibold pt-4">Active users</h3>
                        <p>Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.</p>
                    </div>
                    <div class="basis-1/3 text-center space-y-2">
                        <h3 class="text-5xl font-bold">240<span class="text-color-700">%</span> </h3>
                        <h3 class="text-2xl font-semibold pt-4">Company growth</h3>
                        <p>Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.</p>
                    </div>
                </div>
                <NuxtLink to="/portfolio"
                    class="py-3 px-5 flex space-x-2 items-center mx-auto bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                    <span>See more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                        stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </NuxtLink>
            </div>
            <!-- second section -->
            <div class="flex flex-col bg-primary-color px-x_padding_page py-y_padding_page w-full space-y-10 ">
                <h2 class="text-3xl font-semibold text-white mx-auto text-center">Areas</h2>
                <h3 class="text-xl w-3/5 text-white mx-auto text-center">Lorem ipsum dolor sit amet consectet adipiscing
                    elit eget quamumto dolor sit amet consectet elit eget quamumto.</h3>
                <div class="flex flex-row space-x-10">
                    <div class="basis-1/3 bg-white p-6 rounded-xl text-center">
                        <img class="rounded-xl aspect-video object-cover"
                            src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/startups/2.png" />
                        <h3 class="text-2xl font-semibold pt-4">Machine learning</h3>
                        <p>Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.</p>
                    </div>
                    <div class="basis-1/3 bg-white p-6 rounded-xl text-center">
                        <img class="rounded-xl aspect-video object-cover"
                            src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/startups/2.png" />
                        <h3 class="text-2xl font-semibold pt-4">Financial technology</h3>
                        <p>Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.</p>
                    </div>
                    <div class="basis-1/3 bg-white p-6 rounded-xl text-center">
                        <img class="rounded-xl aspect-video object-cover"
                            src="https://gdzyzugelaodiakwwjrt.supabase.co/storage/v1/object/public/images/startups/2.png" />
                        <h3 class="text-2xl font-semibold pt-4">Neural network</h3>
                        <p>Lorem ipsum dolor sit amet consectet adipiscing elit eget quamumto.</p>
                    </div>
                </div>
                <NuxtLink to="/portfolio"
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

<style>
#main-img {
    width: 80%;
    max-width: 1000px;
    height: auto;
}

main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>