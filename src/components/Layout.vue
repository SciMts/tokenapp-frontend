<template xmlns="http://www.w3.org/1999/html">
  <div>
    <!-- PRELOADER -->
    <div id="preloader">
      <div class="clock">
        <div class="arrow_sec"></div>
        <div class="arrow_min"></div>
      </div>
    </div>
    <div id="wrap">
    </div>

    <img class="logo-width" src="./../assets/scimts_logo.png">

    <h1>Token Sale</h1>
    <section>
      <div class="container">
        <p class="lead">Please follow the steps below to purchase your modum tokens. <br/>
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
            <img class="footer_logo" src="./../assets/scimts_logo.png" alt="logo" width="144">
          </div>
          <div class="col-xs-6 col-sm-6 text-left">§
            ScienceMatters AG<br/>
            Seilergraben 53 1<br/>
            8003 Zürich, CH<br/>
            <a href="mailto:info@sciencematters.io?Subject=[Eureka ICO]" target="_top">info@sciencematters.io</a>
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
