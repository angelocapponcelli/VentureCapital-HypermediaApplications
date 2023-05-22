<template>
    <div :class="{'structbar': true, 'fixed': isFixed}" id="fixed">
      <div v-for="link in links" :key="link.title">
        <a class="link" @click="scroll(link.link)">{{ link.title }}</a>
      </div>
    </div>
    <div v-if="isFixed===true"  :style="{ height: height }"></div>
    
  </template>
  
  <script>
  export default {
    props: ['links'],
    data() {
      return {
        isFixed: false,
        componentTop: 0,
        scrollPosition: 0, 
        height: '0'
      };
    },
    methods: {
      scroll(refName) {
        const element = document.getElementById(refName);
        element.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
      },
      handleScroll() {
        this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
        // Se la posizione corrente della pagina è maggiore della posizione iniziale del componente,
        // impostiamo isFixed su true per applicare la classe 'fixed'
        if (this.scrollPosition > this.componentTop) {
          this.isFixed = true;
        } else {
          this.isFixed = false;
        }
        console.log(this.height)
        console.log(this.isFixed)
      }
    },
    mounted() {
      this.componentTop = document.getElementById("fixed").offsetTop;
      window.addEventListener('scroll', this.handleScroll);
      //this.height=document.getElementById("fixed").getBoundingClientRect().height;
      this.height = document.getElementById("fixed").offsetHeight+"px"; 
      console.log(this.height)
      console.log(this.componentTop)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  };
  </script>
  
  <style>
  .structbar {
    background-color: #f2f1fa;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    padding-top: 2vh;
    padding-bottom: 2vh;
    width: 100%;
  }
  
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
  
  .link {
    margin-left: 5vw;
    margin-right: 5vw;
    color: #7d7b97;
    font-weight: bold;
    font-size: 1.2em;
  }
  
  .link:hover {
    border-bottom: solid 3px #a9a4cd;
  }
  
  a:hover {
    color: #a9a4cd;
  }
  </style>
  
  