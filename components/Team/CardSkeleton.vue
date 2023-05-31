<template>
    <div class="p-6 space-y-2 rounded-2xl bg-white border-2 border-color-700 hover:shadow-md hover:transform hover:scale-[103%] transition duration-200">
        <div class="flex flex-col justify-between h-full">
            <div class="2xl:h-[85%] object-top object-cover 2xl:object-top h-80 w-full mb-2 rounded-2xl" >
                <AnimatedPlaceholder height="100%" width="100%" borderRadius="12px" />
            </div>
            <!-- person name and position -->
            <div class="w-fit h-[38px] font-sans not-italic font-bold text-2xl md:text-xl leading-[38px] text-[494850] lg:text-[28px]">
                <AnimatedPlaceholder height="38px" width="100%" />
            </div>
            <div class="w-fit h-[20px] font-sans not-italic font-medium uppercase tracking-wider lg:tracking-widest 
            text-base leading-[20px] text-[494850] lg:text-[18px] 2xl:text-2xl">
                <AnimatedPlaceholder height="20px" width="100%" />
            </div>
        </div>
    </div>
</template>