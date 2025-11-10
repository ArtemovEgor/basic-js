const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine( str ) {
  const chars = str.split("");
  const encodeObj = new Object();
  let res = "";

  for (let i = 0; i < chars.length; i++) {
    encodeObj[chars[i]] = encodeObj[chars[i]] + 1 || 1;
    console.log(encodeObj);

    if (chars[i] != chars[i+1]) {
      if (encodeObj[chars[i]] != 1) {
        res += `${encodeObj[chars[i]]}` + chars[i];
      } else {
          res += chars[i];
      }
      delete encodeObj[chars[i]];
    }

  }
  return res;
}

module.exports = {
  encodeLine
};
