<template>
  <div>
    <!-- use the modal component, pass in the prop -->
    <modal-comp v-if="modalVisible" v-bind:modalVisible="this.modalVisible" @close="hideModal()">
      <!--overwrite modal defaults-->
      <h4 slot="header">Terms and Conditions</h4>
      <div slot="body">
        <textarea readonly style="width: 100%; height: 200px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
        <input type="checkbox" value="" v-model="terms"> I've read and accepted to token
      </div>
      <div slot="footer">
        <div class="text-center">
          <button  @click="send()" :disabled="!valid">
            Send Invite
          </button>
        </div>
      </div>
    </modal-comp>
    <form>
      <h3>Please register your E-Mail and<br/>confirm the token sale terms.</h3>

      <div class="row">
        <div class="col-xs-12">
          <p class="bg-danger">{{errorMsg}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <input type="email" id="email"
                 required="required"
                 v-model="email"
                 v-on:keyup.enter="send"
                 placeholder="E-Mail"
                 autofocus>
        </div>
      </div>
      <div class="row top-buffer">
        <div class="col-md-offset-2 col-md-8 col-xs-12">
          <!--<button v-on:click="send" :disabled="!valid">Send Invite</button>-->
          <button :disabled="!validEmail" @click="showModal">Next</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import ModalComp from './Modal.vue'
  let registerEndpoint = 'register'

  export default {
    data: function () {
      return {
        modalVisible: false,
        email: '',
        terms: false,
        errorMsg: ''
      }
    },
    computed: {
      validEmail: function () {
        // eslint-disable-next-line
        const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return this.email && re.test(this.email)
      },
      valid: function () {
        return this.validEmail && this.terms
      }
    },
    methods: {
      showModal: function () {
        event.preventDefault() // prevents to add a question mark before the hashtag
        this.modalVisible = true
      },
      hideModal: function () {
        this.modalVisible = false
        this.terms = false
      },
      send: function () {
        this.errorMsg = ''
        if (this.valid) {
          axios.post(Vue.config.API + registerEndpoint, {
            email: this.email
          }).then(response => {
            this.$router.push({name: 'step2'})
          }).catch(err => {
            console.log(err)
            this.errorMsg = 'Oops. Something is wrong. Is it possible that this E-Mail is already used? Please feel free to contract us...'
          })
        } else {
          this.errorMsg = 'Please enter a valid E-Mail address or accept the Terms & Conditions'
        }
        this.terms = false
      }
    },
    components: {
      ModalComp
    }
  }
</script>

<style scoped>
  .top-buffer { margin-top:10px; }
</style>
