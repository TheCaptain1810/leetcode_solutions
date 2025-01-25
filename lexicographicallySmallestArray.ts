function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
    const numsSorted = [...nums].sort((a, b) => a - b);

    let currGroup = 0;
    const numToGroup = new Map<number, number>();
    numToGroup.set(numsSorted[0], currGroup);

    const groupToList = new Map<number, number[]>();
    groupToList.set(currGroup, [numsSorted[0]]);

    for (let i = 1; i < nums.length; i++) {
      if (Math.abs(numsSorted[i] - numsSorted[i - 1]) > limit) {
        // new group
        currGroup++;
      }

      // assign current element to group
      numToGroup.set(numsSorted[i], currGroup);

      // add element to sorted group list
      if (!groupToList.has(currGroup)) {
        groupToList.set(currGroup, []);
      }
      groupToList.get(currGroup)!.push(numsSorted[i]);
    }

    // iterate through input and overwrite each element with the next
    // element in its corresponding group
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const group = numToGroup.get(num)!;
      nums[i] = groupToList.get(group)!.shift()!;
    }

    return nums;
};