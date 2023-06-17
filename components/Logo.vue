<!-- 
    Represents the organization's logo displayed in both the header and footer sections of the website.
    It is designed to be responsive, adapting its size according to the dimensions of the layout.
-->

<template>
    <NuxtLink to="/" class="flex items-center space-x-3 md:my-7 my-3">
        <svg class="w-7 h-7" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g>
                <ellipse ry="70" rx="70" id="svg_11" cy="256" cx="170" fill="#5b45f8" />
                <ellipse ry="70" rx="70" id="svg_13" cy="70" cx="70" fill="#5b45f8" />
                <ellipse ry="70" rx="70" id="svg_14" cy="70" cx="442" fill="#5b45f8" />
                <ellipse ry="70" rx="70" id="svg_15" cy="442" cx="256" fill="#5b45f8" />
                <ellipse ry="70" rx="70" id="svg_19" cy="256" cx="345" fill="#5b45f8" />
            </g>
        </svg>
        <span class="hidden lg:flex text-4xl font-extrabold">Venture</span>
        <span class="hidden lg:flex text-4xl font-extrabold text-primary-color">Capital</span>
        <div class="flex lg:hidden">
            <span class="text-4xl font-extrabold">V</span>
            <span class="text-4xl font-extrabold text-primary-color">C</span>
        </div>
    </NuxtLink>
</template>