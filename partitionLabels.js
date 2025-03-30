/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let lastIndex = {};

  // Step 1: Store the last occurrence index of each character
  for (let i = 0; i < s.length; i++) {
    lastIndex[s[i]] = i;
  }

  let partitions = [];
  let start = 0,
    end = 0;

  // Step 2: Traverse the string and create partitions
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, lastIndex[s[i]]);

    // If current index reaches 'end', finalize a partition
    if (i === end) {
      partitions.push(end - start + 1);
      start = i + 1;
    }
  }

  return partitions;
};
