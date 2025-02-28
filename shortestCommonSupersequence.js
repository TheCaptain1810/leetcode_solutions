/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  // Input: str1 = "abac", str2 = "cab"
  // Output: "cabac"

  const m = str1.length;
  const n = str2.length;

  // Step 1: Create DP table for LCS
  const dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  // Step 2: Fill DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Step 3: Construct the SCS
  let result = "";
  let i = m,
    j = n;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && str1[i - 1] === str2[j - 1]) {
      // If characters match, include once and move diagonally
      result = str1[i - 1] + result;
      i--;
      j--;
    } else if (i > 0 && (j === 0 || dp[i][j] === dp[i - 1][j])) {
      // If we need character from str1
      result = str1[i - 1] + result;
      i--;
    } else {
      // If we need character from str2
      result = str2[j - 1] + result;
      j--;
    }
  }

  return result;
};

// Backtracking solution with memoization, barely works but easy to understand
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
/*
var shortestCommonSupersequence = function(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const cache = new Map();

  function backtrack(i, j) {
      if (cache.has(`${i}, ${j}`)) {
          return cache.get(`${i}, ${j}`);
      }

      if (i === m) {
          return str2.slice(j);
      }
      if (j === n) {
          return str1.slice(i);
      }

      if (str1[i] === str2[j]) {
          return str1[i] + backtrack(i + 1, j + 1);
      }

      let res1 = str1[i] + backtrack(i + 1, j);
      let res2 = str2[j] + backtrack(i, j + 1);

      if (res1.length < res2.length) {
          cache.set(`${i}, ${j}`, res1);
          return res1;
      } else {
          cache.set(`${i}, ${j}`, res2);
          return res2;
      }
  }

  return backtrack(0, 0);
};
*/
