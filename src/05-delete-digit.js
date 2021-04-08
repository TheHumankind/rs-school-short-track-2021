/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number}
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newN = String(n);
  const arr = [];
  const numberArr = [];
  for (let i = 0; i <= newN.length - 1; i++) {
    arr.push(Number(newN[i]));
  }
  for (let i = 0; i <= arr.length - 1; i++) {
    let sum = 0;
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[j] === arr[j - 1] || arr[j] !== arr[i]) {
        sum += arr[j];
        sum *= 10;
      }
    }
    numberArr.push(sum / 10);
  }
  return Math.max.apply(null, numberArr);
}

module.exports = deleteDigit;
