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
        <input type="password" id="password" v-model="password"/>
      </form>
      <button v-on:click="generateWallet">Generate</button>
    </div>

  </div>
</template>

<script>
  import FileSaver from 'file-saver'
  import Wallet from '../lib/wallet'

  var addressEndpoint = 'http://localhost:8081/address'

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
      },
      sendAddress: function () {
        var headers = new Headers()

        headers.append('Content-Type', 'application/json')
        var body = {email: this.model.email}
        fetch(addressEndpoint,
          {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
          }).then(
          (response) => {
            this.sent = true
          }
        ).catch(
          (error) => {
            console.error('Error sending mail. ', error)
          }
        )
      }
    }
  }
</script>

<style scoped>
</style>
