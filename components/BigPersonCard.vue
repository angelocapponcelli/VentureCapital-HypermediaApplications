<template>
    <div class="flex flex-col md:flex-row items-center w-auto h-auto md:h-[540px] bg-white 
    border border-solid border-[D4D2E3] rounded-[20px]">
        <img class="md:max-w-[50%] h-full bg-[F9F9FF] object-cover rounded-[20px]" :src="imageUrl">
        <!-- <div class="person-info-container"> -->
        <div class="flex flex-col justify-between space-y-5 w-auto h-full p-5 md:pt-[130px] md:pr-[40px] md:pb-[50px] md:pl-[50px]">
            <div class="flex flex-col">
                <span class="font-['DM Sans'] not-italic font-bold text-[40px] lg:text-[44px] leading-[50px] text-[494850]">
                    {{ name }}
                </span>
                <span class="person-position">
                    {{ position }}
                </span>
            </div>
            <div class="flex flex-col">
                <span class="person-description">
                    {{ description }}
                </span>
                <NuxtLink :to="cvLink" class="person-cv-link">
                    Personal CV
                </NuxtLink>
            </div>
            <span class="flex flex-row justify-between w-auto h-[30px]">
                <NuxtLink v-if="id > 1" :to = "'/team/' + (id-1)" class="flex flex-row justify-start items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color-1000">
                        <path fill-rule="evenodd" 
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" 
                        clip-rule="evenodd" />
                    </svg>
                    <button id="previous">Previous</button>
                </NuxtLink>
                <div v-else></div>
                <NuxtLink v-if="next" :to = "'/team/' + (id+1)" class="flex flex-row justify-end items-center" >
                    <button id="next">Next</button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color-1000">
                        <path fill-rule="evenodd" 
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" 
                        clip-rule="evenodd" />
                    </svg>
                </NuxtLink>
                <div v-else></div>
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
}
</script>

<style>
    .person-name {
        /* Special headings/Display 3 */
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 44px;
        line-height: 50px;
        /* Neutral Colors/Headings Black */
        color: #494850;
    }

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