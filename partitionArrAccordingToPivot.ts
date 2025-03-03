function pivotArray(nums: number[], pivot: number): number[] {
    const leftArray: number[] = [];
    const middleArray: number[] = [];
    const rightArray: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            leftArray.push(nums[i]);
        } else if (nums[i] > pivot) {
            rightArray.push(nums[i]);
        } else {
            middleArray.push(nums[i]);
        }
    }

    return [...leftArray, ...middleArray, ...rightArray];
};