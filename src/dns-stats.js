const { NotImplementedError } = require('../lib');

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
function getDNSStats( domains ) {
  const res = new Map();

  for (const domain of domains) {
    const domainZones = domain.split(".").reverse();
    let zoneCollect = "";
    
    for (const zone of domainZones) {
      zoneCollect += `.${zone}`;
      const zoneQty = res.get(zoneCollect) || 0;
      console.log(zoneCollect, zoneQty)
      res.set(zoneCollect, zoneQty + 1);
    }
  }
  return Object.fromEntries(res);
}

module.exports = {
  getDNSStats
};
