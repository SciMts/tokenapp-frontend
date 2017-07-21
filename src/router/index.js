import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/components/Layout'
import Wizard from '@/components/FormWizard'
import EmailSignup from '@/components/EmailSignup'
import CheckEmail from '@/components/CheckEmail'
import CreateWallet from '@/components/CreateWallet'
import Invest from '@/components/Invest'
import Refund from '@/components/Refund'

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
          component: Wizard,
          children: [
            {
              path: '/',
              name: 'step1',
              component: EmailSignup
            },
            {
              path: '/confirm',
              name: 'step2',
              component: CheckEmail
            },
            {
              path: '/wallet/:token',
              name: 'step3',
              component: CreateWallet,
              props: true
            },
            {
              path: '/refund',
              name: 'step4',
              component: Refund
            },
            {
              path: '/invest',
              name: 'step5',
              component: Invest
            }
          ]
        }

      ]
    }
  ]
})
