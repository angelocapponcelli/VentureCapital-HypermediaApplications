<template>
    <div class="p-3 m-5 justify-center md:w-full text-center border-2 border-color-400 rounded-3xl">
        <h3 class="font-bold text-xl text-primary-color p-2">{{title}}</h3>
        <div class="">{{ content }}</div>
        <div v-show="mapsPresent" class="justify-center p-3">
            <iframe :src="maps"  width="400" height="300" class="w-full border-2 border-color-300 rounded-3xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> 
    </div>
</template>

<script>
export default {
    props: ['title', 'content', 'maps'],
    computed:{
        mapsPresent(){
            return this.maps!==undefined;
        },
        socialsPresent(){
            return this.socials!==undefined;
        }
    }
};
</script>