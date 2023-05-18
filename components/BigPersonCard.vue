<template>
    <div class="big-person-card">
        <!-- TODO add dynamic person image -->
        <img class="img-container" src="~/assets/img/people/1.png">
        <div class="person-info-container">
            <div class="flex flex-col space-y-3">
                <span class="person-name">
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
            <span class="previous-next-links-container">
                <!-- TODO add check for 0 -->
                <NuxtLink :to = "'/team/' + (id-1)" class="flex flex-row justify-start items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color-1000">
                        <path fill-rule="evenodd" 
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" 
                        clip-rule="evenodd" />
                    </svg>
                    <button id="previous">Previous</button>
                </NuxtLink>
                <!-- TODO add check for last person -->
                <NuxtLink :to = "'/team/' + (id+1)" class="flex flex-row justify-end items-center" >
                    <button id="next">Next</button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 text-color-1000">
                        <path fill-rule="evenodd" 
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" 
                        clip-rule="evenodd" />
                    </svg>
                </NuxtLink>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['name', 'position', 'description', 'cvLink', 'id'],

    /* computed: {
        pathImage() {
        // Request the image as a webpack module by using `require`
        return require(`~/assets/img/people/${this.id}.png`);
        },
        imageUrl() {
        return new URL('../assets/img/people/' + this.id + '.png', import.meta.url).href;
        }
    }, */
}
</script>

<style>
    .big-person-card {
        /* Card */
        display: flex;
        flex-flow: row;
        align-items: center;
        width: auto;
        height: 540px;
        left: 110px;
        top: 210px;
        /* Neutral Colors/White */
        background: #FFFFFF;
        /* Neutral Colors/Color 600 */
        border: 1px solid #D4D2E3;
        border-radius: 20px;
        margin: 25px;
    }

    .img-container {
        /* Container */
        width: 550px;
        height: 540px;
        left: 110px;
        top: 210px;
        /* Neutral Colors/Color 300 */
        background: #F9F9FF;
        border-radius: 20px 0px 0px 20px;
    }

    .person-info-container {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        width: 550px;
        height: 100%;
        left: 730px;
        top: 360px;
        padding-top: 130px;
        padding-bottom: 50px;
        padding-left: 50px;
        padding-right: 40px;
        /* padding-left: 70px;
        padding-right: 70px;
        padding-bottom: 70px;
        padding-top: 130px; */
    }

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
        font-size: 24px;
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

    .previous-next-links-container{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        width: auto;
        height: 30px;
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