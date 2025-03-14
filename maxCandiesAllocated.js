/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  if (k === 0) return 0; // Edge case

  let left = 1,
    right = Math.max(...candies),
    result = 0;

  const canAllocate = (candiesPerChild) => {
    let count = 0;
    for (let candy of candies) {
      count += Math.floor(candy / candiesPerChild);
      if (count >= k) return true; // No need to check further
    }
    return false;
  };

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (canAllocate(mid)) {
      result = mid; // Update result and try for a larger number
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};
