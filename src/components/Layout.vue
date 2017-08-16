<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div class="container">
      <section>
        <img class="logo-width" src="./../assets/modum.png">
        <stepper class="spaced" :steps="steps" :active="$route.name"/>
        <p class="lead">Please follow the steps to purchase modum tokens. <br/>
          Still have questions?  Visit our information <a target="_blank" href="https://www.modum.io/tokensale">page</a>.
        </p>
      </section>

      <section>
        <router-view></router-view>
      </section>

      <section>
        <status-comp></status-comp>
      </section>
    </div>

    <spinner v-if="sharedState.loading"/>

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 text-left">
            <img class="footer_logo" src="./../assets/modum_logo_white-text-tight-crop.png" alt="logo" width="150">
          </div>
          <div class="col-xs-6 col-sm-6 text-left">
            modum.io AG<br/>
            Technoparkstrasse 1<br/>
            8005 Zürich, CH<br/>
            <a href="mailto:token@modum.io?Subject=[modum.io ICO]" target="_top">token@modum.io</a>
          </div>
          <div class="col-xs-6 col-sm-6 text-right">

            <a target="_blank" href="https://modum.io/terms">Terms & Conditions</a><br/>
            <a target="_blank" href="https://modum.io/tokensale">Token Sale Information</a><br/>
            <a target="_blank" href="https://modum.io">Website</a><br/>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import store from '@/store'
  import Stepper from './Stepper.vue'
  import Spinner from './Spinner.vue'
  import StatusComp from './Status.vue'

  export default {
    name: 'layout',
    data () {
      return {
        msg: 'Sign Up token',
        formstate: {},
        model: {email: ''},
        email: 'invalid-email',
        sent: false,
        sharedState: store,
        steps: [
          {name: 'step1', img: 'icons/register.svg', activeImg: 'icons/register_active.svg'},
          {name: 'step2', img: 'icons/confirm.svg', activeImg: 'icons/confirm_active.svg'},
          {name: 'step3', img: 'icons/wallet.svg', activeImg: 'icons/confirm_active.svg'},
          {name: 'step4', img: 'icons/refund.svg', activeImg: 'icons/confirm_active.svg'},
          {name: 'step5', img: 'icons/invest.svg', activeImg: 'icons/confirm_active.svg'}
        ]
      }
    },
    components: {
      StatusComp,
      Spinner,
      Stepper
    }
  }
</script>

<style scoped>
  .spaced {
    margin: 25px 0 25px 0;
  }

  section {
    margin-bottom: 40px;
  }

  footer {
    padding-top: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    background: #818181;
  }

  footer a {
    color: rgb(68, 68, 68);
  }

  @media only screen and (max-width: 500px) {
    #logo {
      width: 80%;
      height: auto;
    }

    footer {
      font-size: small;
    }
  }
</style>
