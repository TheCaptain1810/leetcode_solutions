function maxSumOfThreeSubarrays(nums: number[], k: number): number[] {
    const n = nums.length;
    const sum: number[] = new Array(n + 1).fill(0); // Prefix sums
    const left: number[] = new Array(n).fill(0); // Best starting index for left subarray
    const right: number[] = new Array(n).fill(n - k); // Best starting index for right subarray
    const result: number[] = new Array(3).fill(0); // Result to store the indices

    // Step 1: Compute prefix sums
    for (let i = 0; i < n; i++) {
        sum[i + 1] = sum[i] + nums[i];
    }

    // Step 2: Compute the left array (best subarray starting index for the left part)
    let maxSum = sum[k] - sum[0];
    for (let i = k; i < n; i++) {
        if (sum[i + 1] - sum[i + 1 - k] > maxSum) {
            maxSum = sum[i + 1] - sum[i + 1 - k];
            left[i] = i + 1 - k;
        } else {
            left[i] = left[i - 1];
        }
    }

    // Step 3: Compute the right array (best subarray starting index for the right part)
    maxSum = sum[n] - sum[n - k];
    for (let i = n - k - 1; i >= 0; i--) {
        if (sum[i + k] - sum[i] >= maxSum) {
            maxSum = sum[i + k] - sum[i];
            right[i] = i;
        } else {
            right[i] = right[i + 1];
        }
    }

    // Step 4: Find the best combination of left, middle, and right subarrays
    maxSum = 0;
    for (let i = k; i <= n - 2 * k; i++) {
        const l = left[i - 1]; // Best starting index for the left subarray
        const r = right[i + k]; // Best starting index for the right subarray
        const total =
            (sum[l + k] - sum[l]) +
            (sum[i + k] - sum[i]) +
            (sum[r + k] - sum[r]);

        if (total > maxSum) {
            maxSum = total;
            result[0] = l;
            result[1] = i;
            result[2] = r;
        }
    }

    return result;
};