<template>
  <div>
    <div v-if="invalidToken">
      <div class="row">
        <div class="col-xs-12">
          <p class="bg-danger">Oh no. Invalid token...</p>
        </div>
      </div>
    </div>
    <div v-if="invalidToken==false">
      <div v-if="address === null">
        <h3>Define the token destination address</h3>
        <p>
          We offer you 3 different options to define where you want to receive the modum tokens. </p>
        <div class="row">
          <div class="col-xs-12">
            <p class="bg-danger">{{errorMsg}}</p>
          </div>
        </div>
        <div class="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
          <div class="panel"><a class="panel-heading" data-toggle="collapse"
                                data-parent="#accordion"
                                href="#question1">Option 1: Create New Wallet</a>
            <div id="question1" class="panel-collapse collapse in">
              <div class="panel-body">
                <p>Enter a password with which to protect your new wallet. <strong>Do not forget this password.</strong>
                  The password is required to unlock the newly generated wallet file.</p>
                <p><b>If you loose your password and key store, your money is lost as we cannot retrieve them.</b>
                </p>
                <form>
                  <fieldset :disabled="waiting">
                    <fieldset>
                      <input id="password"
                             type="password"
                             v-model="password"
                             v-on:keyup.enter="createWallet"
                             placeholder="PASSWORD"
                             autofocus>
                      <button v-on:click="createWallet" :disabled="!validPassword">Create Wallet
                      </button>
                    </fieldset>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div class="panel"><a class="panel-heading collapsed" data-toggle="collapse"
                                data-parent="#accordion" href="#question2">Option 2: Import Existing Wallet</a>
            <div id="question2" class="panel-collapse collapse ">
              <div class="panel-body">
                <p>Required format: UTC JSON (myetherwallet)</p>
                <form>
                  <fieldset :disabled="waiting">
                    <input type="file" @change="fileImport($event.target.files[0])" accept=".json"
                           style="text-align: center;  margin: auto;">
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div class="panel"><a class="panel-heading collapsed" data-toggle="collapse"
                                href="#question3">Option 3: Enter Address Manually (advanced)</a>
            <div id="question3" class="panel-collapse collapse">
              <div class="panel-body">
                <form>
                  <fieldset :disabled="waiting">
                    <input type="text" v-model="insertedAddress"
                           size="42"
                           placeholder="0x32Be343B94f860124dC4fEe278FDCBD38C102D88"
                           pattern=".{42}"
                           title="42 characters long address starting with 0x"
                           v-on:keyup.enter="manual">
                    <button v-on:click="manual" :disabled="!validAddress">Use Address</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <div v-if="v3stringwallet !== null">
          <h2>Download Wallet</h2>
          <p>Please back-up your wallet file and remember the password to unlock it.</p>

          <button v-on:click="download" style="background-color: red">!! DOWNLOAD WALLET FILE !!
          </button>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="address !== null">
          <h2>Your Address</h2>
          <p>Tokens will be sent to this address.</p>
          <p>
            <a target="_blank" :href="'https://etherscan.io/address/' + address">{{ address }}</a>
          </p>
          <img
            :src="'https://chart.googleapis.com/chart?cht=qr&chl=' + address + '&chs=200x200&choe=UTF-8&chld=L|2'"/>

          <fieldset>
            <button v-on:click="invest" :disabled="!address || (v3stringwallet && !disclaimer)">
              Set up Refund Address
            </button>
          </fieldset>

        </div>
      </transition>
    </div>


  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import FileSaver from 'file-saver'
  import Wallet from '../lib/wallet'

  let validTokenEndpoint = 'register/:token/validate'
  export default {
    data: function () {
      return {
        disclaimer: false,
        waiting: false,
        password: '',
        v3stringwallet: null,
        insertedAddress: '',
        address: null,
        invalidToken: false,
        errorMsg: ''
      }
    },
    props: {
      token: {
        type: String,
        required: true
      }
    },
    computed: {
      validPassword: function () {
        return this.password.length > 0
      },
      validAddress: function () {
        return (this.insertedAddress.startsWith('0x') || this.insertedAddress.startsWith(('0X'))) && this.insertedAddress.length === 42
      }
    },
    mounted: function () {
      this.isTokenValid()
      this.$root.store.token = this.token
    },
    methods: {
      isTokenValid: function () {
        axios.get(Vue.config.API + validTokenEndpoint.replace(':token', this.token))
        .then(response => {
          if (response.status !== 200) {
            this.errorMsg = 'Oops. Something is wrong. Is it possible that you used a invalid token?'
            this.invalidToken = true
          }
        }).catch(err => {
          console.error(err)
          this.invalidToken = true
          this.errorMsg = 'Oops. Something is wrong. Is it possible that you used a invalid token?'
        })
      },
      startWaiting: function () {
        this.waiting = true
      },
      stopWaiting: function () {
        this.waiting = false
      },
      createWallet: function () {
        this.startWaiting()
        this.generateWallet()
        this.stopWaiting()
      },
      generateWallet: function () {
        if (this.validPassword) {
          let wallet = Wallet.generate()
          this.v3stringwallet = wallet.toV3String(this.password, {kdf: 'pbkdf2'})
          this.address = wallet.getAddressString()
        }
      },
      fileImport: function (file) {
        let reader = new FileReader()
        reader.onload = event => {
          this.address = '0x' + JSON.parse(event.target.result).address
        }
        reader.readAsText(file)
      },
      download: function () {
        this.disclaimer = true
        let blob = new Blob([this.v3stringwallet], {type: 'application/json;charset=utf-8'})
        FileSaver.saveAs(blob, 'modum-ico.json')
      },
      manual: function () {
        this.address = this.insertedAddress
      },
      invest: function () {
        this.$root.store.address = this.address
        this.$router.push({name: 'step4'})
      }
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0
  }


</style>

