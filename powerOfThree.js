/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};

// Crazy code
/*
class Solution {
public:
    bool isPowerOfThree(int n) {
        const int maxPowerOfThree = 1162261467;
        return n > 0 && maxPowerOfThree % n == 0;
    }
};
*/
