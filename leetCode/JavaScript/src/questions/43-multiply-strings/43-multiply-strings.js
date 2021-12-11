/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
      return '0'
  }
  
  const [num1Length, num2Length] = [num1.length, num2.length];
  let result = new Array(num1Length + num2Length).fill(0);
  for (let i = num1Length - 1; i >= 0; i--) {
      for (let j = num2Length - 1; j >= 0; j--) {
          const [p1, p2] = [i + j, i + j + 1];
          let sum = result[p2] + Number(num1[i]) * Number(num2[j]);
          result[p2] = sum % 10
          result[p1] += Math.floor(sum / 10)
      }
  }
  if (result[0] === 0) {
      result.shift();
  }
  return result.join('')
};