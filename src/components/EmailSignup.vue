<template>
  <div>
    <!-- use the modal component, pass in the prop -->
    <modal-comp v-if="modalVisible" v-bind:modalVisible="this.modalVisible" @close="hideModal()">
      <!--overwrite modal defaults-->
      <h3 slot="header">Terms & Conditions</h3>
      <div slot="body">
        <textarea readonly style="width: 100%; height: 200px; resize: none; font-size: small;">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
        <input type="checkbox" value="" v-model="terms"> I have read and accepted the terms of the MOD token sale
      </div>
      <div slot="footer">
        <div class="text-center">
          <button  @click="send()" :disabled="!valid">
            Send Invite
          </button>
        </div>
      </div>
    </modal-comp>
    <div class="row">
      <div class="col-xs-12 text-center">
        <div style="margin: auto;">
          <h2>Please register your E-Mail and<br/>confirm the token sale terms.</h2>
        </div>
      </div>
    </div>
    <form>
      <div class="row">
        <div class="col-xs-12">
          <p class="bg-danger">{{errorMsg}}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-offset-2 col-md-8 col-xs-12">
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
  import store from '@/store'
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
        errorMsg: '',
        sharedState: store
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
      showModal: function (event) {
        event.preventDefault() // prevents to add a question mark before the hashtag
        this.modalVisible = true
      },
      hideModal: function () {
        this.modalVisible = false
        this.terms = false
      },
      async send () {
        this.errorMsg = ''
        if (this.valid) {
          this.sharedState.loading = true
          try {
            await axios.post(Vue.config.API + registerEndpoint, {
              email: this.email
            })
            this.$router.push({name: 'step2'})
          } catch (e) {
            this.errorMsg = 'Oops. Something is wrong. Is it possible that this E-Mail is already used? Please feel free to contact us...'
          }
          this.sharedState.loading = false
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
