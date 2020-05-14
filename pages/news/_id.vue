<template lang="pug">
div.p_news.contents.padding(ref="contents")
  div.contents_inner.p_news_inner.inner.padding(ref="contents_inner",:class="{fontready:$store.state.fontready,imageready:$store.state.imageready}")
    div.p_news_article
      div.p_news_article_inner.inner
        h1.p_news_article_ttl {{data.title}}
        div.p_news_article_tag
          div.p_news_article_tag_block(v-for="item in data.ctg")
            nuxt-link(:to="'/ctg/' + item.id + '?ctg=' + item.name") {{item.name}}
              
        p.p_news_article_image
          img.lazyload(:src="dummyImg",:data-src="data.image.url", :data-srcset="data.image.url+'?w=1000 1x,\' + data.image.url + '?w=1000&dpr=2 2x'", alt="")
        p.p_news_article_image(v-for="item in data.subimages")
          img.lazyload(:src="dummyImg",:data-src="item.image.url", :data-srcset="item.image.url+'?w=1000 1x,\' + item.image.url + '?w=1000&dpr=2 2x'", alt="")
        div.p_news_article_content
          div.p_news_article_content_text(v-html="data.article")


</template>
<script>
import commonMixin from '~/mixin/common.js';
import pageMixin from '~/mixin/mixin.js';
export default {
//  layout: 'top',
  mixins: [commonMixin,pageMixin],
  head () {
    return {
      title: this.data.title + this.$store.state.sep + this.$store.state.title,
      meta: [
        { property: 'og:title', content:this.data.title + this.$store.state.sep + this.$store.state.title },
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
      ttl:"NEWS",
      page:"index",
      des:"",
      data:{}
    }
  },
  async asyncData({app,store,params}) {
    const { data } = await app.$axios.get(`/news/${params.id}`);
    return {
      data: data
    }
  },
  updated(){
  },
  mounted(){
    var self = this;
    console.log(this.data)
  },
  beforeDestroy(){
  },
  methods:{
    resize: function () {
    },
  },
}
</script>