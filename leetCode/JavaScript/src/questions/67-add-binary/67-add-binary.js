/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (!a && !b) {
    return 0;
  }

  let result = [];
  let carry = 0;

  while (a.length < b.length) {
    a = "0" + a;
  }
  while (b.length < a.length) {
    b = "0" + b;
  }

  for (let i = a.length - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + carry;
    if (sum >= 2) {
      result[i] = sum - 2;
      carry = 1;
    } else {
      result[i] = sum;
      carry = 0;
    }
  }
  if (carry) {
    result.unshift(1);
  }
  return result.join("");
};
