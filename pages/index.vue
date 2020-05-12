<template lang="pug">
div.p_index.contents.padding(ref="contents")
  div.contents_inner.p_index_inner.inner.padding(ref="contents_inner",:class="{fontready:$store.state.fontready,imageready:$store.state.imageready}")


</template>
<script>
import commonMixin from '~/mixin/common.js';
import pageMixin from '~/mixin/mixin.js';
export default {
//  layout: 'top',
  mixins: [commonMixin,pageMixin],
  head () {
    return {
      title: this.ttl + this.$store.state.sep + this.$store.state.title,
      meta: [
        { property: 'og:title', content:this.ttl + this.$store.state.sep + this.$store.state.title },
        { hid: 'description', name: 'description', content: this.des},
        { property: 'og:description', content: this.des},
        { property: 'twitter:description', content: this.des},
      ]
    }
  },
  components: {
  },
  data () {
    return {
      ttl:"TOP",
      page:"index",
      des:"",
      items:[]
    }
  },
  updated(){
  },
  mounted(){
    var self = this;
    console.log(this.items)
  },
  beforeDestroy(){
  },
  methods:{
    resize: function () {
    },
  },
}
</script>