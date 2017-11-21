// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// css
import '@/assets/css/reset'
import '@/assets/css/base'
import '@/assets/css/NavHeader'
Vue.config.productionTip = false

// import axios
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, Axios)
Axios.defaults.baseURL = 'api/'  //这样也ok的

// register globally
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
