<template>
  <div>
    <h2>Almost there!</h2>
    <p>Optionally specify your Bitcoin or Ethereum refund address.</p>
    <div class="row">
      <div class="col-lg-12">
        <div class="alert refund-info">
          <h4>Why provide refund addresses?</h4>
          <p><b>A:</b> If you provide a refund address, oversubscriptions of the token sale can be returned to you after the closing of the token sale. If you do not provide a refund address we will not be able to return any oversubscriptions of the token sale. In such a case, we will donate oversubscriptions without refund address to a charity at modum's sole discretion.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <p class="bg-danger">{{errorMsg}}</p>
      </div>
    </div>
    <div v-if="!invalidToken">

      <div class="panel-group">
        <div class="panel">
          <b-link block v-b-toggle.refundoption1 class="panel-heading">Specify your Ethereum address as refund address</b-link>
          <b-collapse id="refundoption1" accordion="refundoptions">
            <b-card>
              <p>If you provide an Ethereum refund address, only investments in ETH will be refunded to this address.</p>
              <input type="text" v-model="eth"
                     size="42"
                     placeholder="Your Ethereum address"
                     pattern=".{42}" title="42 characters long address starting with 0x">
            </b-card>
          </b-collapse>
        </div>
        <div class="panel">
          <b-link block v-b-toggle.refundoption2 class="panel-heading">Specify your Bitcoin address as refund address</b-link>
          <b-collapse id="refundoption2" accordion="refundoptions">
            <b-card>
              <p>If you provide a Bitcoin refund address, only investments in BTC will be refunded to this address.</p>
              <input type="text" v-model="btc" size="42" placeholder="Your Bitcoin address">
            </b-card>
          </b-collapse>
        </div>
      </div>


      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <p class="bg-danger" v-if="!validETH">The Ethereum refund address which you provided is not valid</p>
          <p class="bg-danger" v-if="!validBTC">The Bitcoin refund address which you provided is not valid</p>
          <fieldset>
            <input type="checkbox" value="" v-model="agree">
            <span>I understand that a refund is impossible without setting refund addresses</span>
          </fieldset>
          <button type="submit" v-on:click="sendRefund" :disabled="!agree || !validBTC || !validETH">Next: Make Investment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import {isETHAddress, isBTCAddress} from '@/lib/validate'

  const addressEndpoint = 'address'
  export default {

    data: function () {
      return {
        btc: '',
        eth: '',
        invalidToken: false,
        errorMsg: '',
        agree: false
      }
    },
    computed: {
      validBTC () {
        return isBTCAddress(this.btc) || this.btc === ''
      },
      validETH () {
        return isETHAddress(this.eth) || this.eth === ''
      }
    },
    methods: {
      sendRefund () {
        this.errorMsg = ''
        const config = {
          headers: {'Authorization': 'Bearer ' + this.$root.store.token}
        }
        axios.post(Vue.config.API + addressEndpoint,
          {
            address: this.$root.store.address,
            refundBTC: this.btc.length > 0 ? this.btc : null,
            refundETH: this.eth.length > 0 ? this.eth : null
          },
          config
        ).then(response => {
          this.$root.store.ether = response.data.ether
          this.$root.store.btc = response.data.btc
          this.$router.push({name: 'step5'})
        }).catch(err => {
          let {status} = err.response
          if (status === 409) {
            this.errorMsg = 'You have already defined your token address. Please check your email for an overview of your provided data.'
          } else if (status === 401) {
            this.errorMsg = 'Oops. Something is wrong. Is it possible that you used a invalid token? Please feel free to contact us.'
          } else {
            this.errorMsg = 'Oops. Something is wrong. Is it possible that you provided an invalid refund address? Please feel free to contact us.'
          }
          return err
        })
      }
    },
    mounted: function () {
      if (!this.$root.store.token) {
        this.invalidToken = true
        this.errorMsg = 'Invalid token found. Please open the link from you E-Mail and follow the instructions.'
      }
    }
  }
</script>

<style scoped>
  .refund-info {
    color: #fff;
    background-color: rgba(54, 189, 156, 0.8);
  }
</style>
