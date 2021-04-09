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
function encodeLine(str) {
  let newStr = '';
  let j = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    let counter = 0;
    while (str[i] === str[j]) {
      if (str[i] === str[j]) {
        counter++;
      }
      j++;
    }
    if (counter > 1) {
      newStr += `${counter}${str[i]}`;
    } else if (counter === 1) {
      newStr += `${str[i]}`;
    }
    counter = 0;
  }
  return newStr;
}
module.exports = encodeLine;
