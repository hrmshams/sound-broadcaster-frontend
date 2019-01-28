// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
require('./css/common.css')
// import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faMicrophoneAlt, 
  faMicrophoneAltSlash, 
  faBullhorn,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
  faMicrophoneAlt,
  faMicrophoneAltSlash,
  faBullhorn,
  faAngleRight
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
