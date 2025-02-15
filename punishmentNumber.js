/**
 * @param {number} n
 * @return {number}
 */

function canPartition(s, target, index = 0, currentSum = 0) {
  if (index === s.length) {
    return currentSum === target;
  }

  let num = 0;
  for (let j = index; j < s.length; j++) {
    num = num * 10 + Number(s[j]);
    if (
      num + currentSum <= target &&
      canPartition(s, target, j + 1, currentSum + num)
    ) {
      return true;
    }
  }
  return false;
}

var punishmentNumber = function (n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    let squared = (i * i).toString();
    if (canPartition(squared, i)) {
      total += i * i;
    }
  }

  return total;
};
