<template lang="pug">
  div.outer#outer
    div.wrapper#wrapper(:class="{ready:$store.state.wrapperready,scroll:$store.state.scroll}")
      my-header
      nuxt(:nuxt-child-key="$route.fullPath")
      my-footer
</template>


<script>
import MyHeader from '~/components/Header.vue';
import MyFooter from '~/components/Footer.vue';

if (process.browser) {
  window.cmnData = {};
}
export default {
  components: {
    MyHeader,
    MyFooter,
  },
  mounted(){
    var self = this;

    //lazysize
    window.lazySizesConfig = window.lazySizesConfig || {};
    lazySizesConfig.preloadAfterLoad= true;
    lazySizesConfig.expand = 500;
    //lazyload
    document.addEventListener('lazybeforeunveil', function(e){
      var bg = e.target.getAttribute('data-bg');
      if(bg){
          e.target.style.backgroundImage = 'url(' + bg + ')';
      }
    });
  }
}
</script>