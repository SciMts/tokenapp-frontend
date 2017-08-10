import sha3 from 'crypto-js/sha3'
import decodeBase58 from './base58.js'
import crypto from 'crypto'

export function isETHAddress (address) {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    // check if it has the basic requirements of an address
    return false
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    // If it's all small caps or all all caps, return true
    return true
  } else {
    // Otherwise check each case
    return isChecksumAddress(address)
  }
}

export function isBTCAddress (address, addressType) {
  // default is to check that address is regular production address
  addressType = addressType || 'prod'

  let type = getAddressType(address)
  if (type === null) {
    return false
  }

  if (type !== addressTypes[addressType] && type !== p2shTypes[addressType]) {
    return false
  }

  return true
}

export function isChecksumAddress (address) {
  // Check each case
  address = address.replace('0x', '')
  var addressHash = sha3(address.toLowerCase())
  for (var i = 0; i < 40; i++) {
    // the nth letter should be uppercase if the nth digit of casemap is 1
    if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
      return false
    }
  }
  return true
}

let addressTypes = {
  prod: '00',
  testnet: '6f'
}

let p2shTypes = {
  prod: '05',
  testnet: 'c4'
}

// return address type if valid base58 address, otherwise null
function getAddressType (address) {
  let decodedHex
  try {
    decodedHex = decodeBase58(address)
  } catch (e) {
    // if decoding fails, assume invalid address
    return null
  }

  // make a usable buffer from the decoded data
  let decoded = new Buffer(decodedHex, 'hex')

  // should be 25 bytes per btc address spec
  if (decoded.length !== 25) {
    return null
  }

  let length = decoded.length
  let cksum = decoded.slice(length - 4, length).toString('binary')
  let body = decoded.slice(0, length - 4)

  let goodCksum = sha256Digest(sha256Digest(body)).toString('binary').substr(0, 4)
  return (cksum === goodCksum ? decodedHex.slice(0, 2) : null)
}

// helper to perform sha256 digest
function sha256Digest (payload) {
  // return sha256(payload)
  return crypto.createHash('sha256').update(payload).digest()
}
