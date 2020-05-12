<template lang="pug">
header#m_head.m_head(ref="head")
  div.m_head_inner
    p.m_head_logo
      nuxt-link(to="/")
        img(src="/img/cmn/logo.svg",alt="stoopa")


    div#menu_btn.m_head_menu_btn(@click.stop="$store.commit('toggleMenu')",@touchend.stop="test",:class="{'on': $store.state.isMenuActive}")
      div.m_head_menu_btn_inner
        span
        span
        span


//  header
</template>

<script>

export default {
  data(){
    return {
    }
  },
  components: {
  },
  mounted(){
 },
  methods: {
    test:function(){
      
    },
  },
}
</script>
