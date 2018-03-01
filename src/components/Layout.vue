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

    <img class="logo-width" src="./../assets/eureka.png">
    <section>
      <div class="container">
        <strong>
          EUREKA Token Sale
        </strong>
        <p>Please follow the steps below to purchase your Eureka tokens. <br/>
          Still have questions?  Visit our information <a target="_blank" href="https://tokensale.sciencematters.io/">page</a>.
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
          <div class="col-xs-6 col-sm-6 text-left" style="margin-top: 20px">
            ScienceMatters AG<br/>
            Seilergraben 53 1<br/>
            8001 Zürich, CH<br/>
            <a href="mailto:info@eurekatoken.io?Subject=[Eureka ICO]" target="_top">info@eurekatoken.io</a>
          </div>
          <div class="col-xs-6 col-sm-6 text-right" style="margin-top: 20px">

            <a target="_blank" href="https://eurekatoken.io">Terms & Conditions</a><br/>
            <a target="_blank" href="https://eurekatoken.io">Token Sale Information</a><br/>
            <a target="_blank" href="https://eurekatoken.io">Website</a><br/>
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
    background: linear-gradient(90deg,#685de4,#4caef3);
    color: #ffffff;
  }

  footer a {
    color: #ffffff;
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
