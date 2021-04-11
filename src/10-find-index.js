/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let i = 0;
  let j = array.length - 1;
  let k = 0;
  while (i <= j) {
    k = Math.floor((i + j) / 2);
    if (value === array[k]) {
      return k;
    }
    if (value < array[k]) {
      j = k - 1;
    } else {
      i = k + 1;
    }
  }
  return -1;
}

module.exports = findIndex;
