function minimumRecolors(blocks: string, k: number): number {
    let ans: number = Infinity;
    let cur: number = 0;

    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i] === 'W') cur++;
        if (i >= k - 1) {
            ans = Math.min(cur, ans)
            if(blocks[i - k + 1] === 'W') cur --;
        }
    }

    return ans;
};