<template lang="pug">
div.p_index.contents.padding(ref="contents")
  div.contents_inner.p_index_inner.inner(ref="contents_inner",:class="{fontready:$store.state.fontready,imageready:$store.state.imageready}")
    div.p_index_top
      div.p_index_slide_wrapp(v-swiper:topswiper="mainSlide",:style="{height:dispH + 'px'}")
        div.swiper-wrapper
          div.swiper-slide.p_index_slide(v-for="item in main_image")
            img.lazyload(:src="dummyImg",:data-src="item.image.url", :data-srcset="item.image.url+'?w=2000 1x,\' + item.image.url + '?w=2000&dpr=2 2x'", alt="")
      div.p_index_text
        p.p_index_text_lead {{lead}}
        p.p_index_text_para {{text}}

      div.p_index_top_list
        article.p_index_top_list_block(v-for="item in items")
          nuxt-link(:to="'/news/' + item.id")
            p.p_index_top_list_block_image
              img.lazyload(:src="dummyImg",:data-src="item.image.url", :data-srcset="item.image.url+'?w=400 1x,\' + item.image.url + '?w=400&dpr=2 2x'", alt="")
            h1.p_index_top_list_block_ttl {{item.title}}
          div.p_index_top_list_block_tag
            div.p_news_article_tag_block(v-for="item in item.ctg")
              nuxt-link(:to="'/ctg/' + item.id + '?ctg=' + item.name") {{item.name}}
              

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
      items:[],
      main_image:"",
      text:"",
      lead:"",
      mainSlide: {
        autoplay:{
          delay:5000,
          disableOnInteraction:false,
        },
        speed:2000,
        loop:true,
        slidesPerView: 1,
        effect:"fade",
        init:false,
      },
    }
  },
  async asyncData({app,store}) {
    const { data } = await app.$axios.get("/news?fields=title,image,ctg,id");
    const res = await app.$axios.get("/top");
    const { main_image,text,lead }= res.data;
    return {
      items: data.contents,
      main_image,
      text,
      lead
    }
  },
  updated(){
  },
  mounted(){
    var self = this;
    this.listen(document, 'mainImageLoad', function(e){
      self.topswiper.init()
    },false);
    console.log(this. main_image)
  },
  beforeDestroy(){
  },
  methods:{
    resize: function () {
    },
  },
}
</script>