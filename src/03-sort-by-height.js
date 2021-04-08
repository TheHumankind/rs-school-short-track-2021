/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = arr;
  const delArr = [];
  for (let i = 0; i <= newArr.length - 1; i++) {
    if (newArr[i] === -1) {
      delArr.push(i);
    }
  }
  newArr.sort((a, b) => a - b);
  while (newArr.includes(-1)) {
    newArr.splice(newArr.indexOf(-1), 1);
  }
  for (let i = 0; i <= delArr.length - 1; i++) {
    newArr.splice(delArr[i], 0, -1);
  }
  return newArr;
}

module.exports = sortByHeight;
