<!--
    Default layout used by all the pages
-->
<template>
    <div>
        <Navbar />
        <slot/>
        <LazyTheFooter v-if="isVisible" />
        <div v-else class="h-96" id="footer"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isVisible: false,
            footer: null
        }
    },
    mounted(){
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // if the element is visible, we add the show class to it and remove the hiddenCard class
                    this.isVisible = true;

                    observer.disconnect();
                }
            });
        });

        footer = document.querySelector('#footer');
        observer.observe(footer);
    }
}
</script>