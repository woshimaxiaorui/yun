// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

 

Vue.use(MintUI)
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
