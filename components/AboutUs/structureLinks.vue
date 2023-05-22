<template>
    <div class="structbar" >
        
        <div v-for="link in links" >
            <a class="link" @click="scroll(link.link)">{{ link.title }}</a>
        </div>
        
    </div>
</template>

<script>
export default{
    props: ['links'],
    //paragraphLinks has to be an object like {link: xxx, title: xxx }
    methods:{
        scroll(refName){
            var element = document.getElementById(refName)
            element.scrollIntoView({block: "start", inline: "start", behavior:"smooth"})
            
        }
    }
}
</script>

<style>
.structbar{
    background-color: #F2F1FA;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding-top: 2vh;
    padding-bottom: 2vh;
}

.link{
    margin-left: 5vw;
    margin-right: 5vw;
    color:#7d7b97; 
    font-weight: bold;
    font-size:1.2em;
}

.link:hover{
    border-bottom: solid 3px #a9a4cd;
}

a:hover{
    color: #a9a4cd;

}

</style>