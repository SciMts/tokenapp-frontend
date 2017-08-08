<template>
  <div>
    <div v-if="invalidToken">
      <div class="row top-buffer">
        <div class="col-xs-12">
          <p class="bg-danger">Oh no. Invalid token...</p>
        </div>
      </div>
    </div>
    <div v-if="invalidToken==false">
      <div v-if="address === null">
        <h2>Select how you would like to receive your MOD tokens.</h2>
        <p>
          We offer you 3 different options to define where you want to receive the modum tokens. </p>
        <div class="row">
          <div class="col-xs-12">
            <p class="bg-danger">{{errorMsg}}</p>
          </div>
        </div>

      <div class="panel-group">
        <div class="panel">
          <b-link block v-b-toggle.walletoption1 class="panel-heading">Option 1: Create New Wallet</b-link>


        <b-collapse id="walletoption1" visible accordion="walletoptions">
          <b-card>
            <p>Enter a password for your new wallet. <strong>Do not forget it.</strong> Your password will be required to unlock the new wallet file that is generated for you.</p>

            <p><b>If you loose your password and key store, your money wil be lost, we can not retrieve it.</b>
            </p>
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
          </b-card>
        </b-collapse>
        </div>
        <div class="panel">
          <b-link block class="panel-heading" v-b-toggle.walletoption2>Option 2: Import Existing Wallet</b-link>

        <b-collapse id="walletoption2" accordion="walletoptions">
          <b-card>
            <p>Required format: UTC JSON (myetherwallet)</p>
            <fieldset :disabled="waiting">
              <input type="file" @change="fileImport($event.target.files[0])" accept=".json"
                     style="text-align: center;  margin: auto;">
            </fieldset>
          </b-card>
        </b-collapse>
        </div>
        <div class="panel">
          <b-link block class="panel-heading" v-b-toggle.walletoption3>Option 3: Enter Address Manually (advanced)</b-link>

        <b-collapse id="walletoption3" accordion="walletoptions">
          <b-card>
            <fieldset :disabled="waiting">
              <input type="text" v-model="insertedAddress"
                     size="42"
                     placeholder="0x32Be343B94f860124dC4fEe278FDCBD38C102D88"
                     pattern=".{42}"
                     title="42 characters long address starting with 0x"
                     v-on:keyup.enter="manual">
              <button v-on:click="manual" :disabled="!validAddress">Use Address</button>
            </fieldset>
          </b-card>
        </b-collapse>
        </div>
      </div>
      </div>

      <transition name="fade">
        <div v-if="v3stringwallet !== null">
          <h2>Download Wallet</h2>
          <p>Pease download your wallet file here. Remember to back up your wallet file and store your password securely, your password is not retrievable if lost.</p>
          <button v-on:click="download" id="downloadBtn">DOWNLOAD WALLET FILE </button>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="address !== null">
          <h3>Your Address</h3>
          <p>Tokens will be sent to this address.</p>
          <p>
            <a target="_blank" :href="'https://etherscan.io/address/' + address">{{ address }}</a>
          </p>
          <div class="row">
            <div class="col-xs-12">
              <qrcode :value=address :size="200"></qrcode>
            </div>
          </div>

          <div class="row top-buffer">
          <div class="col-xs-12">
            <p>Next Step:</p>
          </div>
          </div>
          <div class="row">
            <button v-on:click="invest" :disabled="!address || (v3stringwallet && !disclaimer)">
              Set up Refund Address
            </button>
          </div>

        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  var WalletWorker = require('worker-loader!@/lib/walletWorker.js')
  import store from '@/store'
  import Vue from 'vue'
  import axios from 'axios'
  import FileSaver from 'file-saver'
  // import Wallet from '../lib/wallet'
  import Qrcode from 'v-qrcode'

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
        errorMsg: '',
        sharedState: store
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
          this.invalidToken = true
          this.errorMsg = 'Oops. Something is wrong. Is it possible that you used a invalid token?'
          return err
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
          this.sharedState.loading = true
          let worker = new WalletWorker()
          worker.onmessage = ({data}) => {
            this.v3stringwallet = data.v3stringwallet
            this.address = data.address
            this.sharedState.loading = false
          }
          worker.postMessage({
            password: this.password
          })
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
    },
    components: {
      Qrcode
    }
  }
</script>

<style scoped>
  input{
    width: 400px;
  }
  #downloadBtn {
    background-color: #31BA99;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0
  }
</style>
