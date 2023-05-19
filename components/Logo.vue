<template>
    <NuxtLink to="/" class="flex items-center space-x-3 md:my-7 my-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
        </svg>
        <span class="hidden md:flex text-4xl font-extrabold">Venture</span>
        <span class="hidden md:flex text-4xl font-extrabold text-primary-color">Capital</span>
        <div class="flex md:hidden">
            <span class="text-4xl font-extrabold">V</span>
            <span class="text-4xl font-extrabold text-primary-color">C</span>
        </div>
    </NuxtLink>
</template>