(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{195:function(t,e,n){"use strict";n.r(e);n(16);var r=n(2),c=n(78),l=n(79),d={mixins:[c.a,l.a],components:{},data:function(){return{page:"index",meta:{title:"NEWS",description:"ページ個別のディスクリプション",type:"article",image:"https://example.com/img/ogp/test.jpg"},des:"",data:{}}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,t.store,r=t.params,e.next=3,n.$axios.get("/news/".concat(r.id));case 3:return c=e.sent,data=c.data,e.abrupt("return",{data:data});case 6:case"end":return e.stop()}}),e)})))()},updated:function(){},mounted:function(){console.log(this.data)},beforeDestroy:function(){},methods:{resize:function(){}}},o=n(14),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"contents",staticClass:"p_news contents padding"},[n("div",{ref:"contents_inner",staticClass:"contents_inner p_news_inner inner padding",class:{fontready:t.$store.state.fontready,imageready:t.$store.state.imageready}},[n("div",{staticClass:"p_news_article"},[n("div",{staticClass:"p_news_article_inner inner"},[n("h1",{staticClass:"p_news_article_ttl"},[t._v(t._s(t.data.title))]),n("div",{staticClass:"p_news_article_tag"},t._l(t.data.ctg,(function(e){return n("div",{staticClass:"p_news_article_tag_block"},[n("nuxt-link",{attrs:{to:"/ctg/"+e.id+"?ctg="+e.name}},[t._v(t._s(e.name))])],1)})),0),n("p",{staticClass:"p_news_article_image"},[n("img",{staticClass:"lazyload",attrs:{src:t.dummyImg,"data-src":t.data.image.url,"data-srcset":t.data.image.url+"?w=1000 1x,"+t.data.image.url+"?w=1000&dpr=2 2x",alt:""}})]),t._l(t.data.subimages,(function(e){return n("p",{staticClass:"p_news_article_image"},[n("img",{staticClass:"lazyload",attrs:{src:t.dummyImg,"data-src":e.image.url,"data-srcset":e.image.url+"?w=1000 1x,"+e.image.url+"?w=1000&dpr=2 2x",alt:""}})])})),n("div",{staticClass:"p_news_article_content"},[n("div",{staticClass:"p_news_article_content_text",domProps:{innerHTML:t._s(t.data.article)}})])],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);