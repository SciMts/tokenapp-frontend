<template>
  <div id="formwizard">
    <h1>{{ msg }}</h1>

    <form-wizard @on-complete="onComplete"
                 :start-index="this.startingTabIndex"
                 :before-change="handleValidation">
      <tab-content title="Add Email">
        <sign-up></sign-up>
      </tab-content>
      <tab-content title="Add your wallet">
        <wallet></wallet>
      </tab-content>
      <tab-content title="Pay in">
        <pay-in></pay-in>
      </tab-content>
    </form-wizard>
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
