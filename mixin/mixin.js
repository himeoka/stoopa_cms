export default {
  head () {
    return {
      title: this.meta.title  + this.$store.state.sep + this.$store.state.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title + this.$store.state.sep + this.$store.state.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
      ],
    }
  },
  data() {
    return {
      dummyImg:"data:image/gif;base64,R0lGODlhAQABAGAAACH5BAEKAP8ALAAAAAABAAEAAAgEAP8FBAA7",
      winH:"",
      dispH:"",
      winW:"",
      headH:"",
      webfontLoad:"",
      mainImageLoad:"",
      st:0,
      animeID:"",
    }
  },
  methods: {
    throttle:function(fn, delay) {
      let timerId;
      let lastExecTime = 0;
      return () => {
        const context = this;
        const args = arguments;
        let elapsedTime = performance.now() - lastExecTime;
        const execute = () => {
          fn.apply(context, args);
          lastExecTime = performance.now();
        }
        if (!timerId) {
          execute();
        }
        if (timerId) {
          clearTimeout(timerId);
        }
        if (elapsedTime > delay) {
          execute(); 
        } else {
          timerId = setTimeout(execute, delay);
        }
      }
    },
    kerning: function(content) {
      $(content)
        .find('p,li,th,td:not(.no-adjast-ls) ,h1,h2,h3,h4,h5,h6,span')
        .each(function() {
          if (!$(this).find('img').length) {
            var txt = $(this).html()
            $(this).html(
              txt.replace(/(、|。|」|』”)/g, '<span class="kerning">$1</span>')
            )
            txt = $(this).html()
            $(this).html(
              txt.replace(/(「|『|“)/g, '<span class="kerning_m">$1</span>')
            )
            txt = $(this).html()
            $(this).html(
              txt.replace(/(」|』)/g, '<span class="kerning hira">$1</span>')
            )
            txt = $(this).html()
            $(this).html(
              txt.replace(/(「|『)/g, '<span class="kerning_m hira">$1</span>')
            )
          }
        })
    },
    setSize:function(){
      if(this.winW !== window.innerWidth){
        this.dispH = window.innerHeight;
      }
        this.winH = window.innerHeight;
        this.winW = window.innerWidth;
        this.headH = document.getElementById("m_head").clientHeight;
    },
    webfontLoader: function() {
      var self = this;
      setTimeout(function(){
        self.$store.commit('fontReady');
      },self.$store.state.pageDelay)
      document.dispatchEvent(this.webfontLoad)
      console.log('fontReady')
    },
    mainImageLoader: function() {
      var self = this
      var target = this.$refs.mainimage
      if (target) {
        var image = new Image();
        image.onload = function() {
          self.$store.commit('imageReady');
          self.$store.commit('wrapperReady');
          document.dispatchEvent(self.mainImageLoad)
          console.log('imageReady')
          if(target.parentNode.classList.contains("p_works_detail_top_image_pic")){
            target.parentNode.style.paddingTop = image.naturalHeight/image.naturalWidth * 100 + "%";
          }
        }
        if ($(target).prop('tagName') == 'PICTURE') {
          if (self.$store.state.device == 'pc') {
            image.src = $(target).find('source').attr('srcset')
          } else {
            image.src = $(target).find('img').attr('src')
          }
        } else {
          image.src = $(target).attr('src')
        }
      } else {
        self.$store.commit('imageReady');
        self.$store.commit('wrapperReady');
        document.dispatchEvent(self.mainImageLoad)
        console.log('imageReady')
      }
    },
    lazysizeLoad:function(elm){
      lazySizes.loader.unveil(elm);
    },
  },
  computed: {
  },
  fetch({ store }) {
    
  },
  beforeMount() {
    this.$store.commit('resetMenu');
  },
  mounted() {
    var self = this
    this.$nextTick(function() {
      this.$store.commit('initPage', this.page)
      picturefill()
  
    //webfont loader
    //mainimage loader
      this.webfontLoad = document.createEvent('Event')
      this.webfontLoad.initEvent('webfontLoad', true, true)
      this.mainImageLoad = document.createEvent('Event')
      this.mainImageLoad.initEvent('mainImageLoad', true, true)

      self.mainImageLoader()
      self.webfontLoader()


      // kerning
      if (this.$refs.contents) {
        this.kerning(this.$refs.contents)
      }


    //resize
    if(this.resize){
      this.listen(window, 'resize', this.throttle(this.resize, 300));
    }

    //scroll
    if(this.scroll){
      this.listen(window, 'scroll', this.scroll);
    }
    
    //animation
    if(this.animation){
      this.animeID =  window.requestAnimationFrame(this.animation)
    }
    })
  },
  beforeDestroy() {
    if(this.animation){
      window.cancelAnimationFrame(this.animeID)
    }
    this.$store.commit('resetPage');
  },
  destroyed() {
    if (this.eventRemovers) {
      this.eventRemovers.forEach(function(eventRemover) {
        eventRemover.remove()
      })
    }
  }
}
