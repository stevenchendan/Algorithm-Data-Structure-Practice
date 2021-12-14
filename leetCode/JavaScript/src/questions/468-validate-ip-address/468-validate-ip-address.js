/**
 * https://leetcode.com/problems/validate-ip-address/
 * @param {string} queryIP
 * @return {string}
 */
//regex solution
// var validIPAddress = function(queryIP) {
//   const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
//   const ipv6 = /^([\da-f]{1,4}:){8}$/i;
//   return ipv4.test(queryIP + '.') ? 'IPv4' : ipv6.test(queryIP + ':') ? 'IPv6' : 'Neither';
// };

//divide and conquer IPv4 and IPv6
var validIPAddress = function(queryIP) {
  // const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
  // const ipv6 = /^([\da-f]{1,4}:){8}$/i;
  // return ipv4.test(queryIP + '.') ? 'IPv4' : ipv6.test(queryIP + ':') ? 'IPv6' : 'Neither';
  
  if (!queryIP) {
      return 'Neither';
  }
  
  if (validIPv4(queryIP)) {
      return "IPv4";
  }
  else if (validIPv6(queryIP)) {
      return "IPv6";
  }
  return "Neither";
};

const validIPv4 = function(queryIP) {
  if (!queryIP) {
      return false;
  }
  
  const nums = queryIP.split('.');
  if (nums.length != 4 ) {
      return false;
  }
  for (let num of nums) {
      if (parseInt(num) < 0 || parseInt(num) > 255) {
          return false;
      }
      if (!/^\d+$/.test(num)){
        return false;
      }
      if(num.charAt(0) === '0' && num.length > 1){
        return false;
      }
  }
  return true;
}

const validIPv6 = function(queryIP) {
  if (!queryIP) {
      return false;
  }
  
  const nums = queryIP.split(':');
  const hexdigits = "0123456789abcdefABCDEF";
  if (nums.length != 8) {
      return false;
  }
  for(const num of nums){
      if(num.length === 0 || num.length > 4){
        return false;
      }
      for(let c of num){
        if(hexdigits.indexOf(c) === -1){
          return false;
        }
      }
  }
  return true;
}