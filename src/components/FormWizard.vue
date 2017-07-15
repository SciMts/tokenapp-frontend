<template>
  <div>
    <h1>{{ msg }}</h1>

    <form-wizard @on-complete="onComplete" :start-index="this.startingTabIndex">
      <tab-content title="Personal details">
        My first tab content
      </tab-content>
      <tab-content title="Additional Info">
        My second tab content
      </tab-content>
      <tab-content title="Last step">
        Yuhuuu! This seems pretty damn simple
      </tab-content>
    </form-wizard>

  </div>
</template>

<script>

  import {FormWizard, TabContent} from 'vue-form-wizard'

  export default {
    name: 'formwizard',
    data () {
      return {
        msg: 'FormWizard',
        startingTabIndex: 0
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
      TabContent
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
</style>
