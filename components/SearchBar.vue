<!--
    Is implemented on the portfolio and area pages. Specifically, it consists of a text field that, upon receiving input,
    invokes the search() function, which retrieves the user's input and emits it as a value. Additionally, a useful
    parameter, 'id', is provided for mobile display purposes.

    PROPS:
    - id: the input ield id (Uuseful for displaying the element correctly on mobile)
    
    EMITS:
    - search-filter: keywods for filtering
-->

<template>
  <div class="flex bg-color-400 rounded-full">
    <input :id="id"
      class="w-80 h-12 pl-6 flex-initial grow bg-transparent rounded-full text-base text-color-1000 focus:outline-none"
      type="search" placeholder="Search for ..." @input="search">
    <button type="submit" class="flex-none pl-2 pr-6" @click="search" aria-label="Search button">
      <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966"
        style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
        <path
          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: ['id'],
  methods: {
    search() {
      this.$emit('search-filter', document.getElementById(this.id).value.toUpperCase());
    }
  }
};
</script>