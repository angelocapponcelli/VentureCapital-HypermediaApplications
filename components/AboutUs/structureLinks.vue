<template>
  <!-- <div :class="{'structbar': true, 'fixed': isFixed}" id="fixed"> -->
  <div class="flex flex-row flex-nowrap justify-center gap-x-5 md:gap-x-40 py-2 w-full sticky drop-shadow-md top-16 md:top-24 z-40 bg-white" id="fixed">
    <div class="relative text-color-1000 font-bold text-base md:text-xl cursor-pointer hover:text-color-700 transition duration-200" id="btn" v-for="link in links" :key="link.title">
      <!-- <NuxtLink :to="link.link" class="innerlink">{{ link.title }}</NuxtLink> -->
      <a @click="scroll(link.link)">{{ link.title }}</a>
    </div>
  </div>
  <!-- <div v-if="isFixed===true"  :style="{ height: height }"></div> -->
  
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
/*     handleScroll() {
      this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      // Se la posizione corrente della pagina è maggiore della posizione iniziale del componente,
      // impostiamo isFixed su true per applicare la classe 'fixed'
      if (this.scrollPosition > this.componentTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }*/
  },
  /* mounted() {
    //this.componentTop = document.getElementById("fixed").offsetTop;
    window.addEventListener('scroll', this.handleScroll);
    //this.height=document.getElementById("fixed").getBoundingClientRect().height;
    //this.height = document.getElementById("fixed").offsetHeight + document.getElementsByTagName("nav")[0].offsetHeight;
    //this.height = this.height+"px";
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  } */
};
</script>

<style scoped>
  #btn::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.2rem;
    left: 0;
    bottom: 0;
    background-color: #BCBACD;
  }

  #btn::after {
    transform: scale(0, 1);
    transition: transform 0.3s ease;
  }

  #btn:hover::after {
    transform: scale(1, 1);
  }
</style>

