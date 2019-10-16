// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueSocketIO from 'vue-socket.io'
import store from './vuex/store'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3002',
  forceNew: true,
  options: { path: "" } //Optional options
}))
Vue.use(iView)
Vue.prototype.$store = store
Vue.prototype.$axios = axios
Vue.config.productionTip = false
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  config.headers.common['Authorization'] = token;
  return config;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
