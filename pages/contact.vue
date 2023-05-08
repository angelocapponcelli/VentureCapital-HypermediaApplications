<!--
    Contact Page
-->
<template>
    <main>
        <main>
            <p>
                This are our contacts:
                <ul>
                    <li>E-mail: mail@shelter.it</li>
                    <li>Tel: 053684864351</li>
                </ul>
            </p>
            <form>
                <div>
                    <label for = "name">Name & Surname</label>
                    <input type = "text" id = "name" placeholder = "Name & Surname">
                </div>
                <div>
                    <label for = "mail">E-mail</label>
                    <input type = "email" id = "mail" placeholder = "E-mail">
                </div>
                <div id = "message-div">
                    <label for = "message">Message</label>
                    <textarea id = "message" placeholder = "Write your message here"></textarea>  
                </div>
                <button>Send Message</button>
            </form>
        </main>
    </main>
</template>

<style>
    main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    }

    form {
        width: 600px;
        display: flex;
        flex-direction: column;
        padding: 15px;
        border: 2px rgb(255, 102, 0) dashed;
        border-radius: 5px;
        row-gap: 20px;
    }

    form div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    textarea {
        width: 99%;
        min-height: 5.1em;
        resize: vertical;
    }

    input {
        width: 60%;
    }

    label {
        font-size: 13pt;
        font-weight: bold;
    }

    #message-div {
        flex-direction: column;
    }

    @media screen and (max-width: 650px) {
        form div {
            flex-direction: column;
        }

        input {
            width: 100%;
        }
        
        form {
            width: 90%;
            min-width: 400px;
        }
    }
</style>