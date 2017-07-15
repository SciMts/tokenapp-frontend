<template>
  <div>
    <h1>{{ msg }}</h1>

    <form-wizard @on-complete="onComplete" :start-index="this.startingTabIndex">
      <tab-content title="Add Email">
        <sign-up></sign-up>
      </tab-content>
      <tab-content title="Add your wallet">
        My second tab content
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
      PayIn
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
