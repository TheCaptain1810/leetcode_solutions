/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
  for (let i = 0; i < k - 1; i++) {
    colors.push(colors[i]);
  }

  let res = 0,
    cnt = 1;

  for (let i = 1; i < colors.length; i++) {
    if (colors[i] != colors[i - 1]) {
      cnt++;
    } else {
      cnt = 1;
    }

    if (cnt >= k) {
      res++;
    }
  }

  return res;
};
