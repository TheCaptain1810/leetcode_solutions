function tupleSameProduct(nums: number[]): number {
    const productCount: Map<number, number> = new Map();
    let count: number = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const product: number = nums[i] * nums[j];

            if (productCount.has(product)) {
                count += productCount.get(product) as number * 8;
            }

            productCount.set(product, (productCount.get(product) || 0) + 1);
        }
    }

    return count;
};