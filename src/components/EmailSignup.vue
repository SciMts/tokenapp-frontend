<template>
  <div>
    <form>
      <h3>Please register your E-Mail and<br/>confirm the token sale terms.</h3>

      <div class="row">
        <div class="col-xs-12">
          <p class="bg-danger">{{this.errorMsg}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <input id="email"
                 required="required"
                 v-model="email"
                 v-on:keyup.enter="send"
                 placeholder="E-Mail"
                 autofocus>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="checkbox-inline">
            <label class="checkbox-inline">
              <input type="checkbox" value="" v-model="terms">I've read and accepted to token <a
              target="_blank" href="https://www.modum.io/terms">sales terms</a></label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <button type="submit" v-on:click="send" :disabled="!valid">Send Invite</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  //  var registerEndpoint = 'http://localhost:8081/register'
  var registerEndpoint = 'api/register'
  export default {
    data: function () {
      return {
        email: '',
        terms: false,
        errorMsg: ''
      }
    },
    computed: {
      valid: function () {
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return this.email && re.test(this.email) && this.terms
      }
    },
    methods: {
      send: function () {
        this.errorMsg = ''
        if (this.valid) {
          axios.post(registerEndpoint, {
            email: this.email
          }).then(response => {
            this.$router.push({name: 'step2'})
          }).catch(err => {
            console.log(err)
            this.errorMsg = 'Oops. Something is wrong. Is it possible that this E-Mail is already used? Please feel free to contract us...'
          })
        }
      }
    }
  }
</script>

