<template xmlns="http://www.w3.org/1999/html">
  <div>
    <img class="logo-width" src="./../assets/modum.png">
    <h1 class="align-with-image">Token Sale</h1>
    <section>
      <div class="container">
        <p class="lead">Please follow the steps below to purchase modum tokens. <br/>
          Still have questions?  Visit our information <a target="_blank" href="https://www.modum.io/tokensale">page</a>.
        </p>
        <router-view></router-view>
      </div>
    </section>
    <section id="section">
      <div class="container">
        <status-comp></status-comp>
      </div>
    </section>

    <spinner v-if="sharedState.loading"/>

    <!-- FOOTER BEGIN -->
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
    <!-- FOOTER END -->
  </div>
</template>

<script>
  import store from '@/store'
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
        sharedState: store
      }
    },
    components: {
      StatusComp,
      Spinner
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .align-with-image {
    padding-left: 30px;
  }

  section {
    padding: 20px 0;
    position: relative;
    background: #fff;
  }

  footer {
    padding-top: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    /* Set the fixed height of the footer here */
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
