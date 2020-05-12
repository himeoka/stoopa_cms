export default ({ app, store }) => {
  if (process.client) {
    require('intersection-observer')
  }
}

import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)