<!--
    Footer of the page
-->

<template>
    <footer>
        <div class="bg-color-200 py-8"> <!-- h-height_footer -->
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
                        <div class="flex md:flex-col flex-row md:space-x-0 space-x-6 space-y-0 md:space-y-10">
                            <h1 class="text-headings-black font-bold md:basis-0 basis-1/4">Pages</h1>

                            <ul class="space-y-2">
                                <li class="text-color-900 hover:text-color-700 active:font-bold">
                                    <NuxtLink to="/portfolio">
                                        Portfolio
                                    </NuxtLink>
                                </li>
                                <li class="text-color-900 hover:text-color-700 active:font-bold">
                                    <NuxtLink to="/areas">
                                        Areas
                                    </NuxtLink>
                                </li>
                                <li class="text-color-900 hover:text-color-700 active:font-bold">
                                    <NuxtLink to="/team">
                                        Our team
                                    </NuxtLink>
                                </li>
                                <li class="text-color-900 hover:text-color-700 active:font-bold">
                                    <NuxtLink to="/about">
                                        About us
                                    </NuxtLink>
                                </li>
                            </ul>

                        </div>
                        <div class="flex md:flex-col flex-row md:space-x-0 space-x-6 space-y-0 md:space-y-10">
                            <h1 class="text-headings-black font-bold md:basis-0 basis-1/4">Contacts</h1>

                            <ul class="space-y-2">
                                <li class="text-color-900">email: example@email.org</li>
                                <li class="text-color-900">tel: +12 123 456 789</li>
                                <li class="text-color-900">Via Larga 12, Milan Italy</li>
                                <li class="py-2">
                                    <NuxtLink to="/contact"
                                        class="py-2 px-4 my-auto bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                                        Stay on touch
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                        <div class="flex md:flex-col flex-row md:space-x-0 space-x-6 space-y-0 md:space-y-10">
                            <h1 class="text-headings-black font-bold md:basis-0 basis-1/4">Follow us</h1>

                            <ul class="space-y-2">
                                <li class="text-color-900">Facebook</li>
                                <li class="text-color-900">Twitter</li>
                                <li class="text-color-900">Instagram</li>
                                <li class="text-color-900">Linkedin</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="w-full border-color-600 my-1 mt-12">
            </div>
            <div
                class="flex justify-center md:flex-row flex-col px-x_padding_page_mobile md:space-x-4 space-x-0 items-center">
                <h1 class="text-color-1000">
                    Copyright © 2023 Venture capital
                </h1>
                <h1 class="text-color-1000 md:visible md:h-auto invisible h-0">
                    |
                </h1>
                <h1 class="text-color-1000">
                    All Rights Reserved
                </h1>
                <h1 class="text-color-1000 md:visible collapse">
                    |
                </h1>
                <h1 class="text-color-800 underline ml-1">
                    Terms and Conditions | Privacy Policy
                </h1>
            </div>
        </div>
    </footer>
</template>