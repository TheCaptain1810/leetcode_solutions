/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
  function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let PRIMES = [];
  let minDiff = Infinity;
  let res = [-1, -1];

  // There is a more efficient way to construct prime number array called Sieve of Eratosthenes, but I'm not gonna bother.
  for (let i = left; i <= right; i++) {
    if (isPrime(i)) {
      PRIMES.push(i);
    }
  }

  for (let i = 0; i < PRIMES.length - 1; i++) {
    let currDiff = PRIMES[i + 1] - PRIMES[i];
    if (currDiff < minDiff) {
      minDiff = currDiff;
      res = [PRIMES[i], PRIMES[i + 1]];
    }
  }

  return res;
};

/*
function getPrimesInRange(left, right) {
    const sieve = new Array(right + 1).fill(true);
    sieve[0] = sieve[1] = false;
    
    for (let i = 2; i * i <= right; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= right; j += i) {
                sieve[j] = false;
            }
        }
    }
    
    const primes = [];
    for (let i = Math.max(2, left); i <= right; i++) {
        if (sieve[i]) primes.push(i);
    }
    return primes;
}
*/
