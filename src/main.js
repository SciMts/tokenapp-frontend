// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
// Import the styles directly. (Or you could add them via script tags.)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// Vue.config.API = '/api/'
// Vue.config.API = 'https://token.modum.io/api/'
Vue.config.API = 'http://localhost:8081/'

Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data () {
    return {
      store: { }
    }
  }
})
