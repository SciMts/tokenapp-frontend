<template>
  <div>
    <div v-if="address === null">
      <h2>Token Destination Address</h2>
      <p>Import an existing Ethereum Wallet or create a new one in the browser.</p>

      <h3>Option 1: Create New Wallet</h3>
      <p>Enter a password with which to protect your new wallet. <strong>Do not forget this password.</strong>
        The password is required to unlock the newly generated wallet file.</p>
      <form>
        <fieldset :disabled="waiting">
          <fieldset>
            <label for="password">Password</label>
            <input id="password"
                   type="password"
                   v-model="password"
                   v-on:keyup.enter="create"
                   autofocus>
            <button v-on:click="create" :disabled="!validPassword">Create Wallet</button>
          </fieldset>
        </fieldset>
      </form>

      <h3>Option 2: Import Existing Wallet</h3>
      <p>Required format: UTC JSON (myetherwallet)</p>
      <form>
        <fieldset :disabled="waiting">
          <input type="file"  @change="fileImport($event.target.files[0])">
        </fieldset>
      </form>

      <h3>Option 3: Enter Address Manually (advanced)</h3>
      <form>
        <fieldset :disabled="waiting">
          <input type="text" v-model="insertedAddress"
                 size="42"
                 placeholder="0x32Be343B94f860124dC4fEe278FDCBD38C102D88"
                 pattern=".{42}"  equired title="42 characters long address starting with 0x"
                 v-on:keyup.enter="manual">
          <button v-on:click="manual" :disabled="!validAddress">Use Address</button>


        </fieldset>
      </form>

    </div>
    <div v-if="v3stringwallet !== null">
      <h2>Download Wallet</h2>
      <p>Please back-up your wallet file and remember the password to unlock it.</p>
      <button v-on:click="download" style="background-color: red">!! DOWNLOAD WALLET FILE !!</button>
    </div>
    <div v-if="address !== null">
      <h2>Your Address</h2>
      <p>Tokens will be sent to this address.</p>
      <p>
        <a target="_blank" :href="'https://etherscan.io/address/' + address">{{ address }}</a>
      </p>
      <img :src="'https://chart.googleapis.com/chart?cht=qr&chl=' + address + '&chs=200x200&choe=UTF-8&chld=L|2'" />

      <fieldset>
        <button v-on:click="invest" :disabled="!address || (v3stringwallet && !disclaimer)">Make Investment</button>
      </fieldset>
    </div>

  </div>
</template>

<script>
  import FileSaver from 'file-saver'
  import Wallet from '../lib/wallet'

  export default {
    data: function () {
      return {
        disclaimer: false,
        waiting: false,
        password: '',
        v3stringwallet: null,
        insertedAddress: '',
        address: null
      }
    },
    props: {
      token: {
        type: String,
        required: true
      }
    },
    computed: {
      validPassword: function () {
        return this.password.length > 0
      },
      validAddress: function () {
        return (this.insertedAddress.startsWith("0x") || this.insertedAddress.startsWith(("0X")))
          && this.insertedAddress.length === 42
      }
    },
    methods: {
      create: function () {
        if (this.validPassword) {
          let wallet = Wallet.generate()
          this.v3stringwallet = wallet.toV3String(this.password, {kdf: 'pbkdf2'})
          this.address = wallet.getAddressString()
        }
      },
      fileImport: function (file) {
        let reader = new FileReader();
        reader.onload = event => {
          this.address = "0x" + JSON.parse(event.target.result).address
        }
        reader.readAsText(file)
      },
      download: function () {
        this.disclaimer = true
        let blob = new Blob([this.v3stringwallet], {type: 'application/json;charset=utf-8'})
        FileSaver.saveAs(blob, 'modum-ico.json')
      },
      manual: function () {
        this.address = this.insertedAddress;
      },
      invest: function () {
        this.$router.push({name: 'step4'})
      }
    }
  }
</script>

<style scoped>
  h3 {
    margin-top: 50px;
  }
</style>
