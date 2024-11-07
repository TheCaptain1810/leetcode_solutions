/** Iterative Approach */
// function fibonacci(n) {
//   if (n <= 0) return [];
//   if (n === 1) return [0];

//   let sequence = [0, 1];
//   for (let i = 2; i < n; i++) {
//     sequence.push(sequence[i - 1] + sequence[i - 2]);
//   }

//   return sequence;
// }

// console.log(fibonacci(100));

/** Recursive Approach Without Memoization */
// function fibonacci(n) {
//   if (n <= 1) return n;

//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// let sequence = [];
// for (let i = 0; i < 40; i++) {
//   sequence.push(fibonacci(i));
// }

// console.log(sequence);

/** Recursive Approach With Memoization */
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

let sequence = [];
for (let i = 0; i < 40; i++) {
  sequence.push(fibonacci(i));
}

console.log(sequence);
