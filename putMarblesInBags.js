/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    const n = weights.length;
    const pairWeights = [];

    for (let i = 0; i < n - 1; ++i) {
        pairWeights.push(weights[i] + weights[i + 1]);
    }
    pairWeights.sort((a, b) => a - b);

    let answer = 0;
    for (let i = 0; i < k - 1; ++i) {
        answer += pairWeights[n - 2 - i] - pairWeights[i];
    }

    return answer;
};