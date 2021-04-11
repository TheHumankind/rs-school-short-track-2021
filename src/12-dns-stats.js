/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const newDom = [];
  const str = domains.join('.').split('.');
  const obj = {};
  if (domains[0] === undefined) {
    return obj;
  }
  for (let i = 0; i <= domains.length - 1; i++) {
    newDom[i] = `.${domains[i].split('.').reverse().join('.')}`;
  }
  str.sort((a, b) => a.length - b.length);
  newDom.push(`.${str[0]}`);
  newDom.sort();
  for (let i = 0; i <= newDom.length - 1; i++) {
    let k = 0;
    for (let j = 1; j <= newDom.length - 1; j++) {
      if (newDom[j].includes(newDom[i])) {
        k++;
      }
    }
    obj[newDom[i]] = k;
  }
  return obj;
}

module.exports = getDNSStats;
