<!--
    Footer of the page
-->

<template>
    <footer>
        <div class="bg-color-400 py-8"> <!-- h-height_footer -->
            <div class="pb-8 lg:px-x_padding_page px-x_padding_page_mobile">
                <!-- A grid with 4 columns with large displays -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-y-0 space-y-6">
                    <div>
                        <Logo />
                        <p class="mr-3.5 px-3.5">
                            We understand the significance of emerging technologies
                            in shaping the future. Our investments encompass startups
                            that are at the forefront of disruptive technologies
                        </p>
                    </div>
                    <div class="flex justify-between md:flex-row flex-col md:space-y-0 space-y-6">
                        <div
                            class="flex md:flex-col flex-row md:items-center md:space-x-0 space-x-6 space-y-0 md:space-y-8 md:w-1/3">
                            <h1 class="text-headings-black font-bold md:basis-0 w-1/3 md:w-auto">Pages</h1>

                            <ul class="w-full space-y-2">
                                <li>
                                    <div class="flex flex-row md:justify-center">
                                        <NuxtLink to="/portfolio"
                                            class="text-color-900 hover:text-color-700 active:font-bold
                                                            hover:transform hover:scale-105 hover:font-bold transition duration-200">
                                            Portfolio
                                        </NuxtLink>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex flex-row md:justify-center">
                                        <NuxtLink to="/areas"
                                            class="text-color-900 hover:text-color-700 active:font-bold
                                                            hover:transform hover:scale-105 hover:font-bold transition duration-200">
                                            Areas
                                        </NuxtLink>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex flex-row md:justify-center">
                                        <NuxtLink to="/team"
                                            class="text-color-900 hover:text-color-700 active:font-bold
                                                            hover:transform hover:scale-105 hover:font-bold transition duration-200">
                                            Our team
                                        </NuxtLink>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex flex-row md:justify-center">
                                        <NuxtLink to="/about"
                                            class="text-color-900 hover:text-color-700 active:font-bold
                                                            hover:transform hover:scale-105 hover:font-bold transition duration-200">
                                            About us
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div
                            class="flex md:flex-col flex-row md:items-center md:space-x-0 space-x-6 space-y-0 md:space-y-8 md:w-1/3">
                            <h1 class="text-headings-black font-bold md:basis-0 w-1/3 md:w-auto">Contacts</h1>

                            <ul class="w-full space-y-2">
                                <li class="text-color-900">
                                    <div class="flex flex-row md:justify-center">
                                        Email: vc@email.org
                                    </div>
                                </li>
                                <li class="text-color-900">
                                    <div class="flex flex-row md:justify-center">
                                        Tel: +12 123 456 789
                                    </div>
                                </li>
                                <li class="text-color-900">
                                    <div class="flex flex-row md:justify-center">
                                        Via Larga 12, Milan Italy
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex flex-row md:justify-center">
                                        <NuxtLink to="/contact"
                                            class="py-2 px-4 my-auto bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 
                                                        border-primary-color rounded-full transition ease-in-out duration-200">
                                            Stay in touch
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div
                            class="flex md:flex-col flex-row md:items-center md:space-x-0 space-x-6 space-y-0 md:space-y-8 md:w-1/3">
                            <!-- <h1 class="text-headings-black font-bold md:basis-0 basis-1/4">Follow Us</h1> -->
                            <h1 class="text-headings-black font-bold md:basis-0 w-1/3 md:w-auto">Follow Us</h1>

                            <ul class="w-full space-y-2">
                                <li>
                                    <div class="flex flex-row md:justify-center">
                                        <NuxtLink to="#"
                                            class="text-color-900 hover:text-color-700 active:font-bold
                                                            hover:transform hover:scale-105 hover:font-bold transition duration-200">
                                            Facebook
                                        </NuxtLink>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex flex-row md:justify-center">
                                        <NuxtLink to="#"
                                            class="text-color-900 hover:text-color-700 active:font-bold
                                                        hover:transform hover:scale-105 hover:font-bold transition duration-200">
                                            Twitter
                                        </NuxtLink>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex flex-row md:justify-center">
                                        <NuxtLink to="#"
                                            class="text-color-900 hover:text-color-700 active:font-bold
                                                        hover:transform hover:scale-105 hover:font-bold transition duration-200">
                                            Instagram
                                        </NuxtLink>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex flex-row md:justify-center">
                                        <NuxtLink to="#"
                                            class="text-color-900 hover:text-color-700 active:font-bold
                                                        hover:transform hover:scale-105 hover:font-bold transition duration-200">
                                            Linkedin
                                        </NuxtLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="w-full border-color-600 my-1 mt-12">
            </div>
            <div
                class="flex justify-center md:flex-row flex-col px-x_padding_page_mobile md:space-x-4 space-x-0 items-center">
                <p class="text-color-1000">
                    Copyright © 2023 Venture capital
                </p>
                <p class="text-color-1000 md:visible md:h-auto invisible h-0">
                    |
                </p>
                <p class="text-color-1000">
                    All Rights Reserved
                </p>
                <p class="text-color-1000 md:visible collapse">
                    |
                </p>
                <NuxtLink to="#" class="text-color-1000 hover:text-color-700 underline ml-1">
                    Terms and Conditions
                </NuxtLink>
                <p class="text-color-1000 md:visible collapse">
                    |
                </p>
                <NuxtLink to="#" class="text-color-1000 hover:text-color-700 underline ml-1">
                    Privacy Policy
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>