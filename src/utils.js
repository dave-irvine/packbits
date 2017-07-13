function hexToBytes(data) {
  var len = data.length,
      result = new Uint8Array(len / 2),
      pos = 0;

  for (var i = 0; i < len; i+=2) {
    var byte = data.substr(i, 2);
    result[pos] = parseInt(byte, 16);
    pos++;
  }

  return result;
}

function padHex(hex) {
  return ('0' + hex).slice(-2);
}

module.exports = {
  hexToBytes,
  padHex,
};
