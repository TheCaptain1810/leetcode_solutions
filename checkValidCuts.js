/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (n, rectangles) {
  let x = [],
    y = [];

  for (const rec of rectangles) {
    x.push([rec[0], rec[2]]);
    y.push([rec[1], rec[3]]);
  }

  x.sort((a, b) => a[0] - b[0]);
  y.sort((a, b) => a[0] - b[0]);

  function countNonOverlapping(intervals) {
    let count = 0;
    let prevEnd = -1;

    for (const [start, end] of intervals) {
      if (prevEnd <= start) {
        count++;
      }
      prevEnd = Math.max(prevEnd, end);
    }

    return count;
  }

  return Math.max(countNonOverlapping(x), countNonOverlapping(y)) >= 3;
};
