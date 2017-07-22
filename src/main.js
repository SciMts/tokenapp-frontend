// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Add Bootstrap
require('../node_modules/bootstrap/less/bootstrap.less')

Vue.config.productionTip = false

Vue.config.API = 'http://localhost:8081/'
// Vue.config.API = 'api/'

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
