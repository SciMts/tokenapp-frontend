<template>
  <div>
    <h3>Almost there!</h3>
    <p>Please specify your Bitcoin or Ethereum refund address</p>
    <div class="row">
      <div class="col-xs-12">
        <p class="bg-danger">{{errorMsg}}</p>
      </div>
    </div>
    <div v-if="!invalidToken">


      <div class="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
        <div class="panel"><a class="panel-heading collapsed" data-toggle="collapse"
                              data-parent="#accordion"
                              href="#ethRefund">Specify your Ethereum Address as Refund Address</a>
          <div id="ethRefund" class="panel-collapse collapse">
            <div class="panel-body">
              <input type="text" v-model="eth"
                     size="42"
                     placeholder="0x32Be343B94f860124dC4fEe278FDCBD38C102D88"
                     pattern=".{42}" title="42 characters long address starting with 0x">
            </div>
          </div>
        </div>
        <div class="panel"><a class="panel-heading collapsed" data-toggle="collapse"
                              href="#btcRefund">Specify your Bitcoin Address as Refund Address</a>
          <div id="btcRefund" class="panel-collapse collapse">
            <div class="panel-body">
              <input type="text" v-model="btc"
                     size="42"
                     placeholder="1P82rBjJMDFSay2RqKx1bydDRVh5QnGkkZ">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <button type="submit" v-on:click="sendRefund">Make Investment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'

  const addressEndpoint = 'address'
  export default {

    data: function () {
      return {
        btc: '',
        eth: '',
        invalidToken: false,
        errorMsg: ''
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
            refundBTC: this.btc,
            refundETH: this.eth
          },
          config
        ).then(response => {
          this.$root.store.ether = response.data.ether
          this.$root.store.btc = response.data.btc
          this.$router.push({name: 'step5'})
        }).catch(err => {
          console.error(err)
          this.errorMsg = 'Oops. Something is wrong. Is it possible that you used a invalid token? Please feel free to contract us...'
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
