export default {
  data() {
    return {
      dummyImg:"data:image/gif;base64,R0lGODlhAQABAGAAACH5BAEKAP8ALAAAAAABAAEAAAgEAP8FBAA7",
    }
  },
  methods: {
    listen: function(target, eventType, callback) {
      if (!this.eventRemovers) {
        this.eventRemovers = []
      }
      target.addEventListener(eventType, callback)
      this.eventRemovers.push({
        remove: function() {
          target.removeEventListener(eventType, callback)
        }
      })
    },
  },
  destroyed() {
    if (this.eventRemovers) {
      this.eventRemovers.forEach(function(eventRemover) {
        eventRemover.remove()
      })
    }
  }
}