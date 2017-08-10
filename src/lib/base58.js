// 3rd party
import int from 'int'

// prep position lookup table
let vals = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
let positions = {}
for (let i = 0; i < vals.length; ++i) {
  positions[vals[i]] = i
}

// decode a base58 string payload into a hex representation
export default function decode (payload) {
  let base = 58

  let length = payload.length
  let num = int(0)
  let leadingZero = 0
  let seenOther = false
  for (let i = 0; i < length; ++i) {
    var char = payload[i]
    var p = positions[char]

    // if we encounter an invalid character, decoding fails
    if (p === undefined) {
      throw new Error('invalid base58 string: ' + payload)
    }

    num = num.mul(base).add(p)

    if (char === '1' && !seenOther) {
      ++leadingZero
    } else {
      seenOther = true
    }
  }

  let hex = num.toString(16)

  // num.toString(16) does not have leading 0
  if (hex.length % 2 !== 0) {
    hex = '0' + hex
  }

  // strings starting with only ones need to be adjusted
  // e.g. '1' should map to '00' and not '0000'
  if (leadingZero && !seenOther) {
    --leadingZero
  }

  while (leadingZero-- > 0) {
    hex = '00' + hex
  }

  return hex
}
