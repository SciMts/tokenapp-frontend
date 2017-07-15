<template>
  <div>
    <p>Please send the transaction to the follwing address:</p>
    <div class="row">
         <div class="col-md-6">Ethereum</div>
         <div class="col-md-6">Bitcoin</div>
    </div>
    <div class="row">
      <div class="col-md-6">{{this.ethereumAddress}}</div>
      <div class="col-md-6">{{this.bitcoinAddress}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'payin',
  data () {
    return {
      msg: 'Pay-in',
      ethereumAddress: '',
      bitcoinAddress: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
