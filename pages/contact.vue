<!--
    Contact Page
-->
<template>
    <main>
        <Breadcrumb :crumbs="[
                    { label: 'Contact Us', link: '/contact' }]" />
        <div class="flex flex-col justify-center px-x_padding_page_mobile lg:px-x_padding_page">
            <TitleWithImage title="Get in touch" subtitle="We appreciate your interest in reaching out to us. 
                To ensure a smooth and efficient communication process, we kindly request you to fill out the form below with your relevant information. 
                This will help us better understand your needs and provide you with the most appropriate assistance.">
            </TitleWithImage>
            <!--form + image -->
            <div class="md:flex">
                <div class="md:w-full p-7">
                    <img class="rounded-3xl" src="@/assets/img/contacts/group.webp" alt="Immagine" />
                </div>
                <!--form-->
                <div class="md:w-full p-7">
                    <Transition name="hidden-form" @after-leave="toggleAnimation">
                    <form v-show="!isClosed">
                        <div class="md:flex">
                            <div class="md:w-full">
                                <div class="text-left">
                                    <label class="p-3 font-bold text-lg">Name<span v-show="!isValid(form_name) && form_name.isModified" class="text-red">*</span></label><br>
                                    <input v-model="form_name.value" class="p-3 rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" :class="{'error':!isValid(form_name) && form_name.isModified}" type="text" placeholder="Nicolas">
                                    <span class="flex text-red justify-start"> {{ form_name.errormsg }}</span>
                                </div>
                                <div class="text-left">
                                    <label class="p-3 font-bold text-lg">Surname<span v-show="!isValid(form_surname) && form_surname.isModified" class="text-red">*</span></label><br>
                                    <input v-model="form_surname.value" class="p-3 rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" :class="{'error':!isValid(form_surname) && form_surname.isModified}" type="text" placeholder="Cage">
                                    <span class="flex text-red justify-start">{{ form_surname.errormsg }}</span>
                                </div>
                            </div>
                            <div class="md:w-full">
                                <div class="text-left">
                                    <label class="p-3 font-bold text-lg">Email<span v-show="!isValid(form_email) && form_email.isModified" class="text-red">*</span></label><br>
                                    <input v-model.trim="form_email.value" class="p-3 rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" :class="{'error':!isValid(form_email) && form_email.isModified}" type="email" placeholder="prova@email.com">
                                    <span class="flex text-red justify-start">{{ form_email.errormsg }}</span>
                                </div>
                                <div class="text-left">
                                    <label class="p-3 font-bold text-lg">Company<span v-show="!isValid(form_company) && form_company.isModified" class="text-red">*</span></label><br>
                                    <input v-model="form_company.value" class="p-3 rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" :class="{'error':!isValid(form_company) && form_company.isModified}" type="text" placeholder="My company">
                                    <span class="flex text-red justify-start">{{ form_company.errormsg }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex">
                            <div class="md:w-full text-left">
                                <label class="p-3 font-bold text-lg">Write your requests<span v-show="!isValid(form_text) && form_text.isModified" class="text-red">*</span></label><br>
                                <textarea v-model="form_text.value" class="p-9 w-full rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" :class="{'error':!isValid(form_text) && form_text.isModified}" placeholder="Write here your question..."></textarea>
                                <span class="flex text-red justify-start">{{ form_text.errormsg }}</span>
                            </div>
                        </div>
                       
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
            <!--contacts cards-->
            <div class="md:flex">
                <div class="md:flex-row md:justify-center">
                    <div class="md:px-20">
                        <ContactsCard title="Email us" content="vc@email.org"></ContactsCard>
                        <ContactsCard title="Call us" content="+12 123 456 789"></ContactsCard>
                        <div class="p-3 m-5 md:w-full justify-center text-center border-2 border-color-400 rounded-3xl">
                            <h3 class="font-bold text-3xl text-primary-color p-2">Follow us</h3>
                            <table class="flex justify-center">
                                <tr class="flex justify-center">
                                    <td>
                                        <img class="p-3 max-w-xs w-full rounded-3xl hover:shadow-2xl" src="@/assets/img/facebook.png" alt="Immagine" />
                                    </td>
                                    <td>
                                        <img class="p-3 max-w-xs w-full rounded-3xl hover:shadow-2xl" src="@/assets/img/instagram.png" alt="Immagine" />
                                    </td>
                                </tr>
                                <tr class="flex justify-center">
                                    <td>
                                        <img class="p-3 max-w-xs w-full rounded-3xl hover:shadow-2xl" src="@/assets/img/twitter.png" alt="Immagine" />
                                    </td>
                                    <td>
                                        <img class="p-3 max-w-xs w-full rounded-3xl hover:shadow-2xl" src="@/assets/img/linkedin.png" alt="Immagine" />
                                    </td>
                                </tr>
                            </table>
                        </div> 
                    </div>
                </div>
                <ContactsCard title="Our location" content="Via Larga 12, Milan Italy" :maps="maps"></ContactsCard>
            </div>
        </div>
    </main>
</template>

<script>
export default{
    data(){
        return{
            form_name:{
                value:"", //its value
                errormsg:"", //its error message
                isModified:false, //if the field have been touched at least once
                typeText: 'short' //it can be of type short, long, email
            },
            form_surname:{
                value:"", //its value
                errormsg:"", //its error message
                isModified:false, //if the field have been touched at least once
                typeText: 'short' //it can be of type short, long, email
            },
            form_email:{
                value:"", //its value
                errormsg:"", //its error message
                isModified:false, //if the field have been touched at least once
                typeText: 'email' //it can be of type short, long, email
            },
            form_company:{
                value:"", //its value
                errormsg:"", //its error message
                isModified:false, //if the field have been touched at least once
                typeText: 'short' //it can be of type short, long, email
            },
            form_text:{
                value:"", //its value
                errormsg:"", //its error message
                isModified:false, //if the field have been touched at least once
                typeText: 'long' //it can be of type short, long, email
            },
            isClosed:false, 
            isToggled: false,  
            maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.3835724117585!2d9.191949900000001!3d45.462076599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6a8d6c8a797%3A0x853071d1537e8bc0!2sVia%20Larga%2C%2012%2C%2020122%20Milano%20MI!5e0!3m2!1sit!2sit!4v1685293835994!5m2!1sit!2sit",
            socials: {
                facebook:"@/assets/img/facebook.png",
                instagram: "@/assets/img/instagram.png",
                twitter: "@/assets/img/twitter.png",
                linkedin: "@/assets/img/linkedin.png"
            }
        }
    }, 
    methods: {
        sendForm(){

            function sendJsonObject(url, obj, cback){
                var req = new XMLHttpRequest();   // new HttpRequest instance
                req.onreadystatechange=function (){
                    cback(req);
                };
                req.open("POST", url);
                if(obj==null){
                    req.send();
                }
                else{
                    const json= JSON.stringify(obj);
                    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                    req.send(json)
                }
            }

            this.form_name.isModified=true;
            this.form_surname.isModified=true;
            this.form_email.isModified=true;
            this.form_company.isModified=true;
            this.form_text.isModified=true;

            if(this.isValid(this.form_name) &&
                this.isValid(this.form_surname) &&
                this.isValid(this.form_email) &&
                this.isValid(this.form_company) &&
                this.isValid(this.form_text)){
                //here makes the ajax call if the response is 200 ok set isClosed=true, 
                //we also can vue-link the message text and if there is an error it pop-ups a personalized error msg
                
                var jsonObj = {
                    name: this.form_name.value, 
                    surname: this.form_surname.value, 
                    company: this.form_company.value, 
                    email: this.form_email.value, 
                    body: this.form_text.value
                }

                var context = this

                sendJsonObject("..", jsonObj, function(x) {
                    if (x.readyState == XMLHttpRequest.DONE) {
                        var message = x.responseText; //in case we need
                        switch (x.status) {
                            case 200:
                                context.isClosed=true
                                //here where handled, we do not 
                                //we also can vue-link the message text and if there is an error it pop-ups a personalized error msg
                                break;
                            default:
                               //default case with pre-fixed message for demo
                                break;
                        }
                    }
                })
            }
        }, 
        toggleAnimation(){
            this.isToggled=true;
        }, 
        isRequired(object){
            return object.value.length===0 || !object.isModified; 
        }, 
        isValid(object){
            if(!object.isModified){
                return false; 
            }
            switch (object.typeText){
                case 'long': 
                    if(object.value.replaceAll(" ", "").length<20){
                        object.errormsg="This field must be at least 20 characters long";
                        return false; 
                    }
                    if(object.value.replaceAll(" ", "").length>300){
                        object.errormsg="This field is too long!"
                        return false; 
                    }
                    break; 
                case 'short': 
                    if(object.value.replaceAll(" ", "").length<1){
                        object.errormsg="Required";
                        return false; 
                    }
                    if(object.value.replaceAll(" ", "").length>30){
                        object.errormsg="Is this a real name?"
                        return false; 
                    }
                    break; 
                case 'email':
                    const validate= (email) => {
                        return String(email)
                            .toLowerCase()
                            .match(
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            );
                        };
                    if(object.value.replaceAll(" ", "").length<1){
                        object.errormsg="Required";
                        return false; 
                    }
                    if(validate(object.value)===null){
                        object.errormsg="Is this an email?"
                        return false;
                    }
                    break; 
            }

            object.errormsg=""; 
            return true; 
        }

    }, 
    watch:{
        'form_name.value'(newValue, oldValue){
            this.form_name.isModified=true; 
        }, 
        'form_surname.value'(newValue, oldValue){
            this.form_surname.isModified=true;
        },
        'form_email.value'(newValue, oldValue){
            this.form_email.isModified=true;
        },
        'form_company.value'(newValue, oldValue){
            this.form_company.isModified=true;
        },
        'form_text.value'(newValue, oldValue){
            this.form_text.isModified=true;
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
        border: 5px solid #ff000074;
    }

    

    
    
</style>