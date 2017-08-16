'use strict'
import ethUtil from 'ethereumjs-util'
ethUtil.uuid = require('uuid')
ethUtil.crypto = require('crypto')

var Wallet = function (priv, pub, path, hwType, hwTransport) {
  // eslint-disable-next-line
  if (typeof priv != 'undefined') {
    // eslint-disable-next-line
    this.privKey = priv.length == 32 ? priv : Buffer(priv, 'hex')
  }
  this.pubKey = pub
  this.path = path
  this.type = 'default'
}
Wallet.generate = function (icapDirect) {
  if (icapDirect) {
    while (true) {
      var privKey = ethUtil.crypto.randomBytes(32)
      if (ethUtil.privateToAddress(privKey)[0] === 0) {
        return new Wallet(privKey)
      }
    }
  } else {
    return new Wallet(ethUtil.crypto.randomBytes(32))
  }
}

Wallet.prototype.getAddress = function () {
  // eslint-disable-next-line
  if (typeof this.pubKey == 'undefined') {
    return ethUtil.privateToAddress(this.privKey)
  } else {
    return ethUtil.publicToAddress(this.pubKey, true)
  }
}
Wallet.prototype.getAddressString = function () {
  return '0x' + this.getAddress().toString('hex')
}

Wallet.prototype.toV3 = function (password, opts) {
  opts = opts || {}
  var salt = opts.salt || ethUtil.crypto.randomBytes(32)
  var iv = opts.iv || ethUtil.crypto.randomBytes(16)
  var derivedKey
  var kdf = opts.kdf || 'scrypt'
  var kdfparams = {
    dklen: opts.dklen || 32,
    salt: salt.toString('hex')
  }
  if (kdf === 'pbkdf2') {
    kdfparams.c = opts.c || 262144
    kdfparams.prf = 'hmac-sha256'
    derivedKey = ethUtil.crypto.pbkdf2Sync(new Buffer(password), salt,
      kdfparams.c, kdfparams.dklen, 'sha256')
  } else if (kdf === 'scrypt') {
    // FIXME: support progress reporting callback
    kdfparams.n = opts.n || 262144
    kdfparams.r = opts.r || 8
    kdfparams.p = opts.p || 1
    derivedKey = ethUtil.scrypt(new Buffer(password), salt, kdfparams.n,
      kdfparams.r, kdfparams.p, kdfparams.dklen)
  } else {
    throw new Error('Unsupported kdf')
  }
  var cipher = ethUtil.crypto.createCipheriv(opts.cipher || 'aes-128-ctr',
    derivedKey.slice(0, 16), iv)
  if (!cipher) {
    throw new Error('Unsupported cipher')
  }
  var ciphertext = Buffer.concat([cipher.update(this.privKey), cipher.final()])
  var mac = ethUtil.sha3(
    Buffer.concat([derivedKey.slice(16, 32), new Buffer(ciphertext, 'hex')]))
  return {
    version: 3,
    id: ethUtil.uuid.v4({
      random: opts.uuid || ethUtil.crypto.randomBytes(16)
    }),
    address: this.getAddress().toString('hex'),
    Crypto: {
      ciphertext: ciphertext.toString('hex'),
      cipherparams: {
        iv: iv.toString('hex')
      },
      cipher: opts.cipher || 'aes-128-ctr',
      kdf: kdf,
      kdfparams: kdfparams,
      mac: mac.toString('hex')
    }
  }
}

Wallet.prototype.toV3String = function (password, opts) {
  return JSON.stringify(this.toV3(password, opts))
}

export default Wallet
