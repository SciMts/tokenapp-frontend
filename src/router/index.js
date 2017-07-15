import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import MultiStepForm from '@/components/MultiStepForm'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/form',
      name: 'multistepform',
      component: MultiStepForm
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ]
})
