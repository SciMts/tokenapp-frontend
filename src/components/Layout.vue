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

    <section>
      <div class="container">
        <img src="static/images/modum.png" class="centered" height="100px" />
        <h2>Modum Token Sale</h2>
        <p class="lead">Please follow the steps below to buy your modum tokens. <br/> Still have questions?  Visit our information <a target="_blank" href="https://www.modum.io/tokensale">page</a>.</p>
        <router-view></router-view>
      </div>
    </section>

    <!-- FOOTER BEGIN -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <img class="footer_logo" src="https://assets.modum.io/wp-content/uploads/2017/03/modum_logo_white-text-tight-crop.png" alt="logo" width="150">
          </div>
          <div class="col-xs-12 col-sm-6">
            modum.io AG<br>
            Technoparkstrasse 1<br>
            8005 Zürich, CH<br>
            info@modum.io<br>
            Phone: +41 44 586 1286
          </div>
          <div class="col-xs-12 col-sm-6 text-right">

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
    methods: {
      scollDown: function () {
        console.log('send')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
