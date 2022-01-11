/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isOneEditDistance = function (s, t) {
  const longer = s.length > t.length ? s : t;
  const shorter = s.length > t.length ? t : s;
  let count = 0;
  let slow = 0;
  let fast = 0;

  if (longer.length - shorter.length > 1) {
    return false;
  }

  while (slow < longer.length) {
    if (longer[slow] !== shorter[fast]) {
      count += 1;

      if (longer.length > shorter.length) {
        slow += 1;
        continue;
      }
    }
    slow += 1;
    fast += 1;
  }

  return count === 1;
};
