<template>
  <div>
    <div class="row top-buffer">
      <div class="col-xs-12">
        <p class="bg-danger">{{errorMsg}}</p>
      </div>
    </div>
    <div v-if="!this.errorMsg">
      <h2>Almost done!</h2>

      <p>You can Send your Ether and Bitcoin from any source, including Exchange Wallets to either of the following addresses. You can send funds as often as you like.</p>
      <p>
        Do not forget to bookmark the addresses to double check the transaction status on
        <a target="_blank" href="https://blockchain.info/">blockchain.info</a>
        or
        <a target="_blank" href="https://etherscan.io/">etherscan.io</a>.
      </p>

      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-6, col-md-6">
          <h4>Bitcoin</h4>
          <p v-model="btc">
            <a target="_blank" :href="'https://blockchain.info/address/' + btc">{{ btc }}</a>
          </p>
          <qrcode :value=btc :size="200"></qrcode>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-6, col-md-6">
          <h4>Ether</h4>
          <p>
            <a target="_blank" :href="'https://etherscan.io/address/' + ether">{{ ether }}</a>
          </p>
          <qrcode :value=ether :size="200"></qrcode>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <p id="thanks" class="bg-success">
            Thank you very much for your contribution. You will receive an e-mail, once the token is ready for distribution. In the meantime, stay tuned to our progress on our <a
            target="_blank" href="https://medium.com/@modum_io" style="color: rgb(68, 68, 68);">blog.</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Qrcode from 'v-qrcode'
  export default {
    data: function () {
      return {
        btc: '167ApWWxUSFQmz2jdz9xop3oAKdLejvMML',
        ether: '0x32be343b94f860124dc4fee278fdcbd38c102d88',
        errorMsg: ''
      }
    },
    mounted: function () {
      if (!this.$root.store.btc && !this.$root.store.ether) {
        this.errorMsg = 'Oops. Something is wrong.'
      }
      this.btc = this.$root.store.btc
      this.ether = this.$root.store.ether
    },
    components: {
      Qrcode
    }
  }
</script>

<style scoped>
  #thanks {
    background-color: #25a8e1;
  }
</style>
