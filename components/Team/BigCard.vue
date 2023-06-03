<template>
    <div class="flex flex-col items-center w-auto h-auto 2xl:max-w-screen-xl bg-white
        border border-solid border-[D4D2E3] rounded-[20px]">
        <div class="flex flex-col md:flex-row md:justify-between items-center w-full h-auto md:h-[540px] 2xl:max-w-screen-xl">
            <img class="md:max-w-[50%] md:h-full bg-[F9F9FF] object-cover rounded-[20px]" :src="imageUrl" format="webp" :alt="'Thumbnail ' + name">
            <!-- <div class="person-info-container"> -->
            <div class="flex flex-col justify-between space-y-5 w-full h-full p-5 md:pt-[130px] md:pr-[40px] md:pb-[50px] md:pl-[40px]">
                <div class="flex flex-col space-y-3">
                    <span class="font-['DM Sans'] not-italic font-bold text-[40px] lg:text-[44px] leading-[50px] text-[494850]">
                        {{ name }}
                    </span>
                    <span class="person-position">
                        {{ position }}
                    </span>
                </div>
                <div class="flex flex-col space-y-3">
                    <span class="person-description">
                        {{ logline }}
                    </span>
                    <div class="flex flex-row">
                        <NuxtLink to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" class="hover:transform hover:scale-105 transition duration-200">
                                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
                                <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" class="hover:transform hover:scale-105 transition duration-200">
                                <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                            </svg>
                        </NuxtLink>
                    </div>
                    <!-- <div class="flex flex-row justify-start">
                        <NuxtLink :to="cvLink" class="font-sans font-bold leading-[30px] text-[15px] underline text-primary-color
                        hover:transform hover:scale-105 hover:text-color-700 transition duration-200">
                            Personal CV
                        </NuxtLink>
                    </div> -->
                </div>
                <span class="flex flex-row justify-between w-auto h-[30px]">
                    <div v-if="id > 1" class="flex flex-row justify-start w-1/3">
                        <NuxtLink  :to = "'/team/' + (id-1)" class="flex flex-row items-center w-min font-bold text-color-1000
                            hover:transform hover:scale-105 hover:text-color-700 transition duration-200" >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color-1000">
                                <path fill-rule="evenodd" 
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" 
                                clip-rule="evenodd" />
                            </svg>
                            <button aria-label="Previous person button">Previous</button>
                        </NuxtLink>
                    </div>
                    <div v-else class="w-1/3"></div>

                    <NuxtLink to="/team" 
                    class="max-h-14 flex-none py-2 px-1 mx-auto items-center justify-center flex bg-white text-primary-color 
                        hover:text-white hover:bg-primary-color text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                        <span class="hidden lg:contents">Our Team</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                        </svg>
                    </NuxtLink>
                    
                    <div v-if="next" class="flex flex-row justify-end w-1/3">
                        <NuxtLink  :to = "'/team/' + (id+1)"  class="flex flex-row items-center w-min font-bold text-primary-color
                            hover:transform hover:scale-105 hover:text-color-700 transition duration-200" >
                            <button aria-label="Next person button">Next</button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color-1000">
                                <path fill-rule="evenodd" 
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" 
                                clip-rule="evenodd" />
                            </svg>
                        </NuxtLink>
                    </div>
                    <div v-else class="w-1/3"></div>
                </span>
            </div>
        </div>
        <div class="px-x_padding_page_mobile py-y_padding_page_mobile md:p-12 md:pb-4 text-xl">
            {{ descriptionArray[0] }}
        </div>
        <div class="px-x_padding_page_mobile py-y_padding_page_mobile md:p-12 md:pb-4 md:pt-4 text-base">
            {{ descriptionArray[1] }}
        </div>
        <div class="px-x_padding_page_mobile py-y_padding_page_mobile md:p-12 md:pt-4 text-base">
            {{ descriptionArray[2] }}
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'position', 'logline', 'image', 'description', 'id', 'next'],
    data() {
        return {
            descriptionArray: this.description.split('#')
        }
    },
    computed: {
        imageUrl() {
            const config = useRuntimeConfig();
            return config.SUPABASE_ASSETS_URL + "/people/" + this.image + '.webp'
        }
    }
}
</script>

<style>
    .person-position {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        /* Neutral Colors/Color 800 */
        color: #ADABC3;
    }

    .person-description {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 30px;
        /* Neutral Colors/Text Gray */
        color: #9795B5;
    }
</style>