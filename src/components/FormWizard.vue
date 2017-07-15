<template>
  <div id="formwizard">
    <h1>{{ msg }}</h1>

    <h3>Signup</h3>

    <sign-up></sign-up>
<hr>
    <h3>Generate Wallet</h3>
    <wallet></wallet>

    <hr>
    <h3>Invest</h3>
    <pay-in></pay-in>
  </div>
</template>

<script>

  import {FormWizard, TabContent} from 'vue-form-wizard'
  import SignUp from './SignUp.vue'
  import PayIn from './PayIn.vue'
  import Wallet from './Wallet.vue'
  export default {
    name: 'formwizard',
    data () {
      return {
        msg: 'FormWizard',
        startingTabIndex: 1
      }
    },
    methods: {
      onComplete: function () {
        alert('Yay. Done!')
      },
      setLoading: function (value) {
        this.loadingWizard = value
      },
      handleValidation: function (isValid, tabIndex) {
        console.log('Tab: ' + tabIndex + ' valid: ' + isValid)
      },
      validateAsync: function () {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true)
          }, 1000)
        })
      }
    },
    components: {
      FormWizard,
      TabContent,
      SignUp,
      PayIn,
      Wallet
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
