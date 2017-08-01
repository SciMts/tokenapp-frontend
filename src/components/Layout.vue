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
    <img id="logo" src="./../assets/modum.png">
    <section>
      <div class="container">
        <h2>Token Sale</h2>
        <p class="lead">Please follow the steps below to buy your modum tokens. <br/> Still have questions?  Visit our information <a target="_blank" href="https://www.modum.io/tokensale">page</a>.</p>
        <router-view></router-view>
        <section id="section">
          <status-comp></status-comp>
        </section>
      </div>
    </section>

    <!-- FOOTER BEGIN -->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 text-left">
            <img class="footer_logo" src="https://assets.modum.io/wp-content/uploads/2017/03/modum_logo_white-text-tight-crop.png" alt="logo" width="150">
          </div>
          <div class="col-xs-6 col-sm-6 text-left">
            modum.io AG<br>
            Technoparkstrasse 1<br>
            8005 Zürich, CH<br>
            info@modum.io
          </div>
          <div class="col-xs-6 col-sm-6 text-right">

            <a target="_blank" href="https://www.modum.io/terms">Terms & Conditions</a><br/>
            <a target="_blank" href="https://www.modum.io/tokensale">Token Sale Information</a><br/>
            <a target="_blank" href="https://www.modum.io">Website</a><br/>
          </div>
        </div>
      </div>
    </footer>
    <!-- FOOTER END -->
  </div>
</template>

<script>
  import StatusComp from './Status.vue'
  export default {
    name: 'layout',
    data () {
      return {
        msg: 'Sign Up token',
        formstate: {},
        model: {email: ''},
        email: 'invalid-email',
        sent: false
      }
    },
    components: {
      StatusComp
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #logo {
    height: 150px;
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
    background:#818181;
  }

  footer a {
    color:  rgb(68, 68, 68);
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
