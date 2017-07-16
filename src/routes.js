import EmailSignup from './EmailSignup.vue'
import CheckEmail from './CheckEmail.vue'
import CreateWallet from './CreateWallet.vue'
import Invest from './Invest.vue'

export default [
  { path: '/',               name: 'step1', component: EmailSignup },
  { path: '/confirm',        name: 'step2', component: CheckEmail },
  { path: '/wallet/:token',  name: 'step3', component: CreateWallet, props: true },
  { path: '/invest',         name: 'step4', component: Invest }
]
