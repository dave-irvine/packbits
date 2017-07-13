var { hexToBytes, padHex } = require('./utils');

/*
 * This is a reimplementation of https://en.wikipedia.org/wiki/PackBits decoder
 */
function decode(data) {
  if (data.indexOf(' ') >= 0) {
    data = data.split(' ').join('');
  }

  var ab = hexToBytes(data);
  var len = ab.length;
  var pos = 0;
  var output = '';

  while (pos < len-1) {
    var byte = ab[pos];
    var nextByte = ab[pos+1];

    if (byte >= 128) {
      byte = 256 - byte;

      for (var i=0; i <= byte; i++) {
        output += padHex(nextByte.toString(16));
      }

      pos++;
    } else {
      for (var i=0; i <= byte; i++) {
        output += padHex(ab[pos + i + 1].toString(16));
      }

      pos += i;
    }

    pos++;
  }

  return output.toUpperCase();
}

module.exports = {
  decode,
};
