<!--
    Footer of the page
-->

<template>
    <footer>
        <div class="h-height_footer bg-color-200">
            <div class="pb-8 pt-16 px-padding_page_border">
                <!-- A grid with 4 columns with large displays -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                        <Logo />
                        <p>
                            We understand the significance of emerging technologies <br>
                            in shaping the future. Our investments encompass startups <br>
                            that are at the forefront of disruptive technologies
                        </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <h1 class="text-headings-black font-bold pb-10">Pages</h1>

                            <ul class="h-16">
                                <NuxtLink to="/team">
                                    <li class="text-gray hover:text-primary-color active:font-bold">Team</li>
                                </NuxtLink>
                                <li class="text-gray">Strategy</li>
                                <NuxtLink to="/portfolio">
                                    <li class="text-gray hover:text-primary-color active:font-bold">Portfolio</li>
                                </NuxtLink>
                                <NuxtLink to="/locations">
                                    <li class="text-gray hover:text-primary-color active:font-bold">Areas</li>
                                </NuxtLink>
                            </ul>

                        </div>
                        <div>
                            <h1 class="text-headings-black font-bold pb-10">Contacts</h1>

                            <ul class="h-16">
                                <li class="text-gray">email: example@email.org</li>
                                <li class="text-gray">tel: +12 123 456 789</li>
                                <li class="text-gray">Via Larga 12, Milan Italy</li>
                                <div>
                                    <NuxtLink to="/contact"
                                        class="py-2 px-4 bg-primary-color text-white hover:text-headings-black hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                                        Stay on touch
                                    </NuxtLink>
                                </div>
                            </ul>
                        </div>
                        <div>
                            <h1 class="text-headings-black font-bold pb-10">Follow us</h1>

                            <ul class="h-16">
                                <li class="text-gray">Facebook</li>
                                <li class="text-gray">Twitter</li>
                                <li class="text-gray">Instagram</li>
                                <li class="text-gray">Linkedin</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="w-full border-color-600 my-1 mt-12">
            </div>
            <div class="flex justify-center">
                <h1 class="text-color-1000">
                    Copyright © 2023 Venture capital | All Rights Reserved |
                </h1>
                <h1 class="text-color-800 underline ml-1">
                    Terms and Conditions | Privacy Policy
                </h1>
            </div>
        </div>
    </footer>
</template>