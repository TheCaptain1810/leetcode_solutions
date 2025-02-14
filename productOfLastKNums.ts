class ProductOfNumbers {
    constructor(private productOfNums = [1]) {}

    add(num: number): void {
        if (num === 0) {
            this.productOfNums = [1];
        } else {
            this.productOfNums.push(this.productOfNums.at(-1) as number * num);
        }
    }

    getProduct(k: number): number {
        const n = this.productOfNums.length;
        if (k >= n) {
            return 0;
        } 
        return this.productOfNums.at(-1) as number / this.productOfNums[n - k - 1];
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */