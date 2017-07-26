<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <p class="bg-danger">{{errorMsg}}</p>
      </div>
    </div>
    <div v-if="!this.errorMsg">
      <h3>Almost done!</h3>
      <p>
        You can send your Ether and Bitcoin from any source including Exchanges wallets. You can also send as often as you want.</p>
      <p>
        Don’t forget to bookmark the addresses to doublecheck the transaction status on  <a
        target="_blank" href="https://blockchain.info/">blockchain.info</a> or <a target="_blank"
                                                                                  href="https://etherscan.io/">etherscan.io</a>
      </p>

      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-6, col-md-6">
          <h3>Bitcoin</h3>
          <p v-model="btc">
            <a target="_blank" :href="'https://blockchain.info/address/' + btc">{{ btc }}</a>
          </p>
          <img :src="'https://blockchain.info/qr?data=' + btc + '&size=200'"/>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-6, col-md-6">
          <h3>Ether</h3>
          <p>
            <a target="_blank" :href="'https://etherscan.io/address/' + ether">{{ ether }}</a>
          </p>
          <img
            :src="'https://chart.googleapis.com/chart?cht=qr&chl=' + ether + '&chs=200x200&choe=UTF-8&chld=L|2'"/>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <p class="bg-success">
            Thank you very much for your contribution. You will receive an email, once the token is ready for distribution. In the meantime stay tuned to our progress on our <a
            target="_blank" href="https://medium.com/@modum_io">blog.</a></p>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
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
    }
  }
</script>
