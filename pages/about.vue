<!--
    About us page
-->
<template>
    <Breadcrumb :crumbs="[
                { label: 'About Us', link: '/abouts' }]" />
    <AboutUsStructureLinks :links = "[
        {
            link:'whoweare', //should be the same of the id section
            title: 'Who we are'
        }, 
        {
            link: 'companymission',
            title: 'Company mission'

        }, 
        {
            link: 'partners',
            title: 'Partners'

        }
    ]"></AboutUsStructureLinks>
   
    ,<!--<div>
        <table>
            <tr>
                <th> Who we are</th>
                <th></th>
            </tr>
            <tr>
                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam vulputate. Aliquet lectus proin nibh nisl condimentum id. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Diam quam nulla porttitor massa id neque. Massa tincidunt dui ut ornare lectus. Netus et malesuada fames ac turpis egestas integer eget. Amet facilisis magna etiam tempor orci eu lobortis elementum. Velit sed ullamcorper morbi tincidunt ornare massa. Dictum non consectetur a erat nam at. Ac placerat vestibulum lectus mauris ultrices eros in. Faucibus pulvinar elementum integer enim neque volutpat. Neque sodales ut etiam sit amet nisl purus in mollis. Sed adipiscing diam donec adipiscing tristique risus nec. Nisl tincidunt eget nullam non nisi.</td>
                <td>IMMAGINE</td>
            </tr>
        </table>
    </div>-->
    <div class="card" id="whoweare">
        <div class="content-section">
            <h2>Who we are</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="image-section">
            <img src="_nuxt/assets/img/startup/1.png" alt="Immagine" />
        </div>
  </div>
  <div class="card" id="companymission">
    <div class="image-section">
            <img src="_nuxt/assets/img/startup/1.png" alt="Immagine" />
        </div>
        <div class="content-section">
            <h2>Company mission</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
  </div>
  <div class="card" id="partners">
        <div class="content-section">
            <h2>Partners</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="image-section">
            <table>
                <tr>
                    <td>
                        <img src="_nuxt/assets/img/startup/1.png" alt="Immagine" />
                    </td>
                    <td>
                        <img src="_nuxt/assets/img/startup/1.png" alt="Immagine" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="_nuxt/assets/img/startup/1.png" alt="Immagine" />
                    </td>
                    <td>
                        <img src="_nuxt/assets/img/startup/1.png" alt="Immagine" />
                    </td>
                </tr>
            </table>

        </div>
  </div>
    
</template>

<script>
</script>
<style>
 
    .card {
        display: flex;
        border: 1px solid #ccc;
        background-color:#F2F1FA ;
        border-radius: 35px;
        padding-top: 2vh;
        padding-bottom: 2vh;
        padding-left: 2vh;
        padding-right: 2vh;
        margin-left: 2vw;
        margin-right: 2vw;
        margin-top: 3vw;
        margin-bottom: 3vw;
    }
    
    .image-section {
        flex: 1;
    }

    .image-section img{
        border-radius: 45px;
        display: block;
        width: 100%;
        height: auto;
        padding-top: 2vh;
        padding-bottom: 2vh;
        padding-left: 2vh;
        padding-right: 2vh;
    }
    
    .content-section {
        flex: 1;
        padding-top: 2vh;
        padding-bottom: 2vh;
        padding-left: 2vh;
        padding-right: 2vh;
        color: #494850;
        font-size:1.2em;
      
    }
    
    .content-section h2 {
        margin-top: 1vh;
        margin-bottom: 1vh;
        color:#504e62; 
        font-weight: bold;
        font-size:1.5em;
    }

    @media (max-width: 767px) {
      .card {
        flex-direction: column;
      }
      
      .image-section {
        order: 2;
      }
    }
</style>