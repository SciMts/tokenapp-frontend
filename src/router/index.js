import Vue from 'vue'
import Router from 'vue-router'

import Wizard from '@/components/FormWizard'
import Layout from '@/components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        // Root path needs to show UserList in the left sidebar
        {
          path: '/',
          component: Wizard
        }
      ]
    }
  ]
})
