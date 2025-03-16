/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  let left = 1,
    right = Math.min(Math.max(...ranks) * cars * cars, 10 ** 18);

  const canRepairInTime = (time) => {
    let count = 0;
    for (let r of ranks) {
      count += Math.floor(Math.sqrt(time / r));
      if (count >= cars) return true;
    }
    return false;
  };

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canRepairInTime(mid)) {
      right = mid; // Try a smaller time
    } else {
      left = mid + 1; // Increase time
    }
  }

  return left;
};
