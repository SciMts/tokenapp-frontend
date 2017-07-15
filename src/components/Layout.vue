<template>
  <div>
    <!-- PRELOADER -->
    <div id="preloader">
      <div class="clock">
        <div class="arrow_sec"></div>
        <div class="arrow_min"></div>
      </div>
    </div>
    <div id="wrap">
      <!-- HEADER BEGIN -->
      <header id="header">
        <div class="container"><a href="#" class="logo"> <img src="static/images/logo.png"
                                                              alt="Best start for your business"
                                                              height="40" width="45"/> </a> <a
          class="login_btn" href="#">Login</a>
          <ul class="soc_nav">
            <li><a href="#" class="icon-soc-googleplus"></a></li>
            <li><a href="#" class="icon-soc-facebook"></a></li>
            <li><a href="#" class="icon-soc-twitter"></a></li>
          </ul>
        </div>
      </header>
      <!-- HEADER END -->

      <!-- INTRO BEGIN -->
      <section id="intro">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-7 col-sm-6">
              <div class="slogan">
                <h2 class="wow fadeInRight" data-wow-delay="0.6s" data-wow-duration="0.5s">
                  Best start</h2>
                <h3 class="wow fadeInLeft" data-wow-delay="0.9s" data-wow-duration="0.5s">
                  for your business</h3>
                <p class="wow fadeInRight" data-wow-delay="1.2s">
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
              </div>
            </div>
            <div class="col-lg-4 col-lg-offset-2 col-md-5 col-sm-6">

              <vue-form :state="formstate" @submit.prevent="onSubmit">
                <div class="title wow flipInX" data-wow-duration="0.6s"> Register now </div>
                <div class="form-group">
                  <input type="email" class="form-control wow flipInX" data-wow-delay="1s"
                         data-wow-duration="0.2s" placeholder="Email Address">
                </div>
                <button type="submit" class="btn btn_start wow flipInX" data-wow-delay="1.6s"
                        data-wow-duration="0.2s" :disabled="this.formstate.$invalid">Start
                </button>
              </vue-form>


            </div>
          </div>
        </div>
        <div id="slides" data-stellar-ratio="0.4">
          <div class="slides-container"><img src="static/images/sudstdadt-edited-1024x576.jpg"
                                             alt=""> <img src="static/images/Company-Backdrop-1920-x-1080-1024x576.jpg" alt=""> <img
            src="static/images/factory-white-out-1024x576.jpg" alt=""></div>
        </div>
      </section>
      <!-- INTRO END -->

    </div>
    <section>
      <div class="container">
        <router-view></router-view>
      </div>
    </section>

    <!-- FOOTER BEGIN -->
    <footer id="footer">
      <div class="container"><a href="#" class="logo"> <img src="static/images/logo_dark.png"
                                                            alt="Best start for your business"
                                                            height="40" width="45"/> </a>
        <p>&copy; 2014 POINTER <br>
          Designed by Multifour.com</p>
      </div>
    </footer>
    <!-- FOOTER END -->

  </div>
</template>

<script>
  import VueForm from 'vue-form'

  var registerEndpoint = 'http://localhost:8081/api/register'

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
      onSubmit: function () {
        if (this.formstate.$invalid) {
          // alert user and exit early
          return
        }
        console.log('send')

        fetch(registerEndpoint, {method: 'post', body: this.model.email}).then(
          (response) => response.json().then((responseData) => {
            this.sent = true
          })
        ).catch(
          (error) => {
            console.error('Error sending mail. ', error)
          }
        )
      }
    },
    mixins: [VueForm]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
