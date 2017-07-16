import Vue from 'vue'
import VueRouter from 'vue-router'
import MultiStep from './Main.vue'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(MultiStep)
})
