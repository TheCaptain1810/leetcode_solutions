function divideArray(nums: number[]): boolean {
    const set: Set<number> = new Set();
    
    for (const num of nums) {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    }

    return set.size === 0;
};