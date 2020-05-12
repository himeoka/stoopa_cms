<template lang="pug">
div.p_index.contents.padding(ref="contents")
  div.contents_inner.p_index_inner.inner.padding(ref="contents_inner",:class="{fontready:$store.state.fontready,imageready:$store.state.imageready}")
    div.p_index_top
      div.p_index_top_list
        article.p_index_top_list_block(v-for="item in items")
          nuxt-link(:to="'/news/' + item.id")
            p.p_index_top_list_block_image
              img.lazyload(:src="dummyImg",:data-src="item.image.url", :data-srcset="item.image.url+' 1x,\' + item.image.url + '?dpr=2 2x'", alt="")
            h1.p_index_top_list_block_ttl {{item.title}}
          div.p_index_top_list_block_tag
            div.p_news_article_tag_block(v-for="item in item.ctg")
              nuxt-link(:to="'/ctg/' + item.id") {{item.name}}
              

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
  async asyncData({app,store}) {
    console.log()
    const { data } = await app.$axios.get(
      store.state.api + "/news?fields=title,image,ctg,id",
      {
        headers: { "X-API-KEY":"e8e956a4-4a09-4c71-ac0c-60b577553a3b" }
      }
    );
    return {
      items: data.contents
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