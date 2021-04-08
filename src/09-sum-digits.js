/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number}
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = String(n).split('');
  let sum = 0;
  while (true) {
    for (let i = 0; i <= arr.length - 1; i++) {
      sum += Number(arr[i]);
    }
    if (sum < 10) {
      return sum;
    }
    if (sum >= 10) {
      arr = String(sum).split('');
      sum = 0;
    }
  }
}

module.exports = getSumOfDigits;
