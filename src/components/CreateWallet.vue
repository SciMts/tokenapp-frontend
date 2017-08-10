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
        <h2>Select how you would like to receive your modum tokens.</h2>
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
            <p>Enter a password for your new wallet. Your password will be required to unlock the wallet file that is generated for you.</p>
            <p><b>If you loose your password or your wallet file, your tokens will be lost, we can not retrieve them.</b></p>
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
            <p>If you have a UTC JSON (myetherwallet) wallet file you can import it here.</p>
            <p><b>If you continue using this file, make sure you are in possession of the respective password</b></p>
            <fieldset :disabled="waiting">
              <input type="file" @change="fileImport($event.target.files[0])" accept=".json"
                     style="text-align: center;  margin: auto;">
            </fieldset>
            <div class="bg-danger" v-if="fileErr">
              <p>Your file did not contain a valid address</p>
            </div>
          </b-card>
        </b-collapse>
        </div>
        <div class="panel">
          <b-link block class="panel-heading" v-b-toggle.walletoption3>Option 3: Enter Address Manually (advanced)</b-link>

        <b-collapse id="walletoption3" accordion="walletoptions">
          <b-card>
            <p>Enter your valid Ethereum (ERC20 compatible) address.</p>
            <p><b>Make sure you have the private key for this address. If you are not in possession of the private key, your tokens will be lost, we can not retrieve them.</b></p>
            <fieldset :disabled="waiting">
              <input type="text" v-model="insertedAddress"
                     size="42"
                     placeholder="Your ERC20 compatible address"
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
          <p>Please download your wallet file here.</p>
          <p><b>Back up your wallet file and store your password securely. Your password can not be retrieved if lost or forgotten.</b></p>
          <p><b>modum.io is not responsible for lost or forgotten passwords or lost wallet files.</b></p>
          <button v-on:click="download" id="downloadBtn">DOWNLOAD WALLET FILE </button>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="address !== null">
          <h3>Your Address</h3>
          <p>After the sale is finished, tokens will be distributed to this address. Please see our <a href="https://modum.io/tokensale" target="_blank">tokensale page</a> for the exact timeline.</p>
          <p>
            <a target="_blank" :href="'https://etherscan.io/address/' + address">{{ address }}</a>
          </p>

          <div class="row">
            <button v-on:click="invest" :disabled="!address || (v3stringwallet && !disclaimer)">
              Next: Refund Address
            </button>
          </div>

        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  var WalletWorker = require('worker-loader!@/lib/walletWorker.js')
  import {isAddress} from '@/lib/validate'
  import store from '@/store'
  import Vue from 'vue'
  import axios from 'axios'
  import FileSaver from 'file-saver'
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
        fileErr: false,
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
      validAddress () {
        return isAddress(this.insertedAddress)
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
          } else {
            let {ether, btc} = response.data

            if (ether != null && btc != null) {
              this.$root.store.ether = ether
              this.$root.store.btc = btc
              this.$router.push({name: 'step5'})
            }
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
          try {
            let {address} = JSON.parse(event.target.result)
            if (isAddress(address)) {
              this.address = '0x' + address
              this.fileErr = false
            } else {
              this.fileErr = true
            }
          } catch (e) {

          }
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
