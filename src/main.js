import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import 'common/styles/index.styl'
import loadingImg from 'common/images/default.gif'

Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('common/images/default_pic.jpg'),
  loading: loadingImg,
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
