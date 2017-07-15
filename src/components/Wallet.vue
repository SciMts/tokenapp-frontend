<template>
  <div>
    <p>To rececive your tokens generate a Ethereum address in your browser:</p>

    <div v-if="jsonwallet">
      <h3>{{ address }}</h3>
      <button v-on:click="downloadWallet">Download Wallet</button>
    </div>
    <div v-else>
      <form>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </form>
      <button v-on:click="generateWallet">Generate</button>
    </div>

  </div>
</template>

<script>
import FileSaver from 'file-saver'
import Wallet from '../lib/wallet'

export default {
  name: 'wallet',
  data () {
    return {
      password: '',
      jsonwallet: '',
      address: ''
    }
  },
  methods: {
    generateWallet: function () {
      let wallet = Wallet.generate();
      this.jsonwallet = wallet.toV3String(this.password, {kdf: 'pbkdf2'})
      this.address = wallet.getAddressString()
    },
    downloadWallet: function () {
      let blob = new Blob([this.jsonwallet], {type: 'application/json;charset=utf-8'})
      FileSaver.saveAs(blob, 'modum-ico-wallet.json')
    }
  }
}
</script>

<style scoped>
</style>
