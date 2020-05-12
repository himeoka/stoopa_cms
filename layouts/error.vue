<template lang="pug">
div.p_error.contents.padding(ref="contents")
  div.contents_inner.p_error_inner(ref="contents_inner",:class="{fontready:$store.state.fontready,imageready:$store.state.imageready}")
    div.p_error_head.m_page_head
      div.p_error_head_text.m_page_head_text.inner
        p.p_error_head_ttl.m_page_head_ttl.diot.center.normal 404 NOT FOUND
        h1.p_error_head_subttl.m_page_head_subttl.min お探しのページは見つかりませんでした
        div.p_error_lead
          p.p_error_lead_para.m_page_lead_para お探しのページは移動もしくは削除された可能性があります。<br class="tb_pc">ページをお探しの際は、上部のメニューよりお進みください。<br>またこのページをブックマークに登録されていた方は、<br class="tb_pc">お手数ですがブックマークの変更をお願いいたします。
          p.p_error_lead_para.m_page_lead_para
            a(href="/") トップページへ

</template>


<script>
import commonMixin from '~/mixin/common.js';
import pageMixin from '~/mixin/mixin.js';
export default {
  mixins: [commonMixin,pageMixin],
  head () {
    return {
      title: "お探しのページは見つかりませんでした - " + this.$store.state.title,
    }
  },
  data () {
    return {
      page:"404",
    }
  },
  async asyncData({ app }) {
  },
  updated(){
  },
  mounted(){
    this.$nextTick(function() {
      this.$store.state.pre = true;
    })
  },
  methods:{
    resize: function () {
    },
  },
}
</script>