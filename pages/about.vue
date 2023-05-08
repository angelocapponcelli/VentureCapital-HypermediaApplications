<!--
    About us page
-->
<template>
    <!--
        Instead of having the two structures written directly on the page, it was preferred to use components as they had the same layout.
        This also allows to have a much cleaner and easy to read 'code'
    -->
    <main>
        <TextImage description = "This is a description for the Dog's Shelter. The best place where dogs can rest. " />
        <TextImage description = "This is the second description for the Dog's Shelter. The best place where dogs can rest." :isReverse = true /> 
    </main>
</template>

<style>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>