<template>
  <div>
    <h3>Almost there!</h3>
    <p>Please specify your Bitcoin or Refund</p>

    <div class="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
      <div class="panel"><a class="panel-heading collapsed" data-toggle="collapse"
                            data-parent="#accordion"
                            href="#ethRefund">Specify your Ethereum Address as Refund Address</a>
        <div id="ethRefund" class="panel-collapse collapse">
          <div class="panel-body">
            <input type="text" v-model="eth"
                   size="42"
                   placeholder="0x32Be343B94f860124dC4fEe278FDCBD38C102D88"
                   pattern=".{42}" equired title="42 characters long address starting with 0x">
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
</template>

<script>
  import axios from 'axios'

  var addressEndpoint = 'http://localhost:8081/address'
  export default {

    data: function () {
      return {
        btc: '',
        eth: '',
        errorMsg: ''
      }
    },

    mounted: function () {
      console.log(this.$root.sourceOfTruth.token)
    },
    methods: {
      sendRefund(){
        console.log('send requ est')

        var config = {
          headers: {'Authorization': 'Bearer ' + this.$root.sourceOfTruth.token}
        }

        axios.post(addressEndpoint, {
          address: this.$root.sourceOfTruth.address,
          refundBTC: this.btc,
          refundETH: this.eth
        },
        config).then(response => {
          this.$router.push({name: 'step5'})
        }).catch(err => {
          console.log(err)
          this.errorMsg = 'Ops. Something is wrong. Is it possible that this E-Mail is already used? Please feel free to contract us...'
        })
      }
    }
  }
</script>
