function encode(text, shift) {
  let result = '';

  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // uppercase
      result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // lowercase
      result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      // other symbols
      result += text.charAt(i);
    }
  }

  return result;
}

function decode(text, shift) {
  let result = '';
  shift = (26 - shift) % 26;
  result = encode(text, shift);

  return result;
}

module.exports.encode = encode;
module.exports.decode = decode;
