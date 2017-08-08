<template>
  <div>
    <h2>Almost there!</h2>
    <p>Optionally specify your Bitcoin or Ethereum refund address</p>

    <div class="row">
      <div class="col-lg-12">
        <div class="alert refund-info">
          <h4>Why provide refund addresses?</h4>
          <p><b>A:</b> Oversubscriptions of the whole token sale are returned to the investors after the closing of the token sales.</p>
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
          <b-link block v-b-toggle.refundoption1 class="panel-heading">Specify your Ethereum Address as Refund Address</b-link>
          <b-collapse id="refundoption1" accordion="refundoptions">
            <b-card>
              <input type="text" v-model="eth"
                     size="42"
                     placeholder="0x32Be343B94f860124dC4fEe278FDCBD38C102D88"
                     pattern=".{42}" title="42 characters long address starting with 0x">
            </b-card>
          </b-collapse>
        </div>
        <div class="panel">
          <b-link block v-b-toggle.refundoption2 class="panel-heading">Specify your Bitcoin Address as Refund Address</b-link>
          <b-collapse id="refundoption2" accordion="refundoptions">
            <b-card>
              <input type="text" v-model="btc" size="42" placeholder="1P82rBjJMDFSay2RqKx1bydDRVh5QnGkkZ">
            </b-card>
          </b-collapse>
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
          this.errorMsg = 'Oops. Something is wrong. Is it possible that you used a invalid token? Please feel free to contact us...'
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
  input {
    width: 400px;
  }

  .refund-info {
    color: #fff;
    background-color: rgba(54, 189, 156, 0.8);
  }
</style>
