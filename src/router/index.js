import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import FormWizard from '@/components/FormWizard'
import EmailSignup from '@/components/EmailSignup'
import CheckEmail from '@/components/CheckEmail'
import CreateWallet from '@/components/CreateWallet'
import Refund from '@/components/Refund'
import Invest from '@/components/Invest'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        // Root path needs to show UserList in the left sidebar
        {
          path: '/',
          component: FormWizard,
          meta: { scrollToTop: true },
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
              path: '/confirm/:token',
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
    },
    // and finally the default route, when none of the above matches:
    {
      path: '*',
      name: '404',
      component: {
        template: '<div><h2>Oops</h2><p>Page Not Found</p></div>'
      }
    }
  ]
})
