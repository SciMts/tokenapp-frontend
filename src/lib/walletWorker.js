import Wallet from '../lib/wallet'

self.onmessage = function ({data}) {
  let wallet = Wallet.generate()
  let v3stringwallet = wallet.toV3String(data.password, {kdf: 'pbkdf2'})
  let address = wallet.getAddressString()

  this.postMessage({
    v3stringwallet,
    address
  })
}
