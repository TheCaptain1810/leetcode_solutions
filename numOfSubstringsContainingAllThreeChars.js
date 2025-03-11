/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let count = 0;
  const n = s.length;
  // Array to keep count of a, b, c (using their char codes - 97)
  const charCount = [0, 0, 0];

  let left = 0;
  for (let right = 0; right < n; right++) {
    // Add current character to count
    charCount[s[right].charCodeAt(0) - 97]++;

    // Shrink window until we no longer have all characters
    while (charCount[0] > 0 && charCount[1] > 0 && charCount[2] > 0) {
      // All substrings starting from left to end of string are valid
      count += n - right;
      // Remove leftmost character and move left pointer
      charCount[s[left].charCodeAt(0) - 97]--;
      left++;
    }
  }

  return count;
};
