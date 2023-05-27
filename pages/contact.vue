<!--
    Contact Page
-->
<template>
    <Breadcrumb :crumbs="[
                { label: 'Contact Us', link: '/contact' }]" />
    <main class="flex justify-center lg:px-x_padding_page px-x_padding_page_mobile">
        <main>
            <TitleWithImage title="Get in touch" subtitle="We appreciate your interest in reaching out to us. To ensure a smooth and efficient communication process, we kindly request you to fill out the form below with your relevant information. This will help us better understand your needs and provide you with the most appropriate assistance."></TitleWithImage>
            <div class="md:flex">
                <div class="md:w-full p-7">
                    <img class="rounded-3xl" src="@/assets/img/aboutus/group.jpg" alt="Immagine" />
                </div>
                <div class="md:w-full p-7">
                    <form>
                        <div class="md:flex">
                            <div class="md:w-full">
                                <div class="text-left">
                                    <label class="p-3 font-bold text-lg">Name</label><br>
                                    <input class="p-3 rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" type="text" value="Nicolas" required>
                                </div>
                                <div class="text-left">
                                    <label class="p-3 font-bold text-lg">Email</label><br>
                                    <input class="p-3 rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" type="email" value="prova@email.com" required>
                                </div>
                            </div>
                            <div class="md:w-full">
                                <div class="text-left">
                                    <label class="p-3 font-bold text-lg">Surname</label><br>
                                    <input class="p-3 rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" type="text" value="Cage" required>
                                </div>
                                <div class="text-left">
                                    <label class="p-3 font-bold text-lg">Phone number</label><br>
                                    <input class="p-3 rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10" type="tel" value="+39 123 4567890" required>
                                </div>
                            </div>
                        </div>
                        <div class="md:flex">
                            <div class="md:w-full text-left">
                                <label class="p-3 font-bold text-lg">Extra text (optional)</label><br>
                                <textarea class="p-9 w-full rounded-3xl bg-color-400 hover:bg-color-500 active:bg-color-600 focus:outline-none focus:ring focus:ring-color-700 my-2 pl-10"></textarea>
                            </div>
                        </div>
                        <div class="flex justify-end">
                        <button class="py-3 px-10 bg-primary-color text-white hover:text-primary-color hover:bg-white text-sm border-2 border-primary-color rounded-full transition ease-in-out duration-200">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </main>
</template>
