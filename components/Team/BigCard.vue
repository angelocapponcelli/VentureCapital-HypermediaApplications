<template>
    <div class="flex flex-col md:flex-row items-center w-auto h-auto md:h-[540px] 2xl:max-w-screen-xl bg-white 
    border border-solid border-[D4D2E3] rounded-[20px]">
        <img class="md:max-w-[50%] h-full bg-[F9F9FF] object-cover rounded-[20px]" :src="imageUrl">
        <!-- <div class="person-info-container"> -->
        <div class="flex flex-col justify-between space-y-5 w-auto h-full p-5 md:pt-[130px] md:pr-[40px] md:pb-[50px] md:pl-[40px]">
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
                    {{ description }}
                </span>
                <NuxtLink :to="cvLink" class="person-cv-link">
                    Personal CV
                </NuxtLink>
            </div>
            <span class="flex flex-row justify-between w-auto h-[30px]">
                <div v-if="id > 1" class="flex flex-row justify-start w-1/3">
                    <NuxtLink  :to = "'/team/' + (id-1)" class="flex flex-row items-center w-min
                        hover:transform hover:scale-105 transition duration-200" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color-1000">
                            <path fill-rule="evenodd" 
                            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" 
                            clip-rule="evenodd" />
                        </svg>
                        <button id="previous">Previous</button>
                    </NuxtLink>
                </div>
                <div v-else class="w-1/3"></div>

                <NuxtLink to="/team"
                class="max-h-14 flex-none py-2 px-1 mx-auto items-center justify-center flex space-x-2 bg-white text-primary-color 
                hover:text-white hover:bg-primary-color text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">
                    <span v-if="screenWidth > 1024">Our Team</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                </NuxtLink>
                
                <div v-if="next" class="flex flex-row justify-end w-1/3">
                    <NuxtLink  :to = "'/team/' + (id+1)" class="flex flex-row items-center w-min
                        hover:transform hover:scale-105 transition duration-200" >
                        <button id="next">Next</button>
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
</template>

<script>
export default {
    props: ['name', 'position', 'description', 'image', 'cvLink', 'id', 'next'],

    computed: {
        imageUrl() {
            const config = useRuntimeConfig();
            return config.SUPABASE_ASSETS_URL + "/people/" + this.image + '.png'
        }
    },
    data() {
        return {
            screenWidth: window.innerWidth,
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            this.screenWidth = window.innerWidth
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

    .person-cv-link {
        /* Rich Text/Text Link/Bold */
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 30px;
        /* or 167% */
        text-decoration-line: underline;
        /* Primary Colors/Primary Color */
        color: #5B45F8;
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

    #previous {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        /* Neutral Colors/Color 900 */
        color: #8D8BA7;
    }

    #next {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        /* Primary Colors/Primary Color */
        color: #5B45F8;
    }

</style>