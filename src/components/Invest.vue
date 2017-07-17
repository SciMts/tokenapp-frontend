<template xmlns:v-clipboard="http://www.w3.org/1999/xhtml">
  <div>
    <h2>Send Ether and BTC</h2>
    <p>Send your investment to the following addresses.</p>
    <h3>Bitcoin: </h3>
    <p v-model="btc">
      <a target="_blank" :href="'https://blockchain.info/address/' + btc">{{ btc }}</a>
    </p>


    <img :src="'https://blockchain.info/qr?data=' + btc + '&size=200'" />

    <h3>Ether</h3>
    <p>
      <a target="_blank" :href="'https://etherscan.io/address/' + eth">{{ eth }}</a>
    </p>
    <img :src="'https://chart.googleapis.com/chart?cht=qr&chl=' + eth + '&chs=200x200&choe=UTF-8&chld=L|2'" />

  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        btc: '167ApWWxUSFQmz2jdz9xop3oAKdLejvMML',
        eth: '0x32be343b94f860124dc4fee278fdcbd38c102d88'
      }
    }
  }
</script>
