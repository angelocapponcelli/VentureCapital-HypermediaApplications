<!--
    Contact Page
-->
<template>
    <main>
        <Breadcrumb :crumbs="[
                    { label: 'Contact Us', link: '/contact' }]" />
        <div class="flex flex-col justify-center lg:px-x_padding_page px-x_padding_page_mobile">
           
            <TitleWithImage title="Get in touch" subtitle="We appreciate your interest in reaching out to us. To ensure a smooth and efficient communication process, we kindly request you to fill out the form below with your relevant information. This will help us better understand your needs and provide you with the most appropriate assistance."></TitleWithImage>
            <div class="md:flex">
                <div class="md:w-full p-7">
                    <img class="rounded-3xl" src="@/assets/img/aboutus/group.jpg" alt="Immagine" />
                </div>
                <div class="md:w-full p-7">
                    <Transition name="hidden-form" @after-leave="toggleAnimation">
                    <form v-show="!isClosed">
                        <div class="md:flex">
                            <div class="md:w-full">
                                <div class="text-left">
                                    <label class="p-3 font-bold text-lg">Name</label><br>
                                    <input id="form_name" class="p-3 rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" :class="{'error':nameError}" type="text" value="Nicolas">
                                </div>
                                <div class="text-left">
                                    <label class="p-3 font-bold text-lg">Email</label><br>
                                    <input id="form_email" class="p-3 rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" :class="{'error':emailError}" type="email" value="prova@email.com">
                                </div>
                            </div>
                            <div class="md:w-full">
                                <div class="text-left">
                                    <label class="p-3 font-bold text-lg">Surname</label><br>
                                    <input id="form_surname" class="p-3 rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" :class="{'error':surnameError}" type="text" value="Cage">
                                </div>
                                <div class="text-left">
                                    <label class="p-3 font-bold text-lg">Company</label><br>
                                    <input id="form_company" class="p-3 rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" :class="{'error':companyError}" type="text" value="My company">
                                </div>
                            </div>
                        </div>
                        <div class="md:flex">
                            <div class="md:w-full text-left">
                                <label class="p-3 font-bold text-lg">Write your requests</label><br>
                                <textarea id="form_text" class="p-9 w-full rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" :class="{'error':textError}"></textarea>
                            </div>
                        </div>
                        <span class="flex text-red p-3 justify-start" v-show="nameError || surnameError || emailError || companyError || textError"> Some fields require a correction</span>
                        <div class="flex justify-end">
                            <div @click="sendForm" class="py-3 px-10 bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200" >Send</div>
                        </div>
                    </form>
                    </Transition>
                    <Transition name="hidden-msg">
                        <div class="rounded-3xl bg-color-400" v-show="isToggled">
                            <p class="p-4">Thank you for taking the time to fill out our form. A <b>confirmation email</b> will be sent to you shortly, summarizing the information you shared. If you don't receive the confirmation email within the next hour, please <b>check your spam folder</b> or feel free to contact our support team for assistance. Our dedicated team of professionals will carefully review your submission and aim to provide a comprehensive response within <b>three business days.</b> <br>Once again, thank you for choosing to engage with us. We look forward to serving you and providing the answers you need.</p>
                        </div>
                    </Transition>
                </div>
            </div>     
        </div>
    </main>
</template>

<script>
export default{
    data(){
        return{
            isClosed:false, 
            isToggled: false, 
            nameError: false, 
            surnameError: false, 
            emailError: false,
            companyError: false, 
            textError: false
        }
    }, 
    methods: {
        async sendForm(){
            var name = document.getElementById("form_name").value; 
            var surname = document.getElementById("form_surname").value;
            var email = document.getElementById("form_email").value;
            var company = document.getElementById("form_company").value;
            var text = document.getElementById("form_text").value;
            var errorcounter=0; 

            const validate= (email) => {
                return String(email)
                    .toLowerCase()
                    .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
                };
            
            if(name===""){
                this.nameError=true;
                errorcounter++; 
            }else{
                this.nameError=false; 
            }

            if(surname===""){
                this.surnameError=true;
                errorcounter++; 
            }else{
                this.surnameError=false; 
            }

            if(email==="" || !validate(email)){
                this.emailError=true;
                errorcounter++; 
            }else{
                this.emailError=false; 
            }

            if(company===""){
                this.companyError=true;
                errorcounter++; 
            }else{
                this.companyError=false; 
            }

            if(text===""){
                this.textError=true;
                errorcounter++; 
            }else{
                this.textError=false; 
            }

            if(errorcounter==0){
                this.isClosed=true;
            } 
        }, 
        toggleAnimation(){
            this.isToggled=true;
        }
    }
}
</script>

<style scoped>
  
    @keyframes open {
        from {
            opacity: 0;
            transform: scaleY(0);
        }

        to {
            opacity: 1;
        }
    }

    .hidden-msg-enter-active {
        animation: open 0.5s;
        transform-origin: top;
        
    }

    .hidden-form-leave-active {
        animation: open 0.5s reverse;
        transform-origin: top;
    }

    .error{
        background-color: #ff000074;
    }
    

    
    
</style>